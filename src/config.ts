// Configuración única del sitio. Cambia aquí los datos; el resto de la web los lee de este archivo.

export const SITE = {
  nombre: 'FACTORNEX',
  descriptor: 'Soluciones inteligentes para negocios',
  eslogan: 'Transformamos la forma de trabajar.',
  url: 'https://factornex.es',
  idioma: 'es-ES',
} as const;

/**
 * Destino del botón "Reservar una llamada". Sistema elegido: Calendly (enlace normal, sin incrustar,
 * para no necesitar consentimiento de cookies). [PENDIENTE: pegar aquí el enlace público de Calendly,
 * p. ej. 'https://calendly.com/tu-usuario/diagnostico']. Mientras tanto lleva al formulario de Contacto.
 */
export const RESERVA_URL = '/contacto#formulario';
/** true cuando RESERVA_URL es un enlace externo (Calendly): entonces la página de Contacto muestra la opción de reservar. */
export const RESERVA_EXTERNA = RESERVA_URL.startsWith('http');

/**
 * Número de WhatsApp de contacto en formato internacional sin "+" ni espacios (p. ej. '34600000000').
 * null = no se muestra. [PENDIENTE: número de empresa; por decisión del titular no se publica el móvil personal.]
 */
export const WHATSAPP_NUMERO: string | null = null;

export const MENU = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Agente IA', href: '/agente-ia' },
  { texto: 'Servicios', href: '/servicios' },
  { texto: 'Soluciones', href: '/soluciones' },
  { texto: 'Sobre nosotros', href: '/sobre-nosotros' },
  { texto: 'Contacto', href: '/contacto' },
] as const;

export const LEGALES = [
  { texto: 'Aviso legal', href: '/aviso-legal' },
  { texto: 'Política de privacidad', href: '/privacidad' },
  { texto: 'Política de cookies', href: '/cookies' },
] as const;

/** Datos del titular para el pie y los textos legales. */
export const EMPRESA = {
  titular: 'Juan Carlos Camaño Martínez',
  nombreComercial: 'FACTORNEX',
  // El NIF NO se muestra en el pie ni en el resto de la web (decisión del titular).
  // Solo debe aparecer en el aviso legal, donde es obligatorio. No usarlo en ningún otro sitio.
  // No se guarda en el código: se lee de la variable de entorno NIF_TITULAR (.env local y Vercel).
  nif: import.meta.env.NIF_TITULAR ?? '[PENDIENTE: NIF]',
  domicilio: 'Avenida de la Constitución 97, 28850 Torrejón de Ardoz, Madrid',
  // Correo de contacto: NO se muestra en el pie (evita correo basura). Se mostrará solo en el aviso legal, donde es obligatorio.
  // Los formularios llegan a CONTACT_TO_EMAIL (variable de entorno, no en el código).
  correo: '[PENDIENTE: correo para el aviso legal]',
} as const;

/** Logo. Provisional hasta tener los SVG definitivos (ver docs/MARCA.md). */
export const LOGO = {
  src: '/logo/factornex-principal-provisional.png',
  ancho: 1159,
  alto: 435,
  alt: 'FACTORNEX',
} as const;
