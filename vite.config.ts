import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build, defineConfig, type Plugin, type ResolvedConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Pré-rendu : après le build client, un build serveur (src/entry-server.tsx) génère le HTML de la page,
// injecté dans dist/index.html. Les robots (Google, IA) lisent ainsi le contenu sans exécuter de JavaScript.
function prerender(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "d120-prerender",
    apply: "build",
    configResolved(resolved) {
      config = resolved;
    },
    async closeBundle() {
      if (config.build.ssr) return; // seul le build client déclenche le pré-rendu

      const ssrDir = resolve(config.root, "dist-ssr");
      await build({
        configFile: config.configFile,
        mode: config.mode,
        logLevel: "warn",
        build: { ssr: "src/entry-server.tsx", outDir: ssrDir, emptyOutDir: true },
      });

      const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);
      const htmlPath = resolve(config.root, config.build.outDir, "index.html");
      const template = await readFile(htmlPath, "utf8");
      const placeholder = '<div id="root"></div>';
      if (!template.includes(placeholder)) throw new Error("Pré-rendu : emplacement #root introuvable");
      await writeFile(htmlPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
      await rm(ssrDir, { recursive: true, force: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), prerender()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
