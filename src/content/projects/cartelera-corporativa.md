---
title: Cartelera digital corporativa
group: ceim
tipo: cartelera
context: CEIM · 2026
summary: Pantallas internas que rotan comunicados y saludan a los cumpleañeros del día, administradas por el propio equipo.
problem: Los avisos internos y los saludos se difundían a mano, sin un canal visual común en las sedes.
solution: Un carrusel a pantalla completa con contenido programable por fecha, conectado al ERP para los cumpleaños y con un editor visual para las plantillas.
result: En producción, y punto de partida del diseño de una plataforma de carteleras por sede y área.
technologies: [Python, Django, SQL Server, Azure App Service, Azure Blob Storage, Microsoft Entra ID, Docker]
order: 10
---

- **Editor visual** para diseñar las láminas sin tocar código.
- **Lo que se diseña es lo que se ve**: el mismo motor dibuja el editor, la vista previa y la pantalla.
- **Tolerancia a fallas**: la pantalla sigue mostrando contenido aunque algo falle por detrás.
- **Diseño del sucesor**, pensado para varias pantallas por sede.
