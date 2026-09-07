# Plan — Worked example article for the Ultrasound project

## Goal
Fill in the `overview`, `specs`, and `sections` fields on the Portable Ultrasound
Transducer project so its `/projects/portable-ultrasound-transducer-for-medical-imaging`
page renders the full article template (not the "Full case study coming soon." placeholder).
This is the worked example to model every other project article on.

## Important — these are draft facts to verify
I only have your existing summary and tags (FPGA, Medical Devices, Embedded Systems).
The specific values below (role, tools, timeline, beamforming approach, frequency) are
plausible drafts based on that summary, NOT confirmed facts. I will mark them clearly as
drafts and you should correct the numbers/terms that are wrong. If you'd rather supply the
real specs yourself, I'll leave those fields blank and wire in only the copy you give me.

## What changes
Single file: `src/lib/projects.ts` — add the optional article fields to the ultrasound entry.
No layout/code changes; the detail page already renders these fields.

## Proposed content (draft)

### overview
"A miniaturized telehealth ultrasound system built for home-based care, enabling
continuous, low-cost monitoring of tissue health. The system pairs a compact
transducer front end with FPGA-based signal processing to deliver diagnostic-quality
imaging without the cost or footprint of a clinical cart."

### specs (2-column metadata grid)
- Role — System & FPGA engineer (draft)
- Tools — Verilog / HDL, Quartus, KiCad (draft)
- Platform — FPGA + custom analog front end (draft)
- Timeline — 2026 (draft)
- Status — Prototype (draft)

### sections
1. **Overview** — problem (ultrasound carts are costly/stationary → home monitoring is
   hard) and approach (miniaturized transducer + FPGA processing).
2. **Signal chain & FPGA processing** — pulser drives the transducer; received echoes
   are amplified and digitized; the FPGA performs filtering and beamforming.
   Inline figure: `ultrasoundPoster`.
3. **System design** — compact form factor, low-power for continuous home monitoring,
   telehealth data path. Note: any second image added here would slot in automatically.

### Other notes
- The existing `video` (YouTube) stays as the hero with the poster thumbnail + play button.
- `description` stays `"Wait for Later"` — it only shows if `sections` is absent, so it's
  harmless once `sections` is populated.
- Home page card is unaffected (it only uses summary/images/video/tags).

## Verification
- `npx tsgo --noEmit` passes.
- Screenshot `/projects/portable-ultrasound-transducer-for-medical-imaging` and confirm
  the article renders: eyebrow, title, overview, spec grid, video hero, body sections,
  tags, prev/next.
