---
title: Programación de recursos de capacitación
group: ceim
tipo: recursos
context: CEIM · 2026 · mejoras y reescritura
summary: Las jefaturas planifican cada curso y le asignan instructor, sala y equipos, con detección de conflictos.
problem: Cada jefatura planificaba en su propia planilla, sin una fuente común. Un instructor o una sala podían quedar asignados dos veces, y el conflicto aparecía el día de la clase.
solution: Primero mejoré el sistema existente y después lo reescribí sobre una base moderna, con planificación en una sola vista, acceso único y órdenes de trabajo generadas por el sistema.
result: En producción, como la fuente común de la planificación, con información para seguir su adopción por área.
technologies: [.NET 10, ASP.NET Core MVC, Dapper, EF Core, SQL Server, iText, FullCalendar, OpenID Connect, Azure App Service]
order: 4
---

- **Una sola vista** para planificar cursos y recursos.
- **Detección de conflictos** de instructores y recursos antes de que ocurran.
- **Órdenes de trabajo** generadas por el sistema, en vez de conciliarlas a mano.
- **Despliegues sin corte** y documentación para usuarios y Operaciones.
