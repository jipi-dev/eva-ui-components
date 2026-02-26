# SubNav - React

## Importación
```jsx
import SubNav from '@despegar/eva-ui/SubNav';
```

## Props

### `SubNav`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `SubNav.Item[]` | — | Ítems del sub-nav. |
| `scrollTo` | `'' \| 'left' \| 'right' \| 'both'` | `''` | Habilita flechas de scroll. `'right'` muestra flecha derecha (inicio), `'left'` muestra flecha izquierda (fin), `'both'` muestra ambas. |
| `stroke` | `bool` | `false` | Agrega borde al componente. |
| `rounded` | `bool` | `false` | Agrega border-radius (usar junto a `stroke`). |
| `theme` | `'default' \| 'dark' \| 'gray'` | `'default'` | Tema de color del componente. |
| `containerClassName` | `string` | `''` | Clase extra para el div `sub-nav-container`. |
| `className` | `string` | `''` | Clase extra para el `<nav>` raíz. |

### `SubNav.Item`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `node` | — | Título del ítem (requerido). |
| `active` | `bool` | `false` | Estado activo del ítem. |
| `disabled` | `bool` | `false` | Estado deshabilitado del ítem. |
| `icon` | `string` | — | Nombre del ícono de la librería EVA. Agrega ícono a la izquierda del label. |
| `subtitle` | `string` | — | Subtítulo debajo del label principal. |
| `onClick` | `func` | — | Callback al hacer click o presionar Enter/Espacio. No se dispara si el ítem está deshabilitado. |
| `className` | `string` | `''` | Clase extra para el `<li>`. |

## Uso básico
```jsx
<SubNav>
  <SubNav.Item active>Vuelos</SubNav.Item>
  <SubNav.Item>Hoteles</SubNav.Item>
  <SubNav.Item>Paquetes</SubNav.Item>
  <SubNav.Item>Autos</SubNav.Item>
</SubNav>
```

## Con stroke
```jsx
<SubNav stroke>
  <SubNav.Item active>Precios</SubNav.Item>
  <SubNav.Item>Descripción</SubNav.Item>
  <SubNav.Item>Comodidades</SubNav.Item>
  <SubNav.Item>Opiniones</SubNav.Item>
</SubNav>
```

## Con bordes redondeados
```jsx
<SubNav stroke rounded>
  <SubNav.Item active>Enero</SubNav.Item>
  <SubNav.Item>Febrero</SubNav.Item>
  <SubNav.Item>Marzo</SubNav.Item>
</SubNav>
```

## Con ítem deshabilitado
```jsx
<SubNav stroke rounded>
  <SubNav.Item active>Enero</SubNav.Item>
  <SubNav.Item>Febrero</SubNav.Item>
  <SubNav.Item disabled>Marzo</SubNav.Item>
  <SubNav.Item>Abril</SubNav.Item>
</SubNav>
```

## Con subtítulo en cada ítem
```jsx
<SubNav stroke>
  <SubNav.Item active subtitle="desde $50.000">Económica</SubNav.Item>
  <SubNav.Item subtitle="desde $120.000">Ejecutiva</SubNav.Item>
  <SubNav.Item subtitle="desde $300.000">Primera</SubNav.Item>
</SubNav>
```

## Con ícono en cada ítem
```jsx
<SubNav stroke>
  <SubNav.Item active icon="airplane">Vuelos</SubNav.Item>
  <SubNav.Item icon="hotel">Hoteles</SubNav.Item>
  <SubNav.Item icon="car">Autos</SubNav.Item>
</SubNav>
```

## Con flechas de scroll (scrollTo)
```jsx
// Solo flecha derecha (inicio de la lista)
<SubNav scrollTo="right">
  <SubNav.Item active>Item 1</SubNav.Item>
  <SubNav.Item>Item 2</SubNav.Item>
  <SubNav.Item>Item 3</SubNav.Item>
  <SubNav.Item>Item 4</SubNav.Item>
  <SubNav.Item>Item 5</SubNav.Item>
</SubNav>

// Solo flecha izquierda (al final de la lista)
<SubNav scrollTo="left">
  <SubNav.Item>Item 1</SubNav.Item>
  <SubNav.Item active>Item 2</SubNav.Item>
  <SubNav.Item>Item 3</SubNav.Item>
</SubNav>

// Ambas flechas (posición intermedia)
<SubNav scrollTo="both">
  <SubNav.Item>Item 1</SubNav.Item>
  <SubNav.Item active>Item 2</SubNav.Item>
  <SubNav.Item>Item 3</SubNav.Item>
</SubNav>
```

## Temas
```jsx
// Tema oscuro
<SubNav theme="dark">
  <SubNav.Item active>Vuelos</SubNav.Item>
  <SubNav.Item>Hoteles</SubNav.Item>
  <SubNav.Item>Paquetes</SubNav.Item>
</SubNav>

// Tema gris
<SubNav theme="gray">
  <SubNav.Item active>Vuelos</SubNav.Item>
  <SubNav.Item>Hoteles</SubNav.Item>
  <SubNav.Item>Paquetes</SubNav.Item>
</SubNav>
```

## Con manejo de clicks
```jsx
const [active, setActive] = React.useState(0);

<SubNav stroke>
  {['Vuelos', 'Hoteles', 'Paquetes', 'Autos'].map((label, i) => (
    <SubNav.Item
      key={label}
      active={active === i}
      onClick={() => setActive(i)}
    >
      {label}
    </SubNav.Item>
  ))}
</SubNav>
```

## Notas
- `rounded` solo tiene efecto visual cuando se combina con `stroke`.
- `scrollTo` no maneja el desplazamiento por sí solo; debe controlarse externamente actualizando el valor de `scrollTo` según la posición del scroll del contenedor.
- Los ítems deshabilitados ignoran el `onClick` y no son enfocables con teclado (`tabIndex=-1`).
- La accesibilidad está incluida: el `<nav>` tiene `role="menubar"`, cada `<li>` tiene `role="menuitem"`, y el ítem activo recibe `aria-current="page"`.
