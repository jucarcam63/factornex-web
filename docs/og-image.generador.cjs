// Genera public/og-image.png (1200x630, imagen para compartir en redes). Provisional: usa el logo negativo raster.
// Ejecutar desde la raíz del proyecto: node docs/og-image.generador.cjs
const sharp = require('sharp');
(async () => {
  const W = 1200, H = 630;
  const fondo = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050e24"/><stop offset="0.55" stop-color="#0a2e62"/><stop offset="1" stop-color="#050e24"/></linearGradient>
      <radialGradient id="r" cx="0.85" cy="0.1" r="0.6"><stop offset="0" stop-color="#2aced7" stop-opacity="0.28"/><stop offset="1" stop-color="#2aced7" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#r)"/>
    <text x="${W / 2}" y="470" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="600" fill="#eaf2ff">Soluciones inteligentes para negocios</text>
    <text x="${W / 2}" y="525" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#a8b8d2">Agente de IA · Automatización · Desarrollo a medida</text>
  </svg>`);
  const logo = await sharp('public/logo/originales/factornex-negativo-original.webp').trim({ threshold: 1 }).resize({ width: 760 }).toBuffer();
  const lm = await sharp(logo).metadata();
  await sharp(fondo).composite([{ input: logo, left: Math.round((W - lm.width) / 2), top: 170 }]).png({ compressionLevel: 9 }).toFile('public/og-image.png');
  console.log('og-image.png creada', lm.width + 'x' + lm.height);
})();
