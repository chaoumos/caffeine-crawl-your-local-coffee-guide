import { defineCollection, z } from 'astro:content';

// Define a schema for blog posts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('AI Assistant'),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
        dataAiHint: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    layout: z.string().default('../../layouts/BlogPostLayout.astro'),
  }),
});

export const collections = {
  'caffeine-crawl': blogCollection,
};
