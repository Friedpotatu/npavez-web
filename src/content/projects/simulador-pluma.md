---
title: Simulador 3D de camión pluma
group: personal
tipo: simulacion
context: Proyecto personal · 2026
summary: Un camión pluma con física real, operable en el navegador, con cápsulas de entrenamiento que guían la maniobra paso a paso.
problem: Practicar la operación de una grúa sobre camión requiere la máquina, un lugar seguro y alguien que guíe. Aprender la secuencia de la maniobra antes, sin riesgo y sin instalar nada, no tenía herramienta.
solution: Un simulador web con el camión y una grúa articulada de 12 t·m modelados contra sus planos acotados, física real, seis cámaras y una cápsula de entrenamiento que lleva la puesta en estación en siete pasos.
result: Prototipo funcional en el navegador, sin recursos externos y con 0 vulnerabilidades reportadas en sus dependencias.
technologies: [Three.js, Rapier, WebAssembly, TypeScript, Vite, GLSL, Web Audio]
order: 21
---

- **Física real**: la pluma solo opera por debajo de 3 km/h o con los estabilizadores desplegados, y si se excede el momento de carga (peso por radio de trabajo) el camión vuelca.
- **Cada paso es una frase y una condición** leída del estado de la máquina: si el alumno cumple el objetivo de otra forma, el paso se da por hecho, porque en un entrenamiento importa el resultado.
- **Sin un solo archivo externo**: camión, grúa, conos y operadores son primitivas; las texturas se dibujan en un canvas y el cielo es un shader. El sonido del motor se sintetiza con Web Audio.
- **Accesibilidad**: paletas de alto contraste y para daltonismo, reducir movimiento y soporte de gamepad.
- **Simulación determinista**: limitar los FPS no altera la física; el camión recorre la misma distancia en el mismo tiempo a 30 o a 60 fps.
