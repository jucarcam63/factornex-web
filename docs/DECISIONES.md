# DECISIONES

## Tomadas
| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-11-22 | Desarrollar con Claude Code (no Lovable/Bolt/Replit) | Control total del código, sin dependencia de plataforma |
| 2026-11-22 | Stack Astro + Tailwind + Vercel | Rápido, buen SEO, coste bajo o nulo al inicio |
| 2026-11-22 | Nombre comercial FACTORNEX, dominio factornex.es | Confirmado por el titular |
| 2026-11-22 | Respetar el logo original; solo cambiar el texto a FACTORNEX | Indicación del titular |
| 2026-11-22 | Logo en 4 versiones; descriptor en gris y más fino | Legibilidad en tamaños pequeños y jerarquía |
| 2026-11-22 | Descriptor: "Soluciones inteligentes para negocios" | Inclusivo (autónomos, comercios, pymes); el SEO se trabaja en la web, no en el logo |
| 2026-11-22 | Colores extraídos del logo original (ver MARCA.md) | Fuente de verdad: logo original |
| 2026-11-22 | 3 servicios en la v1: IA aplicada · Automatización de procesos · Desarrollo a medida | Mensaje claro; UX/UI y consultoría van dentro de cada servicio |
| 2026-11-22 | Sin submarcas ("FACTORNEX IA", etc.) | Complican sin aportar en una empresa que empieza |
| 2026-11-22 | "Soluciones" = ejemplos de lo que podemos hacer, no casos realizados | Mostrar posibilidades sin inventar clientes; siempre etiquetado como "ejemplo" |
| 2026-11-22 | Formulario: endpoint en Vercel + Resend → correo de FACTORNEX | Fiable, sin depender de contraseñas de Gmail; alternativa sencilla: Formspree |
| 2026-11-22 | Correo corporativo: Google Workspace (recomendado) | Mismo ecosistema que Gmail y Google Calendar para citas |
| 2026-11-22 | Reserva de llamadas en la v1 | Botón "Reservar una llamada" con Google Calendar (páginas de reserva) o Cal.com |
| 2026-11-22 | Titular: Juan Carlos Camaño Martínez (persona física), nombre comercial FACTORNEX | Datos para aviso legal y privacidad |
| 2026-11-22 | Producto estrella: agente de IA que atiende llamadas y WhatsApp (responde, presupuesta, agenda, avisa) | Impacto directo y fácil de entender; captar clientes cuanto antes. Automatización y desarrollo a medida quedan como servicios complementarios |
| 2026-11-22 | Público: negocios, autónomos y empresas (pymes). Particulares descartados | Foco comercial y mensaje claro |
| 2026-11-22 | La "X" final de FACTORNEX lleva degradado (azul → turquesa); el resto del nombre, azul noche plano | Enlaza el nombre con los colores del símbolo. Versión de una sola tinta aparte si hace falta |
| 2026-11-22 | Cada cliente elige el nombre de su agente (Lucía, Antonio…); el agente propio de FACTORNEX se llamará **Nexo** | Quien habla con el agente es el cliente del negocio, que lo verá con la marca de ese negocio. Nexo: corto, serio, enlaza con "conexión" |
| 2026-11-22 | Informe de actividad del agente al cliente: se menciona sin detalle | Aún no se sabe qué datos permite sacar el sistema. Concretar contenido y frecuencia antes de lanzar |
| 2026-11-22 | "Cómo empezamos" en 4 pasos: llamada de diagnóstico gratuito → configuración con tarifas y horarios → prueba con el cliente → puesta en marcha | Propuesta aprobada por el titular en principio |
| 2026-11-22 | Tema oscuro para toda la web: fondo en degradado azul noche, bordes de tarjetas con degradado y efectos al pasar el ratón | Más elegante y más propio del sector digital y de la IA, sin perder los colores corporativos. Detalles y contrastes en MARCA.md |
| 2026-11-22 | Sistema de citas: **Google Calendar (página de reservas)** de la cuenta jucarcam63, evento "Diagnóstico gratuito FACTORNEX" de 30 min con Google Meet, laborables 9:00-17:00, aviso mínimo 4 h, hasta 60 días. Enlace en `RESERVA_URL` (`src/config.ts`), abre en pestaña nueva y sin incrustar | Sustituye a Calendly: la cuenta de Calendly lleva el logo de Nutridit y mezclaría marcas. Google Calendar es gratuito y sin marcas ajenas; sin incrustar no hace falta consentimiento de cookies. **Confirmado el 2026-11-22:** cada reserva crea un evento en el calendario y Google envía un correo de confirmación con invitación tanto al titular como a quien reserva. Revisado de nuevo cuando el titular aclaró que el evento de Nutridit era una prueba: se mantiene Google Calendar (ya configurado, con festivos bloqueados y sin terceros nuevos); Calendly queda como alternativa si se quiere marca propia o más campos, y entonces habría que rehacer el bloqueo de festivos y cambiar el logo de la cuenta |
| 2026-11-22 | Las reservas no se ofrecen en festivos nacionales y de la Comunidad de Madrid, ni el 24 y 31 de diciembre. Se bloquean con eventos de día completo marcados como "ocupado" en el calendario principal de jucarcam63 (17 eventos: 12 que se repiten cada año y 5 de fecha variable), importados desde `docs/festivos-reservas.ics` | Fuentes oficiales: Decreto 75/2025 (Madrid 2026), Decreto 82/2026 (Madrid 2027, BOCM 1-10-2026) y resoluciones de la Dirección General de Trabajo (BOE-A-2025-21667 y BOE-A-2026-21254). Comprobado en la página pública de reservas |
| 2026-11-22 | Formulario de contacto: endpoint `/api/contacto` (adaptador de Vercel) + Resend; las consultas llegan a `jucarcam63@gmail.com` (variable `CONTACT_TO_EMAIL`, hasta tener contacto@factornex.es) | Los conectores de Claude no sirven para la web publicada; Resend es la decisión ya tomada. Sin dominio verificado, Resend solo envía a la cuenta que lo creó |
| 2026-11-22 | El correo de contacto no se muestra en el pie ni en el formulario; solo en el aviso legal (obligatorio) | Evitar correo basura. Quien quiera escribir usa el formulario |
| 2026-11-22 | WhatsApp de contacto: no se publica el móvil personal; la sección queda preparada y oculta hasta tener número de empresa (`WHATSAPP_NUMERO` en `src/config.ts`) | Un número publicado se rastrea y no se puede retirar; el titular comprará uno de empresa |
| 2026-11-22 | Sin precio publicado en la v1; llamada a la acción: reservar una llamada / diagnóstico gratuito | Precio aún sin definir ni validar con clientes reales. Revisar tras los 3 primeros clientes y publicar "desde X €/mes" si el precio es estable |

