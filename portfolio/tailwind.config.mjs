/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // DODAJ TĘ LINIĘ
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Teraz każda klasa 'font-sans' (domyślna) będzie używać Geista
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}