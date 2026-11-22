# CONTENIDOS — textos de la web

Estado de cada bloque: ✅ aprobado · ✏️ borrador (del documento inicial, revisar) · ⏳ pendiente

## Enfoque general ✅
- Producto estrella: **agente de IA que atiende llamadas y WhatsApp** de tu negocio: responde 24 h, entiende la consulta, presupuesta según tus tarifas, agenda la cita, avisa y pasa a una persona cuando hace falta. Siempre se identifica como IA.
- Público: negocios, autónomos y empresas (pymes). No particulares.
- Sin precio publicado en la v1. Cada página termina en "Reservar una llamada" (diagnóstico gratuito).
- Recursos de tubot.es a adaptar: ver `REFERENCIAS.md`.

## Inicio (orden de secciones)
1. Hero centrado en el agente + demo de conversación (consulta → presupuesto → cita).
2. Problema: llamadas y mensajes perdidos, fuera de horario, tiempo de respuesta.
3. Cómo funciona: historia concreta en 5 pasos.
4. Qué hace el agente (ficha de "empleado": canales, horario, tareas).
5. Integraciones reales (Google Calendar, Outlook, WhatsApp, CRM).
6. Más servicios: automatización de procesos y desarrollo a medida.
7. Preguntas frecuentes (objeciones).
8. Llamada final: reservar una llamada.
Los textos ✏️ de abajo se reutilizan dentro de este orden.

### Estado de la página de Inicio (2026-11-22) — implementada en `src/pages/index.astro`
Textos en borrador, aprobados "en principio" por el titular; revisar antes del lanzamiento:
- Hero: *Que ninguna llamada ni mensaje de tu negocio se quede sin respuesta.* (el titular lo da por bueno "de momento"). WhatsApp va por delante de las llamadas, porque el contestador de WhatsApp es el primer producto; la demo es una conversación de WhatsApp.
- Demo: negocio ficticio ("Peluquería Ejemplo"), sin precios ni cifras, etiquetada como ejemplo.
- Integraciones: solo WhatsApp y Google Calendar. [PENDIENTE: confirmar Outlook, CRM y otros programas antes de mostrarlos.]
- Preguntas frecuentes y "Qué hace el agente": revisar que cada tarea citada (presupuestar, agendar, recordatorios, avisar, pasar a una persona, atender llamadas) se pueda cumplir de verdad.
- Botones "Reservar una llamada" → `RESERVA_URL` (provisional: `/contacto`).
- La demo usa una agente ficticia llamada Lucía, para mostrar que cada negocio elige el nombre del suyo.

### Estado de la página del Agente IA (2026-11-22) — implementada en `src/pages/agente-ia.astro`
Secciones: hero con demo · qué hace (6 tareas) · cómo funciona (historia en 5 pasos) · tú tienes el control · integraciones · ejemplos por negocio · cómo empezamos (4 pasos) · preguntas frecuentes · llamada final. Textos compartidos con Inicio en `src/contenidos/agente.ts`.
- Ejemplos (ilustrativos, sin casos reales): peluquería y estética, clínica, taller, reformas, inmobiliaria, fontanería y electricidad; cierre con comercios y despachos de abogados.
- Informe de actividad: se menciona sin detalle. [PENDIENTE: concretar qué datos incluye y con qué frecuencia; no prometer más hasta saberlo.]
- Plazo: "puede estar funcionando en una semana, una vez que tenemos la información del negocio" (dato dado por el titular). Qué aporta el cliente: tarifas, horarios, calendario, servicios e información de su negocio.
- Integraciones (confirmadas por el titular): WhatsApp, Google (Calendar y Gmail), Outlook y CRM; otras herramientas, a consultar en la llamada. Definidas en `src/contenidos/agente.ts`.
- Preguntas frecuentes añadidas, inspiradas en las dudas habituales de webs similares (sin copiar textos): ¿Sustituye a mi equipo?, ¿Cuánto cuesta? (sin precio, se calcula en la llamada), ¿Funciona con el número de WhatsApp que ya uso? Respuesta (dada por el titular): sí; lo recomendable es que esté dado de alta como WhatsApp Business en Meta y, si no lo está, se da de alta como teléfono Business en Meta.

## Menú
✅ Inicio · Agente IA · Servicios · Soluciones · Sobre nosotros · Contacto
Botón destacado: ✏️ "Reservar una llamada" (abre el sistema de citas). Secundario en páginas: "Solicitar asesoramiento" → Contacto.

