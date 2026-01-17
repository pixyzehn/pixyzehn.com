import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pixyzehn.com',
  integrations: [sitemap()],
});
