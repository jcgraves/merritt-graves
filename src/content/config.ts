import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    cover: z.string(),
    hasAudio: z.boolean().default(false),
    amazonLink: z.string().optional(),
    audibleLink: z.string().optional(),
    series: z.string().optional(),
    soundtrackLink: z.string().optional(),
    order: z.number().default(0),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    // Hero
    title: z.string().optional(),
    subtitle: z.string().optional(),
    quote: z.string().optional(),
    quoteAttribution: z.string().optional(),
    primaryButtonText: z.string().optional(),
    primaryButtonLink: z.string().optional(),
    secondaryButtonText: z.string().optional(),
    secondaryButtonLink: z.string().optional(),
    // About
    sectionLabel: z.string().optional(),
    paragraphs: z.array(z.string()).optional(),
    // Contact
    description: z.string().optional(),
    formAction: z.string().optional(),
  }),
});

export const collections = { books, site };
