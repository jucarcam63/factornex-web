# MARCA — FACTORNEX

Estado: **aprobada** (salvo los puntos marcados [PENDIENTE]).

## Nombre
- FACTORNEX (siempre en mayúsculas). Nunca "Factor IA" ni "Factornext".
- Dominio previsto: factornex.es [PENDIENTE: registro de dominio y comprobación de marca en OEPM]

## Descriptor y eslogan
- Descriptor: **Soluciones inteligentes para negocios**
  - Motivo: "negocios" incluye a autónomos, comercios y pymes sin excluir a empresas grandes; "empresas" podía alejar a negocios pequeños.
  - El descriptor del logo no influye en el SEO. Los términos de búsqueda ("para empresas", "pymes", "autónomos") se trabajan en títulos y textos de la web.
- Eslogan: Transformamos la forma de trabajar.

## Logotipo
Basado en el logo original (símbolo de Factor IA) con el texto cambiado a FACTORNEX. **No se modifica el símbolo.**

### Composición
- Símbolo a la izquierda + "FACTORNEX" en una línea: las letras F-A-C-T-O-R-N-E en azul noche plano y la **X final con degradado** (azul oscuro abajo → turquesa arriba), como el símbolo. Decidido 2026-11-22.
- Para usos a una sola tinta (sellos, fax, blanco y negro) se podrá preparar una versión con la X plana; la principal mantiene el degradado.
- Descriptor (solo en la versión completa): una línea, gris pizarra, peso más fino y tamaño menor que el nombre, para no competir con él.

### Versiones
| Versión | Contenido | Uso |
|---|---|---|
| Principal | Símbolo + FACTORNEX | Cabecera web, firma de correo, documentos |
| Completa | Símbolo + FACTORNEX + descriptor | Presentaciones, portada de documentos, cartelería |
| Negativo | Principal en blanco | Fondos azul noche |
| Símbolo | Solo el símbolo | Favicon, avatar de redes, icono de app |

### Archivos (`public/logo/`)
- [PENDIENTE] Versiones vectoriales definitivas: `factornex-simbolo.svg`, `factornex-principal.svg`, `factornex-completo.svg` y `factornex-negativo.svg`. Mientras tanto la web usa los WebP con fondo transparente de abajo.
- **Logos actuales (2026-11-22, aportados por el titular; WebP/PNG con fondo transparente, aún raster):**
  - Originales sin tocar en `public/logo/originales/` (2000 px): `factornex-principal-original.webp` (letras azul noche, para fondos claros), `factornex-negativo-original.webp` (letras blancas, para fondos oscuros) y `factornex-simbolo-original.png`.
  - Versiones recortadas y optimizadas para la web: `factornex-negativo.webp` (la que usa la cabecera y el pie, sobre fondo oscuro), `factornex-principal.webp` y `factornex-simbolo.webp` (720 px de ancho las dos primeras). Definidas en `LOGO`, `LOGO_PRINCIPAL` y `LOGO_SIMBOLO` de `src/config.ts`.
  - Favicons a partir del símbolo: `public/favicon.png` (256), `favicon-32.png` y `apple-touch-icon.png` (180, sobre fondo azul noche).
  - La "X" con degradado es correcta (decidido). Esta versión ya no lleva descriptor, así que el problema de "para empresas" solo reaparecería en la versión completa (con descriptor): corregirlo a "para negocios" cuando se haga.
- El logo original de Factor IA (referencia de colores) está en `docs/referencias/logo-original-factor-ia.png`, fuera de la carpeta pública.

### Reglas de uso
- No deformar, girar, cambiar colores del símbolo ni añadir efectos (sombras, brillos).
- Margen de seguridad alrededor: como mínimo la altura de la "F" del texto.
- Tamaño mínimo de la versión principal en pantalla: 120 px de ancho. Por debajo, usar solo el símbolo.

## Colores (medidos en el logo ORIGINAL de Factor IA)
Fuente de verdad: el logo original. Valores muestreados del PNG (2816 × 1536 px); el archivo vectorial definitivo puede variar ligeramente.

### Del símbolo (de abajo a arriba del degradado)
| Nombre | HEX | Dónde aparece |
|---|---|---|
| Azul intenso | #0D2F9B | Nodo inferior izquierdo |
| Azul real | #0C4AA5 | Tramo bajo del símbolo |
| Azul medio | #0B7BBB | Lado izquierdo / nodo superior izquierdo |
| Azul cielo | #16A4CE | Tramo central |
| Turquesa | #2ACED7 | Nodo superior derecho |
| Turquesa claro (brillo) | #3CE7DF | Reflejos del trazo interior |

