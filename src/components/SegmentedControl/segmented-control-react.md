# SegmentedControl - React

## Importación
```jsx
import SegmentedControl from '@despegar/eva-ui/SegmentedControl';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `SegmentedControl.Item[]` | demo | Items (mín 2, máx 4). |
| `className` | string | `''` | Clases extra. |
| `darken` | bool | `false` | Fondo neutral (`-darken`). |

### `SegmentedControl.Item`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `active` | bool | `false` | Marca item activo. |
| `icon` | string | `''` | Nombre de ícono (opcional). |
| `id` | string | `''` | ID del botón. |
| `onClick` | func | — | Handler click. |
| `children` | node | `''` | Texto/contenido. |

## Uso Básico
```jsx
<SegmentedControl>
  <SegmentedControl.Item active id="seg-list" onClick={() => setView('list')}>Lista</SegmentedControl.Item>
  <SegmentedControl.Item id="seg-map" onClick={() => setView('map')}>Mapa</SegmentedControl.Item>
</SegmentedControl>
```

## Con Íconos y Darken
```jsx
<SegmentedControl darken>
  <SegmentedControl.Item active icon="list" onClick={() => setView('list')}>Lista</SegmentedControl.Item>
  <SegmentedControl.Item icon="map" onClick={() => setView('map')}>Mapa</SegmentedControl.Item>
  <SegmentedControl.Item icon="heart" onClick={() => setView('fav')}>Favoritos</SegmentedControl.Item>
</SegmentedControl>
```

## Notas
- Muestra warnings en consola si hay menos de 2 o más de 4 items.
- Calcula clase `-segments-{n}` según cantidad de hijos.