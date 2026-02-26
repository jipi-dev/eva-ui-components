# Rating

## Descripción
Átomo para mostrar puntajes numéricos con estilo de badge coloreado según la calidad.

**Tipo:** Átomo  
**Categoría:** Reviews  
**Tags:** puntaje, rating, score, calificación

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

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