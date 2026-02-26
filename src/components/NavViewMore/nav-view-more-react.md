# Nav View More - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import NavViewMore from '@despegar/eva-ui/NavViewMore';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | 'elements' \| 'images' | 'elements' | Tipo de visual |
| `label` | string | 'Ver más' | Texto debajo del ícono |
| `onClick` | func | () => {} | Acción al click |
| `className` | string | '' | Clases extra |

## Uso Básico
```jsx
<NavViewMore onClick={() => openGallery()} />
```

## Variante Imágenes
```jsx
<NavViewMore
  variant="images"
  label="Ver todas las fotos"
  onClick={openGallery}
/>
```

## Notas
- Añade clases de color según `variant`: `-eva-3-tc-blue-3` (elements) o `-eva-3-tc-white` (images).
- Incluye sombra hover en el círculo (`-eva-3-shadow-static-hover`) en variant elements.
