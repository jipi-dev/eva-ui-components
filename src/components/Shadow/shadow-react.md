# Shadow - React

## Importación
```jsx
import Shadow from '@despegar/eva-ui/Shadow';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `shadow` | `'line' \| 'static' \| 'lineHover' \| 'staticHover'` | `undefined` | Selecciona variante de sombra utilitaria. |
| `className` | string | `''` | Clases adicionales (espaciado, display). |
| `...rest` | — | — | Props nativos de `div`. |

## Uso Básico
```jsx
<Shadow className="-eva-3-shadow-1 -eva-3-p-md" />
```

## Variantes con Prop
```jsx
<Shadow shadow="line" className="-eva-3-p-md">Borde superior sutil</Shadow>
<Shadow shadow="staticHover" className="-eva-3-p-md">Sombra al hover</Shadow>
```

## Notas
- El HOC de utilidades permite combinar `Shadow` con `Positioning`, `Borders` y clases EVA.
- Para sombras sticky usa clases `-eva-3-shadow-top` / `-bottom` directamente en `className`.