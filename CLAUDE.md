# FACTORNEX — Web corporativa

Este archivo lo lee Claude Code al empezar cada sesión. Mantenlo corto y actualizado.

## Qué es este proyecto
Web corporativa de FACTORNEX (factornex.es), empresa española de servicios de inteligencia artificial,
automatización y desarrollo de software para pymes, autónomos y comercios.
Objetivo único de la web: que un negocio entienda qué hacemos y **reserve una llamada**.
Producto estrella: agente de IA que atiende llamadas y WhatsApp. Público: negocios, autónomos y pymes (no particulares).
Sin precios publicados en la v1.

## Documentos de referencia (leer antes de trabajar)
- `docs/MARCA.md` → logo, colores, tipografías, tono. Fuente de verdad visual.
- `docs/CONTENIDOS.md` → textos aprobados y borradores de cada página.
- `docs/PROGRESO.md` → qué está hecho, qué toca ahora. **Leer al inicio y actualizar al final de cada sesión.**
- `docs/DECISIONES.md` → decisiones tomadas y pendientes. No contradecir una decisión cerrada sin preguntar.
- `docs/REFERENCIAS.md` → webs de referencia analizadas: qué aprovechar y qué descartar.

## Stack
- Framework: Astro + Tailwind CSS (web estática, rápida, buen SEO).
- Repositorio: GitHub (privado).
- Alojamiento: Vercel (despliegue automático desde la rama `main`).
- Formulario de contacto: endpoint en Vercel + Resend, con validación y antispam (honeypot).
- Citas: botón "Reservar una llamada" enlazado a Google Calendar (páginas de reserva) o Cal.com. URL en una sola variable de configuración.
- Titular legal: Juan Carlos Camaño Martínez (persona física), nombre comercial FACTORNEX.
- Analítica: sin cookies (p. ej. Vercel Web Analytics) para no necesitar banner de consentimiento de analítica.

## Reglas obligatorias
1. Todo en español de España: textos, menús, botones, formularios, metadatos, URLs.
2. La marca se escribe siempre **FACTORNEX** (mayúsculas). Nunca "Factor IA" ni "Factornext".
3. **Logo:** usar solo el archivo original en `public/logo/`. Si no existe, dejar un hueco reservado
   con el nombre como texto. Prohibido dibujar, generar o "mejorar" el símbolo.
4. No inventar clientes, testimonios, cifras, años de experiencia, certificaciones ni casos de éxito.
5. Sin textos de relleno (lorem ipsum). Si falta un texto, marcarlo `[PENDIENTE: ...]` y avisar.
6. Ningún botón sin destino. Ningún formulario sin validación (cliente y servidor) y antispam.
7. Diseño adaptable (móvil primero), accesible (contraste, foco visible, etiquetas) y rápido.
8. Nada de robots humanoides ni imágenes de IA futuristas. Estilo: líneas de conexión, flujos, geometría.
9. Textos legales (aviso legal, privacidad, cookies) con los datos reales de la empresa; si faltan, `[PENDIENTE]`.
10. Componentes reutilizables y código simple. No añadir dependencias sin motivo.

## Forma de trabajar
- Antes de cambios grandes, proponer un plan breve y esperar aprobación.
- Trabajar por páginas/secciones pequeñas; mostrar el resultado en local (`npm run dev`) antes de seguir.
- Al terminar cada sesión: actualizar `docs/PROGRESO.md` y, si se decidió algo, `docs/DECISIONES.md`.
- Commits pequeños y en español: `feat: sección hero de inicio`, `fix: validación del formulario`.

## Comandos
- `npm install` → instalar dependencias
- `npm run dev` → servidor local (http://localhost:4321)
- `npm run build` → compilar para producción
