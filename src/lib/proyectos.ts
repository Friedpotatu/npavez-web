import { getCollection, render } from 'astro:content';

export const grupos = [
  { key: 'ceim', title: 'En CEIM' },
  { key: 'personal', title: 'Personales' },
  { key: 'anterior', title: 'Anteriores' },
] as const;

/** "CEIM · 2026 · en equipo" → año aparte y el resto como texto corrido. */
export function partes(context: string) {
  const trozos = context.split('·').map((t) => t.trim());
  return {
    year: trozos.find((t) => /^\d{4}$/.test(t)) ?? '',
    origen: trozos.filter((t) => !/^\d{4}$/.test(t)).join(', '),
  };
}

/** Proyectos ordenados, con su cuerpo Markdown ya renderizable. */
export async function proyectos() {
  const all = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  return Promise.all(all.map(async (p) => ({ p, Content: (await render(p)).Content, ...partes(p.data.context) })));
}

/** Experiencia ordenada, con su cuerpo Markdown ya renderizable. */
export async function experiencia() {
  const items = (await getCollection('experience')).sort((a, b) => a.data.order - b.data.order);
  return Promise.all(items.map(async (item) => ({ item, Content: (await render(item)).Content })));
}
