// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://factornex.es',
  // Web estática; solo /api/contacto se ejecuta en el servidor (prerender = false).
  adapter: netlify(),
  // El CSS (≈11 KB) va dentro del HTML: elimina una petición que bloqueaba el pintado.
  build: { inlineStylesheets: 'always' },
  // Variables privadas: se definen en .env (local) y en Netlify → Site configuration → Environment variables.
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Solo se muestra en el aviso legal (decisión del titular).
      NIF_TITULAR: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Interruptor de lanzamiento: solo con INDEXABLE=true los buscadores pueden indexar la web (robots, sitemap y meta robots).
      INDEXABLE: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
