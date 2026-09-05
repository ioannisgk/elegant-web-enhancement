# Homepage: "The Platform" preview section

Add one new section on the homepage between "What KubeSailor is" (PlatformPillars) and "Fixed one-week delivery" (DeliveryStrip), linking to the `/platform` page. No existing elements change.

## New section: PlatformPreview

Rendered in the browser as a live mock (no files changed yet) — this is exactly how it will look:

```text
        THE PLATFORM  (eyebrow pill)
   Real consoles, running on bare metal
   Every KubeSailor delivery ships the same tooling you see
   here — GitOps, CI/CD, observability, storage and service
   mesh, all self-hosted.

 ┌───────────┬───────────┬───────────┬───────────┐
 │ Grafana   │ Jenkins   │ Argo CD   │ Rook-Ceph │
 │ screenshot│ screenshot│ screenshot│ screenshot│
 │ Grafana   │ Jenkins   │ Argo CD   │ Rook-Ceph │
 │ dashboards│ pipelines │ GitOps    │ storage   │
 └───────────┴───────────┴───────────┴───────────┘

        See the platform running  →   (link to /platform)
```

- **Heading**: eyebrow "The platform", title "Real consoles, *running on bare metal*" (brand-blue accent), one-line description — same `SectionHeading` component as the neighbouring sections.
- **Four cards** in the site's standard bordered grid (`gap-px` on `bg-border`, rounded-2xl), one representative real screenshot per Platform-page category, each with a short title and one-line caption:
  - Grafana dashboards — "Cluster, node and workload metrics you own."
  - Jenkins pipelines — "Twelve stages from commit to signed image push."
  - Argo CD GitOps — "Every cluster reconciled from Git."
  - Rook-Ceph storage — "Replicated block, file and object storage."
- **Link**: centered "See the platform running →" in brand blue, wrapped in `PreloaderLink` to `/platform` so it shows the preloader like every other internal link.
- Screenshots reuse the existing WebP files in `public/screenshots/`, lazy-loaded with fixed 16:10 aspect ratio and descriptive alt text. No lightbox on the homepage — clicking through goes to the Platform page.

## Technical notes

- New exported `PlatformPreview` component in `src/components/site/home-overview.tsx`, inserted in `src/routes/index.tsx` between `<PlatformPillars />` and `<DeliveryStrip />`.
- Same `section-y border-b` rhythm and semantic tokens as all other sections; background alternation preserved (surface section between the pillars and the delivery strip).
- No other pages, components or styles are touched.
