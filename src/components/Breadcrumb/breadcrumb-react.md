# Breadcrumb (React)

## Descripción

Componente React para migas de pan con soporte de atributos SEO (`itemscope`, `itemtype`, `itemprop`). La librería incluye `<Breadcrumb>` y `<Breadcrumb.Item>`.

**Tipo:** Molécula  
**Categoría:** Navigation / SEO  
**Tags:** react, breadcrumb, seo, navigation, schema.org, itemprop, trail

## Cuándo Usar
- Mostrar jerarquía de navegación y ayudar al SEO con datos estructurados.
- Rutas de detalle (ej. Home > Vuelos > Miami).

## Mejores Prácticas
- Solo un breadcrumb por página; refleja la jerarquía real.
- Marca el último ítem sin link para evitar loops de navegación.
- Completa `itemProp`/`itemScope` para schema.org BreadcrumbList.

## Dependencias
- Usa `Heading` variante `link` internamente para los ítems con href.
- Estilos `breadcrumb` de EVA con ícono separador via pseudo-elemento.

**Import típico:**
```jsx
import { Breadcrumb } from "@despegar/eva-react-components";
```

## Uso básico

```jsx
<Breadcrumb itemScope="itemscope">
  <Breadcrumb.Item href="/" itemProp="itemListElement">Despegar</Breadcrumb.Item>
  <Breadcrumb.Item href="/vuelos" itemProp="name">Vuelos</Breadcrumb.Item>
  <Breadcrumb.Item>Miami</Breadcrumb.Item>
</Breadcrumb>
```

## Props

### Breadcrumb

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode[]` (Breadcrumb.Item) | requerido | Lista de items. |
| `className` | `string` | `''` | Clases extra en el contenedor. |
| `itemScope` | `string` | `'itemscope'` | Se inyecta en `ul` para SEO. |

### Breadcrumb.Item

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `string` | `'Despegar'` | Texto del ítem. |
| `href` | `string` | `'#'` | URL; si está presente y no es el último ítem, renderiza como link. |
| `itemProp` | `'itemListElement' \| 'item' \| 'name' \| 'position'` | `undefined` | Atributo SEO para schema.org. |
| `itemType` | `string` | `undefined` | Atributo SEO opcional. |
| `itemScope` | `string` | `itemscope` | Atributo SEO opcional. |

> Nota: El último `Breadcrumb.Item` se renderiza como `<span>` (no link); los anteriores usan `Heading` variante `link` internamente.

## Ejemplos

### Breadcrumb con 3 niveles y SEO
```jsx
<Breadcrumb itemScope="itemscope">
  <Breadcrumb.Item href="/" itemProp="itemListElement">
    Despegar
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/vuelos" itemProp="name">
    Vuelos
  </Breadcrumb.Item>
  <Breadcrumb.Item itemProp="name">
    Miami
  </Breadcrumb.Item>
</Breadcrumb>
```

## Notas SEO

- `Breadcrumb` aplica `itemScope` (default `itemscope`) y `itemType="http://schema.org/BreadcrumbList"` en el `<ul>`.
- Cada `Breadcrumb.Item` clona props para asignar `itemProp` y `position` (`<meta itemProp="position" content={index} />`).
- El último ítem no se renderiza como enlace.
- Íconos de separación: pseudoelemento en `breadcrumb-item` con ícono de `eva-font` (chevron), no se muestra en el primero; margen-right 8px. Color de links `var(--brand-primary-3)`, último ítem `var(--color-neutral-800)`. Contenedor: padding vertical 8px, font-size 14px, line-height 20px.