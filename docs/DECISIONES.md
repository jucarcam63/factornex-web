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
| 2026-11-22 | Sistema de citas: **Calendly** (enlace normal, sin incrustar) | El titular ya tiene cuenta; el plan gratuito basta para una llamada de diagnóstico; sin incrustar no hace falta consentimiento de cookies. Falta pegar el enlace en `RESERVA_URL` (`src/config.ts`) |
| 2026-11-22 | Formulario de contacto: endpoint `/api/contacto` (adaptador de Vercel) + Resend; las consultas llegan a `jucarcam63@gmail.com` (variable `CONTACT_TO_EMAIL`, hasta tener contacto@factornex.es) | Los conectores de Claude no sirven para la web publicada; Resend es la decisión ya tomada. Sin dominio verificado, Resend solo envía a la cuenta que lo creó |
| 2026-11-22 | El correo de contacto no se muestra en el pie ni en el formulario; solo en el aviso legal (obligatorio) | Evitar correo basura. Quien quiera escribir usa el formulario |
| 2026-11-22 | WhatsApp de contacto: no se publica el móvil personal; la sección queda preparada y oculta hasta tener número de empresa (`WHATSAPP_NUMERO` en `src/config.ts`) | Un número publicado se rastrea y no se puede retirar; el titular comprará uno de empresa |
| 2026-11-22 | Sin precio publicado en la v1; llamada a la acción: reservar una llamada / diagnóstico gratuito | Precio aún sin definir ni validar con clientes reales. Revisar tras los 3 primeros clientes y publicar "desde X €/mes" si el precio es estable |

## Pendientes
1. Datos legales: correo de contacto y alta censal (autónomo). Ya facilitados: domicilio (Avenida de la Constitución 97, 28850 Torrejón de Ardoz, Madrid; se muestra en el pie) y NIF (guardado solo en el `.env` local, que no se sube a GitHub; para publicarlo hay que añadir la variable `NIF_TITULAR` en Vercel → Settings → Environment Variables; **solo se muestra en el aviso legal**, nunca en el pie ni en otras páginas, por decisión del titular).
2. Compatibilidad con el empleo actual antes de facturar (consultar con asesor).
3. Comprobar marca/nombre comercial FACTORNEX en OEPM y registrar el dominio.
4. Crear el evento "Diagnóstico gratuito" en Calendly y pegar su enlace público en `RESERVA_URL`. Crear la cuenta de Resend y añadir `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y (opcional) `CONTACT_FROM_EMAIL` en Vercel.
5. Textos del agente (producto estrella), de los servicios complementarios y de los ejemplos de Soluciones.
6. Voz/personaje propio de Nexo (el nombre ya está decidido) y comprobar que "Nexo" no esté registrado como marca en nuestra clase.
7. Definir precio y condiciones del agente (para la llamada comercial; publicar más adelante).
