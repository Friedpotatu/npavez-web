#!/bin/sh
# Descarga la imagen más reciente y, solo si cambió, recrea el contenedor. Lo ejecuta el
# temporizador de systemd (npavez-web.timer) cada 5 minutos.
set -eu
cd "$(dirname "$0")"
docker compose pull --quiet
docker compose up -d --remove-orphans
docker image prune -f >/dev/null
