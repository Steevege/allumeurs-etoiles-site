import { defineCollection, z } from 'astro:content';

// Collection Spectacles (fiches détaillées des spectacles)
const spectaclesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    duration: z.string(), // Ex: "1h30"
    audience: z.string(), // Ex: "Tout public", "À partir de 8 ans"
    image: z.string(), // Chemin image principale
    videoUrl: z.string().url().optional(), // Lien YouTube/Vimeo
    gallery: z.array(z.string()).optional(), // Galerie photos
    order: z.number().default(0), // Ordre affichage
    active: z.boolean().default(true), // Spectacle actif ou archivé
  }),
});

// Collection Événements de tournée (éditable via CMS)
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    spectacle: z.string(),
    date: z.date(),
    ville: z.string(),
    lieu: z.string().optional(),
    heure: z.string().optional(),
  }),
});

// Collection Actualités (éditable CMS, affichage homepage)
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(), // Résumé court pour homepage (max 150 caractères)
    featured: z.boolean().default(false), // Afficher sur homepage ?
    image: z.string().optional(), // Image mise en avant
    category: z.enum(['actualites', 'coulisses', 'temoignages']).default('actualites'),
  }),
});

// Collection Blog (articles archivés Wix + futurs articles)
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Allumeurs d\'Étoiles'),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.enum(['actualites', 'coulisses', 'temoignages']).default('actualites'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  spectacles: spectaclesCollection,
  events: eventsCollection,
  news: newsCollection,
  blog: blogCollection,
};
