# Overlay - React

## Importación
```jsx
import Overlay from '@despegar/eva-ui/Overlay';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | bool | `false` | Controla visibilidad (`-show-overlay`). |
| `white` | bool | `false` | Variante clara para fondos oscuros (`-white`). |
| `className` | string | `''` | Clases extra. |
| `children` | node | placeholder | Contenido dentro del overlay. |

## Uso Básico
```jsx
<Overlay show onClick={closeModal} />
```

## Con Contenido Personalizado
```jsx
<Overlay show>
  <Loader size="lg" stop={false} />
</Overlay>
```

## Variante Blanca
```jsx
<Overlay show white />
```

## Notas
- Renderiza un `div` con clase base `eva-3-overlay`.
- Añade `-show-overlay` cuando `show=true`; oculto por defecto.
- Usa `-white` para overlays sobre fondos oscuros.