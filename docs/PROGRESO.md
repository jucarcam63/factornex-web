# PROGRESO

Actualizar al final de cada sesión: qué se hizo, qué queda, siguiente paso.

## Ahora mismo
- Web de prueba en Vercel: https://factornex-web.vercel.app (despliegue automático desde `main`; protección de Vercel desactivada en este proyecto, 2026-11-22). Commits nuevos con la identidad `jucarcam63` (correo noreply de GitHub); si no, Vercel Hobby no despliega.
- Tema oscuro publicado en `main` (2026-11-22). Rama de prueba `prueba-modo-oscuro` ya integrada; se puede borrar.
- Todas las páginas del menú existen (Inicio, Agente IA, Servicios, Sobre nosotros, Contacto) y las legales. "Soluciones" se aplazó y se quitó del menú. Siguiente paso: **Fase 3** (SEO, accesibilidad y rendimiento, dominio y correo, revisión final) y, antes, que el titular confirme los textos de Sobre nosotros (trayectoria). **Cuando llegue el título del programa de IA (a partir de diciembre de 2026)**, actualizar la tarjeta "Formación en inteligencia artificial" de Sobre nosotros con el título exacto y la entidad emisora (ver CONTENIDOS.md).
- NIF publicado solo en el aviso legal (variable `NIF_TITULAR` en Vercel, tipo Secret; verificado el 2026-11-22: formato y letra de control correctos, y no aparece en ninguna otra página).
- Formulario activo: `RESEND_API_KEY` (secreta) y `CONTACT_TO_EMAIL` están en Vercel. Los correos salen de `onboarding@resend.dev` y pueden caer en Spam al principio. Mejora pendiente: verificar el dominio factornex.es en Resend y definir `CONTACT_FROM_EMAIL` cuando exista el dominio.
- **Tarea anual (octubre):** cuando se publiquen los festivos del año siguiente (BOCM y BOE), añadir en el calendario principal de jucarcam63 los de fecha variable (Jueves y Viernes Santo, San José si procede, traslados por caer en domingo) y los festivos locales. Los de fecha fija se repiten solos. Archivo de partida: `docs/festivos-reservas.ics` (generador: `docs/festivos-reservas.generador.cjs`). Los festivos locales de Torrejón de Ardoz no se bloquean: el titular los ha sustituido por los de Madrid.
- Contacto cerrado: formulario activo y reserva de llamadas con Google Calendar enlazada (2026-11-22). Pendiente solo el WhatsApp de empresa (cuando haya número).
- Aviso de seguridad conocido: `npm audit` marca 3 vulnerabilidades altas en `path-to-regexp` (dependencia de compilación de `@astrojs/vercel`, no recibe datos de usuarios). La "corrección" que propone npm instala una versión antigua e incompatible; no aplicar. Revisar al actualizar el adaptador.
- Repositorio: https://github.com/jucarcam63/factornex-web (rama `main` subida, 2026-11-22).
- Logos con fondo transparente integrados (2026-11-22): cabecera y pie usan la versión negativa; favicon con el símbolo. Siguen siendo raster; pendiente el SVG definitivo.
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

