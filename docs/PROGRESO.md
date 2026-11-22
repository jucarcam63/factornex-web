# PROGRESO

Actualizar al final de cada sesión: qué se hizo, qué queda, siguiente paso.

## Ahora mismo
- Web de prueba en Vercel: https://factornex-web.vercel.app (despliegue automático desde `main`; protección de Vercel desactivada en este proyecto, 2026-11-22). Commits nuevos con la identidad `jucarcam63` (correo noreply de GitHub); si no, Vercel Hobby no despliega.
- Tema oscuro publicado en `main` (2026-11-22). Rama de prueba `prueba-modo-oscuro` ya integrada; se puede borrar.
- Siguiente paso: legales (aviso legal, privacidad, cookies; ahí va el NIF y el correo), luego Servicios y Sobre nosotros. Los enlaces a páginas aún sin crear dan 404.
- Para activar el formulario: crear cuenta en Resend con el mismo correo que recibirá las consultas, crear una clave API y añadir en Vercel `RESEND_API_KEY` y `CONTACT_TO_EMAIL` (Production y Preview); después, redeploy y enviar una consulta de prueba.
- Aviso de seguridad conocido: `npm audit` marca 3 vulnerabilidades altas en `path-to-regexp` (dependencia de compilación de `@astrojs/vercel`, no recibe datos de usuarios). La "corrección" que propone npm instala una versión antigua e incompatible; no aplicar. Revisar al actualizar el adaptador.
- Repositorio: https://github.com/jucarcam63/factornex-web (rama `main` subida, 2026-11-22).
- Pendiente de tu parte: logo SVG definitivo (ver MARCA.md), URL del sistema de citas y datos legales (DECISIONES.md).

## Fase 0 — Preparación
- [x] Confirmar nombre definitivo: FACTORNEX
- [ ] Buscar marca en OEPM/EUIPO (que no esté registrada por otro en nuestra clase)
- [ ] Registrar dominio factornex.es (y valorar factornex.com)
- [ ] Subir logo original (SVG o PNG alta resolución)
- [ ] Cerrar decisiones pendientes de `DECISIONES.md`
- [ ] Crear cuentas: GitHub, Vercel

## Fase 1 — Base técnica
- [x] Crear proyecto Astro + Tailwind (Astro 7, Tailwind 4 con plugin de Vite, git en `main`)
- [x] Configurar colores y tipografías de `MARCA.md` (`src/styles/global.css`; fuentes Manrope e Inter locales con @fontsource)
- [x] Componentes base: cabecera, pie, botones, tarjetas, sección (`src/components/`, layout en `src/layouts/Base.astro`)
- [x] Subir a GitHub y conectar con Vercel (web de prueba)

## Fase 2 — Páginas
- [x] Inicio (borrador completo, 8 secciones; textos por revisar, ver CONTENIDOS.md)
- [x] Agente IA (`/agente-ia`, borrador completo; sin textos [PENDIENTE]; revisar los borradores antes del lanzamiento, ver CONTENIDOS.md)
- [ ] Servicios (índice + una página por servicio)
- [ ] Sobre nosotros
- [x] Contacto con formulario (construido y probado en local; falta activar el envío real: claves de Resend en Vercel, y el enlace de Calendly)
- [ ] Legales: aviso legal, privacidad, cookies

## Fase 3 — Técnico y lanzamiento
- [ ] SEO: títulos, descripciones, sitemap, robots.txt, Open Graph, datos estructurados
- [ ] Accesibilidad y rendimiento (Lighthouse > 90)
- [ ] Probar formulario de punta a punta
- [ ] Revisar en móvil, tablet y ordenador
- [ ] Conectar dominio factornex.es y correo corporativo
- [ ] Publicar

## Fase 4 — Después del lanzamiento
- [ ] Ficha de Google Business Profile
- [ ] Primeros casos reales (cuando existan)
- [ ] Blog / artículos
- [ ] Reserva de reuniones

## Historial de sesiones
- 2026-11-22: creada la estructura de documentación del proyecto.
- 2026-11-22 (sesión 2): Fase 1 técnica hecha, salvo GitHub/Vercel.
  - Configuración del sitio en `src/config.ts` (menú, legales, datos de empresa, logo, `RESERVA_URL`).
  - Logo: la web usa el logo principal provisional aportado por el titular (PNG recortado, ver MARCA.md). Sustituir por los SVG definitivos cambiando `LOGO` en `src/config.ts`. Favicon provisional `public/favicon.png`.
  - Pie con el nombre como texto (no existe logo negativo todavía).
  - `/guia-estilo` es una página TEMPORAL (noindex) para revisar componentes: **retirar antes de publicar**.
  - Los enlaces del menú y de legales apuntan a páginas que aún no existen (se crean en Fase 2); `RESERVA_URL` apunta provisionalmente a `/contacto`.
  - Sin favicon propio (se descartó el de Astro): falta el símbolo en SVG.
