# Separator - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Separator from '@despegar/eva-ui/Separator';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases adicionales para color, espaciado o grosor. |
| `...rest` | — | — | Props nativos de `div` (p.ej. `role`, `aria-hidden`). |

## Uso Básico
```jsx
<Separator className="-eva-3-mt-md -eva-3-mb-md" />
```

## Listas
```jsx
<ul className="eva-3-list">
  <li>Item 1</li>
  <Separator />
  <li>Item 2</li>
</ul>
```

## Notas
- Usa utilidades de espaciado EVA para separar del contenido adyacente.
- Se renderiza como un `div` accesible; si se usa como separación visual sin significado, agregar `aria-hidden`.