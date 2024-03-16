// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set the output directory for the static build
  output: 'dist',

  // Configure the adapter for static deployment (Netlify)
  adapter: {
    name: '@astrojs/netlify'
  }
});
