# Button Circle (React)

## Descripción

Botón circular para el header de productos. Renderiza un ícono y opcionalmente un label. No depende de `Button`.

**Tipo:** Átomo  
**Categoría:** Navigation / Actions  
**Tags:** react, button-circle, product, icon-only, nav, active

## Cuándo Usar
- Selector de producto/vertical en headers o menús principales.
- Botones icon-only con optional label en desktop.

## Mejores Prácticas
- Proveer `title`/`aria-label` cuando `noLabel` es true.
- Marcar activo con `active` y opcional `aria-selected` en contextos tipo tabs.
- Usa `href` real para navegación; es un `<a>`.

## Dependencias
- Icon set EVA (`Icon` interno) para los productos indicados.
- Clases `eva-3-button-circle` y modificador `-active` aplicados por la lib.

**Import típico:**
```jsx
import { ButtonCircle } from "@despegar/eva-react-components";
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `product` | `'flights' \| 'hotels' \| 'packages' \| 'cars' \| 'tickets' \| 'disney' \| 'assistances' \| 'buses' \| 'cruises'` | `'flights'` | Selecciona ícono/label. **Requerido** en diseño real. |
| `noLabel` | `boolean` | `false` | Oculta el label, deja solo el ícono. |
| `active` | `boolean` | `false` | Marca el estado activo (agrega `-active`). |
| `href` | `string` | `'#'` | URL del enlace. **Recomendado** para navegación. |
| `className` | `string` | `''` | Clases adicionales. |
| `title` | `string` | `product title` | Texto para tooltip/ARIA. |

## Estructura renderizada

```jsx
<a
  href={href}
  className={`eva-3-button-circle ${active ? '-active' : ''} ${className}`}
  title={productTitle}
>
  <div className="button-circle-icon">
    <Icon icon={product} />
  </div>
  {!noLabel && (
    <span className="button-circle-label">{productTitle}</span>
  )}
</a>
```

`productTitle` se obtiene de la tabla de productos (`productValues`).

## Ejemplos

### Con label (activo)
```jsx
<ButtonCircle product="hotels" active href="#">
  Hoteles
</ButtonCircle>
```

### Sin label (icon-only)
```jsx
<ButtonCircle product="flights" noLabel href="#" />
```

### Listado de productos
```jsx
<div>
  {['hotels','flights','packages','cars','tickets','disney','assistances','buses','cruises'].map(p => (
    <ButtonCircle key={p} product={p} href="#" />
  ))}
</div>
```

## Notas de estilo (referencia)

- Contenedor: `inline-flex`, columna, centrado, `overflow: hidden`, `cursor: pointer`, sin subrayado.
- Icono: color `var(--color-neutral-700)`, font-size 24px; hover/active cambia a `var(--brand-primary-3)`.
- Label: margin-top 8px, font-size 14px, color `var(--color-neutral-700)`; hover/active cambia a `var(--brand-primary-3)`.
- Subrayado activo: pseudo `:after` (width 120%, height 2px, radius 8px, margin-top 8px, `background: var(--brand-primary-3)`, `opacity: 1` en activo, `0` en normal).

## Accesibilidad

- Añade `aria-selected` para indicar el activo cuando corresponda.
- Usa `aria-label`/`title` con el nombre del producto si `noLabel` es true.
- Asegura foco navegable (es un `<a>` con `href`).