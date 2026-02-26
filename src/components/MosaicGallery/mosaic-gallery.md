# Mosaic Gallery

## Descripción
Galería en mosaico (máx 4 imágenes) con botón opcional "Ver galería". Distribuye imágenes en grilla responsive con proporciones predefinidas.

**Tipo:** Molécula  
**Categoría:** Carousels  
**Tags:** detail, fotos, pictures, detalle, carousel, imágenes, carrusel

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-mosaic-gallery">
  <div class="mosaic-gallery-actions-container">
    <button class="mosaic-gallery-button">Ver galería</button>
  </div>
  <ul class="mosaic-gallery-list -no-gutter">
    <li class="mosaic-gallery-item -lg-8 -md-6">
      <img class="mosaic-gallery-image" src="img1.jpg" alt="img 1" />
    </li>
    <li class="mosaic-gallery-item -lg-4 -md-6">
      <img class="mosaic-gallery-image" src="img2.jpg" alt="img 2" />
    </li>
    <li class="mosaic-gallery-item -lg-2 -md-3">
      <img class="mosaic-gallery-image" src="img3.jpg" alt="img 3" />
    </li>
    <li class="mosaic-gallery-item -lg-2 -md-3">
      <img class="mosaic-gallery-image" src="img4.jpg" alt="img 4" />
    </li>
  </ul>
</div>
```

## Reglas de Layout
- Hasta 4 imágenes.
- Clases por posición:
  - 1ra: `-lg-8 -md-6` (o `-md-12` si es única)
  - 2da: `-lg-4 -md-6`
  - 3ra: `-lg-4 -md-6` si hay 3; `-lg-2 -md-3` si hay 4.
  - 4ta: `-lg-2 -md-3`.
- Usa `Grid` sin gutter (`noGutter`).

## Variantes
- Botón a la izquierda: `-loyalty` (cuando `buttonOnLeft` es true).
- Sin botón: ocultar acciones (`showButton=false`).

## Cuándo Usar
- Thumbnails de detalle de producto/propiedad.
- Previsualizar galería antes de abrir un carrusel completo.
- Destacar una imagen grande + 3 secundarias.

## Mejores Prácticas
- Mantener relaciones de aspecto consistentes entre imágenes.
- Proveer `alt` descriptivo para accesibilidad.
- Usar imágenes optimizadas y de peso liviano.
- Si se requieren más de 4 imágenes visibles, considerar un carrusel dedicado.

## Dependencias
- `grid`
- (NavDots está listado en metadata pero no se usa en markup base)

## Iconos
- No usa iconos.
