# PROGRESO

Actualizar al final de cada sesión: qué se hizo, qué queda, siguiente paso.

## Ahora mismo
- Web de prueba en Vercel: https://factornex-web.vercel.app (despliegue automático desde `main`; protección de Vercel desactivada en este proyecto, 2026-11-22). Commits nuevos con la identidad `jucarcam63` (correo noreply de GitHub); si no, Vercel Hobby no despliega.
- Siguiente paso: Fase 2, Contacto con formulario (es donde acaban los botones de reserva), luego Servicios, Sobre nosotros y legales. Los enlaces a páginas aún sin crear dan 404.
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
- [x] Agente IA (`/agente-ia`, borrador completo; tiene 3 textos [PENDIENTE], ver CONTENIDOS.md)
- [ ] Servicios (índice + una página por servicio)
- [ ] Sobre nosotros
- [ ] Contacto con formulario funcional
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
