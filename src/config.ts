// Configuración única del sitio. Cambia aquí los datos; el resto de la web los lee de este archivo.

export const SITE = {
  nombre: 'FACTORNEX',
  descriptor: 'Soluciones inteligentes para negocios',
  eslogan: 'Transformamos la forma de trabajar.',
  url: 'https://factornex.es',
  idioma: 'es-ES',
} as const;

/**
 * Destino del botón "Reservar una llamada": página de reservas de Google Calendar (cuenta jucarcam63), evento
 * "Diagnóstico gratuito FACTORNEX" de 30 min con Google Meet. Enlace normal, sin incrustar, para no necesitar
 * consentimiento de cookies. Si se quiere volver al formulario: '/contacto#formulario'.
 */
export const RESERVA_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2We1FmPWIb-3VDJxlnSNj1f03bAp6vv0LNE57hGfFGoTHNMGTyL8LYSD3zy0--DBqlGsqRu8Rk';
/** true cuando RESERVA_URL es un enlace externo: entonces la página de Contacto muestra la opción de reservar. */
export const RESERVA_EXTERNA = RESERVA_URL.startsWith('http');

/**
 * Número de WhatsApp de contacto en formato internacional sin "+" ni espacios (p. ej. '34600000000').
 * null = no se muestra. [PENDIENTE: número de empresa; por decisión del titular no se publica el móvil personal.]
 */
export const WHATSAPP_NUMERO: string | null = null;
/** Mensaje que aparece escrito al abrir WhatsApp desde la web (el usuario puede cambiarlo antes de enviar). */
export const WHATSAPP_MENSAJE = 'Hola, quiero información sobre el agente de IA para mi negocio.';
/** Enlace de WhatsApp listo para usar, o null mientras no haya número (entonces no se muestra ningún botón). */
export const WHATSAPP_URL: string | null = WHATSAPP_NUMERO
  ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`
  : null;

export const MENU = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Agente IA', href: '/agente-ia' },
  { texto: 'Servicios', href: '/servicios' },
  { texto: 'Sobre nosotros', href: '/sobre-nosotros' },
  { texto: 'Contacto', href: '/contacto' },
] as const;

/** Páginas que van al sitemap.xml (no incluir páginas internas ni /api). */
export const PAGINAS_SITEMAP = ['/', '/agente-ia', '/servicios', '/sobre-nosotros', '/contacto', '/aviso-legal', '/privacidad', '/cookies'] as const;

export const LEGALES = [
  { texto: 'Aviso legal', href: '/aviso-legal' },
  { texto: 'Política de privacidad', href: '/privacidad' },
  { texto: 'Política de cookies', href: '/cookies' },
] as const;

/** Datos del titular para el pie y los textos legales. */
export const EMPRESA = {
  titular: 'Juan Carlos Camaño Martínez',
  nombreComercial: 'FACTORNEX',
  // El domicilio NO se muestra en el pie ni en el resto de la web (decisión del titular: es también su domicilio particular).
  // Solo aparece en el aviso legal (src/pages/aviso-legal.astro), donde la LSSI lo exige.
  domicilio: 'Avenida de la Constitución 97, 28850 Torrejón de Ardoz, Madrid',
  // NIF y correo de contacto NO están aquí a propósito (decisión del titular: no mostrarlos en el pie ni en el resto de la web).
  // Se leen de las variables de entorno NIF_TITULAR y CONTACT_TO_EMAIL, y solo los usan las páginas legales
  // (aviso legal y privacidad, donde son obligatorios): src/pages/aviso-legal.astro y src/pages/privacidad.astro.
} as const;

/** Fecha de la última revisión de los textos legales. Actualizar al cambiarlos. */
export const LEGAL_ACTUALIZADO = '22 de noviembre de 2026';

/**
 * Logos (WebP con fondo transparente, aportados por el titular el 2026-11-22). Siguen siendo raster:
 * sustituir por los SVG definitivos cuando existan (ver docs/MARCA.md).
 * - negativo: letras blancas, para fondos oscuros (cabecera y pie de la web)
 * - principal: letras azul noche, para fondos claros (documentos, correos)
 * - símbolo: solo el símbolo
 */
export const LOGO = {
  src: '/logo/factornex-negativo.webp',
  ancho: 720,
  alto: 230,
  alt: 'FACTORNEX',
} as const;
export const LOGO_PRINCIPAL = { src: '/logo/factornex-principal.webp', ancho: 720, alto: 238, alt: 'FACTORNEX' } as const;
export const LOGO_SIMBOLO = { src: '/logo/factornex-simbolo.webp', ancho: 274, alto: 320, alt: 'FACTORNEX' } as const;
