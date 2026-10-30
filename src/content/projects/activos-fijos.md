---
title: Sistema de activos fijos con QR
group: anterior
tipo: activos
context: Reliper · Práctica profesional · 2024
summary: Registro, asignación y búsqueda de activos fijos con códigos QR, pensado para usarse desde el celular.
problem: El control de activos fijos no tenía trazabilidad de dónde estaba cada activo ni quién lo tenía.
solution: Un sistema web en Laravel 8 con código QR por activo, búsqueda manual y formularios con datos contables y de leasing.
result: Cualquier activo se identifica escaneando su código, con su ubicación, responsable e historial.
technologies: [Laravel 8, Tailwind CSS, MySQL, SQL Anywhere, D3.js]
gallery:
  - type: image
    src: ../../assets/projects/activos-fijos/project3-1.jpg
    alt: Interfaz móvil del sistema de activos
    caption: Pantalla principal en el celular.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-2.png
    alt: Ventana para recuperar un activo
    caption: Recuperar un activo, con o sin código QR.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-3.png
    alt: Selección del tipo de activo
    caption: Creación de un activo por categoría.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-4.png
    alt: Búsqueda manual de activos
    caption: Búsqueda manual cuando el activo no tiene código QR.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-5.png
    alt: Formulario de registro, datos básicos
    caption: Registro de un activo, datos básicos.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-6.png
    alt: Formulario de registro, datos contables
    caption: Datos contables, cuenta, responsable, depreciación acumulada y facturación.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-7.png
    alt: Formulario de registro, datos de leasing
    caption: Datos de leasing, contrato, banco y vencimiento.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-8.jpg
    alt: Edición de un activo en el celular
    caption: Edición de un activo en el celular.
  - type: image
    src: ../../assets/projects/activos-fijos/project3-9.jpg
    alt: Búsqueda de activos en el celular
    caption: Búsqueda manual en el celular.
order: 32
---

- **Dos bases de datos**: MySQL para usuarios y SQL Anywhere para los datos operacionales del ERP, con el cuidado que exige consultar dos motores distintos.
- **Asignación** por persona y por área, con seguimiento por sede.
- **Visualización** interactiva con D3.js.
