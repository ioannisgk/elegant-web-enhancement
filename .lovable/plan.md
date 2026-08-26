# Remove click-to-zoom in the Platform lightbox

## Goal
When a user opens a screenshot in the full-screen lightbox on `/platform`, clicking the image itself should do nothing — no zoom, no cursor change, no state toggle.

## Changes

1. **Remove zoom state from the lightbox image interaction**
   - In `src/components/site/platform-gallery.tsx`, delete the `zoomed` state and `setZoomed` setter.
   - Remove the `onClick` handler from the lightbox `<img>`.
   - Remove the zoomed CSS classes and the conditional wrapper styling that depends on `zoomed`.

2. **Keep all existing lightbox behaviour**
   - Escape to close.
   - Left/right arrow navigation.
   - Counter, caption, close button.
   - Full-resolution image source (`-full.webp`).
   - Body scroll lock.

3. **Resulting image display**
   - The image remains fit-to-screen (`max-h-[78vh]`, `object-contain`) at all times.
   - Cursor is neutral (no zoom-in/zoom-out indicator).

## Files touched
- `src/components/site/platform-gallery.tsx` only.
