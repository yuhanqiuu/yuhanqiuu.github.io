import { createFileRoute } from "@tanstack/react-router";
import studioDeskImage from "../assets/studio-desk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Julian Arnault" },
      { name: "description", content: "Learn about Julian Arnault's design method, background, and the skills behind the work." },
      { property: "og:title", content: "About — Julian Arnault" },
      { property: "og:description", content: "Learn about Julian Arnault's design method, background, and the skills behind the work." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
            <div>
              <h1 className="mb-8 font-serif text-4xl">Method</h1>
              <p className="mb-8 max-w-[40ch] leading-relaxed text-pretty text-ink-muted">
                My work is rooted in the belief that software should feel permanent. I treat pixels with the same reverence a carpenter treats grain, ensuring every element has a logical and aesthetic purpose.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-ink/10 pb-4">
                  <span className="text-sm uppercase tracking-widest text-ink-muted">
                    Strategy
                  </span>
                  <span className="text-sm">User Research, Architecture</span>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-4">
                  <span className="text-sm uppercase tracking-widest text-ink-muted">
                    Design
                  </span>
                  <span className="text-sm">UI/UX, Typography, Motion</span>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-4">
                  <span className="text-sm uppercase tracking-widest text-ink-muted">
                    Build
                  </span>
                  <span className="text-sm">React, Tailwind, Prototyping</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[min(1vw,12px)] bg-canvas/5 outline -outline-offset-1 outline-ink/10">
                <img
                  src={studioDeskImage}
                  alt="Minimalist designer desk with a notebook and mechanical keyboard in soft natural light"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-canvas">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-8 font-serif text-3xl">Experience</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t border-canvas/10 pt-6">
              <p className="text-sm text-canvas/50">2022 — Present</p>
              <h3 className="mt-2 font-serif text-2xl">Independent Designer</h3>
              <p className="mt-2 max-w-[40ch] text-canvas/70">
                Partnering with startups and product teams to design thoughtful interfaces and design systems.
              </p>
            </div>
            <div className="border-t border-canvas/10 pt-6">
              <p className="text-sm text-canvas/50">2019 — 2022</p>
              <h3 className="mt-2 font-serif text-2xl">Product Designer at Studio Forma</h3>
              <p className="mt-2 max-w-[40ch] text-canvas/70">
                Led UI/UX for digital products across fintech, culture, and consumer apps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
