// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://squadtacs.com',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize: (item) => {
        // Homepage - highest priority
        if (item.url === 'https://squadtacs.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // Main sections
        if (item.url.match(/\/(guides|factions|classes|maps|wiki|vehicles|weapons)\/?$/)) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Individual guides - important content
        if (item.url.includes('/guides/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Individual pages (factions, classes, maps)
        if (item.url.match(/\/(factions|classes|maps)\/.+/)) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // Legal pages - low priority
        if (item.url.match(/\/(imprint|privacy|credits)/)) {
          return { ...item, priority: 0.3, changefreq: 'yearly' };
        }
        // Default
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      },
    }),
  ],
});