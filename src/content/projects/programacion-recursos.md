---
title: Programación de recursos de capacitación
group: ceim
tipo: recursos
context: CEIM · 2026 · mejoras y reescritura
summary: Las jefaturas planifican cada curso y le asignan instructor, sala, módulo, taller y equipo, con detección de choques y orden de trabajo hacia el ERP.
problem: Cada jefatura planificaba en su propia planilla, sin una fuente común ni registro de quién asignó qué. Un instructor o una sala podían quedar comprometidos dos veces y el choque aparecía el día de la clase, y las órdenes de trabajo se conciliaban a mano porque el ERP no modela los recursos físicos.
solution: Primero mejoré el sistema existente (calendario semanal, detección de inconsistencias con el ERP, informe de adopción e inicio de sesión centralizado). Después lo reescribí en .NET 10 con acceso único, auditoría por usuario y un servicio que genera la orden de trabajo en PDF con código QR para validarla.
result: En producción, con del orden de 17.000 registros de planificación y un informe que mide semana a semana la cobertura de planificación por área.
technologies: [.NET 10, ASP.NET Core MVC, Dapper, EF Core, SQL Server, iText, FullCalendar, OpenID Connect, Azure App Service]
order: 4
---

- **Una sola grilla** para cursos con y sin proyecto registrado en el ERP.
- **Detección de choques** de instructor y recursos, y de diferencias con el catálogo maestro.
- **Orden de trabajo en PDF con QR**, generada en el servidor, para validar la asignación en terreno.
- **Despliegue sin corte** mediante intercambio de slots, en lugar de copiar archivos al servidor.
- **Calidad**: 62 pruebas automatizadas, documentación de arquitectura y manual de usuario.
