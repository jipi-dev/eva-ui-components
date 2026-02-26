# View More - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ViewMore from '@despegar/eva-ui/ViewMore';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | node | `null` | Contenido a truncar/expandir. |
| `maxHeight` | number | `120` | Alto (px) del estado colapsado. |
| `expanded` | bool | `false` | Controlado: estado expandido. |
| `defaultExpanded` | bool | `false` | No controlado: estado inicial. |
| `moreLabel` | string | 'Ver más' | Copy colapsado. |
| `lessLabel` | string | 'Ver menos' | Copy expandido. |
| `onToggle` | func(expanded: bool) | `undefined` | Notifica cambio de estado. |
| `className` | string | `''` | Clases extra. |
| `shadow` | bool | `true` | Muestra gradiente en colapsado. |

## Uso Básico (no controlado)
```jsx
<ViewMore maxHeight={96}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.
  </p>
</ViewMore>
```

## Modo Controlado
```jsx
function ControlledViewMore({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ViewMore
      expanded={expanded}
      onToggle={setExpanded}
      moreLabel="Ver más"
      lessLabel="Ver menos"
    >
      <p>{text}</p>
    </ViewMore>
  );
}
```

## Notas
- Cambia `aria-expanded` en el botón interno según el estado.
- `shadow={false}` elimina el gradiente para layouts sin overlay.
- Si se usa en layouts estrechos, preferir un `maxHeight` menor (3-4 líneas).