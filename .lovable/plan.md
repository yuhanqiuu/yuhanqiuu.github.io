# Plan: Floating "PDF page" card for project detail articles

## Goal
Restyle the project detail page (`src/routes/projects.$slug.tsx`) so the entire article reads like a single sheet of paper floating on the canvas — a calm, PDF-reader feel — without changing any article content, fields, or the existing calm-engineering palette. Text colors stay unchanged.

## Current state (verified)
- `projects.$slug.tsx` renders `<main class="max-w-3xl px-4 pt-32 pb-24">` directly on `bg-canvas` with no surrounding surface, border, or shadow.
- The fixed header (`Yuhan Qiu` / `Back to work`) and footer copyright live outside `main`.
- Palette in `styles.css`: `--canvas` off-white `oklch(0.99 0.001 250)`, `--ink` dark, `--ink-muted` cool gray, `--accent` soft slate-blue, `--border` faint.

## Design
- **Floating page card:** Wrap the whole article (title block → specs → hero media → external link → body sections → tags → prev/next → all-projects) in one elevated card:
  - `bg-canvas` (pure paper), `rounded-xl`, a soft layered shadow (`shadow-sm` + a faint long ambient shadow) to make it lift off the slightly-darker canvas backdrop.
  - Generous internal padding (`p-8 md:p-12`) and `max-w-3xl` content column preserved inside the card.
  - Visible vertical + horizontal breathing room around the card on all four sides (top gap below the fixed header, bottom gap above footer), so it visibly *floats* rather than touching edges.
- **Canvas backdrop:** Keep the page background as the calm off-white, but make the card read as a distinct lifted surface via the shadow + a hairline border (`border border-ink/5`) for crisp definition on light backgrounds.
- **Header:** Keep the fixed translucent header (`bg-canvas/85 backdrop-blur`) sitting above the card (z-50). The card top clears it via the existing `pt-32` gap, widened slightly so the card's top rounding + shadow aren't clipped under the header.
- **Footer:** Keep the copyright centered below the floating card (outside it), so the sheet ends cleanly and the page scrolls to a settled bottom.
- **Scroll feel:** The card is the single scroll body; as the user scrolls it reads like turning through a PDF page. No multi-column/sidebar changes.

## Out of scope
- No changes to `src/lib/projects.ts` content, the home page, the video lightbox, or palette token values.
- No new routes or navigation.
- Text colors unchanged.

## Implementation steps (single file)
1. Edit `src/routes/projects.$slug.tsx`:
   - Add a `shadow`/border wrapper `<article>` around the existing `main` content (title through all-projects link).
   - Adjust outer wrapper spacing: keep `pt-32`/`pb-24` but ensure the card has `my-` margins and `mx-auto` so it floats centered.
   - Add the layered shadow + `rounded-xl` + `border border-ink/5` + `p-8 md:p-12`.
   - Keep footer outside the card.
2. Verify via typecheck + a Playwright screenshot of `/projects/portable-ultrasound-transducer-for-medical-imaging` to confirm the card visibly floats, header overlays cleanly, and nothing is clipped.

## Acceptance
- The whole article visibly sits on one elevated, rounded, shadowed "page" floating on the canvas.
- Fixed header still overlays the top without clipping the card.
- Footer copyright sits below the card, centered.
- Build/typecheck passes; home page and other projects unchanged.
