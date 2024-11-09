import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import { transformerNotationDiff } from '@shikijs/transformers';

// https://astro.build/config
export default defineConfig({
  site: 'https://r-cha.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'ayu-dark',
      wrap: false,
      transformers: [transformerNotationDiff()]
    }
  },
});