### Del texto
| Nombre | HEX | Dónde aparece |
|---|---|---|
| Azul noche | #0A2E62 | "FACTOR" (nombre) |
| Gris | #858585 | Línea de servicios del logo antiguo |
| Turquesa del texto | #16B5D2 | Degradado de la "A" de "IA" (no se usa en FACTORNEX) |

Nota: en el logo provisional de FACTORNEX el texto salió algo más claro (#192D68). En la versión vectorial usar **#0A2E62**, el del original.

### Paleta para la web
| Uso | Color | HEX |
|---|---|---|
| Titulares, texto principal, fondos destacados | Azul noche | #0A2E62 |
| Botón principal, enlaces | Azul medio | #0B7BBB |
| Botón hover, acentos (con moderación) | Turquesa | #2ACED7 |
| Fondos de degradado | Azul intenso → Turquesa | #0D2F9B → #0B7BBB → #2ACED7 |
| Texto secundario, descriptor | Gris | #858585 (en web, oscurecer a #6B6B6B si no llega a contraste AA) |
| Fondo secundario | Gris claro | #F2F5F8 |
| Fondo principal | Blanco | #FFFFFF |

- Proporción orientativa (versión clara original): 60 % blanco y claros · 30 % azul noche · 10 % azules y turquesa.

### Tema oscuro de la web (decidido 2026-11-22)
La web usa fondo oscuro, por ser más elegante y más propio del sector digital y de la IA, sin dejar atrás los colores corporativos. Definido en `src/styles/global.css` con colores semánticos (fondo, texto, borde…), de modo que se puede cambiar de tema tocando un solo archivo.
- **Fondo de página:** degradado continuo `#050E24 → #0A2E62 (azul noche) → #050E24`. Resplandores turquesa y azul intenso y cuadrícula tenue en la cabecera de la página (líneas de conexión).
- **Texto:** principal `#EAF2FF`, suave `#A8B8D2`. Contrastes sobre el fondo (medidos): 17:1 y 9:1; en el punto más claro del degradado, 11,8:1 y 6,6:1.
- **Acentos:** turquesa `#2ACED7` para enlaces, menú activo, iconos y brillos (10:1 sobre el fondo). **El azul medio `#0B7BBB` no sirve como color de texto sobre oscuro (4,2:1)**: solo como relleno de botón con texto blanco (4,6:1).
- **Tarjetas y recuadros:** borde de 2 px con degradado turquesa → azul medio y relleno `#0C1F44`. Al pasar el ratón o enfocar con el teclado: suben 5 px, brillan en turquesa y el degradado se desplaza. El movimiento se desactiva si el usuario tiene activado "reducir movimiento".
- **Botones:** principal con degradado azul (`#0C4AA5 → #0B7BBB`, texto blanco) que se ilumina en turquesa con texto azul noche; secundario con borde degradado; ambos suben al pasar el ratón.
- **Logo:** el provisional es un JPG con fondo blanco, así que va en una pastilla blanca en la cabecera. Con el logo negativo en SVG (letras blancas, sin fondo) se quita la pastilla y el pie podrá llevar el logo en lugar del texto.
- **Bloque final de llamada a la acción:** degradado azul intenso → azul medio con texto blanco (el turquesa no se usa como fondo bajo texto blanco: no contrasta).
- Contraste comprobado (2026-11-22): blanco sobre #0B7BBB = 4,60:1 (cumple AA, justo). #858585 sobre blanco = 3,69:1 (no cumple) → en la web el gris de texto es **#6B6B6B** (5,33:1 sobre blanco, 4,87:1 sobre #F2F5F8). Azul noche sobre turquesa = 6,90:1.
- Blanco sobre turquesa (#2ACED7) no cumple: en secciones con degradado, colocar el texto en la zona azul oscura.

## Tipografías
- Logo: la del archivo del logo (no se recompone con otra fuente). [PENDIENTE: identificar la fuente exacta]
- Títulos: Manrope (Bold / SemiBold).
- Texto: Inter (Regular / Medium).

## Tono
- Profesional pero cercano. Claro, sin jerga ni anglicismos innecesarios.
- Comercial sin exagerar: nada de "revolucionario", "líder", "el mejor".
- Hablar de problemas concretos del negocio: tiempo perdido, tareas repetitivas, información dispersa.
