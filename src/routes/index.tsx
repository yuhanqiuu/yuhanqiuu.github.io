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
    <div className="min-h-screen bg-canvas font-sans text-ink">
      {/* Hero Section */}
      <section className="px-6 pb-24 pt-24 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="mb-8 font-serif text-5xl leading-none text-balance md:text-7xl">
            Independent designer crafting tactile digital experiences.
          </h1>
          <p className="mb-12 max-w-[56ch] text-lg leading-relaxed text-pretty text-ink-muted">
            Focused on the intersection of typography, motion, and functional minimalism. Based in Lyon, working globally to build software that feels like physical craft.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-ink py-2 pr-4 pl-3 text-sm font-medium text-canvas ring-1 ring-ink transition-transform hover:bg-ink/90"
          >
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-canvas/20">
              <span className="text-[8px]">↓</span>
            </span>
            View Selected Works
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-ink/5 px-6 py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Selected Archive
            </h2>
            <span className="text-xs font-medium text-ink-muted/50">
              01 / {String(projects.length).padStart(2, "0")}
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
                      <h3 className="mb-2 font-serif text-3xl">{project.title}</h3>
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
      </section>
    </div>
  );
}
