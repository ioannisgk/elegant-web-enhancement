# Update homepage "See the Platform in action" icon

## Goal
Replace the current `Monitor` icon inside the homepage's secondary CTA with the `Layers` icon, which the user selected from the four options shown.

## Change
- File: `src/components/site/hero.tsx`
- Import `Layers` from `lucide-react` alongside the existing icon imports.
- Swap `<Monitor className="h-4 w-4" />` for `<Layers className="h-4 w-4" />` inside the "See the Platform in action" `ButtonLink`.

## Verification
- Run the typecheck/build to confirm no import or JSX errors.
- Visually verify the homepage button renders the stacked-layers icon to the right of the text.
