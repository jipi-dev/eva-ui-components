# Order - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Order from '@despegar/eva-ui/Order';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | '' | Clases extra |
| `children` | `Order.Item[]` | demo | Items a renderizar |

### Subcomponente Item
Props: `children` (string/node, requerido), `feedback` (number, opcional badge), `icon` (string, default 'filter'), `onClick` (func requerido).

## Uso Básico
```jsx
<Order>
  <Order.Item icon="filter" onClick={openFilters}>Filtros</Order.Item>
  <Order.Item icon="order" onClick={sortByPrice}>Ordenar</Order.Item>
</Order>
```

## Con Badge
```jsx
<Order>
  <Order.Item feedback={8} onClick={openAlerts}>Alertas</Order.Item>
  <Order.Item icon="time" onClick={openRecent}>Recientes</Order.Item>
</Order>
```

## Solo texto (sin icono)
```jsx
<Order>
  <Order.Item onClick={switchView}>Cambiar vista</Order.Item>
</Order>
```

## Notas
- Cada `Order.Item` se renderiza como `<li>` clickable (role="presentation").
- Si `feedback` tiene valor truthy, se muestra badge y no el ícono.
- Iconos disponibles: `filter`, `budget`, `order`, `list`, `notification`, `location`, `time`.
