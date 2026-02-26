# Slider

## Descripción
Control de entrada tipo `range` estilizado con EVA para seleccionar un valor continuo.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-slider">
  <div class="slider-input-container">
    <div class="slider-input-content">
      <input class="slider-input" type="range" min="0" max="100" step="1" id="slider-id" />
    </div>
  </div>
</div>
```

## Estados
- Nativo del input: `disabled`, `:focus`, `:active`.

## Cuándo usar
- Selección de valores simples con feedback inmediato (p.ej. porcentaje, zoom, rating continuo).

## Mejores prácticas
- Definí `min`, `max` y `step` claros para el usuario.
- Acompañá con etiquetas o valores visibles si el rango no es obvio.

## Dependencias
- Sin íconos. Usa variables de color del tema.