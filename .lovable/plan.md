Show the KubeSailor preloader on main navigation between pages

## Goal
The current preloader only appears on the initial page load / refresh. Add the same full-screen preloader experience when the user navigates between the main sections of the site using the header navigation, while keeping it fast and unobtrusive for other interactions (contact modals, footer links, CTA links).

## Scope
- Trigger the preloader on header navigation links only (desktop and mobile nav): Home, Architecture, Delivery, Pricing, Whitelabel, FAQ.
- Keep the existing auto-fade behavior on the very first visit / page refresh.
- Do not trigger on: "Book a call" buttons, contact modal opens, footer links, CTA "Review pricing" link.
- Ensure the preloader feels intentional (minimum visible duration) but never blocks interaction longer than necessary.

## Technical plan

1. Refactor preloader into a controlled component
   - Convert `src/components/site/preloader.tsx` into a provider + consumer pattern.
   - Expose `show()` and `hide()` via a small context (`PreloaderProvider`).
   - Keep the current animation and styling (pulsing ring, wordmark, bouncing dots).

2. Wrap the app in the provider
   - Update `src/routes/__root.tsx` to render `<PreloaderProvider>` around `<SiteHeader>` and `<Outlet>`.
   - The controlled `<Preloader />` stays inside the root layout.

3. Create a preloader-aware navigation link
   - Add a `PreloaderLink` component in `src/components/site/preloader.tsx` (or a dedicated file).
   - On click, it calls `show()`, then performs the normal TanStack `Link` navigation.
   - The route resolution will naturally hide the loader once the new page is ready.

4. Use the preloader link only in the main nav
   - Replace the desktop and mobile header navigation links in `src/components/site/header.tsx` with `PreloaderLink`.
   - Keep the home logo as a normal `Link` so it stays instant; optionally make it preloader-aware too if the user wants it. (The plan will default to normal for the logo to keep it snappy.)

5. Hide after route resolution
   - Subscribe to TanStack Router state in the preloader provider.
   - When the router finishes loading the new route (`status === 'idle'` after a navigation), call `hide()`.
   - Enforce a minimum visible duration of ~350–500 ms so a very fast route change doesn't flash the loader.

6. Verify behavior
   - Build the app and check for TypeScript errors.
   - Use Playwright to confirm:
     - The preloader shows on initial load and fades correctly.
     - Clicking a main nav link shows the preloader before the new page appears.
     - Clicking "Book a call" and footer links does not show the preloader.

## Outcome
A polished, consistent loading experience that makes the multi-page site feel like a premium product, without adding friction to modals or secondary links.
