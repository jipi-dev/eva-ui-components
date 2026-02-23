# Driver

## Descripción

Elemento compacto (badge/label) para comunicar atributos, beneficios, estados o pertenencia a submarcas. Soporta texto e íconos opcionales. Diseñado para resaltar información clave de productos o reservas.

## Estructura HTML

```html
<div class="eva-3-driver [-variante] [clases-adicionales]">
  <i class="eva-3-icon-star driver-icon"></i>
  <span class="driver-text">Default</span>
</div>
```

- Clase base: `eva-3-driver`.
- Modificadores: variantes (`-benefits`, `-urgent`, `-secondary`, `-default-lighten`, `-new`, `-new-lighten`, `-information`, `-success`, `-warning`, `-error`, `-loyalty`, `-unbeatable`, `-mintur`).
- `driver-icon`: ícono opcional (ej. `star-filled`).
- `driver-text`: texto del driver (max-width `210px`, ellipsis inline, font-weight 500).

## Variantes

### Atributos

Comunican atributos de productos.

#### Default (sin modificador)

```html
<div class="eva-3-driver">
  <span class="driver-text">Default</span>
</div>
```
- Fondo: `neutral-800`, texto: `white`.

#### Default Lighten (`-default-lighten`)

```html
<div class="eva-3-driver -default-lighten">
  <span class="driver-text">Default lighten</span>
</div>
```
- Fondo: `white`, texto: `neutral-800`.

#### Secondary (`-secondary`)

```html
<div class="eva-3-driver -secondary">
  <span class="driver-text">Secondary</span>
</div>
```
- Fondo: `neutral-200`, texto: `neutral-800`.

#### Benefits (`-benefits`)

```html
<div class="eva-3-driver -benefits">
  <span class="driver-text">Benefits</span>
</div>
```
- Fondo: `success-300`, texto: `success-900`.

#### Urgent (`-urgent`)

```html
<div class="eva-3-driver -urgent">
  <span class="driver-text">Urgent</span>
</div>
```
- Fondo: `error-300`, texto: `error-900`.

### New

Resaltan nuevas funcionalidades.

#### New (`-new`)

```html
<div class="eva-3-driver -new">
  <span class="driver-text">New</span>
</div>
```
- Fondo: `brand-primary-4`, texto: `white`.

#### New Lighten (`-new-lighten`)

```html
<div class="eva-3-driver -new-lighten">
  <span class="driver-text">New lighten</span>
</div>
```
- Fondo: `brand-primary-1`, texto: `brand-primary-4`.

### Estados

Comunican estados de reservas.

#### Information (`-information`)

```html
<div class="eva-3-driver -information">
  <span class="driver-text">Information</span>
</div>
```
- (Sin estilo específico en SCSS actual; usa default o ajustar según necesidad).

#### Success (`-success`)

```html
<div class="eva-3-driver -success">
  <span class="driver-text">Success</span>
</div>
```
- Fondo: `success-300`, texto: `success-900`.

#### Warning (`-warning`)

```html
<div class="eva-3-driver -warning">
  <span class="driver-text">Warning</span>
</div>
```
- Fondo: `warning-300`, texto: `warning-900`.

#### Error (`-error`)

```html
<div class="eva-3-driver -error">
  <span class="driver-text">Error</span>
</div>
```
- Fondo: `error-300`, texto: `error-900`.

### Submarcas

Comunican ofertas o productos de submarcas.

#### Loyalty (`-loyalty`)

```html
<div class="eva-3-driver -loyalty">
  <span class="driver-text">Loyalty</span>
</div>
```
- Fondo: `--eva-loyalty-primary-500`, texto: `white`.

#### Unbeatable (`-unbeatable`)

```html
<div class="eva-3-driver -unbeatable">
  <span class="driver-text">Unbeatable</span>
</div>
```
- Fondo: `--eva-unbeatable-secondary-800`, texto: `--eva-unbeatable-primary-500`.

#### Mintur (`-mintur`)

```html
<div class="eva-3-driver -mintur">
  <span class="driver-text">Mintur</span>
</div>
```
- Fondo: `#37BBED`, texto: `white`.

## Con ícono

```html
<div class="eva-3-driver -benefits">
  <i class="eva-3-icon-star-filled driver-icon"></i>
  <span class="driver-text">Benefits</span>
</div>
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
- Íconos: `star`, `star-filled` (opcionales en `driver-icon`).
- Clase base: `eva-3-driver`.
- Categoría: `labels` (type: atoms).

## Ejemplo rápido

```html
<div class="eva-3-driver -urgent">
  <i class="eva-3-icon-star-filled driver-icon"></i>
  <span class="driver-text">Urgente</span>
</div>
```
