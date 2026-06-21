import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daasadr.github.io',
  base: '/vinarija-vrh',
  output: 'static',
  integrations: [tailwind()],
});
