# Plan: Warm neutral grey for the article background

## Goal
Replace the current blue-tinted slate background behind the floating project
article card with a warm, paper-like neutral grey. The current value
(`bg-[#e9eef4]`) leans noticeably blue and clashes with the Calm Engineering
palette. The chosen direction is a warm neutral (stone-like) grey.

## Approach
Introduce a dedicated, themable token rather than another hard-coded hex value,
so future tweaks stay in one place and remain consistent with how the rest of
the palette is defined in `src/styles.css`.

### Changes

1. `src/styles.css` — add the new token
   - In `:root`, add a warm neutral primitive, e.g.
     `--article-desk: oklch(0.928 0.004 75);`
     (a stone-like warm grey, no blue cast, slightly darker than the
     `--canvas` off-white so the paper card still lifts off it).
   - In the existing `@theme inline` block, map it so a utility is generated:
     `--color-article-desk: var(--article-desk);`

2. `src/routes/projects.$slug.tsx` — apply it
   - Change the page wrapper from
     `min-h-screen bg-[#e9eef4] font-sans text-ink`
     to
     `min-h-screen bg-article-desk font-sans text-ink`
   - The article card itself keeps `bg-canvas`, so it still reads as a sheet of
     paper floating on a warm grey desk. No other changes to layout, type, or
     the article-card shadow.

### Why a token
- Keeps the background consistent with the OKLCH-based Calm Engineering tokens
  already used for `--canvas`, `--ink`, and `--accent`.
- One place to tune the warmth/darkness later ("warmer", "darker", etc.).

## Verification
- Typecheck passes (`tsgo`).
- Playwright screenshot of a project article (e.g. the ultrasound page the user
  is viewing) to confirm the warm grey reads well behind the paper card and
  does not tint blue.

## Out of scope
- No changes to text color, card styling, fonts, or the home page.
- No changes to other surfaces that use slate-based greys elsewhere.
