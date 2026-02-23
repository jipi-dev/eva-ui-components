# Label

## Descripción

Etiquetas decorativas tipo "ribbon" para mostrar descuentos, promociones, ofertas especiales y programas de loyalty. Posicionadas en esquinas de tarjetas/imágenes. Soportan múltiples variantes (green, purple, loyalty, compound, secret-deals, member-deals) y 4 posiciones de ribbon (top-left, top-right, bottom-left, bottom-right).

**Tipo:** Átomo  
**Categoría:** Badges / Ribbons  
**Tags:** badge, ribbon, oferta, descuento, loyalty, promo, corner

## Cuándo Usar
- Destacar descuentos, beneficios o programas de loyalty sobre cards o imágenes.
- Mostrar incentivos específicos (secret/member deals) sin ocupar espacio del contenido principal.

## Mejores Prácticas
- Elige el `variant` según el tipo de incentivo; no mezcles mensajes distintos en una misma etiqueta.
- Asegura contraste adecuado (texto/ícono vs. fondo) y evita textos extensos; ideal 1–2 palabras o porcentaje.
- Usa la posición coherente con el layout (esquinas) y verifica que no tape CTAs o información crítica.

## Dependencias
- Requiere clases de íconos `eva-3-icon` y tokens de color/spacing de EVA.
- Los triángulos (tails) se generan con CSS (`::before`/`::after`) heredado del stylesheet de labels.

## Estructura HTML

```html
<div class="eva-3-label -[size] -[ribbonPosition] -[variant]">
  <span class="label-container [-eva-3-bc-{color}]">
    <i class="eva-3-icon -[icon-name] label-icon"></i>
    <span class="eva-3-bold label-text [-linethrough]">-30%</span>
  </span>
  <!-- Container adicional para compound labels -->
  <span class="label-container [-eva-3-bc-{color}]">
    <i class="eva-3-icon -[icon-name] label-icon"></i>
    <span class="eva-3-bold label-text">%</span>
  </span>
</div>
```

- Clase base: `eva-3-label`.
- Modificadores de tamaño: `-sm`, `-md`.
- Modificadores de posición: `-top-left`, `-top-right`, `-bottom-left`, `-bottom-right`.
- Modificadores de variante: `-green`, `-purple`, `-loyalty`, `-compound`, `-secret-deals`, `-member-deals`, `-member-deals-logged`.
- Elementos internos: `label-container`, `label-icon`, `label-text`.

## Tamaños

### Small (`-sm`)

```html
<div class="eva-3-label -sm -top-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Height**: variable (definido en `$label-container-height-sm`).
- **Padding**: `$label-container-padding-sides-sm`.
- **Text**: `eva-text-as("p")` (párrafo).
- **Icon**: width/height `$icon-width-sm` / `$icon-height-sm`.

### Medium (`-md`)

```html
<div class="eva-3-label -md -top-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Height**: `$label-container-height-md`.
- **Padding**: `$label-container-padding-sides-md`.
- **Text**: `eva-text-as("body-2")`.
- **Icon**: width/height `$icon-width-md` / `$icon-height-md`.

## Posiciones de Ribbon

### Top Left (`-top-left`)

```html
<div class="eva-3-label -md -top-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Padding-top**: `$label-tail-space-md` (o `-sm`).
- **Tail (triángulo)**: `border-left-color` coincide con background del label.
- **Border-radius**: top-left 0, bottom-left `$label-container-border_radius-size`.

### Top Right (`-top-right`)

```html
<div class="eva-3-label -md -top-right -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Padding-top**: `$label-tail-space-md`.
- **Tail**: `border-bottom-color` coincide con background.
- **Border-radius**: top-right 0, bottom-right `$label-container-border_radius-size`.

### Bottom Left (`-bottom-left`)

