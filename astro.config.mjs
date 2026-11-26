// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // User site repo (antoniokly.github.io) is served from the root, so no `base` is needed.
  site: 'https://antoniokly.github.io',
  // Hide Astro's dev toolbar in local preview (it never ships to the live site).
  devToolbar: { enabled: false },
});
