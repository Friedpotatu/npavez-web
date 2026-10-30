---
title: Libro de asistencia digital
group: ceim
tipo: biometria
context: CEIM · 2026 · en equipo
summary: La asistencia a clases pasa de un libro en papel transcrito a mano a un tótem con huella en la sala.
problem: La asistencia se anotaba en papel y después se transcribía al sistema académico. No quedaba la hora real de la clase ni de cada alumno, ni quién corrigió qué, y en algunos cursos la misma asistencia se registraba en varios sistemas.
solution: Un tótem con lector de huellas en la sala y un panel web. El instructor abre la clase, los alumnos marcan entrada y salida, y el sistema calcula y registra la asistencia oficial sin transcripción.
result: Construido y listo para un piloto. Elimina la transcripción, muestra la asistencia en tiempo real y deja registro de cada corrección.
technologies: [Next.js, TypeScript, Python, FastAPI, Java, Docker, Ansible, Raspberry Pi]
order: 9
---

- **Reglas del proceso real**: quién puede abrir la clase, cuándo se marca y cuánto tiempo cuenta como asistencia.
- **El registro oficial no cambia**: el sistema se integra con el académico existente en vez de reemplazarlo.
- **De prototipo a solución**: partió de una prueba de concepto que se auditó, se corrigió y se llevó a un estándar productivo.
- **Datos sensibles** tratados con consentimiento y acceso controlado.
