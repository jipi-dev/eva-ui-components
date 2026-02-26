# ReSearch - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ReSearch from '@despegar/eva-ui/ReSearch';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `withInputs` | bool | `false` | Estilo de campos tipo input. |
| `sticky` | `'' \| 'sticky' \| 'sticky-animated'` | `''` | Posicionamiento sticky y animado. |
| `show` | bool | `false` | Controla visibilidad (solo con `sticky-animated`). |
| `multipleColumns` | bool | `false` | Layout dos columnas con switch Loyalty. |
| `purple` | bool | `false` | Variante púrpura. |
| `switchActive` | bool | `false` | Estado inicial de `RedemptionSwitch`. |
| `redemptionOnClick` | func | `() => {}` | Callback para el switch. |
| `children` | `ReSearch.Item[]` | demo | Ítems de resumen. |

### `ReSearch.Item`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `showTooltip` | bool | `false` | Muestra tooltip. |
| `tooltipText` | string | `'Tooltip de ejemplo...'` | Texto del tooltip. |
| `action` | bool | `false` | Ítem de acción (no envuelve en tooltip). |
| `tooltip` | bool | `false` | Habilita tooltip. |
| `children` | node | demo | Contenido. |

## Uso Básico
```jsx
<ReSearch>
  <ReSearch.Item>
    <Icon icon="location" className="re-search-item-icon" />
    Buenos Aires | Bariloche
  </ReSearch.Item>
  <ReSearch.Item>
    <Icon icon="calendar" className="re-search-item-icon" />
    Sab, 18 Ago 2019
  </ReSearch.Item>
  <ReSearch.Item action>
    <ButtonGhost size="md" icon="search">Buscar</ButtonGhost>
  </ReSearch.Item>
</ReSearch>
```

## Variante Multiple Columns + Switch
```jsx
<ReSearch multipleColumns switchActive redemptionOnClick={onToggleLoyalty}>
  {/* items */}
</ReSearch>
```

## Notas
- El contenedor agrega/quita `-show-content` al hacer click (control interno); puede combinarse con `show` en sticky animado.
- `ReSearch.Item` puede incluir `Tooltip` interno si `tooltip=true`.
- Layout sticky usa clases `-sticky`/`-sticky-animated` y `-show/-hide` según prop `show`.