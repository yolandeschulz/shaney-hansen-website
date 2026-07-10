import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Final domain: shaneyhansen.com (registered at Xneelo, July 2026).
// Can be overridden with the SITE_URL environment variable at build time.
const SITE_URL = process.env.SITE_URL || 'https://shaneyhansen.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory',
  },
});
