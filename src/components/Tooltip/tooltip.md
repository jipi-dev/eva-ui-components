# Tooltip

## Descripción
Globo informativo para mostrar ayuda contextual al hover/tap. Incluye posiciones, tamaños y variantes con puntero y cierre.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<span class="eva-3-tooltip -show-tooltip -top-center -sm">
  <span class="tooltip-container -eva-3-shadow-static">
    <i class="tooltip-marker"></i>
    <span class="tooltip-content">
      <h5 class="tooltip-title">Título</h5>
      <span class="tooltip-text">Texto descriptivo.</span>
    </span>
  </span>
</span>
```

## Variantes y posiciones
- Tamaños: default y `-sm`.
- Posiciones: `top-left|center|right`, `bottom-left|center|right`, `left-inline(-top|-bottom)`, `right-inline(-top|-bottom)`.
- `-show-tooltip`: fuerza visibilidad.
- `-white`: fondo claro; admite `tooltip-close`.
- `-sm-full`: ocupa 100% en mobile.
- `-not-hover` + breakpoints (`all|small|medium|large`) para deshabilitar hover.
- `-marker`: puntero visible/oculto según flag.

## Cuándo usar
- Mensajes cortos de ayuda sin interrumpir flujo.

## Mejores prácticas
- Texto breve; evita párrafos largos.
- Asegurá foco y activación con teclado en desktop; en mobile, usar tap/click.

## Dependencias
- Ícono `cross` para cierre opcional.
- Usa `Shadow` utilitario para la tarjeta.