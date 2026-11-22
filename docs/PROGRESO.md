# PROGRESO

Actualizar al final de cada sesión: qué se hizo, qué queda, siguiente paso.

## Ahora mismo
- Web de prueba en Vercel: https://factornex-web.vercel.app (despliegue automático desde `main`; protección de Vercel desactivada en este proyecto, 2026-11-22). Commits nuevos con la identidad `jucarcam63` (correo noreply de GitHub); si no, Vercel Hobby no despliega.
- Tema oscuro publicado en `main` (2026-11-22). Rama de prueba `prueba-modo-oscuro` ya integrada; se puede borrar.
- Siguiente paso: Soluciones (en el menú, todavía da 404): decidir si se mantiene como página aparte o se retira del menú en la v1. Además, que el titular confirme los textos de Sobre nosotros (trayectoria) y aporte el **título exacto** de Western Europe University para publicarlo con precisión (ver CONTENIDOS.md).
- NIF publicado solo en el aviso legal (variable `NIF_TITULAR` en Vercel, tipo Secret; verificado el 2026-11-22: formato y letra de control correctos, y no aparece en ninguna otra página).
- Formulario activo: `RESEND_API_KEY` (secreta) y `CONTACT_TO_EMAIL` están en Vercel. Los correos salen de `onboarding@resend.dev` y pueden caer en Spam al principio. Mejora pendiente: verificar el dominio factornex.es en Resend y definir `CONTACT_FROM_EMAIL` cuando exista el dominio.
- **Tarea anual (octubre):** cuando se publiquen los festivos del año siguiente (BOCM y BOE), añadir en el calendario principal de jucarcam63 los de fecha variable (Jueves y Viernes Santo, San José si procede, traslados por caer en domingo) y los festivos locales. Los de fecha fija se repiten solos. Archivo de partida: `docs/festivos-reservas.ics` (generador: `docs/festivos-reservas.generador.cjs`). Los festivos locales de Torrejón de Ardoz no se bloquean: el titular los ha sustituido por los de Madrid.
- Contacto cerrado: formulario activo y reserva de llamadas con Google Calendar enlazada (2026-11-22). Pendiente solo el WhatsApp de empresa (cuando haya número).
- Aviso de seguridad conocido: `npm audit` marca 3 vulnerabilidades altas en `path-to-regexp` (dependencia de compilación de `@astrojs/vercel`, no recibe datos de usuarios). La "corrección" que propone npm instala una versión antigua e incompatible; no aplicar. Revisar al actualizar el adaptador.
- Repositorio: https://github.com/jucarcam63/factornex-web (rama `main` subida, 2026-11-22).
- Pendiente de tu parte: logo SVG definitivo (ver MARCA.md) y los datos legales que faltan (DECISIONES.md).
- **ANTES DE CERRAR / LANZAR: pasar la reserva de llamadas a Calendly** (decisión del titular, 2026-11-22: le parece más profesional; hoy funciona con Google Calendar y se mantiene hasta entonces). Lista de tareas:
  1. Decidir la cuenta de Calendly para FACTORNEX (la actual es jucarcam65; el evento de Nutridit era una prueba y se puede reutilizar la cuenta) y conectarla al **calendario de jucarcam63** (donde llegan las consultas), para que las citas queden en esa agenda y no se solapen.
  2. Poner el logo definitivo de FACTORNEX (SVG) y el nombre de marca en la cuenta de Calendly (hoy sale el logo de Nutridit).
  3. Evento "Diagnóstico gratuito FACTORNEX" (ya existe uno de prueba en la cuenta jucarcam65): 30 min, Google Meet, laborables 9:00-17:00, aviso mínimo, y preguntas útiles (empresa, teléfono, qué quiere mejorar). Revisar los límites del plan gratuito.
  4. Activar los avisos al anfitrión y a quien reserva, y comprobar que cada cita aparece en la agenda.
  5. Repetir el bloqueo de festivos (nacionales y de Madrid) en Calendly o comprobar que respeta los eventos "Festivo - no reservar" del calendario de jucarcam63 (ver `docs/festivos-reservas.ics`).
  6. Valorar una página de "gracias" en la web a la que redirija Calendly tras reservar.
  7. Actualizar `RESERVA_URL` en `src/config.ts`.
  8. **Actualizar las políticas de privacidad y cookies**: nombrar a Calendly como encargado (y su política), recordar que sus páginas pueden usar cookies propias (mostraron un banner con cookies de analítica y marketing), y quitar la mención de Google Calendar como sistema de reservas.
  9. Probar una reserva de punta a punta con un correo de prueba y anular la cita de prueba.
  10. Después, retirar la página de reservas de Google Calendar o dejarla desactivada.

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
- [x] Servicios (v1: una sola página `/servicios` con las tres secciones, cómo trabajamos y preguntas frecuentes; borrador a revisar. Se puede dividir en una página por servicio más adelante)
- [x] Sobre nosotros (publicada: filosofía, valores, nombre del titular y trayectoria sacada de su currículum; **el titular debe confirmar cada afirmación**; ver CONTENIDOS.md)
- [x] Contacto con formulario (activo y probado de punta a punta el 2026-11-22: la consulta de prueba llegó al correo de destino; reserva de llamadas con Google Calendar enlazada)
- [x] Legales: aviso legal, privacidad, cookies (borradores completos; ver CONTENIDOS.md; faltan 4 [PENDIENTE] y revisión del asesor)

## Fase 3 — Técnico y lanzamiento
- [ ] SEO: títulos, descripciones, sitemap, robots.txt, Open Graph, datos estructurados
- [ ] Accesibilidad y rendimiento (Lighthouse > 90)
- [ ] Pasar la reserva de llamadas a Calendly (ver la lista de tareas en "Ahora mismo")
- [ ] Probar formulario de punta a punta
- [ ] Retirar la página temporal `/guia-estilo`
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
