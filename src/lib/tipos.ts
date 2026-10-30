// Tipos de proyecto: la etiqueta que se lee en la tarjeta y el dibujo técnico que la ilustra
// (trazos sobre un lienzo de 64×64, mismo grosor en todos).
export const tipos = {
  identidad: {
    label: 'Seguridad e identidad',
    trazos: ['M32 7 L52 15 V30 C52 44 43 53 32 57 C21 53 12 44 12 30 V15 Z', 'M27 29 a5 5 0 1 1 10 0 a5 5 0 1 1 -10 0', 'M32 34 V43'],
  },
  ia: {
    label: 'IA y estándares',
    trazos: ['M32 32 L14 16 M32 32 L50 16 M32 32 L14 48 M32 32 L50 48', 'M26 32 a6 6 0 1 1 12 0 a6 6 0 1 1 -12 0', 'M10 16 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0 M46 16 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0 M10 48 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0 M46 48 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0'],
  },
  gestion: {
    label: 'Gestión de proyectos',
    trazos: ['M8 54 H56', 'M10 12 H30 V19 H10 Z', 'M22 25 H46 V32 H22 Z', 'M36 38 H54 V45 H36 Z', 'M14 12 V54'],
  },
  agenda: {
    label: 'Servicio transversal',
    trazos: ['M10 14 H54 V54 H10 Z', 'M10 24 H54', 'M20 9 V18 M44 9 V18', 'M18 32 h6 M29 32 h6 M40 32 h6 M18 42 h6 M29 42 h6'],
  },
  biometria: {
    label: 'Hardware y biometría',
    trazos: ['M20 50 C14 42 14 30 20 22 C26 14 38 14 44 22 C50 30 50 40 47 48', 'M26 52 C22 44 22 34 26 28 C30 22 36 23 39 28 C42 34 41 42 38 50', 'M32 54 C30 46 30 38 32 32', 'M14 18 C22 8 42 8 50 18'],
  },
  documentos: {
    label: 'Herramienta interna',
    trazos: ['M16 7 H38 L48 17 V57 H16 Z', 'M38 7 V17 H48', 'M22 28 H42 M22 36 H42 M22 44 H34'],
  },
  infraestructura: {
    label: 'Infraestructura',
    trazos: ['M12 10 H52 V24 H12 Z', 'M12 27 H52 V41 H12 Z', 'M12 44 H52 V58 H12 Z', 'M18 17 h4 M18 34 h4 M18 51 h4', 'M42 17 h4 M42 34 h4 M42 51 h4'],
  },
  intranet: {
    label: 'Plataforma empresarial',
    trazos: ['M10 56 H54', 'M14 56 V22 L32 10 L50 22 V56', 'M22 30 h6 v6 h-6 Z M36 30 h6 v6 h-6 Z M22 42 h6 v6 h-6 Z M36 42 h6 v6 h-6 Z'],
  },
  datos: {
    label: 'Datos y Machine Learning',
    trazos: ['M10 8 V54 H56', 'M14 46 L24 34 L34 39 L46 20 L54 24', 'M24 34 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0 M46 20 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0'],
  },
  activos: {
    label: 'Gestión de activos',
    trazos: ['M10 10 H26 V26 H10 Z M38 10 H54 V26 H38 Z M10 38 H26 V54 H10 Z', 'M15 15 h6 v6 h-6 Z M43 15 h6 v6 h-6 Z M15 43 h6 v6 h-6 Z', 'M38 38 h6 v6 h-6 Z M48 38 h6 M38 48 h6 M48 48 h6 v6'],
  },
  mineria: {
    label: 'Datos y visualización 3D',
    trazos: ['M6 32 C6 20 58 20 58 32 C58 44 6 44 6 32 Z', 'M14 32 C14 25 50 25 50 32 C50 39 14 39 14 32 Z', 'M22 32 C22 29 42 29 42 32 C42 35 22 35 22 32 Z', 'M6 32 V38 M58 32 V38'],
  },
  cartelera: {
    label: 'Comunicación interna',
    trazos: ['M8 10 H56 V44 H8 Z', 'M32 44 V54 M22 54 H42', 'M14 38 L26 24 L34 32 L40 26 L50 38', 'M44 18 a3 3 0 1 1 6 0 a3 3 0 1 1 -6 0'],
  },
  indicadores: {
    label: 'Indicadores y dashboards',
    trazos: ['M8 10 H56 V44 H8 Z', 'M32 44 V54 M22 54 H42', 'M18 36 V28 M26 36 V20 M34 36 V24 M42 36 V16'],
  },
  recursos: {
    label: 'Planificación de recursos',
    trazos: ['M8 12 H56 V54 H8 Z', 'M8 22 H56', 'M24 12 V54 M40 12 V54', 'M12 27 h8 v8 h-8 Z M28 37 h8 v12 h-8 Z M44 27 h8 v8 h-8 Z'],
  },
  comercial: {
    label: 'Gestión comercial',
    trazos: ['M16 7 H48 V57 L42 53 L36 57 L30 53 L24 57 L16 53 Z', 'M23 18 H41 M23 26 H41 M23 34 H33', 'M34 44 l4 4 l8 -9'],
  },
  integracion: {
    label: 'Integración de datos',
    trazos: ['M8 20 H24 V44 H8 Z', 'M40 20 H56 V44 H40 Z', 'M24 32 H40', 'M34 27 l5 5 l-5 5', 'M12 27 h8 M12 33 h8 M44 27 h8 M44 33 h8'],
  },
  simulacion: {
    label: 'Simulación 3D',
    trazos: ['M6 46 H40 V38 H30 V32 H6 Z', 'M40 46 H50 V36 L45 30 H40', 'M12 50 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0 M42 50 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0', 'M24 32 L46 12 L58 16', 'M58 16 V30', 'M55 30 h6 v5 h-6 Z'],
  },
} as const;
