import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// SITE_URL: replace with the final domain once confirmed (e.g. https://www.shaneyhansen.co.za).
// It can also be set as an environment variable at build time.
const SITE_URL = process.env.SITE_URL || 'https://REPLACE-WITH-FINAL-DOMAIN.co.za';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory',
  },
});
