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
      theme: 'ayu-dark',
      wrap: false,
      transformers: [transformerNotationDiff()]
    }
  },
});