- **Después del lanzamiento inmediato (petición del titular, 2026-11-22): respondedor de WhatsApp en la web.** Cuando termine lo que está en marcha (dominio, correo, lanzamiento), montarlo en el momento que se considere adecuado. Opciones a valorar entonces (decidir con el titular):
  1. Botón flotante "Escríbenos por WhatsApp" que abre `wa.me` con un mensaje inicial (simple, sin cookies, sin coste). Requiere un número de empresa (`WHATSAPP_NUMERO` en `src/config.ts`, hoy `null`).
  2. Chat incrustado en la web conectado al agente (Nexo) con respuesta automática y paso a WhatsApp. Requiere proveedor del agente, número de WhatsApp Business (API de Meta), y actualizar privacidad y cookies (nuevo encargado, tratamiento de las conversaciones).
  **Hecho (2026-11-22):** la opción 1 está montada pero inactiva (`src/components/BotonWhatsApp.astro`, cargado desde `Base.astro`). Para activarla basta poner el número en `WHATSAPP_NUMERO` de `src/config.ts` (formato `34600000000`); también activa la tarjeta de WhatsApp en Contacto. Mensaje inicial en `WHATSAPP_MENSAJE`. Probado con un número falso (enlace correcto) y sin número (no pinta nada). Al activarla: añadir en privacidad que el contacto por WhatsApp lo trata Meta, y probarlo en móvil.
  Requisitos previos: número de empresa de WhatsApp Business y decidir el proveedor del agente. No publicar el móvil personal.

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
- [x] SEO (2026-11-22): títulos y descripciones únicos y de longitud adecuada, `sitemap.xml`, `robots.txt` (cerrado hasta el lanzamiento), Open Graph y Twitter con imagen provisional (`public/og-image.png`, generador en `docs/og-image.generador.cjs`), datos estructurados de organización y de preguntas frecuentes. **Falta:** abrirlo el día del lanzamiento con `INDEXABLE=true` en Vercel y enviar el sitemap a Google Search Console
- [x] Accesibilidad y rendimiento (Lighthouse, 2026-11-22, en la web publicada): **móvil** portada 100 · Agente IA 95 · Servicios 97-100 · Sobre nosotros 98 · Contacto 97; **escritorio** 100; accesibilidad 100 y buenas prácticas 100 en todas (Contacto tenía 98 por el orden de encabezados, ya corregido). SEO marca 69 solo por el `noindex` previo al lanzamiento (`is-crawlable`); debe subir al abrir `INDEXABLE=true`. Mejoras aplicadas: CSS en línea, precarga de tipografías, `content-visibility` en secciones, logo en dos tamaños, cabecera sin desenfoque, enlaces y casilla con área táctil ≥ 24 px, tablas legales con desplazamiento
- [ ] Pasar la reserva de llamadas a Calendly (ver la lista de tareas en "Ahora mismo")
- [ ] Probar formulario de punta a punta
- [x] Retirar la página temporal `/guia-estilo` (hecho)
- [x] Página 404 propia y cabeceras de seguridad básicas (`vercel.json`)
- [x] Revisar en móvil, tablet y ordenador (2026-11-22: 9 páginas × 5 anchos, de 320 a 1440 px, sin desbordes horizontales). Pendiente solo la revisión visual con tu móvil real
- [ ] Decidir el plan de alojamiento: Vercel Pro (uso comercial) u otro alojamiento (ver DECISIONES.md, pendiente 0)
- [~] Dominio `factornex.es` comprado en IONOS (pack Correo Básico 5, dominio incluido el primer año; verificación de datos del titular completada) y conectado a Vercel (2026-11-22). **Configuración hecha:** en Vercel están `factornex.es` (producción) y `www.factornex.es` (redirección 308 a `factornex.es`); en el DNS de IONOS: A `@` → 216.198.79.1 y CNAME `www` → 61a48e7d608af9f8.vercel-dns-017.com, y se conservan los registros del correo (MX mx00/mx01.ionos.es, SPF `v=spf1 include:_spf-eu.ionos.com ~all`, DKIM s1/s2, `_dmarc`, `autodiscover`) y los servidores DNS de IONOS. **Pendiente (esperando al registro `.es`):** el registro oficial `.es` aún no publica el dominio (a.nic.es respondía "no existe"); hasta entonces el correo saliente falla con "550 invalid DNS MX or A/AAAA". Si pasa un día entero sin publicarse, contactar con el soporte de IONOS. **Cuando se publique:** comprobar que Vercel marca "Valid Configuration" y emite el HTTPS, probar el correo en los dos sentidos, verificar el dominio en Resend (añadir sus registros DNS sin romper el SPF de IONOS) y definir `CONTACT_FROM_EMAIL`, y valorar `CONTACT_TO_EMAIL=contacto@factornex.es`.
- [ ] Contrato de correo IONOS: 1 EUR/mes los 12 primeros meses y 2,50 EUR/mes después; renovación automática; revisar antes de octubre de 2027 y comprobar qué pasa con el dominio al cancelarlo
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
