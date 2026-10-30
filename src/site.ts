// Datos generales del sitio. Lo que cambia seguido (experiencia, proyectos) vive en src/content.
export const site = {
  name: 'Nicolás Pavez',
  role: 'Ingeniero de Soluciones',
  // Presentación: texto de Nicolás en su perfil de LinkedIn, sin reescribir.
  intro:
    'Ingeniero de Software orientado a resultados, con experiencia en el diseño y construcción de software empresarial end-to-end. Me enfoco en desarrollar soluciones integrales que aporten valor real a usuarios y clientes, abordando los desafíos con una visión completa: entendiendo el negocio, la necesidad y aterrizando en soluciones robustas, cubriendo tanto front-end como back-end.',
  location: 'Antofagasta',
  url: 'https://npavez.com',
  description:
    'Nicolás Pavez, Ingeniero de Soluciones en Antofagasta. Entiendo cómo trabaja cada área y diseño sistemas que facilitan los procesos internos, apoyado en agentes de IA.',
  // El correo se arma en el navegador para que no quede en texto plano en el HTML.
  emailParts: ['nicolas.ipp14', 'gmail.com'],
  linkedin: 'https://www.linkedin.com/in/nicolas-pavez-pavez/',
  github: 'https://github.com/Friedpotatu',
};

// "Sobre mí": el resto de su "Acerca de" de LinkedIn, tal cual.
export const about = [
  'Siempre estoy explorando nuevas tecnologías y desafíos de ciberseguridad. Me interesa entender cuándo realmente aportan y cómo aplicarlas para mejorar las soluciones que construyo. Creo en la mejora continua y en que siempre hay algo nuevo que aprender.',
  'Considero que el verdadero diferencial está en el pensamiento crítico, lógico y la flexibilidad de adaptarse a las herramientas que mejor resuelvan el problema, priorizando siempre entender bien la necesidad antes de construir la solución.',
  'Me defino como una persona proactiva, comprometida y orientada al aprendizaje continuo. Disfruto trabajar en equipo, enfrentar desafíos técnicos y buscar la mejora constante, tanto a nivel personal como profesional.',
  'Fuera del ámbito profesional, me encanta el gimnasio, los videojuegos y la música: pasiones que me inspiran y equilibran mi día a día.',
];

export const principles = [
  {
    title: 'El problema primero',
    text: 'Antes de escribir código confirmo qué se quiere resolver, quiénes participan, las restricciones y el beneficio esperado.',
  },
  {
    title: 'La tecnología la elige el problema',
    text: 'No me caso con un lenguaje ni un framework. Comparo opciones por costo, tiempo y adopción, aprendo lo que haga falta y dejo la decisión registrada (ADR) para que el porqué no se pierda.',
  },
  {
    title: 'Especificación antes que código',
    text: 'Desarrollo guiado por especificación: spec, plan y tareas aprobadas antes de implementar. Prototipos cuando hay que validar.',
  },
  {
    title: 'IA con revisión humana',
    text: 'Agentes para implementar, revisar código y seguridad, y documentar. Cada cambio pasa por pruebas y por mi revisión antes de llegar a producción.',
  },
  {
    title: 'Calidad que se puede medir',
    text: 'Pruebas unitarias, de integración y end-to-end, integración continua con auditoría de dependencias y despliegues con vuelta atrás.',
  },
  {
    title: 'Documentado para otros',
    text: 'Arquitectura (HLD, C4), manuales y traspasos a Operaciones, escritos para que el sistema pueda vivir sin mí.',
  },
];

export const stack = [
  { group: 'Backend', items: ['C#', '.NET 10', 'ASP.NET Core', 'EF Core', 'Dapper', 'Node.js', 'Python', 'FastAPI', 'Django', 'Laravel'] },
  { group: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zod', 'Astro'] },
  { group: 'Datos', items: ['SQL Server', 'PostgreSQL', 'MariaDB', 'SQLite'] },
  { group: 'Nube e infraestructura', items: ['Azure App Service', 'Azure Blob Storage', 'Application Insights', 'Docker', 'Linux', 'Cloudflare', 'WireGuard'] },
  { group: 'Identidad y seguridad', items: ['OAuth 2.0', 'OpenID Connect', 'JWT', 'Entra ID', 'OWASP'] },
  { group: 'Calidad', items: ['xUnit', 'Vitest', 'Playwright', 'Stryker', 'GitHub Actions'] },
  { group: 'IA', items: ['Claude Code', 'Agentes y subagentes', 'Skills', 'Hooks', 'Evals', 'MCP', 'Spec-driven development'] },
];
