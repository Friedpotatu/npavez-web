---
title: Modernización del cotizador comercial
group: ceim
tipo: comercial
context: CEIM · 2026 · mejoras
summary: Evolución del sistema con que el área comercial arma, envía y cierra cotizaciones.
problem: El cotizador funcionaba, pero le faltaban requisitos del negocio y arrastraba deuda técnica que hacía riesgoso cada cambio.
solution: Nuevas funcionalidades por etapas, como la aceptación parcial y el traspaso de lo aceptado al ERP, junto con una revisión técnica y un refactor gradual.
result: En producción, con un proceso comercial más completo y una base de código más simple, más probada y más segura.
technologies: [ASP.NET Core 9 MVC, Razor, EF Core, SQL Server, xUnit, Playwright, Serilog]
order: 6
---

- **Integración con el ERP**: lo que el cliente acepta pasa al sistema de gestión sin digitarlo de nuevo.
- **Hoja de costos** alineada con el catálogo oficial.
- **Refactor sin detener la operación**, con pruebas automatizadas donde no las había.
- **Mejoras de seguridad y accesibilidad** en la interfaz.
