Add the uploaded ultrasound demo video to the "Portable Ultrasound Transducer for Medical Imaging" project as a click-to-play lightbox: a static thumbnail with a ▶ button overlay opens a modal that plays the full video.

## Current state
- The project already exists in `src/lib/projects.ts` with placeholder Halcyon images.
- The uploaded video `Ultrasenics_Demo_V1-2.mp4` (~89 MB) is at `/mnt/user-uploads/`.
- Homepage card (`ProjectCard`) and detail page (`projects.$slug.tsx`) both render a square image carousel.

## Plan

1. **Thumbnail image**
   - You can either upload a poster image (a still frame you like), or I can auto-generate one by pulling frame 1 of the video with `ffmpeg` and saving it to `src/assets/project-ultrasound-poster.jpg`.
   - Default: extract frame at ~1s from the uploaded video as the poster.

2. **Upload the video to Lovable Assets CDN**
   - Run `lovable-assets create --file /mnt/user-uploads/Ultrasenics_Demo_V1-2.mp4 --filename ultrasenics-demo.mp4` and save the pointer to `src/assets/ultrasenics-demo.mp4.asset.json`.
   - Keep the original 89 MB file as-is per your earlier answer.

3. **Extend the project data model** (`src/lib/projects.ts`)
   - Add optional `video?: string` and `poster?: string` fields on `Project`.
   - Attach the video + poster to the ultrasound project. Replace its images array with `[poster]` so the card renders the poster as the thumbnail.

4. **Play-button overlay + lightbox on the homepage card** (`src/routes/index.tsx`)
   - When `project.video` is set, render a centered circular ▶ button overlay on top of the poster thumbnail.
   - Clicking the ▶ (or the card) opens a full-screen modal (`role="dialog"`, ESC / backdrop / close-button to dismiss, body scroll locked) that plays the video with `controls`, `autoplay`, `playsInline` — not muted so you get audio.
   - The card title/summary still links to the project detail page as before; only the media area triggers the lightbox.

5. **Same treatment on the detail page** (`src/routes/projects.$slug.tsx`)
   - Show the poster with a ▶ overlay in the square media area; clicking opens the same lightbox modal.

6. **Build & verify**
   - Run `bun run build` to confirm all 8 prerendered pages still succeed and the asset pointer resolves.

## Notes / open question
- Do you want me to auto-extract the thumbnail from the video's first second, or will you upload a specific still image to use as the poster? (Default: auto-extract.)