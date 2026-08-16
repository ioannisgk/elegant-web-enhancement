# Footer LinkedIn indicator

Add a tiny external-link arrow next to the founder's LinkedIn name in the footer credit line, using the "Minimal credit link" direction selected by the user.

## What will change
- In `src/components/site/footer.tsx`, update the credit-line anchor that links to `https://www.linkedin.com/in/ioannisgko`.
- Import a small arrow icon (`ArrowUpRight` from `lucide-react`) and place it inline after the name.
- Use a `group` class on the anchor so the icon opacity shifts from muted to full on hover, keeping the indicator subtle by default.
- Preserve the existing footer layout, text size, color, and hover underline behavior.

## Visual target
- 10 px / 2.5 (w-2.5 h-2.5) arrow icon, same stroke weight as the prototype.
- Icon opacity 40% by default, 100% on hover, with a 150-300 ms transition.
- Anchor remains `text-muted-foreground` with `hover:text-foreground` and `hover:underline`.

## Verification
- Run TypeScript typecheck.
- Capture a Playwright screenshot of the footer to confirm the icon appears and the layout does not shift.