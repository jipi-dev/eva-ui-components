# RangeSlider

## Descripción
Átomo para seleccionar rangos (dos handlers) o un solo valor (una bola) sobre un track continuo.

**Tipo:** Átomo  
**Categoría:** Form  
**Tags:** rango, slider, filtro, precio, formulario

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div
  class="eva-3-range-slider"
  style="--eva-slider-range-left-handler-position: 20%; --eva-slider-range-right-handler-position: 80%;"
  role="slider"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="20"
>
  <div class="slider-bar">
    <div class="slider-range"></div>
    <div class="slider-handler -left" draggable="true"></div>
    <div class="slider-handler -right" draggable="false"></div>
  </div>
</div>
```

## Características
- Clase base `eva-3-range-slider`.
- Usa variables CSS para posicionar handlers izquierdo/derecho (en %).
- Soporta modo simple (`single=true`) para ocultar handler izquierdo.
- Handlers disparan callbacks `onDragEnd` provistos (`setLeftBallPosition`, `setRightBallPosition`).

## Cuándo Usar
- Selección de rango de precio, distancia, fechas normalizadas u otras magnitudes continuas.

## Mejores Prácticas
- Mantener límites claros (min/max) y mostrar valores numéricos cercanos al control.
- En mobile, asegurar tamaño de touch target suficiente.
- Usar `single` cuando solo se necesita un valor (ej. nivel de volumen).

## Dependencias
- Ninguna particular.

## Iconos
- No aplica.