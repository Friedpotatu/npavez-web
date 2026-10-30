---
title: Estándares de desarrollo asistido por IA
group: ceim
tipo: ia
context: CEIM · 2026
summary: Un plugin de Claude Code que lleva las reglas del área a cada sesión de cada desarrollador.
problem: Cada persona usaba la IA a su manera, y las reglas del área vivían en documentos que nadie relee.
solution: Un plugin con skills, agentes revisores, hooks de seguridad y plantillas, distribuido como marketplace privado.
result: Todo el equipo trabaja con los mismos estándares, y la revisión de código y seguridad pasa por agentes con veredicto antes de cada commit.
technologies: [Claude Code, Skills, Subagentes, Hooks, Evals, Python, GitHub Actions]
order: 2
---

- **12 skills** que se activan solas según la tarea: estándares de .NET y frontend, seguridad de APIs, estrategia de pruebas, despliegue en Azure, desarrollo guiado por especificación, ADR y documentación.
- **5 agentes especializados**: arquitecto, revisor de código (veredicto aprobado o rechazado), revisor de seguridad con derecho a veto, mantenedor de documentación y redactor de HLD.
- **Hooks con pruebas** que bloquean comandos destructivos, secretos escritos en el código y la edición de migraciones ya aplicadas.
- **Evals por skill**: casos que deben activarla y casos que no, para medir que se dispare cuando corresponde.
- **Integración continua** que valida el plugin y busca secretos en cada cambio.
- **Plantillas** de especificación, plan, tareas, ADR y `CLAUDE.md` / `AGENTS.md`, pensadas para Claude y para otros agentes.
- **Catálogo de librerías aprobadas**, con su radar de adopción, para que los agentes y el equipo elijan dependencias ya evaluadas.
