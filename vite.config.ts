import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

/**
 * Nitro renames the built server entry to `dist/server/index.mjs`, but the
 * TanStack prerender/preview server imports `dist/server/server.js` (derived
 * from the configured server entry name). Alias the file so prerendering can
 * boot the built server.
 */
function aliasServerEntryForPrerender(): Plugin {
  return {
    name: "kubesailor:alias-server-entry-for-prerender",
    apply: "build",
    enforce: "post",
    closeBundle: {
      order: "post",
      handler() {
        const dir = join(process.cwd(), "dist", "server");
        const built = join(dir, "index.mjs");
        const expected = join(dir, "server.js");
        if (existsSync(built) && !existsSync(expected)) {
          copyFileSync(built, expected);
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [aliasServerEntryForPrerender()],
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
    },
  },
});
