// Prepares dist/client for GitHub Pages:
// - .nojekyll so Jekyll does not strip files/folders that start with "_"
// - 404.html fallback so unknown paths still boot the client-side router
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const indexHtml = join(outDir, "index.html");

if (!existsSync(indexHtml)) {
  console.error(`[pages] Missing ${indexHtml}. Run \`bun run build:pages\` instead of \`vite build\`.`);
  process.exit(1);
}

writeFileSync(join(outDir, ".nojekyll"), "");
copyFileSync(indexHtml, join(outDir, "404.html"));

console.log("[pages] Wrote .nojekyll and 404.html to dist/client");
