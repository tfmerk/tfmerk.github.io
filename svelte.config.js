import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static"; // for github pages
import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    }
  },
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    vitePreprocess({}),
    mdsvex(mdsvexConfig)
  ],
};

export default config;
