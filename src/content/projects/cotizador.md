---
title: Modernización del cotizador comercial
group: ceim
tipo: comercial
context: CEIM · 2026 · mejoras
summary: Evolución funcional y técnica del sistema con que el área comercial arma, envía y cierra cotizaciones de cursos y servicios.
problem: El cotizador funcionaba, pero le faltaban requisitos del negocio (aceptación parcial, adjuntos, vencimiento editable, traspaso al ERP) y arrastraba deuda técnica, con vistas duplicadas, lógica en las vistas y casi sin pruebas, que hacía riesgoso cada cambio.
solution: Implementé funcionalidades por sprint, entre ellas la aceptación parcial, el traspaso automático de lo aceptado al ERP y una hoja de costos con catálogo oficial y valorización en UF. En paralelo hice una auditoría técnica y un refactor por fases.
result: En producción. Las advertencias de compilación bajaron de 132 a 0, las pruebas pasaron de 8 a 61 y 10 vistas de propuesta quedaron en 1. La nueva hoja de costos se validó sobre una copia de producción sin perder cotizaciones.
technologies: [ASP.NET Core 9 MVC, Razor, EF Core, SQL Server, xUnit, Playwright, Serilog]
order: 6
---

- **Traspaso al ERP** de los cursos, programas y actividades aceptados, creando el proyecto y la orden de venta.
- **Hoja de costos** con catálogo oficial, UF y modalidad, editable solo en los estados que corresponde y validada en el servidor.
- **Refactor por fases** con patrón Strategy para las propuestas y migración a EF Core, sin detener la operación.
- **Seguridad y accesibilidad**: eliminación de todo el JavaScript en línea (CSP con nonces) y mejoras de accesibilidad.
- **Despliegue** con migraciones automáticas y simulación de vuelta atrás.
