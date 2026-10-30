# npavez.com

Portafolio de Nicolás Pavez, Ingeniero de Soluciones. Sitio estático hecho con Astro y Tailwind CSS,
publicado en Hostinger detrás de Cloudflare.

## Comandos

| Comando             | Qué hace                                                    |
| :------------------ | :---------------------------------------------------------- |
| `npm install`       | Instala las dependencias                                    |
| `npm run dev`       | Servidor de desarrollo en `http://localhost:4321`           |
| `npm run check`     | Revisión de tipos y plantillas (`astro check`)              |
| `npm run build`     | Genera el sitio en `dist/`                                  |
| `npm run preview`   | Sirve `dist/` para revisarlo, con la CSP de producción      |
| `npm run imagenes`  | Regenera `public/og.png` y el ícono de iOS                  |

## Contenido

- `src/site.ts`: nombre, cargo, presentación, "Sobre mí", método y herramientas.
- `src/content/experience/*.md`: un archivo por empresa; el cuerpo es el detalle de la ficha.
- `src/content/projects/*.md`: un archivo por proyecto. El campo `tipo` define la etiqueta y el
  dibujo de la tarjeta (`src/lib/tipos.ts`); `gallery` y `links` son opcionales.

## Estructura

- `src/pages/index.astro` compone la página con un componente por sección (`src/components/`).
- `src/styles/global.css` tiene los tokens de color (claro y oscuro) y los estilos compartidos.
- Cada componente lleva su propio marcado, script y estilos.

## Publicación

Cada push a `main` ejecuta `.github/workflows/publicar.yml`: revisa, compila y sube `dist/` a Hostinger
por SSH con `rsync --delete`. `public/.htaccess` define las URL limpias, el 404, las cabeceras de
seguridad y la caché.

Secretos del repositorio (Settings → Secrets and variables → Actions):

| Secreto | Valor |
| :------ | :---- |
| `HOSTINGER_HOST` | IP o host SSH del plan |
| `HOSTINGER_PUERTO` | Puerto SSH (en Hostinger suele ser 65002) |
| `HOSTINGER_USUARIO` | Usuario SSH (`u…`) |
| `HOSTINGER_RUTA` | Carpeta del sitio, por ejemplo `domains/npavez.com/public_html` |
| `HOSTINGER_CLAVE_SSH` | Clave privada de despliegue (la pública va en hPanel → Acceso SSH) |
| `HOSTINGER_KNOWN_HOSTS` | Salida de `ssh-keyscan -p <puerto> <host>` |
