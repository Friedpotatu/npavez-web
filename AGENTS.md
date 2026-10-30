# Instrucciones para agentes

Portafolio estático (Astro 7 + Tailwind 4) publicado en Hostinger. Ver README.md para comandos y estructura.

## Reglas

- **Contenido** en `src/site.ts` y `src/content/` (experiencia y proyectos). La presentación y "Sobre mí"
  son textos de Nicolás tal cual: no reescribirlos.
- **CEIM**: los sistemas internos se describen sin nombres de sistemas, clientes, personas, URL, capturas
  ni código. Solo afirmaciones verificables (estado, cifras) con evidencia.
- **CSP estricta** (Astro genera los hashes): sin atributos `style` ni scripts en línea en el HTML. Los
  estilos dinámicos se aplican desde JS con `element.style`.
- **Componentes**: una sección por componente en `src/components/`, con su marcado, script y estilos.
  Los tokens de color y los estilos compartidos viven en `src/styles/global.css`.
- **Sin residuos**: al cambiar algo, borrar lo que quede sin uso (componentes, estilos, íconos, datos).
- **Movimiento**: solo `opacity` y `transform`; respetar `prefers-reduced-motion`.

## Antes de terminar

`npm run check` y `npm run build` sin errores, advertencias ni sugerencias. Probar en el navegador en
tema claro, oscuro y ancho de celular.
