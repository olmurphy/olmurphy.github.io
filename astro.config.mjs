// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { FEATURES } from './src/config/features.ts';

export default defineConfig({
  site: 'https://olmurphy.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-Hans',
        },
      },
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (pathname === '/404' || pathname === '/zh/404') return false;
        if (!FEATURES.showLabGroupPage && (pathname === '/group' || pathname === '/zh/group')) return false;
        if (!FEATURES.showTeachingPage && (pathname === '/teaching' || pathname === '/zh/teaching')) return false;
        return true;
      },
    }),
  ],
});