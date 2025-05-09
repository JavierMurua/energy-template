import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  outDir: 'docs',
  site: "https://JavierMurua.github.io",
  base: "/energy-template"
});