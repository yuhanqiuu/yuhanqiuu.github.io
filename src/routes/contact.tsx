import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Julian Arnault" },
      { name: "description", content: "Get in touch with Julian Arnault for design projects, collaborations, or just to say hello." },
      { property: "og:title", content: "Contact — Julian Arnault" },
      { property: "og:description", content: "Get in touch with Julian Arnault for design projects, collaborations, or just to say hello." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas px-6 py-24 font-sans text-ink">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-12 font-serif text-5xl text-balance md:text-6xl">
            Let's start a project.
          </h1>
          <a
            href="mailto:hello@julianarnault.com"
            className="text-2xl font-medium underline underline-offset-8 decoration-accent transition-colors hover:text-accent md:text-3xl"
          >
            hello@julianarnault.com
          </a>

          <div className="mt-24 flex w-full flex-wrap justify-center gap-8 border-t border-ink/5 pt-12 text-sm font-medium md:gap-12">
            <a
              href="mailto:hello@julianarnault.com"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Read.cv
            </a>
            <a
              href="https://savee.it"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Savee
            </a>
          </div>

          <p className="mt-24 text-[10px] uppercase tracking-[0.3em] text-ink-muted/40">
            © {new Date().getFullYear()} Julian Arnault. Built with precision.
          </p>
        </div>
      </div>
    </div>
  );
}
