# The Platform page

A new page showing 16 real screenshots of the KubeSailor platform, in the site's existing theme. No existing page changes except adding the nav/footer link.

## Navigation

- New route `/platform`, labelled "The Platform", placed between Architecture and Delivery in the header (desktop + mobile menus) and in the footer link list, wrapped in the preloader link so it behaves like every other nav item.

## Page structure

1. `PageHero` — eyebrow "The platform", title with a gold/brand accent, short description, and four meta pills (e.g. GitOps, Supply chain, Observability, HA storage & mesh) — same component and rhythm as Architecture and Delivery.
2. Four category sections, each with a heading, one-line intro, and a 2x2 grid of screenshot cards:
   - Source Control & GitOps — GitLab 01/02, Argo CD 01/02
   - CI/CD & Supply Chain — Jenkins 01/02, Harbor 01/02
   - Observability — Grafana 01–04 (or 03 swapped for Prometheus/Thanos if the four Grafana shots repeat)
   - HA Storage & Service Mesh — Rook-Ceph 01/02, Istio/Kiali 01/02
   Remaining Prometheus/Thanos and Rook-Ceph shots stay unused unless you want them swapped in.
3. Each card: bordered/rounded surface matching existing cards, a short caption title and one-line description of what the screenshot proves, and the image with a subtle border and hover lift.
4. Closing `Cta` block, identical to the other pages.

## Screenshots

- Extracted from the uploaded zip, converted to WebP (quality ~82, max width ~1600px) to keep the page fast — the raw PNGs total ~8.6 MB.
- Stored under `public/screenshots/` so the static GitHub Pages build serves them directly.
- Lazy-loaded, fixed aspect ratio to avoid layout shift, descriptive alt text for SEO.

## Lightbox

Clicking a screenshot opens it full-screen in a themed dialog (same dialog primitive the contact modal uses), with the caption underneath, keyboard Escape close, and arrow navigation within the category.

## Technical notes

- `src/routes/platform.tsx` with its own `head()` metadata (unique title, description, og/twitter tags).
- `src/components/site/platform-gallery.tsx` holds the category data array and the grid/lightbox components; no shared components are modified apart from the header and footer link arrays.
- Prerendering already covers new routes via the existing Vite config, so the GitHub Pages build picks `/platform` up automatically.
