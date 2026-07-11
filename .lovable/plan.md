## Goal
Replace the current header/favicon logo with just the pixel-art mochi character from the uploaded reference image — laptop removed, pixel style preserved.

## Approach
1. Use `imagegen--edit_image` on `user-uploads://50496f3fa816b9b1f8c2241c21301d5f-2.png` with a prompt that removes the black laptop and the small orange "+" mark, keeps the cream pixel mochi with its face (eyes + pink cheeks) exactly as-is, and outputs on a transparent background. Save to `src/assets/logo.png` (overwrite).
2. Copy the same file to `public/favicon.png` so the browser tab icon matches.
3. No code changes needed — `src/routes/index.tsx` already imports `logoUrl` from `src/assets/logo.png` and renders it with `image-rendering: pixelated`, and `__root.tsx` already points the favicon `<link>` at `/favicon.png`.

## What I won't touch
Layout, colors, fonts, routes, projects, contact block, deploy workflow.
