# ReviewsSummary - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ReviewsSummary from '@despegar/eva-ui/ReviewsSummary';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `ratingNumber` | number \| string | `7.5` | Score general. |
| `ratingScore` | `'good' \| 'regular' \| 'bad'` | `'good'` | Estado de color. |
| `ratingTitle` | string | `'Muy bueno'` | Título del score. |
| `ratingSubtitle` | string | `'Excelente ubicación'` | Subtítulo. |
| `reviewBarsArray` | array | demo | Items con aspecto y score. |
| `commentsNumber` | number | `95` | Cantidad de comentarios. |
| `linkHref` | string | `'#'` | Link “Ver comentarios”. |
| `avatarsArray` | array | demo | Avatares a mostrar. |
| `showMore` | bool | `false` | Abre ViewMore por defecto en mobile. |
| `onClick` | func | — | Handler del botón ver más (mobile). |

### `reviewBarsArray` item
`{ item: string, scoreNumber: number, scoreDesc: 'good' | 'regular' | 'bad' }`

### `avatarsArray` item
`{ type: 'image' | 'letter' | 'icon', content: string }`

## Uso Básico
```jsx
<ReviewsSummary
  ratingNumber={8.3}
  ratingScore="good"
  ratingTitle="Excelente"
  ratingSubtitle="Ubicación y limpieza"
  commentsNumber={120}
  linkHref="/reviews"
  reviewBarsArray={[
    { item: 'Servicios', scoreNumber: 8.7, scoreDesc: 'good' },
    { item: 'Atención', scoreNumber: 7.2, scoreDesc: 'regular' },
  ]}
/> 
```

## Notas
- Usa `ViewMore` con `double` para controlar expansión en mobile; `showMore` forza abierto.
- Colores de barras/textos se determinan por `scoreDesc` usando utilidades de color.