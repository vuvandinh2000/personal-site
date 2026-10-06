import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Posts live in src/content/posts/<lang>/<slug>.mdx
 * The same <slug> in /en and /vi = translations of each other.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Series id, e.g. "mentoring". Leave empty for standalone posts. */
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Emoji-free short label shown on cards, e.g. "Session 1" */
    kicker: z.string().optional(),
  }),
});

export const collections = { posts };
