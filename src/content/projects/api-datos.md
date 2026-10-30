---
title: API de gobierno de datos para reportes
group: ceim
tipo: integracion
context: CEIM · 2026 · en equipo
summary: Un punto único y controlado de acceso a los datos de negocio para los reportes de cada área.
problem: Para darle datos a un área había que entregar acceso directo a la base de datos, sin control de quién veía qué, y los reportes de distintas áreas no cuadraban entre sí.
solution: Una API con inicio de sesión corporativo y permisos administrables, desde la que las áreas consumen datos aprobados en sus herramientas de reportes.
result: En producción. Otros desarrolladores del área ya la amplían con nuevos reportes siguiendo la guía que dejé.
technologies: [.NET 10, ASP.NET Core, Razor Pages, SQL Server, Microsoft Entra ID, OpenAPI, Power BI]
order: 7
---

- **Sin contraseñas compartidas**: cada persona accede con su cuenta corporativa.
- **Permisos administrables** por usuario y por conjunto de datos.
- **Una fuente común** para que los reportes de las distintas áreas coincidan.
- **Documentación** para que el equipo agregue nuevos datos de forma autónoma.
