# Change homepage hero CTA to "Download the TCO audit"

## Goal
Replace the homepage hero's primary "Get your private cloud" button with a "Download the TCO audit" button that downloads the same PDF used in the Pricing page calculator, while preserving the button's existing blue primary styling.

## Changes

1. **Update `src/components/site/hero.tsx`**
   - Import `ArrowDown` from `lucide-react`.
   - Replace the primary `ButtonLink` that calls `open("Discovery call")` with an `<a>` element:
     - Text: "Download the TCO audit"
     - Icon: `ArrowDown` (same as Pricing page)
     - `href`: `/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf`
     - Attributes: `download`, `target="_blank"`, `rel="noopener noreferrer"`
     - Classes: keep the exact primary `ButtonLink` look (`bg-brand text-primary-foreground hover:bg-brand-strong shadow-soft`, rounded-xl, etc.)
   - Remove the now-unused `useContact` import and hook call from the hero.
   - Leave the secondary "See the delivery process" button unchanged.

## Verification
- Run TypeScript typecheck.
- Confirm the homepage hero shows "Download the TCO audit" with a downward arrow.
- Confirm the button still has the blue primary background.
- Confirm clicking it triggers a download of the PDF.
