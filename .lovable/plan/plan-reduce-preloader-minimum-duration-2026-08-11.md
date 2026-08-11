# Plan: Reduce preloader minimum duration

## Goal
Reduce the minimum visible time of the route-change preloader from **700 ms** to **350 ms** so internal navigation feels snappier while still giving the brand moment enough time to register.

## Change
- Edit `src/components/site/preloader.tsx` and change the constant `MIN_VISIBLE_MS` from `700` to `350`.

## Verification
- Run a typecheck / build to confirm the change compiles.
- Optionally run a quick Playwright check to confirm the preloader still shows on main nav clicks but fades faster.
