# GitHub Repo Buttons on Project Articles

## Goal
Readers can click a button on a project's detail article to open its GitHub repository. Four projects get repos; the other four simply show no button.

## Repo mapping (to add in `src/lib/projects.ts` via the existing `link` field)

| Project | GitHub URL |
|---|---|
| Autonomous Self-Balancing Robot | https://github.com/yuhanqiuu/Self-Balancing-Bot |
| Depth Camera Based 3D Gait Analysis | https://github.com/yuhanqiuu/Orbbec-Femto-Bolt-Data-Analysis |
| Metal Detector Rover | https://github.com/yuhanqiuu/Remote-Metal-Detector-Rover |
| Cardio Health Monitor | https://github.com/yuhanqiuu/Heart-Health-Monitor |

No repo: Ultrasound, 8051 Board, Reflow Oven, Me Playing Bach — no button shown.

## Placement & design
- A single pill button, placed in the article header area directly under the overview paragraph and above the spec grid — the natural "what is this → see the code" spot, before the reader scrolls into the long body.
- Style matches the existing calm-engineering look and the resume pill button on the home page:
  - Pill shape, subtle border on the canvas background, ink text, soft slate-blue accent on hover.
  - GitHub mark (lucide `Github` icon) on the left + label "View on GitHub", opening in a new tab.
  - If a project ever has a non-GitHub `link`, the button falls back to the generic "View project" label with the existing arrow icon.

## Changes
1. `src/lib/projects.ts` — add `link` (and `linkLabel: "View on GitHub"`) to the four projects above.
2. `src/routes/projects.$slug.tsx` — replace the current small text link block with the pill button described above (Github icon when the URL points at github.com, otherwise ArrowUpRight). Keep it inside the paper card so nothing shifts in the layout.

## Verification
- Typecheck passes.
- Playwright check: open one project with a repo (e.g. Metal Detector Rover) and confirm the pill renders and points to the right URL; open one without (8051 Board) and confirm no button.
