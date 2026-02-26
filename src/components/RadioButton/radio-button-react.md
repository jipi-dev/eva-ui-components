# RadioButton - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import RadioButton from '@despegar/eva-ui/RadioButton';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'' \| 'md'` | `'md'` | Tamaño. |
| `disabled` | bool | `false` | Deshabilita el input. |
| `lighten` | bool | `false` | Variante para fondos oscuros. |
| `name` | string | `'eva-radio'` | Nombre de grupo (requerido). |
| `id` | string | `'eva-radio'` | ID del input (requerido). |
| `className` | string | `''` | Clases extra. |
| `...rest` | — | — | Props extra para el `<input>` (ej. `checked`, `onChange`). |

## Uso Básico
```jsx
<RadioButton name="contact" id="contact-email" value="email" />
<RadioButton name="contact" id="contact-phone" value="phone" />
```

## Con Variante Lighten y Controlado
```jsx
<RadioButton
  name="theme"
  id="theme-dark"
  value="dark"
  lighten
  checked={value === 'dark'}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Notas
- Usa span contenedor y `input type="radio"`; el estado visual depende de `checked`.
- `lighten` ajusta estilos para fondos oscuros.