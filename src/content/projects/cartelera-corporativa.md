---
title: Cartelera digital corporativa
group: ceim
tipo: cartelera
context: CEIM · 2026
summary: Pantallas internas que rotan comunicados y saludan a los cumpleañeros del día con su foto, administradas por el propio equipo.
problem: Los avisos internos y los saludos de cumpleaños se difundían a mano, sin un canal visual común en las sedes ni una forma simple de programar qué se mostraba y hasta cuándo.
solution: Un carrusel a pantalla completa con láminas programables y vigencia por fecha. Los cumpleaños y fotos se leen del ERP y se componen sobre plantillas diseñadas en un editor visual, con acceso administrativo mediante la cuenta corporativa.
result: En producción desde marzo de 2026, y base del diseño de su sucesor, una plataforma de varias carteleras por sede o área, documentada en un HLD y 6 decisiones de arquitectura.
technologies: [Python, Django, SQL Server, Azure App Service, Azure Blob Storage, Microsoft Entra ID, Docker]
order: 10
---

- **Editor visual** para ubicar la foto y el texto de cada cumpleañero sobre la plantilla, con zoom y deshacer.
- **Un solo motor de renderizado** para el editor, la vista previa y la pantalla: lo que se diseña es exactamente lo que se ve.
- **Tolerancia a fallas**: si la base de datos no responde, la pantalla sigue mostrando contenido.
- **Seguridad**: verificación de tokens, límite de solicitudes y validación de los archivos subidos.
- **Diseño del sucesor**: alta de pantallas por emparejamiento, reproducción sin red durante días y una flota prevista de 10 a 50 pantallas.
