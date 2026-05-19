import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared schema for both blog posts and drafts
const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	isVisible: z.boolean().default(true),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: postSchema,
});

const drafts = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/drafts' }),
	schema: postSchema,
});

export const collections = { blog, drafts };
