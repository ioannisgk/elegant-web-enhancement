# Fix the GitHub Pages build failure

## What is going wrong

The static build crawls every link on each page and tries to fetch it. On the Pricing page the "Download the TCO audit" button points at the CDN path `/__l5e/assets-v1/.../KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf`. That path only exists on Lovable's asset infrastructure, so during the GitHub Actions build the local server returns 404 and the build stops.

There are two separate issues here: the crawler should not treat a PDF as a page, and on GitHub Pages the PDF has no home at all — even if the build passed, the download button would 404 for visitors.

## Changes

1. **Ship the PDF with the site.** Place the TCO study at `public/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf` so it is copied verbatim into the built site and served from the same domain on GitHub Pages (and in the Lovable preview).
2. **Point the button at that file.** Update `src/components/site/calculator.tsx` to link to `/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf` instead of importing the CDN pointer. The button text, arrow icon, and styling stay exactly as they are.
3. **Prerender only real pages.** In `vite.config.ts`, list the six routes explicitly (`/`, `/architecture`, `/delivery`, `/pricing`, `/whitelabel`, `/faq`) and turn off link crawling, so no future external link, PDF, or mailto can break the build.
4. **Remove the unused CDN pointer** `src/assets/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf.asset.json` once nothing references it.

## Verification

Run `bun run build:pages` locally and confirm it completes with all six HTML files plus the PDF in `dist/client`, then check the Pricing page download button in the preview.

## Note

The PDF (~530 KB) will live in the repository instead of the CDN. That is the only way GitHub Pages can serve it, since Pages has no access to Lovable's asset host.
