# Final polish and compliance pass for KubeSailor

The site is already production-ready in look, feel and structure. These are low-risk, minimal-effort touches that make it easier for search engines, social shares and EU visitors to trust and convert.

## What changes

1. **SEO basics**
   - Add `public/sitemap.xml` listing all 8 routes (`/`, `/architecture`, `/platform`, `/delivery`, `/pricing`, `/whitelabel`, `/faq`, `/terms`).
   - Add a canonical `<link>` to every route’s `head()` so search engines consolidate the `www` / non-`www` / query-string versions.
   - Generate a single `public/og-image.jpg` (1200×630) and reference it in every leaf route’s `head()` as `og:image` and `twitter:image`.

2. **Content consistency**
   - Fix the homepage meta description in `src/routes/index.tsx`: it still says “three-cluster”, but the platform is five clusters (LB, DNS, Admin, Workload, Storage). Change to “multi-cluster” or “five-cluster”.
   - Fix the typo “instace” → “instance” in `src/components/site/blueprint.tsx` (Day 3).

3. **Snappier navigation**
   - Reduce `MIN_VISIBLE_MS` in `src/components/site/preloader.tsx` from `700` to `350` so internal page transitions feel faster while still showing the brand moment.

4. **Layout stability**
   - Add explicit `width` and `height` attributes to the four `PlatformPreview` screenshots in `src/components/site/home-overview.tsx` so the browser reserves space before the images load, reducing cumulative layout shift.

5. **Privacy compliance (minimal)**
   - Add a `/privacy` page with a short, plain-language privacy notice covering what data the contact form collects, how it is used (only to reply), how long it is kept, and the visitor’s rights.
   - Link it in the footer next to Terms & Conditions.

## Unchanged

Theme, typography, page structure, pricing, FAQ, terms copy, platform gallery behaviour, contact form integration and GitHub Pages build all stay exactly as they are.

## Verification

- Run `bun run build:pages` and confirm all routes still prerender correctly.
- Validate the generated `dist/client/sitemap.xml` and that every HTML file contains its canonical link.
- Check the homepage meta description in the prerendered source.
- Confirm the footer now links to `/privacy`.
