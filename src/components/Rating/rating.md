# Rating

## Descripción
Átomo para mostrar puntajes numéricos con estilo de badge coloreado según la calidad.

**Tipo:** Átomo  
**Categoría:** Reviews  
**Tags:** puntaje, rating, score, calificación

## Estructura HTML
```html
<div class="eva-3-rating -good -lg">
  <span class="rating-text">8.5</span>
</div>

<!-- Variantes -->
<div class="eva-3-rating -regular -md">
  <span class="rating-text">6.0</span>
</div>
```

## Características
- Clase base `eva-3-rating` con modificadores de estado (`-good`, `-regular`) y tamaño (`-sm`, `-md`, `-lg`).
- Determina score automáticamente si no se pasa `score` usando el valor numérico (<=7 regular, >7 good).
- Contenido libre (texto/número) dentro de `rating-text`.

## Cuándo Usar
- Mostrar valoración global o parcial (servicios, ubicación, limpieza, etc.).
- Resúmenes de reviews en cards o listados.

## Mejores Prácticas
- Usar tamaños mayores en encabezados o hero; tamaños pequeños en listas densas.
- Mantener 1–2 decimales máximo para legibilidad.

## Dependencias
- `colours` (paleta de estado).

## Iconos
- No aplica.