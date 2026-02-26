# Tooltip - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Tooltip from '@despegar/eva-ui/Tooltip';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `showTooltip` | bool | `false` | Fuerza mostrar/ocultar. |
| `toggleTooltip` | func | `undefined` | Handler para cerrar (se usa con `closeIcon`). |
| `size` | `'' \| 'sm'` | `''` | Tamaño del globo. |
| `text` | any | `'Hover me!'` | Texto corto en el trigger (o hijo). |
| `title` | string \| bool | `''` | Título dentro del tooltip; `false` para ocultarlo. |
| `position` | enum | `'top-left'` | Posición principal. |
| `positionTablet` | `''|'left'|'center'|'right'` | `''` | Posición en tablet. |
| `positionMobile` | `''|'left'|'center'|'right'` | `''` | Posición en mobile. |
| `notHover` | `''|'all'|'small'|'medium'|'large'` | `''` | Desactiva hover según breakpoint. |
| `marker` | any | `undefined` | Muestra puntero. |
| `white` | bool | `false` | Variante clara. |
| `smFull` | bool | `false` | Ancho completo en mobile. |
| `closeIcon` | bool | `false` | Muestra icono de cierre (requiere `toggleTooltip`). |
| `className` | string | `''` | Clases extra. |
| `children` | any | `''` | Contenido interno (se renderiza como texto o slot). |

## Uso Controlado
```jsx
const [open, setOpen] = useState(false);

<Tooltip
  title="Ayuda"
  text="hover me"
  position="top-center"
  showTooltip={open}
  toggleTooltip={() => setOpen((o) => !o)}
  closeIcon
>
  <Heading variant="body-2">Contenido del tooltip</Heading>
</Tooltip>
```

## Variante Blanca con Puntero
```jsx
<Tooltip
  white
  marker
  size="sm"
  position="bottom-right"
  title="Tip"
  showTooltip
>
  Texto descriptivo.
</Tooltip>
```

## Notas
- Para mobile sin hover, usar `notHover="all"` y controlar con `showTooltip`.
- `positionTablet/Mobile` permiten ajustar alineación por breakpoint.