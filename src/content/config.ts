import { defineCollection, z } from 'astro:content';

const wines = defineCollection({
  type: 'data',
  schema: z.object({
    name:           z.string(),
    type:           z.enum(['bela', 'rdeca', 'rose', 'peneca', 'sladka']),
    grape:          z.string(),
    vintage:        z.number(),
    description_sl: z.string(),
    description_en: z.string(),
    food_sl:        z.string(),
    food_en:        z.string(),
    featured:       z.boolean().default(false),
  }),
});

export const collections = { wines };
