// Validación del formulario de contacto. La usan el navegador (errores al momento) y el servidor
// (que vuelve a validar todo: nunca se confía en lo que envía el navegador).

export const SERVICIOS = [
  { valor: 'agente-ia', texto: 'Agente de IA (WhatsApp y llamadas)' },
  { valor: 'automatizacion', texto: 'Automatización de procesos' },
  { valor: 'desarrollo', texto: 'Desarrollo a medida' },
  { valor: 'no-se', texto: 'Todavía no lo sé' },
] as const;

export type Campo = 'nombre' | 'empresa' | 'correo' | 'telefono' | 'servicio' | 'mensaje' | 'privacidad';
export type Errores = Partial<Record<Campo, string>>;

export interface Datos {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  privacidad: boolean;
}

type Entrada = Record<string, unknown>;

const texto = (v: unknown) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : '');
// El mensaje conserva los saltos de línea; solo se limpian espacios y se acota el exceso de líneas en blanco.
const textoLargo = (v: unknown) =>
  typeof v === 'string' ? v.replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim() : '';

export function validar(entrada: Entrada): { ok: boolean; errores: Errores; datos: Datos } {
  const datos: Datos = {
    nombre: texto(entrada.nombre),
    empresa: texto(entrada.empresa),
    correo: texto(entrada.correo).toLowerCase(),
    telefono: texto(entrada.telefono),
    servicio: texto(entrada.servicio),
    mensaje: textoLargo(entrada.mensaje),
    privacidad: entrada.privacidad === true || entrada.privacidad === 'on' || entrada.privacidad === 'true',
  };
  const errores: Errores = {};

  if (datos.nombre.length < 2) errores.nombre = 'Escribe tu nombre.';
  else if (datos.nombre.length > 100) errores.nombre = 'El nombre es demasiado largo.';

  if (datos.empresa.length > 120) errores.empresa = 'El nombre de la empresa es demasiado largo.';

  if (!datos.correo) errores.correo = 'Escribe tu correo electrónico.';
  else if (datos.correo.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(datos.correo)) {
    errores.correo = 'Revisa el correo: parece que no es válido.';
  }

  if (datos.telefono) {
    const digitos = datos.telefono.replace(/[\s.\-()]/g, '');
    if (!/^\+?\d{9,15}$/.test(digitos)) errores.telefono = 'Revisa el teléfono: usa entre 9 y 15 cifras.';
  }

  if (!SERVICIOS.some((s) => s.valor === datos.servicio)) errores.servicio = 'Elige un servicio de interés.';

  if (datos.mensaje.length < 10) errores.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
  else if (datos.mensaje.length > 2000) errores.mensaje = 'El mensaje es demasiado largo (máximo 2000 caracteres).';

  if (!datos.privacidad) errores.privacidad = 'Para enviar la consulta debes aceptar la política de privacidad.';

  return { ok: Object.keys(errores).length === 0, errores, datos };
}
