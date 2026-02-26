# Checkbox (React)

## Descripción

Casilla de verificación controlada/no controlada con estados de error, deshabilitado, variante clara (`lighten`) y soporte visual para estado parcial/indeterminado. Acepta integrar `label-form` de EVA.

**Tipo:** Átomo  
**Categoría:** Forms / Controls  
**Tags:** react, checkbox, indeterminate, partial, invalid, disabled, lighten, label

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Selecciones binarias o listas de selección múltiple.
- Necesidad de estado parcial/indeterminado (ej. “Seleccionar todos”).

## Mejores Prácticas
- Siempre asocia `id` + `label` para accesibilidad.
- Usa `partial`/`indeterminate` para reflejar estados agregados; setea `input.indeterminate` en controlado.
- Aplica `lighten` sobre fondos brand oscuros para mantener contraste.
- En listas, alinea vertical y respeta márgenes consistentes.

## Dependencias
- Usa `Icon` (checkmark/minus) y clases `eva-3-checkbox`/`checkbox-tag`/`checkbox-check`.
- Puede combinar `LabelForm` si se requiere estilo de label EVA.

**Import típico:**
```jsx
import { Checkbox } from "@despegar/eva-react-components";
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | `string` | — | **Requerido.** `id` para asociar el `label` y manipular el estado `indeterminate`. |
| `label` | `string` | `''` | Texto a mostrar junto al check. |
| `labelForm` | `bool` | `false` | Si es `true`, agrega clase `eva-3-label-form` al label. |
| `size` | `'md' \| 'lg'` | `'md'` | Tamaño del check. `md` es el default; `lg` agranda el check. |
| `invalid` | `bool` | `false` | Muestra estado de error con borde color error. |
| `disabled` | `bool` | `false` | Deshabilita la interacción. |
| `partial` | `bool` | `false` | Muestra ícono de estado parcial (usa icono `minus`). No setea `indeterminate` automáticamente. |
| `indeterminate` | `bool` | `undefined` | Alterna el ícono a parcial. Para el estado real, setear `input.indeterminate = true` vía JS. |
| `lighten` | `bool` | `false` | Variante para fondos brand primary (bordes claros / foco claro). |
| `className` | `string` | `''` | Clases adicionales (p.ej. `-invalid`, `-lighten`). |
| `checked` | `bool` | — | Controlado. Requiere `onChange`. |
| `defaultChecked` | `bool` | — | No controlado inicial. |
| `onChange`, `onBlur`, `onClick`, `onMouseDown` | `func` | — | Listeners del `input` nativo. |

## Estructura renderizada

```jsx
<span className={`eva-3-checkbox ${classes} ${className}`}>
  <label className={`checkbox-label ${labelForm ? 'eva-3-label-form' : ''}`} htmlFor={id}>
    <input id={id} className="checkbox-tag" type="checkbox" {...rest} />
    <Icon icon={(partial || indeterminate) ? 'minus' : 'checkmark'} className="checkbox-check" marginRight="md" />
    {label}
  </label>
</span>
```

- `classes` incluye `-md` o `-lg`, `-invalid`, `-lighten` según props.
- El `input` controla foco y accesibilidad; el ícono cambia entre `checkmark` y `minus`.

## Ejemplos

### Default (md)
```jsx
<Checkbox id="cb-default" label="Default" />
```

### Tamaño grande
```jsx
<Checkbox id="cb-lg" size="lg" label="Grande" />
```

### Inválido
```jsx
<Checkbox id="cb-invalid" invalid label="Inválido" />
```

### Lighten (sobre fondo brand)
```jsx
<div style={{ background: 'var(--brand-primary-3)', padding: 16 }}>
  <Checkbox id="cb-lighten" size="lg" lighten label="Lighten" />
</div>
```

### Disabled checked
```jsx
<Checkbox id="cb-disabled" size="lg" disabled checked label="Deshabilitado y checkeado" />
```

### Parcial / indeterminate (visual + propiedad)
```jsx
import { useEffect } from 'react';

function CheckboxIndeterminate() {
  useEffect(() => {
    const input = document.getElementById('cb-indeterminate');
    if (input) {
      input.indeterminate = true;
      input.setAttribute('aria-checked', 'mixed');
    }
  }, []);

  return (
    <Checkbox
      id="cb-indeterminate"
      partial
      label="Estado parcial"
      defaultChecked
    />
  );
}
```

### Con label-form
```jsx
<Checkbox id="cb-label-form" labelForm label="Checkbox con label form" />
```

## Accesibilidad

- `id` es obligatorio y debe coincidir con `htmlFor` del label.
- El `input` conserva navegación por teclado (`Space`/`Enter`); `:focus-visible` aplica outline accesible.
- Para estado parcial real, setear `input.indeterminate = true` y `aria-checked="mixed"`.
- Usa `disabled` nativo para estados deshabilitados.

## Dependencias

- Clase base: `eva-3-checkbox`.
- Íconos: `checkmark` (checked) y `minus` (parcial/indeterminate).
- Utilidades/mixins: `eva-focus` (outline), variables de color brand/neutral.
- Opcional: `eva-3-label-form` para integrarse con `label-form`.
