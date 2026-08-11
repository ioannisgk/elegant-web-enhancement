import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `BUILD_TARGET=pages` produces a fully static bundle for GitHub Pages:
// nitro (Cloudflare worker output) is skipped and every route is prerendered
// to HTML in `dist/client`. The default build keeps the Lovable/Cloudflare
// SSR output.
const isPagesBuild = process.env["BUILD_TARGET"] === "pages";

export default defineConfig({
  nitro: isPagesBuild ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: isPagesBuild,
    },
    ...(isPagesBuild ? { spa: { enabled: true } } : {}),
  },
});
