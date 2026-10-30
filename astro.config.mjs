// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Necesario para URLs canónicas, Open Graph y el sitemap.
  site: 'https://npavez.com',
  trailingSlash: 'never',
  // CSS incrustado en el HTML: la página es una sola y así no hay hojas que bloqueen el primer pintado.
  build: { format: 'file', inlineStylesheets: 'always' },

  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],

  // Tipografía autoalojada: Astro la descarga en el build, la sirve desde el mismo dominio,
  // la precarga y genera un respaldo con métricas ajustadas para evitar saltos de texto (CLS).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-heading',
      // Rango = un solo archivo variable para todos los pesos, en vez de uno por peso.
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    // Monoespaciada para cotas, rótulos y etiquetas técnicas del plano.
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-code',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  // Content Security Policy: Astro calcula el hash de cada script y estilo que genera.
  // frame-ancestors no se puede declarar en <meta>: va como cabecera en public/.htaccess.
  // Cloudflare Web Analytics inyecta su beacon (static.cloudflareinsights.com) y reporta a cloudflareinsights.com.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "media-src 'self'",
        "font-src 'self'",
        "connect-src 'self' https://cloudflareinsights.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
    },
  },

  // El contenido no tiene bloques de código; Shiki usa estilos en línea que la CSP bloquearía.
  markdown: { syntaxHighlight: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
