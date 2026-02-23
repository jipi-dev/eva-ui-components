# Overlay

## Descripción
Átomo de backdrop/opacidad para oscurecer o cubrir secciones de la UI. Útil como capa detrás de modals, loaders o estados de bloqueo.

**Tipo:** Átomo  
**Categoría:** Modals  
**Tags:** modal, fondo oscuro, overlay, backdrop

## Estructura HTML
```html
<div class="eva-3-overlay -show-overlay">
  <!-- Contenido opcional dentro del overlay -->
  <p>Soy un Overlay</p>
</div>

<!-- Variante blanca sobre fondos oscuros -->
<div class="eva-3-overlay -show-overlay -white"></div>
```

## Características
- Base `eva-3-overlay`.
- Muestra/oculta con `-show-overlay`.
- Variante clara para fondos oscuros: `-white`.
- Acepta cualquier contenido como children.

## Cuándo Usar
- Fondo de modals, side-sheets o bottom-sheets.
- Bloquear interacción mientras se carga o procesa algo.
- Destacar un tooltip/coachmark aislando el resto del contenido.

## Mejores Prácticas
- Ajustar opacidad según el contraste del contenido frontal.
- Evitar overlays permanentes que bloqueen interacción sin acción clara para cerrar.
- Para accesibilidad, manejar foco y anunciar cambios de estado cuando se muestra.

## Dependencias
- Ninguna.

## Iconos
- No aplica.