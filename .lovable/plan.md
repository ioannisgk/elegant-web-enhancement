# Add Monitor icon to "See the Platform in action" button

## Goal
Add a relevant non-arrow icon inside the homepage hero's secondary "See the Platform in action" button, matching the style of the "Download the TCO audit" button.

## Changes

1. **Update `src/components/site/hero.tsx`**
   - Import `Monitor` from `lucide-react`.
   - Inside the secondary `ButtonLink` (wrapped by `PreloaderLink to="/platform"`), add `<Monitor className="h-4 w-4" />` after the text.
   - Keep the existing `PreloaderLink` wrapper and `ButtonLink variant="secondary"` styling unchanged.

## Verification
- Run TypeScript typecheck.
- Confirm the homepage hero shows "See the Platform in action" with the Monitor icon to the right of the text.
- Confirm the icon size matches the arrow in the primary button (`h-4 w-4`).
