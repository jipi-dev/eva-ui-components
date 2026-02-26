# TooltipMenu

## Descripción
Variación de tooltip usada como menú contextual o resultados rápidos. Permite secciones, opciones con subtítulo, estado y scroll vertical.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-tooltip -show-tooltip eva-3-tooltip--menu -small-center -white">
  <div class="tooltip-container">
    <div class="tooltip-menu">
      <div class="tooltip-menu-section -separator">
        <div class="tooltip-menu-section-title">
          <i class="eva-3-icon-hotel-bell"></i> Hoteles
        </div>
        <button class="tooltip-menu-option" role="menuitem">
          <span class="tooltip-menu-title">Hotel Sheraton</span>
          <span class="tooltip-menu-subtitle">Buenos Aires</span>
        </button>
        <button class="tooltip-menu-option -separator" role="menuitem">
          <span class="tooltip-menu-title">Ver más</span>
        </button>
      </div>
      <div class="tooltip-menu-section">
        <div class="tooltip-menu-info">Cargando...</div>
      </div>
    </div>
  </div>
</div>
```

## Variantes / Estados
- `-small-center`, `-white`, `-not-hover` (clases por defecto en implementación React cuando corresponde).
- `-scroll-y`: habilita scroll vertical.
- `pointer`: muestra puntero (`marker`).

## Cuándo usar
- Autosuggest, menús de acciones rápidas o resultados breves asociados a un trigger.

## Mejores prácticas
- Limitar la altura y usar `-scroll-y` si hay muchas opciones.
- Separar grupos con `separator` en `Section`.
- Usar roles `menuitem` y navegación por teclado.

## Dependencias
- Íconos según el contenido; ejemplos usan `hotel-bell`, `chevron-right`, etc.