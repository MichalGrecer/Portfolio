import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	// DODAJ TĘ LINIĘ:
	site: 'https://michal-portfolio.pl', 
	integrations: [tailwind()],
});