```html
<div class="eva-3-label -md -bottom-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Padding-bottom**: `$label-tail-space-md`.
- **Tail**: `border-top-color` coincide con background.
- **Border-radius**: top-left `$label-container-border_radius-size`, bottom-left 0.

### Bottom Right (`-bottom-right`)

```html
<div class="eva-3-label -md -bottom-right -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Padding-bottom**: `$label-tail-space-md`.
- **Tail**: `border-right-color` coincide con background.
- **Border-radius**: top-right `$label-container-border_radius-size`, bottom-right 0.

## Variantes

### Green (descuento estándar)

```html
<div class="eva-3-label -md -top-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Background**: `$label-green`.
- **Color texto**: `--color-white`.
- **Uso**: Descuentos generales.

### Purple (programa chanchito)

```html
<div class="eva-3-label -md -top-left -purple">
  <span class="label-container">
    <i class="eva-3-icon -pig-offer label-icon"></i>
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Background**: `$label-purple`.
- **Ícono**: `pig-offer`.
- **Uso**: Programa chanchito (ahorro).

### Loyalty (programa de lealtad)

```html
<div class="eva-3-label -md -top-left -loyalty">
  <span class="label-container">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">Ahorrá 3200 puntos</span>
  </span>
</div>
```

- **Background**: `$label-loyalty`.
- **Ícono**: `loyalty-filled`.
- **Uso**: Exclusivo programa de lealtad.

### Compound (descuento + incentivo)

```html
<div class="eva-3-label -md -top-left -compound">
  <span class="label-container">
    <span class="eva-3-bold label-text">-30%</span>
  </span>
  <span class="label-container -eva-3-bc-white">
    <i class="eva-3-icon -gift label-icon -eva-3-tc-red-3"></i>
    <span class="eva-3-bold label-text -eva-3-tc-gray-1">%</span>
  </span>
</div>
```

- **Primera sección**: background `$label-green`, texto blanco.
- **Segunda sección**: background blanco, borde `--color-neutral-300`, ícono `gift` rojo, texto gris.
- **Estructura**: Dos `label-container` consecutivos.
- **Uso**: Descuento + Secret Deal / incentivo adicional.

### Secret Deals (incentivo login)

```html
<div class="eva-3-label -md -top-left -secret-deals">
  <span class="label-container">
    <i class="eva-3-icon -gift label-icon -eva-3-tc-red-3"></i>
    <span class="eva-3-bold label-text">-30%</span>
  </span>
</div>
```

- **Background**: `$label-secret-deals`.
- **Border**: `1px solid --color-neutral-300`.
- **Color texto**: `--color-neutral-700`.
- **Ícono**: `gift` rojo.
- **Tail doble**: `::before` (color label) + `::after` (borde neutral-300).
- **Uso**: Incentivo para iniciar sesión.

### Member Deals (descuento no logueado)

```html
<div class="eva-3-label -md -top-left -member-deals">
  <span class="label-container -eva-3-bc-bubblegum-1">
    <span class="eva-3-bold label-text">%</span>
  </span>
  <span class="label-container">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">-15%</span>
  </span>
</div>
```

- **Primera sección**: background bubblegum-1, ícono `loyalty-filled`, texto secundario.
- **Segunda sección**: background principal (definido por posición), texto primario.
- **Uso**: Descuento exclusivo miembros (no logueado).

### Member Deals Logged (descuento logueado)

```html
<div class="eva-3-label -md -top-left -member-deals-logged">
  <span class="label-container -eva-3-bc-bubblegum-1">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">%</span>
  </span>
  <span class="label-container">
    <span class="eva-3-bold label-text -linethrough">-15%</span>
  </span>
</div>
```

- **Texto primario**: tachado con clase `-linethrough` (pseudo-elemento `::before` con line-through).
- **Uso**: Descuento exclusivo miembros (logueado).

## Notas de estilo (SCSS)

### Mixin `label-tail`

```scss
@include label-tail($position: top-left, $color: transparent, $width: $tail-width-md, $height: $tail-height-md);
```

