# Homepage hero secondary button → Architecture page with preloader

## Goal
The "See the platform architecture" button in the homepage hero currently links to `/delivery` and uses a plain router link (no preloader). It should go to `/architecture` and show the same preloader animation used by the navigation bar.

## Change

**`src/components/site/hero.tsx`**
- Replace the `Link` import from `@tanstack/react-router` with `PreloaderLink` from `@/components/site/preloader`.
- Change the wrapper around the secondary button from `<Link to="/delivery">` to `<PreloaderLink to="/architecture">`.
- Keep the existing `ButtonLink variant="secondary"` styling and label text unchanged.

## Verification
- TypeScript typecheck.
- Confirm clicking the button shows the preloader, then lands on the Architecture page.
