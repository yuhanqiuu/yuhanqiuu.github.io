import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug, projects, type Project } from "../lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — Julian Arnault`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:image", content: project.image },
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
  const count = images.length;
  const go = (n: number) => setIndex((index + n + count) % count);

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-none items-center justify-between px-4">
          <Link to="/" className="font-serif text-sm font-bold tracking-tight text-ink">
            Julian Arnault
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

      <main className="mx-auto max-w-5xl px-4 pt-32 pb-24">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-12 relative aspect-[4/3] w-full overflow-hidden bg-muted">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/85 text-ink backdrop-blur transition-colors hover:bg-canvas"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/85 text-ink backdrop-blur transition-colors hover:bg-canvas"
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

        {project.tags?.length ? (
          <div className="mt-12 border-t border-ink/15 pt-8">
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

        <div className="mt-16 flex items-center justify-between border-t border-ink/15 pt-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            All projects
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
          >
            Next — {next.title}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </main>

      <footer className="py-10 text-center text-xs text-ink-muted/60">
        © {new Date().getFullYear()} Julian Arnault
      </footer>
    </div>
  );
}
