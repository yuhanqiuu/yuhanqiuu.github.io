# Project detail article — template guide

Each project in `src/lib/projects.ts` can be a **short card** (what the home page shows)
and a **full detail article** (the `/projects/{slug}` page). The detail article is the
"template" — it renders automatically when you fill in the optional article fields.

## Fields on a `Project`

Required (already used by the home page):
- `slug`, `title`, `category`, `year`
- `summary` — one-line blurb under the card title
- `description` — shown only if no `sections` are provided
- `image`, `images[]`, `tags[]`

Optional — turn the detail page into a clean article:
- `overview` — lead paragraph under the title. Falls back to `summary` if omitted.
- `specs` — small 2-column metadata grid.
  ```ts
  specs: [
    { label: "Role", value: "Hardware lead" },
    { label: "Tools", value: "KiCad, Verilog, ESP32" },
    { label: "Timeline", value: "Jan – May 2026" },
    { label: "Status", value: "Completed" },
  ]
  ```
- `sections` — long-form body. Each section has a heading, paragraph(s), and an
  optional inline figure + caption. Omit to show `description` instead.
  ```ts
  sections: [
    {
      heading: "Overview",
      body: [
        "First paragraph…",
        "Second paragraph…",
      ],
      image: someImage, // optional import from ../assets
      caption: "Bench testing the sensor board.", // optional
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
4. Spec grid (Role / Tools / …) — if `specs` set
5. Hero media — video + lightbox if `video`, else an image carousel
6. External link — if `link` set
7. Long-form sections — if `sections` set, else the `description`
8. Disciplines tag list
9. Previous / Next navigation

## Minimal example

```ts
import balance_1 from "../assets/project-balance-1.png";

{
  slug: "autonomous-self-balancing-robot",
  title: "Autonomous Self-Balancing Robot",
  category: "Robotics",
  year: "2025",
  summary: "A self-balancing robot featuring object detection and wireless remote control.",
  description: "Wait for Later",
  image: balance_1,
  images: [balance_1],
  tags: ["Robotics", "PID", "Embedded Systems"],

  // —— article fields ——
  overview: "A two-wheel self-balancer stabilized by a cascaded PID loop…",
  specs: [
    { label: "Role", value: "Sole engineer" },
    { label: "Tools", value: "STM32, MPU6050, OpenCV" },
    { label: "Timeline", value: "2025" },
  ],
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

Leave `description` as `"Wait for Later"` until you write real copy; the page shows
"Full case study coming soon." when no `sections` are present.
