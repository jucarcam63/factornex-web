# PROGRESO

Actualizar al final de cada sesión: qué se hizo, qué queda, siguiente paso.

## Ahora mismo
- Siguiente paso: subir a GitHub y conectar Vercel (necesita las cuentas); después, Fase 2 (páginas), empezando por Inicio.
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
- [ ] Subir a GitHub y conectar con Vercel (web de prueba)

## Fase 2 — Páginas
- [ ] Inicio
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
  - Logo provisional recortado solo por CSS en `Logo.astro` (lleva el descriptor antiguo "y Empresas"; sustituir por los SVG definitivos).
  - Pie con el nombre como texto (no existe logo negativo todavía).
  - `/guia-estilo` es una página TEMPORAL (noindex) para revisar componentes: **retirar antes de publicar**.
  - Los enlaces del menú y de legales apuntan a páginas que aún no existen (se crean en Fase 2); `RESERVA_URL` apunta provisionalmente a `/contacto`.
  - Sin favicon propio (se descartó el de Astro): falta el símbolo en SVG.
