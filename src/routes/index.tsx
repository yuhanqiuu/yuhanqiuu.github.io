import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AtSign, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuhan Qiu — Electrical Engineer" },
      { name: "description", content: "Portfolio of Yuhan Qiu, an independent designer crafting tactile digital experiences for products and brands." },
      { property: "og:title", content: "Yuhan Qiu — Independent Designer" },
      { property: "og:description", content: "Portfolio of Yuhan Qiu, an independent designer crafting tactile digital experiences for products and brands." },
    ],
  }),
  component: Index,
});

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const images = project.images?.length ? project.images : [project.image];
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (n: number) => setIndex((index + n + count) % count);

  const stop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <article>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        aria-label={`View ${project.title}`}
        className="group relative block aspect-[4/3] w-full overflow-hidden bg-muted"
      >
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} — image ${idx + 1}`}
            loading={i < 2 && idx === 0 ? "eager" : "lazy"}
            width={1024}
            height={768}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${idx === index ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { stop(e); go(-1); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 text-ink opacity-0 backdrop-blur transition-opacity hover:bg-canvas group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={(e) => { stop(e); go(1); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 text-ink opacity-0 backdrop-blur transition-opacity hover:bg-canvas group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => { stop(e); setIndex(idx); }}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === index ? "w-5 bg-ink" : "w-1.5 bg-ink/40 hover:bg-ink/70"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </Link>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="mt-5 inline-block font-serif text-lg font-bold tracking-tight transition-colors hover:text-accent"
      >
        {project.title}
      </Link>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
        {project.category}, {project.year}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
    </article>
  );
}

function ContactBlock() {
  return (
    <div id="contact" className="space-y-3 border-t border-ink/15 pt-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Contact
      </p>
      <a
        href="mailto:hello@julianarnault.com"
        className="group flex items-center gap-4 text-sm text-ink transition-colors hover:text-accent"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 bg-canvas transition-colors group-hover:border-accent group-hover:text-accent">
          <AtSign className="h-4 w-4" strokeWidth={1.5} />
        </span>
        hello@julianarnault.com
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-4 text-sm text-ink transition-colors hover:text-accent"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 bg-canvas transition-colors group-hover:border-accent group-hover:text-accent">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 10.5v6.5" />
            <circle cx="8" cy="7.5" r="0.6" fill="currentColor" />
            <path d="M12 17v-3.5a2 2 0 0 1 4 0V17" />
            <path d="M12 10.5V17" />
          </svg>
        </span>
        LinkedIn — /in/julianarnault
      </a>
    </div>
  );
}


function Index() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      {/* Fixed top nav — wordmark left, section links right */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-none items-center justify-between px-4">
          <a href="#top" className="font-serif text-sm font-bold tracking-tight text-ink">
            Yuhan Qiu
          </a>
          <nav className="flex gap-8 text-sm">
            <a href="#work" className="text-ink-muted transition-colors hover:text-ink">
              Work
            </a>
            <a href="#contact" className="text-ink-muted transition-colors hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-none px-4 pt-32">
        {/* Intro + first two projects in one shared row */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Intro column */}
          <section className="border-t border-ink/15 pt-8">
            <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Yuhan Qiu
            </h1>
            <p className="mt-4 text-sm text-ink">
              Independent Designer — Interaction & Brand
            </p>

            <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
              Below are some of my recent projects. Focused on the intersection of
              typography, motion, and functional minimalism — I work with early-stage
              teams and established brands to craft tactile digital experiences. To
              learn more or book an interview, get in touch below.
            </p>

            {/* Resume button — custom style */}
            <a
              href="/resume.pdf"
              download
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-all hover:gap-4 hover:bg-accent"
            >
              Download Resume
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          </section>

          {/* First two projects beside the intro */}
          <section id="work" className="grid scroll-mt-24 grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug} project={project} i={i} />
            ))}
          </section>
        </div>

        {/* Remaining projects: three per row */}
        <section className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(2, 5).map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i + 2} />
          ))}
        </section>

        {/* Bottom row: last project left, blank project space, contact right */}
        <section className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(5).map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i + 5} />
          ))}
          <div className="lg:col-start-3">
            <ContactBlock />
          </div>
        </section>
      </main>

      <footer className="mt-24 py-10 text-center text-xs text-ink-muted/60">
        © {new Date().getFullYear()} Yuhan Qiu
      </footer>
    </div>
  );
}
