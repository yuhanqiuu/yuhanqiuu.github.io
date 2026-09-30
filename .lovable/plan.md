# Remove category/year labels from homepage project cards

## What to build
- On the homepage, project cards currently show a small uppercase line under the title, e.g. "FPGA, 2026" / "Robotics, 2025".
- Remove that line from the homepage card so cards show only: picture, title, summary.
- Project detail articles keep the "Category · Year" eyebrow exactly where it is now — no change there.

## Files changed
- `src/routes/index.tsx` — delete the card paragraph that renders `{project.category}, {project.year}`. Nothing else changes (grid layout, square images, video/carousel behavior untouched).

## Verification
- Check the homepage in the preview: cards show title + summary with no category/year line.
- Open one project article to confirm the "Category · Year" eyebrow still appears at the top.
- Build passes with no errors.
