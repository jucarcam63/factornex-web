import type { APIRoute } from 'astro';
import { PAGINAS_SITEMAP, SITE } from '../config';

// Mapa del sitio con las páginas públicas. Las URL usan el dominio definitivo (SITE.url).
export const GET: APIRoute = () => {
  const urls = PAGINAS_SITEMAP.map((p) => `  <url><loc>${new URL(p, SITE.url).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
