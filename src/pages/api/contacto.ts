import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { SERVICIOS, validar } from '../../lib/validacion';

// Esta ruta se ejecuta en el servidor (el resto de la web es estática).
export const prerender = false;

const TIEMPO_MINIMO_MS = 2500; // un humano tarda más que esto en rellenar el formulario

const respuesta = (cuerpo: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(cuerpo), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

export const POST: APIRoute = async ({ request, redirect }) => {
  const quiereJson = (request.headers.get('accept') ?? '').includes('application/json');
  // Sin JavaScript el navegador envía el formulario clásico: se responde con una redirección.
  const salir = (estado: 'ok' | 'invalido' | 'error', cuerpo: Record<string, unknown>, status = 200) =>
    quiereJson ? respuesta(cuerpo, status) : redirect(`/contacto?estado=${estado}#formulario`, 303);

  // Solo se aceptan envíos desde nuestra propia web.
  const origen = request.headers.get('origin');
  if (origen && new URL(origen).host !== new URL(request.url).host) {
    return respuesta({ ok: false, mensaje: 'Origen no permitido.' }, 403);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return salir('error', { ok: false, mensaje: 'No hemos podido leer el formulario.' }, 400);
  }

  // Antispam: el campo trampa ("sitio_web") lo rellenan los robots, y los robots envían demasiado rápido.
  const trampa = String(form.get('sitio_web') ?? '').trim();
  // La hora de apertura la pone el navegador con JavaScript; sin JavaScript no llega y solo actúa la trampa.
  const abierto = Number(form.get('abierto'));
  const demasiadoRapido = Number.isFinite(abierto) && abierto > 0 && Date.now() - abierto < TIEMPO_MINIMO_MS;
  if (trampa || demasiadoRapido) {
    // Se responde "ok" para no dar pistas al robot, pero no se envía nada.
    return salir('ok', { ok: true });
  }

  const { ok, errores, datos } = validar(Object.fromEntries(form));
  if (!ok) return salir('invalido', { ok: false, errores }, 422);

  const clave = await getSecret('RESEND_API_KEY');
  const destino = await getSecret('CONTACT_TO_EMAIL');
  const origenCorreo = (await getSecret('CONTACT_FROM_EMAIL')) || 'FACTORNEX Web <onboarding@resend.dev>';

  const servicio = SERVICIOS.find((s) => s.valor === datos.servicio)?.texto ?? datos.servicio;
  const cuerpoCorreo = [
    'Nueva consulta desde la web de FACTORNEX',
    '',
    `Nombre: ${datos.nombre}`,
    `Empresa: ${datos.empresa || '(no indicada)'}`,
    `Correo: ${datos.correo}`,
    `Teléfono: ${datos.telefono || '(no indicado)'}`,
    `Servicio de interés: ${servicio}`,
    '',
    'Mensaje:',
    datos.mensaje,
    '',
    '— Ha aceptado la política de privacidad.',
  ].join('\n');

  if (!clave || !destino) {
    if (import.meta.env.DEV) {
      // En local, sin claves, no se envía nada: solo se muestra en la consola del servidor.
      console.log('[contacto · modo prueba, no se envía correo]\n' + cuerpoCorreo);
      return salir('ok', { ok: true });
    }
    console.error('[contacto] Faltan RESEND_API_KEY o CONTACT_TO_EMAIL en las variables de entorno.');
    return salir('error', { ok: false, mensaje: 'El envío no está disponible ahora mismo. Inténtalo más tarde.' }, 503);
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${clave}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: origenCorreo,
        to: [destino],
        reply_to: datos.correo,
        subject: `Nueva consulta web: ${datos.nombre}`.slice(0, 150),
        text: cuerpoCorreo,
      }),
    });
    if (!r.ok) {
      console.error('[contacto] Resend respondió con estado', r.status);
      return salir('error', { ok: false, mensaje: 'No hemos podido enviar tu consulta. Inténtalo de nuevo en unos minutos.' }, 502);
    }
  } catch (e) {
    console.error('[contacto] Error de red al llamar a Resend', e instanceof Error ? e.message : e);
    return salir('error', { ok: false, mensaje: 'No hemos podido enviar tu consulta. Inténtalo de nuevo en unos minutos.' }, 502);
  }

  return salir('ok', { ok: true });
};
