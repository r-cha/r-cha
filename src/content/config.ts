import { defineCollection, z } from 'astro:content';

// Shared schema for both blog posts and drafts
const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
});

const blog = defineCollection({
	type: 'content',
	schema: postSchema,
});

const drafts = defineCollection({
	type: 'content',
	schema: postSchema,
});

export const collections = { blog, drafts };
