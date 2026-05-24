// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dxsxcx.github.io',
  base: '/rancho-el-danubio',
  vite: {
    plugins: [tailwindcss()]
  }
});