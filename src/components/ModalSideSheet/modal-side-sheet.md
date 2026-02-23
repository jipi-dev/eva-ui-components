# Modal Side Sheet

## Descripción
Modal lateral deslizable desde izquierda o derecha. Incluye header con título y botón de cierre, contenido scrollable y footer sticky opcional.

**Tipo:** Molécula  
**Categoría:** Modals  
**Tags:** popup, emergente, ventana, window, overlay, lateral

## Estructura HTML
```html
<div class="eva-3-modal-side-sheet -show-modal-side-sheet -right -sm">
  <div class="sheet-container">
    <div class="sheet-header">
      <h4 class="sheet-title">Título</h4>
      <i class="modal-close" role="button" aria-label="Close modal"></i>
    </div>
    <div class="sheet-content">
      <!-- contenido -->
    </div>
    <div class="sheet-footer">
      <!-- footer sticky opcional -->
    </div>
  </div>
</div>
```

## Variantes
- Tamaños: `-sm`, `-md`, `-lg`.
- Posición: `-right` (default) o `-left`.
- `-white`: fondo blanco.
- `-fixed-header`: header fijo.
- `-no-padding`: sin padding en contenido.
- `-no-title`: oculta el título.
- Footer sticky: `-show-sticky-footer` cuando hay footer.

## Props clave (referencia de comportamiento)
- `show`: muestra/oculta (`-show-modal-side-sheet`).
- `toggleModal`: callback de cierre (ícono X, ESC).
- `white`: aplica fondo blanco.
- `fixedHeader`: hace sticky el header.
- `noPadding`: remueve padding del contenido.
- `noTitle`: oculta el título.
- `size`: 'sm' | 'md' | 'lg'.
- `position`: 'right' | 'left'.
- `showStickyFooter`: muestra footer fijo.
- `footer`: contenido del footer.
- `title`: texto del título.
- `children`: contenido principal.

## Cuándo Usar
- Filtros o configuraciones laterales.
- Detalles complementarios sin bloquear la vista principal.
- Flujos donde el contexto principal debe permanecer visible.

## Mejores Prácticas
- Mantener contenido resumido; evitar formularios muy largos.
- Usar `fixedHeader` si el contenido es largo para mantener acciones visibles.
- Footer sticky para acciones principales.
- Elegir `left` solo si la app lo exige; default `right` es más común.

## Accesibilidad
- Botón de cerrar con `role="button"`, `tabIndex=0`, `aria-label`.
- Soporte ESC para cierre.

## Iconos
- `cross` / `close` (botón de cierre)

## Dependencias
- `button` (solo si se usan botones en footer)
