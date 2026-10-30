---
title: Cartelera de indicadores de la mesa de ayuda
group: ceim
tipo: indicadores
context: CEIM · 2026
summary: Una pantalla en el área de TI que muestra el desempeño de la mesa de ayuda sin que nadie tenga que pedir un reporte.
problem: Para saber cómo iba el área había que entrar a la herramienta de mesa de ayuda, filtrar y exportar a Excel, un trabajo manual que no se hacía con regularidad.
solution: Una cartelera con indicadores de cumplimiento, volumen, pendientes y calidad del dato, alimentada por una copia sincronizada de la mesa de ayuda.
result: En producción. Los indicadores se ven al instante y la pantalla sigue funcionando aunque el servicio externo falle.
technologies: [.NET 10, ASP.NET Core, EF Core, SQL Server, React 19, TypeScript, Vite, Tailwind CSS, TanStack Query, PWA, Azure App Service]
order: 5
---

- **Indicadores transparentes**: cada métrica muestra qué cuenta y con qué criterio.
- **Sincronización en segundo plano**, para no depender del servicio externo en cada consulta.
- **Funciona sin conexión**: si se corta la red, la pantalla sigue mostrando contenido.
- **Explorador de detalle** para revisar lo que los indicadores muestran en agregado.
