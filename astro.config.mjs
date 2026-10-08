import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { transformerNotationDiff } from '@shikijs/transformers';
import tailwindcss from "@tailwindcss/vite";

// Flexoki for VS Code by @Railly (MIT), from
// https://github.com/Railly/one-hunter-vscode - Shiki reads VS Code themes as-is.
const flexoki = (variant) =>
  JSON.parse(readFileSync(new URL(`./src/themes/flexoki-${variant}.json`, import.meta.url), 'utf8'));

// https://astro.build/config
export default defineConfig({
  site: 'https://r-cha.dev',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  markdown: {
    shikiConfig: {
      // Both themes are emitted as CSS variables (defaultColor: false) so the
      // stylesheet can pick one. See .astro-code in src/styles/global.css.
      themes: {
        light: flexoki('light'),
        dark: flexoki('dark'),
      },
      defaultColor: false,
      wrap: false,
      transformers: [transformerNotationDiff()]
    }
  },
});
