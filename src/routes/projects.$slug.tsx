import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug, projects, type Project } from "../lib/projects";
import { VideoLightbox, PlayOverlay } from "../components/VideoLightbox";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Yuhan Qiu`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-canvas px-4 py-32 text-center text-ink">
      <p className="font-serif text-2xl">Project not found.</p>
      <Link to="/" className="mt-6 inline-block text-sm text-accent underline">
        Back to work
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const images = project.images?.length ? project.images : [project.image];
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const count = images.length;
  const go = (n: number) => setIndex((index + n + count) % count);
  const hasVideo = Boolean(project.video);
  const overview = project.overview ?? project.summary;

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];
  const prev = projects[(currentIdx - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      {/* Fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-none items-center justify-between px-4">
          <Link to="/" className="font-serif text-sm font-bold tracking-tight text-ink">
            Yuhan Qiu
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back to work
          </Link>
        </div>
      </header>

      {/* Floating PDF-style page card */}
      <article
        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
        className="mx-auto mt-32 mb-24 max-w-2xl rounded-xl border border-ink/5 bg-canvas px-7 py-12 shadow-[0_2px_8px_-2px_oklch(0.55_0.012_250/0.10),0_18px_50px_-20px_oklch(0.55_0.012_250/0.22)] sm:px-12 md:px-14"
      >
      {/* Title block */}
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
          {project.title}
        </h1>
        {overview ? (
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {overview}
          </p>
        ) : null}

        {/* Spec grid */}
        {project.specs?.length ? (
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-ink/10 py-6">
            {project.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {/* Hero media */}
        {hasVideo ? (
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label={`Play video for ${project.title}`}
            className="group relative mt-12 block aspect-video w-full overflow-hidden bg-muted cursor-pointer"
          >
            <img
              src={project.poster ?? images[0]}
              alt={`${project.title} — video thumbnail`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <PlayOverlay />
          </button>
        ) : (
          <figure className="mt-12">
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} — image ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    idx === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/85 text-ink backdrop-blur transition-colors hover:bg-canvas"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/85 text-ink backdrop-blur transition-colors hover:bg-canvas"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === index ? "w-6 bg-ink" : "w-1.5 bg-ink/40 hover:bg-ink/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </figure>
        )}

        {hasVideo && (
          <VideoLightbox
            src={project.video!}
            open={videoOpen}
            onClose={() => setVideoOpen(false)}
            title={project.title}
          />
        )}

        {/* External link */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            {project.linkLabel ?? "View project"}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        ) : null}

        {/* Long-form body */}
        {project.sections?.length ? (
          <div className="mt-16 space-y-16">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl font-bold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-muted">
                  {section.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {section.image ? (
                  <figure className="mt-6">
                    <div className="overflow-hidden bg-muted">
                      <img
                        src={section.image}
                        alt={section.caption ?? section.heading}
                        loading="lazy"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                    {section.caption ? (
                      <figcaption className="mt-2 text-xs text-ink-muted/70">
                        {section.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </section>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-[15px] leading-relaxed text-ink-muted">
            {project.description !== "Wait for Later"
              ? project.description
              : "Full case study coming soon."}
          </p>
        )}

        {/* Tags */}
        {project.tags?.length ? (
          <div className="mt-16 border-t border-ink/15 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Disciplines
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Prev / Next */}
        <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-ink/15 pt-8">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group flex flex-col gap-1 text-left transition-colors hover:text-accent"
          >
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-ink-muted">
              <ArrowLeft className="h-3 w-3" strokeWidth={1.75} />
              Previous
            </span>
            <span className="font-serif text-sm font-bold tracking-tight">
              {prev.title}
            </span>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-col items-end gap-1 text-right transition-colors hover:text-accent"
          >
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-ink-muted">
              Next
              <ChevronRight className="h-3 w-3" strokeWidth={1.75} />
            </span>
            <span className="font-serif text-sm font-bold tracking-tight">
              {next.title}
            </span>
          </Link>
        </nav>

        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            All projects
          </Link>
        </div>
      </article>

      <footer className="py-10 text-center text-xs text-ink-muted/60">
        © {new Date().getFullYear()} Yuhan Qiu
      </footer>
    </div>
  );
}
