# Project detail article — template guide

Each project in `src/lib/projects.ts` can be a **short card** (what the home page shows)
and a **full detail article** (the `/projects/{slug}` page). The detail article is the
"template" — it renders automatically when you fill in the optional article fields.

## Fields on a `Project`

Required (already used by the home page):
- `slug`, `title`, `category`, `year`
- `summary` — one-line blurb under the card title
- `description` — optional. Shown only if no `sections` are provided; if
  omitted, the page shows "Full case study coming soon."
- `image`, `images[]`

Optional — turn the detail page into a clean article:
- `overview` — lead paragraph under the title. Falls back to `summary` if omitted.
- `sections` — long-form body. Each section has a heading and a `body` array.
  A `body` entry is either a paragraph (string) or an inline figure shown
  *between* the surrounding paragraphs:
  `{ image: someImage, caption: "…" }`.
  A section can also carry one trailing figure via `image` / `caption`,
  shown after the whole body. Omit `sections` to show `description` instead.
  **Bold text:** wrap any words in `**double asterisks**` inside a paragraph
  string, e.g. `"I developed the **16-channel preprocessing pipeline**."`
  **Line breaks:** put `\n` inside a paragraph string to force a new line,
  e.g. `"First line\nSecond line."` renders on two lines (works with bold too).
  ```ts
  sections: [
    {
      heading: "Overview",
      body: [
        "First paragraph…",
        { image: someImage, caption: "Bench testing the sensor board." },
        "Second paragraph after the figure…",
      ],
      // optional trailing figure after all body entries:
      image: someImage,
      caption: "Final result.",
    },
  ]
  ```
- `video` — YouTube/Shorts/regular video URL. Renders a play button over the
  `poster` image; clicking opens a full lightbox.
- `poster` — thumbnail shown behind the play button.
- `link` — external URL (repo, write-up, demo). Shows a "View project" link.
- `linkLabel` — overrides the default "View project" label.

## How the detail page is laid out (top → bottom)

1. Eyebrow — `Category · Year`
2. Title (serif)
3. Overview lead paragraph
4. Hero media — video + lightbox if `video`, else an image carousel
5. External link — if `link` set
6. Long-form sections — if `sections` set, else the `description`
7. Previous / Next navigation

## Minimal example

```ts
import balance_1 from "../assets/project-balance-1.png";

{
  slug: "autonomous-self-balancing-robot",
  title: "Autonomous Self-Balancing Robot",
  category: "Robotics",
  year: "2025",
  summary: "A self-balancing robot featuring object detection and wireless remote control.",
  image: balance_1,
  images: [balance_1],

  // —— article fields ——
  overview: "A two-wheel self-balancer stabilized by a cascaded PID loop…",
  sections: [
    {
      heading: "Control loop",
      body: [
        "Angular rate and acceleration from the IMU feed a complementary filter…",
        "A cascaded PID controller drives the geared motors…",
      ],
    },
  ],
}
```

Leave `description` omitted until you write real copy; the page shows
"Full case study coming soon." when no `sections` are present.
