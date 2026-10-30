---
title: API de gobierno de datos para reportes
group: ceim
tipo: integracion
context: CEIM · 2026 · en equipo
summary: Un punto único y controlado de acceso a los datos de negocio para los reportes de cada área, en vez de repartir credenciales de base de datos.
problem: Para darle datos a un área había que entregarle credenciales de la base de datos, sin control de quién veía qué. Los reportes no partían de una fuente común y los informes de distintas áreas no cuadraban.
solution: Una API con inicio de sesión corporativo y llaves de acceso, con permisos y restricciones por usuario y por dimensión administrados desde un panel. Las áreas consumen endpoints aprobados desde sus herramientas de reportes.
result: En producción. Otros desarrolladores del área ya agregan reportes nuevos siguiendo la guía que dejé para sumar endpoints.
technologies: [.NET 10, ASP.NET Core, Razor Pages, SQL Server, Microsoft Entra ID, OpenAPI, Power BI]
order: 7
---

- **Sin contraseñas compartidas**: los reportes se conectan con la cuenta organizacional de cada persona.
- **Permisos finos**: un mismo modelo para personas y aplicaciones, con permiso por endpoint y restricción por dimensión de datos.
- **Modelo de datos consolidado**: la relación programa, grupo y proyecto, que el ERP no modelaba y bloqueaba los reportes financieros por programa.
- **Consultas optimizadas**, por ejemplo reemplazando funciones por JOIN y CTE en las consultas más pesadas.
- **Documentación** de arquitectura, modelo de datos y guía para agregar endpoints.