## Servicios de la v1 ✅
1. **Agente IA (producto estrella, página propia)** — atención de llamadas y WhatsApp, presupuestos, citas, recordatorios, paso a persona.
   Página: demo · cómo funciona · qué hace · integraciones · preguntas frecuentes · reservar llamada.
   Complementos de IA (asistentes internos, documentos) se mencionan aquí o en Servicios.
2. **Automatización de procesos** — tareas administrativas, conexión entre herramientas, avisos, sincronización de datos, seguimiento comercial.
3. **Desarrollo a medida** — aplicaciones web, paneles de control, herramientas de gestión, integraciones, con diseño UX/UI incluido.
La consultoría (diagnóstico de procesos) es el primer paso de cualquier proyecto, no un servicio aparte: se presenta en "Cómo trabajamos".

## Soluciones — "Lo que podemos hacer por tu negocio" ✏️
Objetivo: que el visitante se reconozca en un problema y vea una solución concreta. Son **ejemplos de aplicación**, no casos de clientes: no poner nombres, cifras ni resultados inventados.
Formato de cada tarjeta: Problema → Qué hacemos → Herramientas habituales → Qué cambia en el día a día.
1. Llamadas y WhatsApp atendidos a cualquier hora (agente de voz o chat que responde dudas y da citas).
2. Citas y recordatorios automáticos (menos olvidos y huecos vacíos).
3. Presupuestos y facturas que se preparan solos a partir de un formulario o un correo.
4. Correos y documentos que se clasifican y archivan solos.
5. Seguimiento de clientes sin olvidos (avisos y mensajes automáticos desde el CRM).
6. Informes que se generan solos con los datos de tus herramientas.
Fase posterior: versiones por sector (clínicas, despachos, comercios, hostelería, alojamientos rurales), útiles para SEO local.
Demostraciones propias (p. ej. agente de voz de clínica dental) se pueden mostrar etiquetadas como "demostración".

## Inicio
1. **Hero** ✏️
   - Título: Tu empresa puede funcionar mejor.
   - Subtítulo: Diseñamos soluciones inteligentes que automatizan procesos, conectan herramientas y transforman la forma de trabajar de las empresas.
   - Botones: Solicitar asesoramiento · Ver servicios
2. **Propuesta de valor** ✏️ — "La tecnología debe trabajar para tu negocio." Pilares: Analizamos · Diseñamos · Transformamos.
3. **Servicios** ✏️ — tarjetas (ver lista final en DECISIONES).
4. **Problemas que resolvemos** ✏️ — "¿Cuánto tiempo pierde tu empresa en tareas que podrían automatizarse?"
   Introducción manual de datos · Documentos repetitivos · Tareas administrativas · Seguimiento manual de clientes · Información repartida en varias herramientas · Informes que llevan demasiado tiempo.
5. **Metodología** ✏️ — Análisis · Estrategia · Desarrollo · Optimización.
6. **Por qué FACTORNEX** ✏️ — Soluciones a medida · Tecnología comprensible · Integración con lo que ya usas · Trato cercano · Enfoque práctico.
7. **Llamada final** ✏️ — "Empecemos a mejorar la forma de trabajar de tu empresa." Botón: Hablemos de tu proyecto.
8. **Pie** ⏳ — logo, descriptor, enlaces, contacto, aviso legal, privacidad, cookies, datos fiscales.

### Estado de la página de Servicios (2026-11-22) — implementada en `src/pages/servicios.astro`
Una sola página (v1): hero con índice · Agente IA (resumen y enlace a `/agente-ia`) · Automatización de procesos · Desarrollo a medida (cada una con "Problemas que resuelve" y "Ejemplos de aplicación", marcados como ilustrativos) · Cómo trabajamos (Analizamos, Diseñamos, Desarrollamos, Mejoramos; la consultoría es el primer paso, no un servicio aparte) · preguntas frecuentes (inspiradas en las dudas habituales, con palabras propias) · llamada final. Sin precios. Las tarjetas de Inicio enlazan con `/servicios#automatizacion` y `/servicios#desarrollo`. Textos en borrador: revisar antes del lanzamiento.

## Servicios (una página por servicio)
Estructura de cada página: qué es · problemas que resuelve · ejemplos de aplicación · cómo trabajamos · preguntas frecuentes · llamada a la acción.
⏳ Textos de cada servicio.

