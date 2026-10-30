# npavez.com

Portafolio de Nicolás Pavez, Ingeniero de Soluciones. Sitio estático hecho con Astro y Tailwind CSS,
publicado desde una Raspberry Pi propia detrás de Nginx Proxy Manager y Cloudflare Tunnel.

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

Cada push a `main` ejecuta `.github/workflows/publicar.yml`: revisa, compila y publica la imagen
ARM64 en `ghcr.io/friedpotatu/npavez-web`. En la Raspberry Pi, `deploy/` contiene el `compose.yaml`
y un temporizador de systemd que descarga la imagen nueva cada 5 minutos.

Instalación en la Pi (una vez):

```sh
mkdir -p ~/stacks/npavez-web ~/.config/systemd/user
cp deploy/compose.yaml deploy/actualizar.sh ~/stacks/npavez-web/
cp deploy/npavez-web.service deploy/npavez-web.timer ~/.config/systemd/user/
sudo loginctl enable-linger "$USER"
systemctl --user daemon-reload
systemctl --user enable --now npavez-web.timer
```
