# Message

## Descripción
Molécula para comunicación con el usuario. Cada tipo está acompañado por un color para reforzar el mensaje: informativo, éxito, advertencia o error.

## Tipo de componente
- **Tipo**: Molécula
- **Categoría**: Messages
- **Tags**: mensajes, alertas, alert, info, success, error, secondary, warning

## Estructura HTML

```html
<div class="eva-3-message -info">
  <div class="message-icon-container">
    <i class="eva-3-icon -info-circle-filled message-icon"></i>
  </div>
  <div class="message-header">
    <h5 class="eva-3-heading -h5 message-title">Título del mensaje</h5>
  </div>
  <div class="message-body">
    <div class="eva-3-heading -body-2 message-text">
      Texto del mensaje con <a href="#" class="eva-3-heading -link message-link">enlace</a>.
    </div>
  </div>
</div>
```

## Variantes principales

### Info
```html
<div class="eva-3-message -info">
  <div class="message-icon-container">
    <i class="eva-3-icon -info-circle-filled message-icon"></i>
  </div>
  <div class="message-header">
    <h5 class="message-title">Título del mensaje</h5>
  </div>
  <div class="message-body">
    <div class="message-text">Mensaje informativo...</div>
  </div>
</div>
```

### Success
```html
<div class="eva-3-message -success">
  <div class="message-icon-container">
    <i class="eva-3-icon -checkmark-circle-filled message-icon"></i>
  </div>
  ...
</div>
```

### Warning
```html
<div class="eva-3-message -warning">
  <div class="message-icon-container">
    <i class="eva-3-icon -warning-filled message-icon"></i>
  </div>
  ...
</div>
```

### Error
```html
<div class="eva-3-message -error">
  <div class="message-icon-container">
    <i class="eva-3-icon -error-circle-filled message-icon"></i>
  </div>
  ...
</div>
```

## Variantes secundarias (fondo blanco)

### Info Secondary
```html
<div class="eva-3-message -info-secondary">...</div>
```

### Success Secondary
```html
<div class="eva-3-message -success-secondary">...</div>
```

### Warning Secondary
```html
<div class="eva-3-message -warning-secondary">...</div>
```

### Error Secondary
```html
<div class="eva-3-message -error-secondary">...</div>
```

## Sin título
```html
<div class="eva-3-message -info -no-title">
  <div class="message-icon-container">...</div>
  <div class="message-body">
    <div class="message-text">Mensaje sin título...</div>
  </div>
</div>
```

## Colapsable

```html
<div class="eva-3-message -info -collapsible">
  <div class="message-icon-container">...</div>
  <div class="message-header">...</div>
  <div class="message-body">...</div>
  <div class="eva-3-heading -link message-collapsible">
    <div class="collapsible-false">
      <span class="collapsible-text">Ver más</span>
      <i class="eva-3-icon -chevron-down collapsible-icon"></i>
    </div>
    <div class="collapsible-true">
      <span class="collapsible-text">Ver menos</span>
      <i class="eva-3-icon -chevron-down collapsible-icon"></i>
    </div>
  </div>
</div>
```

### Activo (expandido)
```html
<div class="eva-3-message -info -collapsible -active">...</div>
```

## Con CTA's (Call to Actions)

```html
<div class="eva-3-message -info">
  <div class="message-icon-container">...</div>
  <div class="message-header">...</div>
  <div class="message-body">
    <div class="message-text">Texto...</div>
    <div class="message-action">
      <a href="#" class="eva-3-heading -link message-link">Link</a>
      <button class="eva-3-button-ghost -md -darken">Ver solicitudes</button>
    </div>
  </div>
</div>
```

## Estilos CSS

### Colores por variante

**Info:**
- Background: `--color-neutral-800`
- Texto: `--color-white`

**Success:**
- Background: `--color-success-300`
- Icono: `--color-success-500`

**Warning:**
- Background: `--color-warning-300`
- Icono: `--color-warning-500`

**Error:**
- Background: `--color-error-300`
- Icono: `--color-error-500`

**Secondary (todas):**
- Background: `--color-white`
- Border: `1px solid var(--color-neutral-300)`

### Clases principales
- `.eva-3-message`: Contenedor
- `.-info/-success/-warning/-error`: Variantes principales
- `.-info-secondary/-success-secondary/-warning-secondary/-error-secondary`: Variantes secundarias
- `.-no-title`: Sin título
- `.-collapsible`: Colapsable
- `.-active`: Estado activo (expandido)

## Accesibilidad
- Usar `role="presentation"` en elementos clickeables
- Links con textos descriptivos
- Iconos con significado semántico

## Dependencias

### Componentes
- Heading, Shadow, Button, ButtonGhost

### Iconos
- info-circle, info-circle-filled
- warning, warning-filled
- checkmark-circle-filled
- error, error-circle-filled
- chevron-down, close, cross
- smile-circle, arrow-down

## Mapeo de iconos por variante

```javascript
const variationToIcon = {
  'info': 'info-circle-filled',
  'info-secondary': 'info-circle-filled',
  'warning': 'warning-filled',
  'warning-secondary': 'warning-filled',
  'success': 'checkmark-circle-filled',
  'success-secondary': 'checkmark-circle-filled',
  'error': 'error-circle-filled',
  'error-secondary': 'error-circle-filled',
};
```

## Notas
- Height mínimo del header: 56px
- Padding left con icono: 56px
- Max height colapsable: 150px
- Border radius: 4px
