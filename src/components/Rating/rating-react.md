# Rating - React

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