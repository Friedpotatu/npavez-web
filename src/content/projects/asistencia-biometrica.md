---
title: Libro de asistencia digital
group: ceim
tipo: biometria
context: CEIM · 2026 · en equipo
summary: La asistencia a clases pasa de un libro en papel transcrito a mano a un tótem con huella en la sala, con trazabilidad real de clases y alumnos.
problem: La asistencia se anotaba en un libro de clases en papel y el instructor la transcribía después al sistema académico, que solo guarda presente o ausente por bloque. No quedaba la hora real de la clase ni de cada alumno, ni quién corrigió qué, y en los cursos SENCE la misma asistencia se registraba tres veces.
solution: Un tótem con lector de huellas en la sala y un panel web. El instructor abre la clase con su huella, los alumnos marcan entrada y salida, y al cerrar el sistema calcula la asistencia por bloque y la escribe en el registro oficial, sin transcripción.
result: Construido y listo para un piloto en una sala. El instructor deja de transcribir, la asistencia se ve en tiempo real y toda corrección exige motivo y deja registro de quién la hizo.
technologies: [Next.js, TypeScript, Python, FastAPI, Java, Docker, Ansible, Raspberry Pi]
order: 9
---

- **Del proceso a las reglas**: el sistema respeta cómo funciona la clase. Solo el instructor asignado puede abrirla y dentro de su horario, la marca valida la inscripción, la asistencia exige una permanencia mínima por bloque y una clase olvidada abierta se cierra sola.
- **El registro oficial no se toca**: el sistema académico sigue siendo la fuente oficial y no se modificó su estructura; el nuevo sistema solo lee cursos e inscripciones y escribe la asistencia.
- **De prueba de concepto a solución**: partió de un prototipo que ya marcaba con huella y QR. Se auditó lo construido, se corrigieron reglas y seguridad, se agregó inicio de sesión corporativo al panel y se rehízo la interfaz.
- **Autor principal** de la plataforma, en un equipo de tres desarrolladores: web, servicio de lectura de huellas, identificador biométrico y base de datos, todo en contenedores, con el tótem preparado de forma reproducible con Ansible.
- **Datos sensibles**: la huella se trata como dato biométrico, con consentimiento firmado y acceso administrado por permisos.
