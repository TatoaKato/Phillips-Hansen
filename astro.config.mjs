import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set the output directory for the static build
  output: 'public',

  // Disable server-side rendering
  ssr: false,

  // Disable Vercel adapter
  adapter: null
});