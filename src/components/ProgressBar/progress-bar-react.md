# ProgressBar - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ProgressBar from '@despegar/eva-ui/ProgressBar';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `progressValue` | number | `50` | Valor actual (0 a 100 por default). |
| `maxValue` | number | `100` | Máximo. |
| `minValue` | number | `0` | Mínimo. |
| `colorClass` | string | `''` | Clase de color para el relleno. |
| `className` | string | `''` | Clases extra. |

## Uso Básico
```jsx
<ProgressBar progressValue={65} colorClass="-eva-3-bc-green-3" />
```

## Con Rango Personalizado
```jsx
<ProgressBar
  minValue={0}
  maxValue={1000}
  progressValue={420}
  colorClass="-eva-3-bc-orange-3"
/>
```

## Notas
- Calcula `width` en porcentaje según min/max/value.
- Incluye `role="progressbar"` y atributos `aria-valuemin/max/now` para accesibilidad.
- `colorClass` permite usar utilidades de color del design system.