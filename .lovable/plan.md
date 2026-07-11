Replace the current mochi brand mark with a clean icon based on the uploaded apple-squishy reference (round red form, simple face, stem). Keep it bold and legible at favicon size.

Scope of work:
1. Generate a simplified, clean icon from the uploaded apple-squishy image: thick outlines, large simple eyes and mouth, distinct stem, minimal detail, transparent background.
2. Save the new icon to `src/assets/logo.png` and copy it to `public/favicon.png`.
3. Keep the favicon `<link>` in `src/routes/__root.tsx` pointed at `/favicon.png`.
4. Run the static build/prerender to verify the 8 pages export correctly and the favicon is updated.

Out of scope: no layout changes unless requested; the logo remains out of the top navigation bar as already configured.