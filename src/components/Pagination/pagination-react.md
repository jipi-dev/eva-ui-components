# Pagination - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Pagination from '@despegar/eva-ui/Pagination';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `children` | `Pagination.Item[]` | demo | Ítems de página a renderizar. |
| `active` | number | `2` | Página activa (1-based). |
| `onPreviousClick` | func | `() => {}` | Handler botón anterior. |
| `onNextClick` | func | `() => {}` | Handler botón siguiente. |
| `previousText` | string | `'Anterior'` | Texto botón anterior. |
| `nextText` | string | `'Siguiente'` | Texto botón siguiente. |

### `Pagination.Item`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `'' | 'left' | 'right'` | `''` | Define ítem de navegación previa/siguiente. |
| `children` | string \| number | — | Etiqueta del ítem (requerido). |
| `href` | string | — | URL opcional. |
| `onClick` | func | — | Handler click. |

## Uso Básico
```jsx
<Pagination active={3} onPreviousClick={goPrev} onNextClick={goNext}>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item>4</Pagination.Item>
</Pagination>
```

## Con Texto Personalizado
```jsx
<Pagination
  active={1}
  previousText="Back"
  nextText="Next"
  onNextClick={goNext}
>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
</Pagination>
```

## Notas
- Si `active` es la primera página no se renderiza el botón Anterior; lo mismo para Siguiente en la última.
- Los ítems se clonan para marcar activo según posición en el array.
- Ítems prev/next incluyen íconos `arrow-left`/`arrow-right`.