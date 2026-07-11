import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";
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
      {/* Top centered wordmark */}
      <header className="pt-12 pb-16 text-center">
        <p className="font-serif text-base font-bold tracking-tight">Julian Arnault</p>
      </header>

      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-16 gap-y-12 px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        {/* Left intro column */}
        <section className="border-t border-ink/15 pt-8 lg:sticky lg:top-8 lg:self-start">
          <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Julian Arnault
          </h1>
          <p className="mt-4 text-sm text-ink">
            Independent Designer — Interaction & Brand
          </p>

          <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
            Below are some of my recent projects. Focused on the intersection of
            typography, motion, and functional minimalism — I work with early-stage
            teams and established brands to craft tactile digital experiences. To
            learn more or book an interview, shoot me a message below!
          </p>

          <a
            href="#"
            className="mt-8 inline-block border-b border-accent pb-0.5 text-sm text-accent transition-colors hover:text-ink"
          >
            View or Download Complete Resume
          </a>

          {/* Contact block */}
          <div className="mt-16 space-y-4 pt-8 lg:mt-24">
            <a
              href="mailto:hello@julianarnault.com"
              className="flex items-center gap-4 text-sm text-ink transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20">
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </span>
              hello@julianarnault.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-sm text-ink transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a66c2] text-white">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} fill="currentColor" />
              </span>
              LinkedIn
            </a>
          </div>
        </section>

        {/* Projects grid */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug}>
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.summary}
              </p>
            </article>
          ))}
        </section>
      </div>

      <footer className="mt-24 py-10 text-center text-xs text-ink-muted/60">
        © {new Date().getFullYear()} Julian Arnault
      </footer>
    </div>
  );
}
