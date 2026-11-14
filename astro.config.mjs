// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { FEATURES } from './src/config/features.ts';

export default defineConfig({
  site: 'https://olmurphy.github.io',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (pathname === '/404') return false;
        if (!FEATURES.showLabGroupPage && pathname === '/group') return false;
        if (!FEATURES.showTeachingPage && pathname === '/teaching') return false;
        return true;
      },
    }),
  ],
});