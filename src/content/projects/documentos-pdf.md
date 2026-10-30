---
title: Conversor de documentación Markdown a PDF
group: ceim
tipo: documentos
context: CEIM · 2026
summary: Documentos formales (arquitectura, manuales, presentaciones) generados desde Markdown, por consola, web o API.
problem: Los documentos se armaban a mano en Word, cada uno con un formato distinto y con índices que había que actualizar uno por uno.
solution: Un motor que convierte Markdown en PDF con portada, índices, figuras numeradas y diagramas, con vista previa en vivo.
result: Es el estándar de documentación del área, y los agentes de IA lo usan para entregar documentación lista.
technologies: [Node.js 24, Puppeteer, markdown-it, Mermaid, pdf-lib, Docker]
order: 11
---

- **Un solo núcleo** para consola, web y API, con el mismo resultado en las tres.
- **Vista previa real** del documento mientras se escribe.
- **Seguro por diseño**: el contenido se procesa aislado y saneado.
- **Diagramas** que se ajustan a la hoja y no rompen el documento si tienen errores.
