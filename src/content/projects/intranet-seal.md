---
title: Intranet empresarial integral
group: anterior
tipo: intranet
context: Seal Corp · 2025
summary: Plataforma que nació como inventario TI y creció hasta centralizar la operación completa de la empresa.
problem: La operación (flota, mantención, inventario, documentos) estaba dispersa en planillas y papel.
solution: Una intranet modular en Laravel 12 con órdenes de trabajo, flota, inventario, documentación con alertas y contabilidad.
result: Una sola plataforma para la operación, con un tótem en el taller para gestionar órdenes de trabajo en terreno.
technologies: [Laravel 12, Livewire, Bootstrap 5, MySQL, Blade]
gallery:
  - type: video
    src: /media/projects/intranet-seal/demo-principal.mp4
    poster: /media/projects/intranet-seal/demo-principal.jpg
    alt: Recorrido por el dashboard y el inventario TI
    caption: Dashboard y funcionalidades principales del inventario TI.
  - type: image
    src: ../../assets/projects/intranet-seal/project1-1.png
    alt: Pantalla de bienvenida de la intranet
    caption: Pantalla de bienvenida con acceso a los módulos.
  - type: image
    src: ../../assets/projects/intranet-seal/project1-2.png
    alt: Selección de módulos de la intranet
    caption: Acceso a los módulos del sistema.
  - type: image
    src: ../../assets/projects/intranet-seal/project1-3.png
    alt: Dashboard del módulo de operaciones
    caption: Módulo de operaciones con estadísticas de órdenes de trabajo y personal técnico activo.
  - type: image
    src: ../../assets/projects/intranet-seal/project1-4.png
    alt: Listado de órdenes de trabajo
    caption: Gestión de órdenes de trabajo con personal asignado, vehículo, fechas, tipo, prioridad y estado.
  - type: video
    src: /media/projects/intranet-seal/modulos.mp4
    poster: /media/projects/intranet-seal/modulos.jpg
    alt: Recorrido por los módulos de operaciones, mantención y flota
    caption: Módulos de operaciones, mantención y flota.
  - type: video
    src: /media/projects/intranet-seal/administracion.mp4
    poster: /media/projects/intranet-seal/administracion.jpg
    alt: Recorrido por la administración del sistema
    caption: Administración, usuarios y configuración.
  - type: image
    src: ../../assets/projects/intranet-seal/project1-5.jpg
    alt: Tótem táctil instalado en el taller
    caption: Tótem en el taller para que los mecánicos gestionen sus órdenes de trabajo en terreno.
order: 30
---

- **Módulos**: inventario TI (el núcleo original), órdenes de trabajo, mantención preventiva y correctiva, flota y su documentación, recursos humanos con importación desde Excel, bodega, servicios y contabilidad para leasing y créditos.
- **Inventario TI**: asignación por sede, usuario y área, exportación a Excel y actas de entrega y devolución.
- **Doble autenticación**: cuentas para administración y acceso simplificado para técnicos en el tótem.
- **Rendimiento y orden**: permisos por middleware, caché con TTL según el tipo de dato, eliminación de consultas N+1 y API REST entre módulos.
