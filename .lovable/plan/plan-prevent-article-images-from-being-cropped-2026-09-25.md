# Plan: Prevent article images from being cropped

## Goal
Ensure every image shown inside a project article remains fully visible at its original aspect ratio.

## Changes
- Change inserted paragraph images and section images from fill-and-crop behavior to fit-within-frame behavior.
- Apply the same non-cropping behavior to the article's main image carousel for consistency.
- Keep each image area stable so the article layout does not jump while images load.

## Acceptance
- No article image is cropped.
- Images keep their original proportions and remain centered within their frame.
- The article card width and existing layout remain unchanged.
