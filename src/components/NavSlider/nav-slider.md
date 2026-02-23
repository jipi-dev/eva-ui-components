# Nav Slider

## Descripción
Controles de navegación con flechas (prev/next) para carouseles o listados. Soporta tamaños, variantes de color y estados deshabilitado.

**Tipo:** Átomo  
**Categoría:** Navigation  
**Tags:** navegacion, carousel, carrousel, controles, flechas, arrow

## Estructura HTML
```html
<div class="eva-3-nav-slider -md -white -left">
  <i class="nav-slider-icon -chevron-left"></i>
</div>
<div class="eva-3-nav-slider -md -white -right">
  <i class="nav-slider-icon -chevron-right"></i>
</div>
```

## Variantes
- Tamaños: `-sm`, `-md`, `-lg`, `-xlg`.
- Colores: `-white`, `-negative`, default.
- Estados: `-disabled`.
- Visibilidad: se puede ocultar izquierda (`hideLeft`) o derecha (`hideRight`).

## Cuándo Usar
- Navegación en carruseles de imágenes/cards.
- Controles de paso en listados horizontales.

## Mejores Prácticas
- Deshabilitar flecha cuando no hay más items en esa dirección.
- Mantener contraste con el fondo; usar `-negative` sobre fondos oscuros.
- Proveer targets de tamaño adecuado (usar `md` o `lg` en mobile).

## Iconos
- `chevron-left`, `chevron-right` (renderizados en el componente)
- Metadata incluye `arrow-left`, `arrow-right` (no usados en JSX)

## Dependencias
- `shadow` (para efecto hover/line)
