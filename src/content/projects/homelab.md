---
title: Homelab con Raspberry Pi
group: personal
tipo: infraestructura
context: Proyecto personal · 2026
summary: Un servidor en casa con contenedores, acceso remoto seguro y publicación sin abrir puertos.
problem: Quería un laboratorio propio para levantar servicios y aplicaciones sin exponer mi red de casa.
solution: Una Raspberry Pi 5 con Docker, publicación a través de un túnel con autenticación delante de cada panel, y una VPN propia para emergencias.
result: Servicios accesibles desde cualquier lugar, sin puertos abiertos para la web y con actualizaciones de seguridad automáticas.
technologies: [Raspberry Pi 5, Linux, Docker, Nginx, Cloudflare Tunnel, Cloudflare Access, WireGuard]
order: 20
---

- **Publicación sin abrir puertos**: un túnel saliente hacia Cloudflare publica los servicios, y un proxy inverso reparte el tráfico entre contenedores.
- **Zero Trust delante de cada panel**: los paneles de administración exigen identidad y segundo factor antes de llegar al servidor.
- **VPN WireGuard** gestionada a mano, independiente de Docker, como acceso de emergencia.
- **DNS dinámico** automatizado para una IP pública que cambia.
- **Actualizaciones de seguridad automáticas** con reinicio programado, y contenedores con privilegios mínimos.
- **Documentado** como cualquier sistema de producción: inventario, puertos, decisiones y procedimientos.
