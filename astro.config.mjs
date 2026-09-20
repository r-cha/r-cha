import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { transformerNotationDiff } from '@shikijs/transformers';
import tailwindcss from "@tailwindcss/vite";

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
        light: 'github-light',
        dark: 'ayu-dark',
      },
      defaultColor: false,
      wrap: false,
      transformers: [transformerNotationDiff()]
    }
  },
});