## Pendientes
1. Datos legales: correo de contacto y alta censal (autónomo). Ya facilitados: domicilio (Avenida de la Constitución 97, 28850 Torrejón de Ardoz, Madrid; se muestra en el pie) y NIF (guardado solo en el `.env` local y en la variable secreta `NIF_TITULAR` de Vercel, nunca en GitHub; **solo se muestra en el aviso legal**, nunca en el pie ni en otras páginas, por decisión del titular). Estado: NIF ya publicado en el aviso legal (2026-11-22).
2. Compatibilidad con el empleo actual antes de facturar (consultar con asesor).
3. Comprobar marca/nombre comercial FACTORNEX en OEPM y registrar el dominio.
4. Reserva de llamadas: resuelta con Google Calendar (ver decisiones). El evento "Diagnóstico gratuito FACTORNEX" que se creó en Calendly (cuenta jucarcam65) ya no se usa y puede borrarse; no tocar el evento de Nutridit. La página de reservas muestra la foto y el nombre de la cuenta de Google (Juan Carlos Camaño). Mejora opcional: no se ha añadido teléfono ni empresa al formulario de reserva (solo nombre, apellido y correo, por minimizar datos).
5. Textos del agente (producto estrella), de los servicios complementarios y de los ejemplos de Soluciones.
6. Voz/personaje propio de Nexo (el nombre ya está decidido) y comprobar que "Nexo" no esté registrado como marca en nuestra clase.
7. Definir precio y condiciones del agente (para la llamada comercial; publicar más adelante).
