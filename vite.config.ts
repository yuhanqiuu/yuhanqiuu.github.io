// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Project slugs kept in sync with src/lib/projects.ts.
// Add a new slug here whenever you add a project so its /projects/<slug>
// page is prerendered to static HTML for GitHub Pages.
const projectSlugs = [
  "depth-camera-based-3d-gait-analysis",
  "8051-mcu-development-board",
  "portable-ultrasound-transducer-for-medical-imaging",
  "autonomous-self-balancing-robot",
  "cardio-health-monitor",
  "metal-detector-rover",
  "me-playing-bach",
];

const prerenderPaths = ["/", ...projectSlugs.map((s) => `/projects/${s}`)];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Prerender the home page and every project detail page to static HTML for GitHub Pages.
    pages: prerenderPaths.map((path) => ({ path })),
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
  },
  // Disable Nitro so the standard Vite SSR build produces `dist/server/server.js`,
  // which TanStack Start's preview server (used during prerender) expects.
  // The prerendered HTML lands in `dist/client/` — perfect for GitHub Pages.
  nitro: false,
});
