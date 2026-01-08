import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()),
		link: z.string().optional(),
		image: z.string().optional(),
		gallery: z.array(z.string()).optional(),
	}),
});

// Klucz w tym obiekcie MUSI być taki sam jak nazwa folderu w src/content/
export const collections = {
	'projects': projectsCollection,
};