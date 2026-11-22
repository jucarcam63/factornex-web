const fs = require('fs');
const anual = [ // [fecha de inicio, nombre]  (se repiten cada año)
  ['2027-01-01', 'Año Nuevo'], ['2027-01-06', 'Epifanía del Señor'], ['2027-05-01', 'Fiesta del Trabajo'],
  ['2027-05-02', 'Fiesta de la Comunidad de Madrid'], ['2027-08-15', 'Asunción de la Virgen'],
  ['2027-10-12', 'Fiesta Nacional de España'], ['2027-11-01', 'Todos los Santos'],
  ['2026-12-06', 'Día de la Constitución'], ['2026-12-08', 'Inmaculada Concepción'], ['2026-12-25', 'Navidad'],
  ['2026-12-24', 'Nochebuena (no oficial)'], ['2026-12-31', 'Nochevieja (no oficial)'],
];
const unicos = [ // solo ese día (festivos que cambian cada año)
  ['2026-12-07', 'Traslado del Día de la Constitución (Madrid 2026)'],
  ['2027-03-19', 'San José (Madrid 2027)'],
  ['2027-03-25', 'Jueves Santo (2027)'],
  ['2027-03-26', 'Viernes Santo (2027)'],
  ['2027-08-16', 'Traslado de la Asunción (Madrid 2027)'],
];
const f = (d) => d.replace(/-/g, '');
const sig = (d) => { const x = new Date(d + 'T00:00:00Z'); x.setUTCDate(x.getUTCDate() + 1); return x.toISOString().slice(0, 10); };
const ev = (d, nombre, anualSi, i) => [
  'BEGIN:VEVENT',
  `UID:festivo-factornex-${f(d)}-${i}@factornex.es`,
  'DTSTAMP:20261122T120000Z',
  `DTSTART;VALUE=DATE:${f(d)}`,
  `DTEND;VALUE=DATE:${f(sig(d))}`,
  ...(anualSi ? ['RRULE:FREQ=YEARLY'] : []),
  `SUMMARY:Festivo - no reservar: ${nombre}`,
  'DESCRIPTION:Bloquea la página de reservas de FACTORNEX (diagnóstico gratuito) en festivos nacionales y de la Comunidad de Madrid.',
  'TRANSP:OPAQUE',
  'END:VEVENT',
];
const lineas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//FACTORNEX//Festivos//ES', 'CALSCALE:GREGORIAN',
  ...anual.flatMap(([d, n], i) => ev(d, n, true, i)),
  ...unicos.flatMap(([d, n], i) => ev(d, n, false, 100 + i)),
  'END:VCALENDAR'];
fs.writeFileSync('festivos-factornex.ics', lineas.join('\r\n') + '\r\n', 'utf8');
console.log('eventos:', anual.length + unicos.length);
