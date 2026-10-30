---
title: Plataforma de identidad corporativa
group: ceim
tipo: identidad
context: CEIM · 2026
summary: Inicio de sesión único y gestión de accesos para los sistemas del área.
problem: Cada sistema tenía su propia gestión de usuarios y su propia forma de dar permisos.
solution: Un proveedor central de identidad con estándares abiertos (OAuth 2.0 y OpenID Connect) y un panel para administrar accesos.
result: Los sistemas nuevos y los existentes comparten una sola identidad, con permisos por sistema y trazabilidad.
technologies: [.NET 10, Clean Architecture, EF Core, SQL Server, Next.js 16, React 19, Playwright]
order: 1
---

- **Inicio de sesión único** para las personas y autenticación entre sistemas para las integraciones.
- **Permisos por sistema**, administrados desde un solo lugar.
- **Migración gradual de sistemas existentes**, sin cortar el servicio.
- **Documentación y traspaso a Operaciones** para que el servicio siga creciendo sin depender de mí.
