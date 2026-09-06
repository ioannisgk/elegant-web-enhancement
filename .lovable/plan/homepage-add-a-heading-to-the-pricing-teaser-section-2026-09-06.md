# Homepage: Add a heading to the pricing teaser section

## Goal
Make the "Compare tiers and model your TCO" pricing section consistent with the other homepage sections ("What KubeSailor is", "The platform", "Fixed one-week delivery") by giving it a centered eyebrow, title and tagline.

## Proposed change

Update the `PricingTeaser` component in `src/components/site/home-overview.tsx`:

- Add a `SectionHeading` block above the existing three-tier grid.
- **Eyebrow:** "Pricing"
- **Title:** "Transparent, fixed-scope **pricing**" with the word "pricing" rendered in brand blue (`text-brand`).
- **Description:** "Three engagement tiers with predictable costs — no per-node fees, no usage metering, no vendor lock-in."
- Keep the existing three pricing cards and the "Compare tiers and model your TCO →" link exactly as they are.
- Keep the same section wrapper (`section-y border-b border-border bg-surface`) so the vertical rhythm and background alternation match the rest of the page.

## Verification

- Run `bun run build` and `tsgo` to confirm no type errors.
- Open the homepage and scroll to the pricing section to confirm the new heading appears and the spacing matches neighboring sections.

## Mock screenshot

The screenshot shared in chat shows the proposed look: a centered eyebrow pill, a title with a brand-blue accent word, a one-line description, then the existing pricing cards and CTA link.
