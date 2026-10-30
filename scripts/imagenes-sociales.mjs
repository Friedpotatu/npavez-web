// Genera public/og.png (1200×630, vista previa al compartir el enlace) y public/apple-touch-icon.png (180×180).
// Se corre a mano cuando cambia el nombre o el cargo:  npm run imagenes
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

// Estilo "plano de obra": papel gris frío con retícula, tinta grafito y naranja de obra.
const tinta = '#1d2126';
const obra = '#f26b1d';
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <pattern id="reticula" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${tinta}" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#eef0ef"/>
  <rect width="1200" height="630" fill="url(#reticula)"/>
  <rect x="80" y="80" width="72" height="72" fill="${tinta}"/>
  <path d="M102 132V100l28 32V100" fill="none" stroke="${obra}" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
  <text x="80" y="320" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="88" font-weight="700" fill="${tinta}" letter-spacing="-3">Nicolás Pavez</text>
  <text x="80" y="392" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="42" font-weight="500" fill="#b83d0b">Ingeniero de Soluciones</text>
  <text x="80" y="448" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="28" fill="#59616b">Software empresarial end-to-end, del negocio a la solución.</text>
  <rect x="80" y="520" width="1040" height="2" fill="${tinta}"/>
  <text x="80" y="566" font-family="'Cascadia Mono', Consolas, monospace" font-size="24" fill="${tinta}">npavez.com</text>
  <text x="1120" y="566" text-anchor="end" font-family="'Cascadia Mono', Consolas, monospace" font-size="24" fill="#59616b">Antofagasta, Chile</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');

// El ícono de iOS no admite transparencia ni modo oscuro: fondo sólido.
const favicon = (await readFile('public/favicon.svg', 'utf8')).replace(/<style>[\s\S]*?<\/style>/, '')
  .replace('<rect ', `<rect fill="${tinta}" `)
  .replace('<path ', `<path stroke="${obra}" `);
await sharp(Buffer.from(favicon)).resize(180, 180).flatten({ background: tinta }).png().toFile('public/apple-touch-icon.png');

console.log('Listo: public/og.png y public/apple-touch-icon.png');
