# ReviewsSummary

## Descripción
Molécula que resume puntajes de usuarios: muestra score general, avatares y barras por aspecto, con opción de ver más.

**Tipo:** Molécula  
**Categoría:** Reviews  
**Tags:** resumen, reviews, puntuación, barras

## Estructura HTML
```html
<div class="eva-3-reviews-summary">
  <div class="reviews-summary-header">
    <div class="summary-rating-container">
      <div class="eva-3-rating -good -lg"><span class="rating-text">7.5</span></div>
      <div class="summary-text-container">
        <div class="h4">Muy bueno</div>
        <div class="body-1 -eva-3-tc-green-3">Excelente ubicación</div>
        <a class="link">Ver 95 comentarios</a>
      </div>
    </div>
    <div class="summary-avatar-container">...avatars...</div>
    <div class="summary-comment-content">Puntuación basada en 95 comentarios</div>
  </div>

  <div class="reviews-summary-rating-bar">
    <div class="eva-3-progress-bar">
      <div class="progress-bar-content -eva-3-bc-green-3" style="width:81%"></div>
    </div>
    <div class="summary-rating-bar-container">
      <span class="button">Servicios</span>
      <span class="button -eva-3-tc-green-3">8.1</span>
    </div>
  </div>
  <!-- más barras -->
</div>
```

## Características
- Usa `Rating` para score general y `ProgressBar` para aspectos.
- Avatares opcionales en header (tipos image/letter).
- Botón “Ver más” en mobile via `ViewMore` (props `double`, `showMore`).
- Colores de barra/texto según score (`good` verde, `regular` naranja, `bad` rojo).

## Cuándo Usar
- Resumen de reviews de alojamiento/producto destacando áreas específicas.

## Mejores Prácticas
- Limitar a ~6 aspectos para no saturar.
- Mantener consistencia entre colores y etiquetas de score.
- En mobile, usar `showMore` para iniciar expandido cuando sea clave.

## Dependencias
- `rating`, `progress-bar`, `avatar`, `heading`, `view-more`, `text`, `hide-content`.

## Iconos
- No aplica (usa componentes internos).