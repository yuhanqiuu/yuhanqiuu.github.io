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
  "komorebi-system",
  "ethos-archive",
  "halcyon-type",
  "lumen-app",
  "atlas-monograph",
  "forma-packaging",
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
    // Emit a client-side SPA shell so hard refreshes on non-prerendered URLs still boot the app.
    spa: { enabled: true },
  },
  // Static-only output for GitHub Pages — skip the Cloudflare Worker bundle.
  nitro: { preset: "static" },
});
