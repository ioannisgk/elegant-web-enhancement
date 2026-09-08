# Homepage Pricing Teaser — Add Tier Titles

## Goal
Update the homepage "Pricing" teaser section so each tier card shows its tier name (e.g. "Private Cloud Platform") in the same font size and weight as the corresponding cards on the `/pricing` page.

## Current state
- `src/components/site/home-overview.tsx` exports `PricingTeaser`.
- Each teaser card currently shows only a small uppercase label ("Tier 1: Platform"), an empty price slot, and a body sentence.
- The `/pricing` page cards render the tier name as an `<h3 className="text-xl font-semibold">` below the badge.

## Changes
1. In `PricingTeaser`, extend the tier data array to include a `name` field for each tier:
   - Tier 1: "Private Cloud Platform"
   - Tier 2: "Private Cloud Platform +"
   - Tier 3: "Whitelabel & IP licence"
2. Render the `name` as an `<h3 className="mt-3 text-xl font-semibold">` immediately after the label, matching the markup in `src/components/site/pricing.tsx`.
3. Keep the existing label as the small uppercase eyebrow and preserve the body text.
4. Leave the price slot empty (the teaser intentionally does not show prices).
5. Verify the build passes and the homepage screenshot shows the three cards with the new titles aligned with the labels above and body below.

## Files touched
- `src/components/site/home-overview.tsx`
