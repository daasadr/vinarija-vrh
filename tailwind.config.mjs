/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'wine':       '#5c1a1a',
        'wine-mid':   '#8b2e2e',
        'wine-light': '#c46262',
        'stone':      '#f5f0e8',
        'parch':      '#ede5d5',
        'oak':        '#8b6a3e',
        'vine':       '#4a5e2d',
        'gold':       '#b8960c',
        'ink':        '#1a1208',
        'muted':      '#7a6248',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'serif':   ['"Libre Baskerville"', 'Georgia', 'serif'],
        'sans':    ['Lato', 'sans-serif'],
        'label':   ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
