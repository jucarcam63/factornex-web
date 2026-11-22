// Interruptor de lanzamiento. Hasta que la variable de entorno INDEXABLE valga "true" (Vercel → Settings → Environment
// Variables, y redeploy), la web se publica con noindex y robots.txt cerrado para que Google no indexe contenido provisional.
import { INDEXABLE } from 'astro:env/server';

export const indexable = INDEXABLE === 'true';
