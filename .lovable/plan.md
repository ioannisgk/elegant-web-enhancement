# Widen Terms & Conditions body to align with title

## Goal
Make the main text content of the `/terms` page the same width as the page title/hero block above it, so the left edge of the body copy vertically aligns with the left edge of the title.

## Current state
- The `PageHero` on `/terms` is constrained with `max-w-4xl`.
- The `Terms` body below it uses `max-w-3xl`, so it is narrower and appears inset relative to the title.

## Change
In `src/components/site/terms.tsx`, change the inner container from `max-w-3xl` to `max-w-4xl` so it matches the hero width and shares the same left alignment.

```diff
- <div className="container-page max-w-3xl">
+ <div className="container-page max-w-4xl">
```

No other layout or typography changes are needed.

## Verification
- `bun run build` passes.
- Playwright screenshot of `/terms` confirms the body copy left-aligns with the hero title.
