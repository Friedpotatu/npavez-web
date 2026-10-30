---
title: Motor de agendamiento transversal
group: ceim
tipo: agenda
context: CEIM · 2026
summary: Servicios, disponibilidad, asignación y notificaciones en un motor reutilizable por distintas áreas.
problem: Cada área agendaba a su manera, y un sistema nuevo por cada caso de uso no escalaba.
solution: Un motor genérico con reglas de negocio configurables por nivel, cuyo primer caso de uso fue la certificación de equipos.
result: Nuevas áreas se incorporan configurando reglas, sin desarrollar un sistema nuevo.
technologies: [.NET 10, Clean Architecture, SQL Server, EF Core, Dapper, Next.js 16, Azure]
order: 8
---

- **Desarrollo guiado por especificación**: más de 20 funcionalidades llevadas de especificación a implementación con el mismo flujo (especificar, aclarar, planificar, desglosar e implementar).
- **Arquitectura documentada**: HLD por capítulos y más de 30 ADR, incluida la evaluación de microservicios frente a un monolito modular.
- **Calidad**: cerca de 680 pruebas automatizadas, e integración continua que compila con advertencias como errores y audita las dependencias de .NET y npm.
