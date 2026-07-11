import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Works — Julian Arnault" },
      { name: "description", content: "A curated selection of projects by Julian Arnault, spanning interaction design, brand identity, and digital product craft." },
      { property: "og:title", content: "Selected Works — Julian Arnault" },
      { property: "og:description", content: "A curated selection of projects by Julian Arnault, spanning interaction design, brand identity, and digital product craft." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-canvas px-6 py-24 font-sans text-ink">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-16 flex items-end justify-between border-b border-ink/5 pb-4">
          <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Selected Works ({projects.length})
          </h1>
          <span className="text-xs font-medium text-ink-muted/50">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article key={project.slug} className="group cursor-pointer">
              <Link to="/projects/$slug" params={{ slug: project.slug }}>
                <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-[min(1vw,12px)] bg-zinc-100 outline -outline-offset-1 outline-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={720}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h2 className="mb-2 font-serif text-3xl">{project.title}</h2>
                    <p className="text-sm font-medium uppercase tracking-wider text-accent">
                      {project.category}, {project.year}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-[48ch] leading-relaxed text-pretty text-ink-muted">
                      {project.summary}
                    </p>
                    <span className="mt-6 inline-block border-b border-ink/20 pb-0.5 text-sm font-medium transition-colors group-hover:border-ink">
                      Read Case Study
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
