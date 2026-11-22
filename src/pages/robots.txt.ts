import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { indexable } from '../lib/indexable';

// robots.txt: cerrado hasta el lanzamiento (INDEXABLE=true lo abre).
export const GET: APIRoute = () => {
  const cuerpo = indexable
    ? ['User-agent: *', 'Allow: /', 'Disallow: /api/', '', `Sitemap: ${new URL('/sitemap.xml', SITE.url).href}`, '']
    : ['User-agent: *', 'Disallow: /', ''];
  return new Response(cuerpo.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
