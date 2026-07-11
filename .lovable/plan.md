## Goal
Create a small logo for the portfolio site inspired by the uploaded pixel-art dumpling-with-laptop image, and wire it into the top-left of the header (replacing/accompanying the "Yuhan Qiu" wordmark).

## Approach

**1. Generate the logo asset**
- Use `imagegen--generate_image` (premium tier for crisp pixel art) with a transparent background.
- Prompt: a minimal pixel-art dumpling character with a small laptop showing green `</>` code, clean single-subject composition, centered on transparent background, square 1024×1024.
- Save to `src/assets/logo.png`.
- Because the site's palette is calm/cool engineering tones, keep the dumpling cream and laptop dark charcoal (matching `--ink`) so it fits the muted aesthetic.

**2. Place it in the header**
- Edit `src/routes/__root.tsx`: in the fixed top header, put the logo (h-8 w-8, `image-rendering: pixelated` to preserve crisp pixel edges) to the left of the "Yuhan Qiu" name, both wrapped in the existing `<Link to="/">`.

**3. Use it as the favicon too**
- Point the favicon `<link>` in `__root.tsx` head to the same logo.

## What I won't touch
- Colors, fonts, layout, projects, contact block — all unchanged.
- The deploy workflow — logo will be bundled by Vite automatically.

## Open question
Do you want the logo to be **just the dumpling** (cleaner, more iconic at small sizes), or **the dumpling + laptop together** exactly like your reference (more personality, but busier at 32px)? I'd recommend just the dumpling for the header + favicon, but I can do either.
