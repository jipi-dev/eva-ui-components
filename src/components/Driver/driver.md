# Driver

## Descripción

Elemento compacto (badge/label) para comunicar atributos, beneficios, estados o pertenencia a submarcas. Soporta texto e íconos opcionales. Diseñado para resaltar información clave de productos o reservas.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<span class="eva-3-driver [-variante] [clases-adicionales]">
  <i class="eva-3-icon-star driver-icon"></i>
  <span class="driver-text">Default</span>
</span>
```

- Clase base: `eva-3-driver`.
- Modificadores: variantes (`-benefits`, `-urgent`, `-secondary`, `-default-lighten`, `-new`, `-new-lighten`, `-information`, `-success`, `-warning`, `-error`, `-loyalty`, `-traveller`, `-global`, `-premium`, `-unbeatable`, `-mintur`, `-ifood`, `-club-ifood`).
- `driver-icon`: ícono opcional (ej. `star-filled`).
- `driver-text`: texto del driver (max-width `210px`, ellipsis inline, font-weight 500).

## Variantes

### Atributos

Comunican atributos de productos.

#### Default (sin modificador)

```html
<span class="eva-3-driver">
  <span class="driver-text">Default</span>
</span>
```
- Fondo: `neutral-800`, texto: `white`.

#### Default Lighten (`-default-lighten`)

```html
<span class="eva-3-driver -default-lighten">
  <span class="driver-text">Default lighten</span>
</span>
```
- Fondo: `white`, texto: `neutral-800`.

#### Secondary (`-secondary`)

```html
<span class="eva-3-driver -secondary">
  <span class="driver-text">Secondary</span>
</span>
```
- Fondo: `neutral-200`, texto: `neutral-800`.

#### Benefits (`-benefits`)

```html
<span class="eva-3-driver -benefits">
  <span class="driver-text">Benefits</span>
</span>
```
- Fondo: `success-300`, texto: `success-900`.

#### Urgent (`-urgent`)

```html
<span class="eva-3-driver -urgent">
  <span class="driver-text">Urgent</span>
</span>
```
- Fondo: `error-300`, texto: `error-900`.

### New

Resaltan nuevas funcionalidades.

#### New (`-new`)

```html
<span class="eva-3-driver -new">
  <span class="driver-text">New</span>
</span>
```
- Fondo: `brand-primary-4`, texto: `white`.

#### New Lighten (`-new-lighten`)

```html
<span class="eva-3-driver -new-lighten">
  <span class="driver-text">New lighten</span>
</span>
```
- Fondo: `brand-primary-1`, texto: `brand-primary-4`.

### Estados

Comunican estados de reservas.

#### Information (`-information`)

```html
<span class="eva-3-driver -information">
  <span class="driver-text">Information</span>
</span>
```
- Usa estilos default (sin modificador de color propio en el SCSS actual).

#### Success (`-success`)

```html
<span class="eva-3-driver -success">
  <span class="driver-text">Success</span>
</span>
```
- Fondo: `success-300`, texto: `success-900`.

#### Warning (`-warning`)

```html
<span class="eva-3-driver -warning">
  <span class="driver-text">Warning</span>
</span>
```
- Fondo: `warning-300`, texto: `warning-900`.

#### Error (`-error`)

```html
<span class="eva-3-driver -error">
  <span class="driver-text">Error</span>
</span>
```
- Fondo: `error-300`, texto: `error-900`.

### Loyalty

Comunican ofertas o productos del programa Loyalty. Cada color corresponde a un tier diferente.

#### Loyalty - Explorador (`-loyalty`)

```html
<span class="eva-3-driver -loyalty">
  <i class="eva-3-icon-loyalty-filled driver-icon"></i>
  <span class="driver-text">Loyalty</span>
</span>
```
- Fondo: `--eva-loyalty-primary-500`, texto: `white`.

#### Viajero (`-traveller`)

```html
<span class="eva-3-driver -traveller">
  <i class="eva-3-icon-loyalty-filled driver-icon"></i>
  <span class="driver-text">Viajero</span>
</span>
```
- Fondo: `--eva-loyalty-secondary-500`, texto: `neutral-800`.

#### Global (`-global`)

```html
<span class="eva-3-driver -global">
  <i class="eva-3-icon-loyalty-filled driver-icon"></i>
  <span class="driver-text">Global</span>
</span>
```
- Fondo: `--eva-loyalty-tertiary-900`, texto: `white`.

#### Premium (`-premium`)

```html
<span class="eva-3-driver -premium">
  <i class="eva-3-icon-loyalty-filled driver-icon"></i>
  <span class="driver-text">Premium</span>
</span>
```
- Fondo: `--eva-loyalty-quaternary-800`, texto: `white`.

### Submarcas

Comunican ofertas o productos de submarcas.

#### Unbeatable (`-unbeatable`)

```html
<span class="eva-3-driver -unbeatable">
  <span class="driver-text">Unbeatable</span>
</span>
```
- Fondo: `--eva-unbeatable-secondary-800`, texto: `--eva-unbeatable-primary-500`.

#### Mintur (`-mintur`)

```html
<span class="eva-3-driver -mintur">
  <span class="driver-text">Mintur</span>
</span>
```
- Fondo: `#37BBED`, texto: `white`.

#### iFood (`-ifood`)

```html
<span class="eva-3-driver -ifood">
  <span class="driver-text">iFood</span>
</span>
```
- Fondo: `#EB0033`, texto: `white`.

#### Club iFood (`-club-ifood`)

```html
<span class="eva-3-driver -club-ifood">
  <span class="driver-text">Club iFood</span>
</span>
```
- Fondo: `#C375FF`, texto: `white`.

## Con ícono

```html
<span class="eva-3-driver -benefits">
  <i class="eva-3-icon-star-filled driver-icon"></i>
  <span class="driver-text">Benefits</span>
</span>
```

- Ícono con `margin-left` entre ícono y texto (`$spacing-1`).
- Múltiples íconos: `margin-left: 2px` entre ellos.

## Notas de estilo (SCSS)

- `display: inline-flex`, `align-items: center`, `height: 24px`, `padding: 0 8px`.
- `max-width: 210px`, `border-radius: $border-radius-2`, `overflow: hidden`.
- `driver-text`: ellipsis inline, font-weight 500.
- `driver-icon`: `font-size: 16px`.
- Múltiples drivers adyacentes: `margin-left: 8px`.

## Accesibilidad

- Texto descriptivo en `driver-text`; considerar `aria-label` si el ícono es único identificador.
- Colores con contraste mínimo para legibilidad (success/warning/error con tonos 300/900).

## Dependencias

- Componentes: `colours-variables-unbeatable` (para variante `-unbeatable`).
- Íconos: `star`, `star-filled`, `loyalty-filled` (opcionales en `driver-icon`).
- Clase base: `eva-3-driver`.
- Categoría: `labels` (type: atoms).

## Ejemplo rápido

```html
<span class="eva-3-driver -urgent">
  <i class="eva-3-icon-star-filled driver-icon"></i>
  <span class="driver-text">Urgente</span>
</span>
```
