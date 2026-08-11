# Deploy KubeSailor on GitHub Pages

The site is already fully static: no server functions, no API routes, no database. Every page is content-only, so it can be prerendered to plain HTML files and served by GitHub Pages with no visual or content change.

## What changes

1. **Static output** — configure the build to emit prerendered HTML for all six routes (`/`, `/architecture`, `/delivery`, `/pricing`, `/whitelabel`, `/faq`) plus assets, with SSR/server-runtime output disabled so no worker is needed.
2. **Pages compatibility files** — add `.nojekyll` (so `_`-prefixed asset folders are served) and a `404.html` fallback copy so deep links and refreshes resolve. `public/CNAME` already contains `kubesailor.com` and stays as-is, so the site serves from the root path (no base-path change needed).
3. **GitHub Actions workflow** — `.github/workflows/deploy.yml` that installs dependencies, builds, uploads the static output, and deploys to Pages on every push to the default branch.
4. **Docs** — a short section in `README.md` covering the one-time repo setup (Settings → Pages → Source: GitHub Actions) and the DNS records for the custom domain.

## Unchanged

Layout, theme, copy, routing, contact modal, and TCO calculator all stay exactly as they are. The contact form is client-side only today (it just shows a confirmation), so it continues to work identically on Pages.

## Technical notes

- Vite config switches to a static/prerender-only target; the `server: { entry: "server" }` option and `src/server.ts` worker entry become unused for the Pages build.
- Client-side routing still works: Pages serves the prerendered HTML for each known path, and `404.html` hands unknown paths back to the router.
- The Lovable preview and Lovable publishing keep working alongside this; the workflow only affects the GitHub repo.
