// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The deployed origin. Everything absolute depends on it: canonical,
  // og:url and og:image are emitted only when it is present, because a
  // scraper ignores a relative og:image.
  site: "https://54-lyzr-sovereign-ai-redesign.vercel.app",
});
