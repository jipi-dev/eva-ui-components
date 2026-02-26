# Nav Slider - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import NavSlider from '@despegar/eva-ui/NavSlider';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | 'sm' \| 'md' \| 'lg' \| 'xlg' | 'md' | Tamaño |
| `variant` | 'white' \| 'negative' \| '' | 'white' | Estilo de color |
| `disabled` | bool | false | Estado deshabilitado |
| `hideLeft` | bool | false | Oculta flecha izquierda |
| `hideRight` | bool | false | Oculta flecha derecha |
| `onClick` | func | — | Handler para ambas flechas (fallback) |
| `onLeftClick` | func | `onClick` | Handler específico izquierda |
| `onRightClick` | func | `onClick` | Handler específico derecha |
| `className` | string | '' | Clases extra |

## Uso Básico
```jsx
<NavSlider
  size="md"
  variant="white"
  onLeftClick={prev}
  onRightClick={next}
/>
```

## Solo flecha derecha
```jsx
<NavSlider
  hideLeft
  onRightClick={next}
/>
```

## Deshabilitado
```jsx
<NavSlider disabled onLeftClick={prev} onRightClick={next} />
```

## Notas
- En desktop: left click => keyCode 37, right click => keyCode 39 en onKeyPress.
- Si `onLeftClick`/`onRightClick` no se pasan, usa `onClick` (uno para ambos lados).
- Añade clase `-eva-3-shadow-line-hover` cuando `variant === 'white'`.
