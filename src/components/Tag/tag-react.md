# Tag - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Tag from '@despegar/eva-ui/Tag';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `active` | bool | `false` | Estado seleccionado. |
| `lighten` | bool | `false` | Paleta clara para fondos oscuros. |
| `select` | bool | `false` | Agrega caret (`chevron-down`). |
| `className` | string | `''` | Clases extra. |
| `onClick` | func | `() => {}` | Handler de click (cierra o toggle). |
| `children` | `Tag.Text | Tag.Icon | string | array` | `<Tag.Text>Tag text</Tag.Text>` | Contenido. |

### Subcomponentes
| Nombre | Props | Descripción |
|--------|-------|-------------|
| `Tag.Icon` | `icon?: string` | Ícono inicial, aplica clase `-icon`. |
| `Tag.Text` | `children: string` | Texto del tag. |

## Uso Básico
```jsx
<Tag onClick={() => {}}>
  <Tag.Text>Vuelo</Tag.Text>
</Tag>
```

## Con Ícono y Activo
```jsx
<Tag active onClick={() => {}}>
  <Tag.Icon icon="flights-ui" />
  <Tag.Text>Vuelo</Tag.Text>
</Tag>
```

## Variante Select
```jsx
<Tag select onClick={() => {}}>
  <Tag.Text>Ordenar</Tag.Text>
</Tag>
```

## Notas
- El ícono de cierre interno dispara `onClick`; si `active` es true, el click del contenedor no se bloquea si hay ícono.
- Combina con utilidades de espaciado (`-eva-3-mr-sm`, etc.).