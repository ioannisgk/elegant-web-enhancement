# Platform page: accurate captions + full-resolution lightbox

Two changes, both confined to the Platform page.

## 1. New captions for three screenshots

Rewritten from what each screenshot actually shows (stage names and repository contents read from the images).

**Jenkins 01** — the job `demo-app-pipeline-cicd`, a 12-stage build with average run time ~29 min:
Checkout SCM, Checkout, Validate Parameters, Parallel Build & Scan, Build & Test Application, Code Scanning & Vulnerability Checks, Build Container Image, Container Image Scanning, Push to Harbor, Sign Container Image, Update Manifest & Trigger Argo CD Sync, Post Actions.

- Title: `Jenkins — build pipeline, commit to cluster`
- Description: `Twelve stages from Git checkout through test, SAST/SCA scanning, image build, Trivy scan, signed push to Harbor and an Argo CD sync trigger.`

**Jenkins 02** — the job `demo-app-pipeline-deploy`, ~2 min 32 s, stages: Checkout SCM, Fetch Image Tags, Select Image Tag Prompt, Validate Parameters, Update Manifest & Trigger Argo CD Sync, Post Actions.

- Title: `Jenkins — controlled release pipeline`
- Description: `Fetches available Harbor tags, pauses for an operator to pick one, then writes the manifest and triggers Argo CD — a promotion in under three minutes.`

**GitLab 02** — the `automationbot/admin-cluster` repository on `main`, 24 commits, directories `argocd`, `bookinfo`, `gateway-api`, `harbor`, `istio-mesh`, `logging`, `monitoring`, `rook-ceph`, `telemetrygen`, `tracing`.

- Title: `GitLab — the cluster, described in Git`
- Description: `One repository per cluster holding Argo CD, Istio, Harbor, Rook-Ceph, monitoring, logging and tracing manifests — the complete, auditable desired state.`

The three Trivy warning links (SAST, SCA, Secrets, container image) visible in Jenkins 01 back up the supply-chain claim, so the wording stays factual.

## 2. Full-resolution lightbox

Today the lightbox re-uses the same 1600 px WebP shown in the grid, so enlarging it does not add detail.

- Generate a second, full-resolution WebP for each of the 20 screenshots from the original 3838x2086 captures, saved as `public/screenshots/<name>-full.webp` (quality ~88, no downscale). Expected ~150–400 KB each; they load only when a lightbox opens, so page weight is unchanged.
- Add a `full` field to each entry in the gallery data and point the lightbox `<img>` at it, keeping the 1600 px file as the grid thumbnail.
- In the lightbox, show the image at up to its natural size within the viewport, and add click-to-zoom: first click on the enlarged image switches to 1:1 pixel view with scroll/drag panning, click again returns to fit-to-screen. Cursor changes to zoom-in / zoom-out accordingly.
- Keep the existing Escape, arrow-key navigation, counter, caption and close button behaviour.

## Technical notes

- Files touched: `src/components/site/platform-gallery.tsx` only, plus the new `-full.webp` assets in `public/screenshots/`.
- Originals are still available in the sandbox at `/tmp/shots/*.png`; conversion runs with Pillow, same approach used for the current thumbnails.
- No changes to routing, nav, footer, or any other page.
