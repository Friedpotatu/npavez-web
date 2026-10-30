# Etapa 1: compila el sitio estático en la arquitectura de quien construye (rápido, sin emulación).
FROM --platform=$BUILDPLATFORM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: solo el HTML resultante, servido por Nginx sin privilegios. Esta etapa no ejecuta nada,
# así que construirla para ARM64 (la Raspberry Pi) desde x86 no requiere emular.
FROM nginxinc/nginx-unprivileged:1.30-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
