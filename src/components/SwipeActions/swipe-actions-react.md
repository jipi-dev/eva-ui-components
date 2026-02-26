# SwipeActions - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import SwipeActions from '@despegar/eva-ui/SwipeActions';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `primaryAction` | bool | `false` | Muestra la acción primaria (primer botón). |
| `secondaryAction` | bool | `false` | Muestra la acción secundaria (segundo botón). Requiere `primaryAction` para verse en secuencia. |
| `className` | string | `''` | Clases extra. |
| `onClick` | func | `undefined` | Handler compartido para las acciones (ambos botones). |
| `...rest` | — | — | Props nativos del `<ul>`. |

## Uso Básico
```jsx
<SwipeActions primaryAction secondaryAction onClick={() => alert('acción')} />
```

## Con lógica de swipe
```jsx
const [state, setState] = useState('none'); // none | primary | secondary

<div
  onTouchEnd={(e) => {
    // implementar detección de swipe y setState('primary' | 'secondary')
  }}
>
  <SwipeActions
    primaryAction={state === 'primary' || state === 'secondary'}
    secondaryAction={state === 'secondary'}
    onClick={() => console.log('tap en acción')}
  />
</div>
```

## Notas
- El gesto swipe no está incluido; debés gestionar las clases `primaryAction` / `secondaryAction` según el movimiento.
- Incluye `role="menuitem"` en cada acción y admite navegación por teclado.