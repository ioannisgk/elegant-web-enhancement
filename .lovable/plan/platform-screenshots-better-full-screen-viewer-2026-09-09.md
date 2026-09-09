# Platform screenshots: better full-screen viewer

All changes stay inside the Platform page gallery (`src/components/site/platform-gallery.tsx`), plus a small themed scrollbar rule in `src/styles.css`.

## 1. Same open/close animation as the site's forms

Rebuild the full-screen viewer on the same dialog component the contact form uses, so it fades the backdrop in and scales the panel up on open, and reverses that on close (Escape, close button, or clicking the backdrop). The panel is styled as a transparent, full-width frame rather than the small white form card, so the screenshot still fills the screen.

Everything that already works stays: Escape closes, left/right arrows move between screenshots, counter, caption, close button, full-resolution image.

## 2. Zoom under the mouse pointer

Today the zoom always anchors at the top-left. After the change, the point of the image under the cursor stays under the cursor: on click, the scroll position is set from the click coordinates relative to the image, so zooming feels anchored where the user pointed.

## 3. Grab cursor while dragging

- Zoomed, not pressing: zoom-out cursor (click once to zoom back out — unchanged).
- Zoomed, left button held down: hand/grab cursor, and dragging pans the image.
- A drag is distinguished from a click by movement distance, so panning never accidentally zooms out.

## 4. Themed scrollbars

The grey default scrollbars inside the zoomed image area are restyled to the site palette — dark translucent track, brand-tinted thumb that lightens on hover, slim rounded shape — for both the vertical and horizontal bars, in Chrome/Safari/Edge and Firefox.

## 5. "Open image in a new tab" link

A centered link below the screenshot title and description and above the `1 / 4` counter, opening the full-resolution image in a new browser tab (`target="_blank"`, `rel="noopener noreferrer"`, small external-link icon, muted text that brightens on hover).

## Technical notes

- Files touched: `src/components/site/platform-gallery.tsx`, `src/styles.css` (scrollbar utility only).
- Viewer moves from a hand-rolled fixed overlay to `Dialog`/`DialogContent` from `@/components/ui/dialog` with overridden width/padding classes; keyboard handling is inherited from the dialog primitive, arrow-key navigation stays as a local listener.
- Zoom anchoring: after switching to zoomed state, set `scrollLeft/scrollTop` on the scroll container from the click ratio and the natural image size, using a layout effect.
- Panning uses pointer events (`pointerdown`/`pointermove`/`pointerup`) with pointer capture.
- No change to routing, nav, footer, captions, or any other page.
