import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, getProjectBySlug } from "../lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ loaderData }) => {
    const project = loaderData;
    if (!project) {
      return {
        meta: [
          { title: "Project not found — Julian Arnault" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${project.title} — Julian Arnault` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} — Julian Arnault` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) {
      throw notFound();
    }
    return project;
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-canvas px-6 py-24 font-sans text-ink">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 className="font-serif text-4xl">Project not found</h1>
        <p className="mt-4 text-ink-muted">That project doesn't exist in the archive.</p>
        <Link
          to="/projects"
          className="mt-8 inline-block border-b border-ink/20 pb-0.5 text-sm font-medium transition-colors hover:border-ink"
        >
          Back to Selected Works
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <article className="min-h-screen bg-canvas px-6 pb-24 pt-24 font-sans text-ink">
      <div className="mx-auto max-w-screen-xl">
        <Link
          to="/projects"
          className="mb-12 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
        >
          ← Selected Works
        </Link>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="font-serif text-4xl leading-none text-balance md:text-6xl">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              {project.category}, {project.year}
            </p>
          </div>
        </div>

        <div className="mb-16 aspect-[16/9] w-full overflow-hidden rounded-[min(1vw,12px)] bg-zinc-100 outline -outline-offset-1 outline-black/5">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div>
                  <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Link
                  </h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink/20 pb-0.5 text-sm font-medium transition-colors hover:border-ink"
                  >
                    Visit live project
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[56ch] text-lg leading-relaxed text-pretty text-ink-muted">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-ink/5 pt-12">
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            More Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group"
                >
                  <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-[min(1vw,12px)] bg-zinc-100 outline -outline-offset-1 outline-black/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={640}
                      height={360}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="text-sm text-ink-muted">
                    {p.category}, {p.year}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
