---
title: Gestión de cartera de proyectos TI
group: ceim
tipo: gestion
context: CEIM · 2026
summary: La cartera del área pasó de un Excel con macros, consolidado a mano, a un sistema donde el avance sale del trabajo y no de un reporte.
problem: La cartera vivía en un libro Excel que era a la vez registro y tablero ejecutivo, más carpetas y correos de estado. El avance se estimaba y se tecleaba, no había línea base ni registro de quién cambió qué, y los reportes a Dirección se armaban a mano.
solution: Modelé el marco de gestión del área (fases, hitos, riesgos, línea base) en una aplicación web con permisos por rol y auditoría de cada cambio, y migré la cartera activa desde el Excel.
result: En producción y traspasada a Operaciones. Dirección decide sobre indicadores calculados desde el dato real, la Jefatura de Proyectos revisa en vez de consolidar y cada jefe de proyecto trabaja en un solo instrumento en vez de tres.
technologies: [.NET 10, Dapper, SQL Server, Next.js, Tailwind CSS, GitHub Actions, Stryker, Azure]
order: 3
---

- **Entender antes de construir**: levanté el proceso real con la Jefatura de Proyectos y la Dirección TI (quién registra, quién consolida, quién decide) y lo modelé en BPMN y casos de uso antes de escribir código.
- **El marco del área dentro del sistema**: ocho fases secuenciales y dos transversales, con plan contra real, avance ponderado, líneas base congeladas y curva S, para que la desviación sea una medida y no una impresión.
- **Trazabilidad**: cada cambio queda auditado campo a campo con su autor, y la edición concurrente se resuelve sin pisar el trabajo de otro.
- **Lista para crecer**: datos aislados por área, para que otras áreas de la organización puedan usarla cuando lo pidan sin ver la cartera ajena.
- **Decisiones registradas**: más de 40 ADR. Por ejemplo, se probó una función en tiempo real y se retiró de forma documentada cuando no se justificaba con la infraestructura disponible.
- **Calidad**: pruebas automatizadas en backend y frontend, pruebas de mutación con Stryker y despliegues con aprobación explícita.
