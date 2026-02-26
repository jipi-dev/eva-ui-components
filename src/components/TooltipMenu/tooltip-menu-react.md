# TooltipMenu - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import TooltipMenu from '@despegar/eva-ui/TooltipMenu';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `showTooltip` | bool | `false` | Muestra/oculta el menú. |
| `className` | string | `''` | Clases extra. |
| `pointer` | bool | `false` | Habilita puntero (`marker`). |
| `text` | any | `''` | Target asociado. |
| `scrollY` | bool | `false` | Activa scroll vertical. |
| `pointerPosition` | `'left' \| 'right'` | `'left'` | Lado del puntero. |
| `children` | nodes | `tooltipMenuChildren` | Secciones/opciones. |

### Subcomponentes
| Nombre | Props principales | Descripción |
|--------|-------------------|-------------|
| `TooltipMenu.Section` | `separator?: bool` | Agrupa ítems y puede mostrar divisor. |
| `TooltipMenu.SectionTitle` | children | Título de sección. |
| `TooltipMenu.OptionItem` | `multiline?: bool`, `separator?: bool` | Opción estándar. |
| `TooltipMenu.Title` | children | Título dentro de opción. |
| `TooltipMenu.SubTitle` | children | Subtítulo (puede mostrar subarrow). |
| `TooltipMenu.Status` | `success?`, `error?` | Estado textual. |
| `TooltipMenu.Submenu` | children | Contenedor de opciones anidadas. |
| `TooltipMenu.SubmenuItem` | children | Ítem del submenu. |
| `TooltipMenu.InfoItem` | `loading?` | Contenido informativo/estado vacío. |

## Uso Básico
```jsx
<TooltipMenu showTooltip pointer>
  <TooltipMenu.Section separator>
    <TooltipMenu.SectionTitle>Resultados</TooltipMenu.SectionTitle>
    <TooltipMenu.OptionItem>
      <TooltipMenu.Title>Hotel</TooltipMenu.Title>
      <TooltipMenu.SubTitle>Buenos Aires</TooltipMenu.SubTitle>
    </TooltipMenu.OptionItem>
  </TooltipMenu.Section>
  <TooltipMenu.Section>
    <TooltipMenu.InfoItem>Sin resultados</TooltipMenu.InfoItem>
  </TooltipMenu.Section>
</TooltipMenu>
```

## Notas
- El menú aplica clases `-small-center -white -not-hover` por defecto; puedes sumar `scrollY` para listas largas.
- `pointerPosition` ajusta la orientación del puntero respecto al trigger.