---
title: Cartelera de indicadores de la mesa de ayuda
group: ceim
tipo: indicadores
context: CEIM · 2026
summary: Una pantalla encendida todo el día en el Área TI que muestra el desempeño de la mesa de ayuda sin que nadie tenga que pedir un reporte.
problem: Para saber cómo iba el área había que entrar a la herramienta de mesa de ayuda, filtrar y exportar a Excel. Era trabajo manual que nadie repetía cada semana, y la información quedaba encerrada en la herramienta.
solution: Una cartelera con dashboards de cumplimiento de plazos, volumen de entrada y salida, backlog, desempeño por agente y calidad del dato, más láminas editoriales. Un proceso en segundo plano mantiene una copia local de la mesa de ayuda para que los reportes no dependan del servicio externo.
result: En producción. Un reporte pasó de tardar entre 3 y 15 segundos a responder en menos de 300 milisegundos, y la pantalla sigue funcionando aunque el servicio externo esté caído.
technologies: [.NET 10, ASP.NET Core, EF Core, SQL Server, React 19, TypeScript, Vite, Tailwind CSS, TanStack Query, PWA, Azure App Service]
order: 5
---

- **Métricas que se explican solas**: cada indicador declara en pantalla qué estados cuenta y qué umbral aplica, y los totales cuadran exacto con sus grupos.
- **Sincronización coordinada** entre las instancias del servicio para que corra una sola vez, con control de cuota del servicio externo.
- **Funciona sin conexión** (PWA): si se corta la red, el carrusel sigue rotando y se actualiza al cerrar cada ciclo.
- **Explorador de auditoría** para revisar ticket por ticket lo que los reportes muestran en agregado.
- **Calidad**: 75 pruebas automatizadas y documentación de arquitectura verificada contra producción.