- Crea el triángulo decorativo (tail) con borders.
- Posiciones: top-left, top-right, bottom-left, bottom-right.
- Width/height ajustables por tamaño (`-sm`: `$tail-width-sm`, `-md`: `$tail-width-md`).

### Border-radius

- **Containers**: `border-radius: $label-container-border_radius-half` (media rounded).
- **Esquina del tail**: border-radius 0 en la esquina del ribbon.
- **Esquina opuesta**: `$label-container-border_radius-size`.

### Label-text `-linethrough`

```scss
.label-text.-linethrough::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0; left: 0;
  height: 3px;
  background-color: var(--color-success-100);
  transform: translateY(-2px);
}
```

### Retrocompatibilidad

Clases `-eva-3-bc-green-3`, `-eva-3-bc-purple-4`, `-eva-3-bc-bubblegum-1` definen colores del tail para cada variante.

## Accesibilidad

- **Texto descriptivo**: El texto del label debe ser claro y conciso (ej: "-30%", "Ahorrá puntos").
- **Contraste**: Asegurar contraste suficiente entre texto y background.
- **Ícono decorativo**: Si el ícono es decorativo, considerar `aria-hidden="true"`.
- **Context**: El label debe estar asociado a un producto/imagen para contexto visual.

## Dependencias

- Componentes: `colours`, `colours-variables-loyalty`, `text`, `shadow`, `icon`.
- Variables: `--color-white`, `--color-neutral-300`, `--color-neutral-700`, `--color-success-100`, `--color-error-500` (para icon gift rojo).
- Mixins: `eva-text-as`, `label-tail`.
- Clase base: `eva-3-label`.
- Categoría: `labels` (type: atoms).

## Ejemplos completos

### Green con tamaño small

```html
<div class="eva-3-label -sm -top-left -green">
  <span class="label-container">
    <span class="eva-3-bold label-text">-20%</span>
  </span>
</div>
```

### Purple con ícono (medium)

```html
<div class="eva-3-label -md -top-right -purple">
  <span class="label-container">
    <i class="eva-3-icon -pig-offer label-icon"></i>
    <span class="eva-3-bold label-text">-15%</span>
  </span>
</div>
```

### Loyalty con texto largo

```html
<div class="eva-3-label -md -bottom-left -loyalty">
  <span class="label-container">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">Ahorrá 5000 puntos</span>
  </span>
</div>
```

### Compound label (descuento + gift)

```html
<div class="eva-3-label -md -top-left -compound">
  <span class="label-container">
    <span class="eva-3-bold label-text">-40%</span>
  </span>
  <span class="label-container -eva-3-bc-white">
    <i class="eva-3-icon -gift label-icon -eva-3-tc-red-3"></i>
    <span class="eva-3-bold label-text -eva-3-tc-gray-1">Secret Deal</span>
  </span>
</div>
```

### Secret Deals

```html
<div class="eva-3-label -md -top-right -secret-deals">
  <span class="label-container">
    <i class="eva-3-icon -gift label-icon -eva-3-tc-red-3"></i>
    <span class="eva-3-bold label-text">%</span>
  </span>
</div>
```

### Member Deals (no logueado)

```html
<div class="eva-3-label -md -bottom-right -member-deals">
  <span class="label-container -eva-3-bc-bubblegum-1">
    <span class="eva-3-bold label-text">%</span>
  </span>
  <span class="label-container">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">-25%</span>
  </span>
</div>
```

### Member Deals Logged (tachado)

```html
<div class="eva-3-label -md -top-left -member-deals-logged">
  <span class="label-container -eva-3-bc-bubblegum-1">
    <i class="eva-3-icon -loyalty-filled label-icon"></i>
    <span class="eva-3-bold label-text">%</span>
  </span>
  <span class="label-container">
    <span class="eva-3-bold label-text -linethrough">-10%</span>
  </span>
</div>
```
