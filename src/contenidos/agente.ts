// Textos compartidos entre Inicio y la página del Agente IA. Borradores: ver docs/CONTENIDOS.md.

export const pasosHistoria = [
  { titulo: 'Escribe', texto: 'Un domingo a las 19:42, una clienta pregunta por WhatsApp si tienes hueco. Tu negocio está cerrado.' },
  { titulo: 'Responde', texto: 'El agente contesta enseguida y se presenta como asistente virtual.' },
  { titulo: 'Entiende', texto: 'Averigua qué servicio necesita, para cuándo y qué más quiere saber.' },
  { titulo: 'Presupuesta y agenda', texto: 'Calcula el presupuesto con tus tarifas y reserva el hueco en tu calendario.' },
  { titulo: 'Te avisa', texto: 'Recibes el aviso con los datos del cliente. El lunes solo tienes que atenderla.' },
];

export const integraciones = [
  { titulo: 'WhatsApp', texto: 'El canal por el que tus clientes te escriben.' },
  { titulo: 'Google', texto: 'Tu calendario y tu correo de Gmail, para ver huecos, agendar citas y enviar avisos.' },
  { titulo: 'Outlook', texto: 'Tu calendario y tu correo de Outlook.' },
  { titulo: 'Tu CRM', texto: 'El programa donde gestionas a tus clientes, para que cada conversación quede guardada.' },
];
export const notaIntegraciones = 'Si usas otra herramienta, lo vemos en la llamada.';

export const preguntasComunes = [
  { pregunta: '¿Atiende llamadas además de WhatsApp?', respuesta: 'Sí. El agente atiende tanto los mensajes de WhatsApp como las llamadas de tu negocio, a cualquier hora.' },
  { pregunta: '¿Y si se equivoca?', respuesta: 'Trabaja con la información y las tarifas que tú le facilitas. Cuando no está seguro o la consulta se sale de lo habitual, no improvisa: pasa el caso a una persona de tu equipo.' },
  { pregunta: '¿Cómo paso a una persona?', respuesta: 'Cuando el agente no sabe responder, o cuando el cliente lo pide, avisa a tu equipo para que lo retome una persona.' },
  { pregunta: '¿Se conecta con mi programa?', respuesta: 'Se conecta con las herramientas habituales: tu calendario, tu correo (Gmail u Outlook) y tu CRM. Si usas otro programa de gestión, lo vemos en la llamada.' },
  { pregunta: '¿Mis clientes sabrán que es una IA?', respuesta: 'Sí. El agente siempre se presenta como asistente virtual de IA. Es lo correcto y lo exige la normativa europea sobre inteligencia artificial.' },
];
