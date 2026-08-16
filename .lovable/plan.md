# Plan: Match homepage phase labels to regular-weight monospace style

## Goal
Make the blue "Days 01–02", "Days 03–05", and "Days 06–07" labels on the Homepage match the regular-weight monospace appearance of the uploaded reference image (the Delivery page node-count column).

## Current state
- `src/components/site/home-overview.tsx` renders those labels with `font-mono text-sm font-semibold text-brand`.
- The reference image and the Delivery page node-count column use a regular-weight monospace style.

## Change
Remove `font-semibold` from the phase range label class in `src/components/site/home-overview.tsx` so the class becomes `font-mono text-sm text-brand`.

## Verification
- TypeScript check (`tsgo`).
- Visual confirmation that the Homepage phase labels now appear in regular-weight monospace, matching the uploaded reference.
