# Button Circle

## Descripción

Botón circular usado en el header de Despegar para navegación de productos. Muestra un ícono y opcionalmente un label.

**Tipo:** Átomo  
**Categoría:** Navigation / Actions  
**Tags:** button, circle, product, icon-only, nav, active

## Cuándo Usar
- Selector de productos/verticales en headers o menús principales.
- Acciones rápidas icon-only donde el label es opcional.
- Tabs/segmented control visuales con íconos de producto.

## Mejores Prácticas
- Usa `title`/`aria-label` cuando no haya label visible.
- Marca el activo con `-active` (y opcional `aria-selected=true`).
- Evita más de 1-2 líneas de texto en el label para no romper el layout.

## Dependencias
- Clase base `eva-3-button-circle`, modificador `-active`.
- Íconos de producto EVA (`flights`, `hotels`, `packages`, `cars`, `tickets`, `disney`, `assistances`, `buses`, `cruises`).

## Estructura HTML

```html
<a class="eva-3-button-circle [clases]" href="#" title="Vuelos">
  <div class="button-circle-icon">
    <i class="eva-3-icon-flights"></i>
  </div>
  <span class="button-circle-label">Vuelos</span>
</a>
```

- Usa `-active` para estado activo.
- Usa `noLabel` (en React) para omitir el `<span>` del label.
- El ícono corresponde al producto.

## Variantes

- **Productos**: `flights`, `hotels`, `packages`, `cars`, `tickets`, `disney`, `assistances`, `buses`, `cruises`.
- **Active**: añadir clase `-active` al contenedor (`eva-3-button-circle -active`).
- **Sin label**: omitir `<span class="button-circle-label">…</span>`.

### Ejemplos

**Con label (flights)**
```html
<a class="eva-3-button-circle" href="#" title="Vuelos">
  <div class="button-circle-icon"><i class="eva-3-icon-flights"></i></div>
  <span class="button-circle-label">Vuelos</span>
</a>
```

**Sin label (icon-only)**
```html
<a class="eva-3-button-circle" href="#" title="Vuelos">
  <div class="button-circle-icon"><i class="eva-3-icon-flights"></i></div>
</a>
```

**Activo**
```html
<a class="eva-3-button-circle -active" href="#" title="Vuelos">
  <div class="button-circle-icon"><i class="eva-3-icon-flights"></i></div>
  <span class="button-circle-label">Vuelos</span>
</a>
```

## Notas de estilo (referencia)

- Contenedor: `inline-flex`, columna, centrado, `padding` 0, `box-sizing: border-box`, `text-decoration: none`, `overflow: hidden`, `cursor: pointer`.
- Icono (`.button-circle-icon`): color `var(--color-neutral-700)`, font-size 24px, transiciones `background-color` y `color` 0.1s.
- Label (`.button-circle-label`): margin-top 8px, color `var(--color-neutral-700)`, font-size 14px, `user-select: none`.
- Hover: ícono y label cambian a `var(--brand-primary-3)`.
- Activo (`.-active` o `:active`): `font-weight: 500`, subrayado con `:after` (height 2px, radius 8px, width 120%, margin-top 8px, background `var(--brand-primary-3)`, `opacity: 1`), ícono y label en `var(--brand-primary-3)`.
- Estado normal: `:after` con `opacity: 0`.

## Accesibilidad

- Sugerido: `aria-selected` para indicar activo, `aria-label` o `title` con el nombre del producto.
- Mantener contraste suficiente (íconos/labels usan variables de marca/neutras).

## Dependencias

- Íconos de producto: `flights`, `hotels`, `packages`, `cars`, `tickets`, `disney`, `assistances`, `buses`, `cruises` (fuente EVA UI).