### Estado de Sobre nosotros (2026-11-22) — implementada en `src/pages/sobre-nosotros.astro`
Hero ("La tecnología tiene sentido cuando mejora las cosas.", con "FACTORNEX en tres ideas") · "Cómo pensamos" (6 valores: soluciones a medida, tecnología comprensible, integración con lo que ya usas, trato cercano, enfoque práctico y transparencia, tomados de "Por qué FACTORNEX") · "Quién está detrás" (nombre del titular) · llamada final. No contiene datos inventados.
- [PENDIENTE] Trayectoria y experiencia verificables del titular (qué ha hecho, en qué sectores, qué le llevó a crear FACTORNEX). Sin años de experiencia, clientes ni resultados que no se puedan comprobar. Opcional: foto profesional.
- No se menciona el empleo actual del titular (pendiente de consultar la compatibilidad con el asesor, ver DECISIONES.md).

## Sobre nosotros ✏️
- Título: La tecnología tiene sentido cuando mejora las cosas.
- Texto base del documento inicial. ⏳ Añadir datos reales del fundador (solo verificables).

### Estado de la página de Contacto (2026-11-22) — implementada en `src/pages/contacto.astro`
Formulario con validación en navegador y servidor, antispam (campo trampa + tiempo mínimo + comprobación de origen) y envío por Resend a `CONTACT_TO_EMAIL`. Campos: nombre, empresa (opcional), correo, teléfono (opcional), servicio de interés, mensaje, casilla de privacidad. Sin respuesta automática al cliente en la v1.
- Texto de primera capa de privacidad junto al botón: borrador; revisar con la política de privacidad completa. [PENDIENTE: plazo de conservación de los datos y proveedores (Resend, Vercel) en la política.]
- La casilla enlaza con `/privacidad`, que aún no existe (404).
- Reservar una llamada: activa desde el 2026-11-22 con la página de reservas de Google Calendar (`RESERVA_URL`); visible en Contacto y en todos los botones "Reservar una llamada". WhatsApp: oculto hasta tener número de empresa.
- Sin probar el envío real hasta que existan las claves de Resend en Vercel.

## Contacto ✏️
- Título: Cuéntanos qué necesitas mejorar.
- Campos: Nombre · Empresa · Correo · Teléfono (opcional) · Servicio de interés · Descripción · Acepto la política de privacidad.
- Botón: Enviar consulta.
- ⏳ Correo, teléfono y horario corporativos.

## Legales ⏳
Aviso legal · Política de privacidad · Política de cookies.
- Titular: Juan Carlos Camaño Martínez (persona física). Nombre comercial: FACTORNEX.
- Domicilio: Avenida de la Constitución 97, 28850 Torrejón de Ardoz, Madrid; NIF: ya facilitado (variable `NIF_TITULAR`, no está en el código). Ambos se muestran **solo en el aviso legal**, no en el pie ni en privacidad.
- Correo de contacto: variable `CONTACT_TO_EMAIL`; se muestra solo en aviso legal y privacidad.

### Estado de las páginas legales (2026-11-22) — BORRADORES, revisar con el asesor antes del lanzamiento
Implementadas en `src/pages/aviso-legal.astro`, `privacidad.astro` y `cookies.astro` (plantilla `src/layouts/Legal.astro`; fecha en `LEGAL_ACTUALIZADO` de `src/config.ts`: actualizarla al cambiar los textos).
- **Aviso legal:** datos del titular (el NIF solo sale aquí), objeto, condiciones de uso, propiedad intelectual, responsabilidad, nota sobre agentes de IA y ejemplos ficticios, ley aplicable. [PENDIENTE: situación de la marca FACTORNEX en la OEPM.]
- **Privacidad:** responsable, finalidad y base legal del formulario (consentimiento), encargados (Vercel, Resend, Google/Gmail), derechos y reclamación ante la AEPD, seguridad. [PENDIENTE: plazo concreto de conservación; garantías de transferencias internacionales de cada proveedor.] Ya incluye la reserva por Google Calendar (base legal: medidas precontractuales, art. 6.1.b).
- **Cookies:** la web **no instala cookies, no usa almacenamiento local y no carga recursos de terceros** (comprobado el 2026-11-22 en la web publicada). Por eso no hay banner. Si se añade analítica o cualquier servicio externo, hay que actualizar esta página y valorar el consentimiento.
