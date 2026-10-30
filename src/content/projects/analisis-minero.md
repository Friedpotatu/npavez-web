---
title: Análisis y optimización minera
group: anterior
tipo: mineria
context: Proyecto académico · 2024
summary: Evaluación económica y visualización 2D y 3D de un yacimiento ficticio para entender la planificación minera.
problem: Entender cómo la ciencia de datos puede apoyar decisiones de explotación en un yacimiento.
solution: Un dashboard en Dash con escenarios comparables, motor económico por bloque y visualización 3D con PyVista.
result: Comparación de escenarios de explotación y una implementación experimental del límite económico del rajo.
technologies: [Python, Dash, PyVista, NetworkX, pandas, Matplotlib]
links:
  - label: Repositorio
    href: https://github.com/T-Procesos-Mineros/mining_process
gallery:
  - type: video
    src: /media/projects/analisis-minero/analisis-2d.mp4
    poster: /media/projects/analisis-minero/analisis-2d.jpg
    alt: Recorrido por el análisis 2D de datos mineros
    caption: Análisis bidimensional y visualizaciones estadísticas.
  - type: video
    src: /media/projects/analisis-minero/yacimiento-3d.mp4
    poster: /media/projects/analisis-minero/yacimiento-3d.jpg
    alt: Visualización 3D interactiva del yacimiento
    caption: Yacimiento en 3D con bloques coloreados por valor económico.
  - type: image
    src: ../../assets/projects/analisis-minero/project4-1.png
    alt: Panel de selección de escenarios
    caption: Selección de escenarios y configuración.
  - type: image
    src: ../../assets/projects/analisis-minero/project4-2.png
    alt: Yacimiento renderizado en 3D
    caption: Bloques georreferenciados del yacimiento.
order: 33
---

- **Motor económico** configurable: precios, costos operacionales y recuperación metalúrgica para decidir entre extraer o descartar cada bloque.
- **Límite económico del rajo (UPL)** con corte mínimo en grafos dirigidos usando NetworkX. Fue experimental y no alcanzó precisión completa, pero sirvió para entender la optimización de yacimientos.
- **Análisis estadístico**: histogramas, curvas tonelaje-ley y cortes transversales.
