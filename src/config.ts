// Configuración única del sitio. Cambia aquí los datos; el resto de la web los lee de este archivo.

export const SITE = {
  nombre: 'FACTORNEX',
  descriptor: 'Soluciones inteligentes para negocios',
  eslogan: 'Transformamos la forma de trabajar.',
  url: 'https://factornex.es',
  idioma: 'es-ES',
} as const;

/** Destino del botón "Reservar una llamada" (Google Calendar o Cal.com). */
// [PENDIENTE: URL del sistema de citas — ver DECISIONES.md, pendiente 4]. Mientras tanto, lleva a Contacto.
export const RESERVA_URL = '/contacto';

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
  nif: '[PENDIENTE: NIF]',
  domicilio: '[PENDIENTE: domicilio a efectos de notificaciones]',
  correo: '[PENDIENTE: correo de contacto]',
} as const;

/** Logo. Provisional hasta tener los SVG definitivos (ver docs/MARCA.md). */
export const LOGO = {
  src: '/logo/factornex-principal-provisional.png',
  ancho: 1159,
  alto: 435,
  alt: 'FACTORNEX',
} as const;
