# RangeSlider - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import RangeSlider from '@despegar/eva-ui/RangeSlider';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `single` | bool | `false` | Modo de un solo handler (oculta el izquierdo). |
| `minValue` | number | `0` | Valor mínimo (accesibilidad). |
| `maxValue` | number | `100` | Valor máximo (accesibilidad). |
| `leftBallPosition` | number | `minValue` | Posición izquierda en %. |
| `rightBallPosition` | number | `maxValue` | Posición derecha en %. |
| `setLeftBallPosition` | func | `() => {}` | Callback `onDragEnd` handler izquierdo. |
| `setRightBallPosition` | func | `() => {}` | Callback `onDragEnd` handler derecho. |
| `className` | string | `''` | Clases extra. |

## Uso Básico (rango)
```jsx
<RangeSlider
  minValue={0}
  maxValue={100}
  leftBallPosition={20}
  rightBallPosition={80}
  setLeftBallPosition={handleLeft}
  setRightBallPosition={handleRight}
/>
```

## Modo Single
```jsx
<RangeSlider
  single
  minValue={0}
  maxValue={10}
  rightBallPosition={6}
  setRightBallPosition={handleChange}
/>
```

## Notas
- Posiciones se expresan en porcentaje (0–100) y se aplican vía CSS vars.
- Los handlers usan `onDragEnd`; si se requiere drag continuo, manejar eventos adicionales externamente.
- `role="slider"` + `aria-valuenow/min/max` mejoran accesibilidad.