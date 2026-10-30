---
title: Plataforma de identidad corporativa
group: ceim
tipo: identidad
context: CEIM · 2026
summary: Inicio de sesión único y gestión de accesos para todos los sistemas del área.
problem: Cada sistema tenía su propia tabla de usuarios y su propia forma de dar permisos.
solution: Un proveedor central OAuth 2.0 / OpenID Connect con panel de administración y SDK para .NET y JavaScript.
result: Sistemas nuevos y heredados comparten una sola identidad, con permisos por sistema y auditoría.
technologies: [.NET 10, Clean Architecture, EF Core, SQL Server, Next.js 16, React 19, Playwright]
order: 1
---

- **Inicio de sesión único** para personas y **autenticación servidor a servidor** para integraciones entre sistemas.
- **Permisos por sistema**: cada aplicación solo acepta tokens emitidos para ella, de modo que un sistema comprometido no arrastra a los demás.
- **Panel de administración**: aprobación de accesos y asignación de roles en un solo paso, importación masiva y auditoría de lo importado.
- **Puente para sistemas heredados**: un gestor de sesión con un adaptador por sistema permitió migrar aplicaciones antiguas detrás de un interruptor y con vuelta atrás.
- **SDK** para .NET y JavaScript, y un proyecto de ejemplo para que otros equipos se integren sin ayuda.
- **Calidad**: cerca de 580 pruebas automatizadas entre la API y el panel, integración continua en todos los repositorios y despliegue con slots.
- **Documentación**: HLD *as-built*, manual de integración, guía de implementación, manual de usuario y traspaso a Operaciones.
- **Puente de sesión hacia sistemas heredados** (prototipo), probado detrás de un interruptor en el sistema de certificaciones. También integré el servicio de diplomas con el acceso único.
