import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julian Arnault — Independent Designer" },
      { name: "description", content: "Portfolio of Julian Arnault, an independent designer crafting tactile digital experiences for products and brands." },
      { property: "og:title", content: "Julian Arnault — Independent Designer" },
      { property: "og:description", content: "Portfolio of Julian Arnault, an independent designer crafting tactile digital experiences for products and brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-canvas font-sans text-ink">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-screen-xl grid-cols-1 px-6 lg:grid-cols-2">
        {/* Intro — sticky on desktop, parallel to selected works */}
        <section className="flex flex-col justify-start border-b border-ink/5 py-12 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r lg:py-20 lg:pr-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Independent Designer
          </p>
          <h1 className="mb-8 font-serif text-4xl leading-[1.05] text-balance md:text-5xl">
            Crafting tactile digital experiences for products and brands.
          </h1>
          <p className="max-w-[46ch] leading-relaxed text-pretty text-ink-muted">
            Focused on the intersection of typography, motion, and functional minimalism. Based in Lyon, working globally.
          </p>
          <div className="mt-auto hidden pt-12 lg:block">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              More about me
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Selected Works */}
        <section className="py-12 lg:py-20 lg:pl-16">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Selected Works
            </h2>
            <span className="text-xs font-medium text-ink-muted/50">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <article key={project.slug} className="group">
                <Link to="/projects/$slug" params={{ slug: project.slug }}>
                  <div className="mb-5 aspect-[16/9] w-full overflow-hidden rounded-[min(1vw,12px)] bg-muted outline -outline-offset-1 outline-ink/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={360}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-1 font-serif text-2xl leading-tight">{project.title}</h3>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        {project.category}, {project.year}
                      </p>
                    </div>
                    <span className="shrink-0 border-b border-ink/20 pb-0.5 text-sm font-medium transition-colors group-hover:border-ink">
                      View case
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
