const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];

/** "2025-12" → "dic 2025" */
export function mes(valor: string): string {
  const [anio, m] = valor.split('-').map(Number);
  return `${meses[m - 1]} ${anio}`;
}
