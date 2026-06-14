import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affiliate-hub.vercel.app',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
