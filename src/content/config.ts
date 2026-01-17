import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      date: z.union([z.string(), z.date()]),
      tags: z.union([z.string(), z.array(z.string())]).optional()
    })
    .passthrough()
});

export const collections = { posts };
