import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fechas como "AAAA-MM". Sin fin = cargo actual.
const mes = z.string().regex(/^\d{4}-\d{2}$/, 'Usa el formato AAAA-MM');

const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    location: z.string().optional(),
    // Un cargo o varios (ascensos dentro de la misma empresa), del más reciente al más antiguo.
    roles: z
      .array(
        z.object({
          title: z.string(),
          start: mes,
          end: mes.optional(),
        }),
      )
      .min(1),
    // Lo que se ve siempre: tres puntos como máximo. El cuerpo del .md es el detalle desplegable.
    highlights: z.array(z.string()).max(3),
    technologies: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      group: z.enum(['ceim', 'personal', 'anterior']),
      // Tipo de proyecto: define la etiqueta y el dibujo de la tarjeta (src/lib/tipos.ts).
      tipo: z.enum(['identidad', 'ia', 'gestion', 'agenda', 'biometria', 'documentos', 'infraestructura', 'intranet', 'datos', 'activos', 'mineria', 'cartelera', 'indicadores', 'recursos', 'comercial', 'integracion', 'simulacion']),
      context: z.string(),
      summary: z.string(),
      // Problema → solución → resultado, en una línea cada uno.
      problem: z.string(),
      solution: z.string(),
      result: z.string(),
      technologies: z.array(z.string()),
      links: z
        .array(z.object({ label: z.string(), href: z.url({ protocol: /^https$/ }) }))
        .default([]),
      // Galería opcional: imágenes (optimizadas por Astro) o videos (MP4 en /public con póster).
      gallery: z
        .array(
          z.discriminatedUnion('type', [
            z.object({
              type: z.literal('image'),
              src: image(),
              alt: z.string(),
              caption: z.string().optional(),
            }),
            z.object({
              type: z.literal('video'),
              src: z.string().startsWith('/media/'),
              poster: z.string().startsWith('/media/'),
              alt: z.string(),
              caption: z.string().optional(),
            }),
          ]),
        )
        .default([]),
      order: z.number(),
    }),
});

export const collections = { experience, projects };
