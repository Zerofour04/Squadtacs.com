import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['basics', 'advanced', 'tactics']),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const factions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/factions' }),
  schema: z.object({
    title: z.string(),
    shortName: z.string(),
    description: z.string(),
    side: z.enum(['BLUFOR', 'REDFOR', 'INDEPENDENT', 'PAC']),
    flag: z.string().optional(),
    order: z.number().optional(),
  }),
});

const classes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/classes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().optional(),
  }),
});

const weapons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weapons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['assault-rifles', 'lmgs', 'dmrs', 'snipers', 'launchers', 'equipment']),
    order: z.number().optional(),
  }),
});

const vehicles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vehicles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['transport', 'apc', 'ifv', 'tank', 'helicopter']),
    order: z.number().optional(),
  }),
});

const maps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/maps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    size: z.enum(['small', 'medium', 'large']).optional(),
    layers: z.number().optional(),
  }),
});

export const collections = { guides, factions, classes, weapons, vehicles, maps };
