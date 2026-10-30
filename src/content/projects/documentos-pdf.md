---
title: Conversor de documentación Markdown a PDF
group: ceim
tipo: documentos
context: CEIM · 2026
summary: Documentos formales (arquitectura, manuales, presentaciones) desde Markdown, por consola, web o API.
problem: Los documentos se armaban a mano en Word, cada uno con un formato distinto y con índices que había que actualizar uno por uno.
solution: Un motor que convierte Markdown en PDF con portada, índices paginados, figuras numeradas y diagramas, con vista previa en vivo.
result: Es el estándar de documentación del área, y los agentes de IA lo usan para entregar documentación lista.
technologies: [Node.js 24, Puppeteer, markdown-it, Mermaid, pdf-lib, Docker]
order: 11
---

- **Un solo núcleo de conversión** para consola, web y API: las tres producen exactamente el mismo PDF.
- **Vista previa real**: la web muestra el mismo PDF que se descarga, regenerado mientras escribes.
- **Seguro por diseño**: el render corre con JavaScript desactivado y sin acceso a la red, y el HTML pasa por dos capas de saneado independientes.
- **Diagramas** Mermaid y de carriles, que se escalan para caber en una hoja y, si son inválidos, no rompen el documento.
- **Calidad**: cerca de 430 pruebas, incluidas pruebas de la interfaz en un navegador real en cuatro tamaños de pantalla.
