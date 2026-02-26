# Rating - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Rating from '@despegar/eva-ui/Rating';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | number \| string | `'8'` | Valor mostrado. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'lg'` | Tamaño. |
| `score` | `'good' \| 'regular'` | auto | Color según calidad; si no se pasa, se calcula por número. |
| `className` | string | `''` | Clases extra. |

## Uso Básico
```jsx
<Rating size="lg">8.7</Rating>
```

## Forzando Estado
```jsx
<Rating size="md" score="regular">6.0</Rating>
```

## Notas
- Si no se define `score`, se infiere: `<=7` regular, `>7` good.
- Usa clases `-good`/`-regular` más el tamaño para estilo.