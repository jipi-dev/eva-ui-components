# Nav View More

## Descripción
Molécula para ver más elementos (abrir galería o listado). Dos variantes: elements (círculo con flecha) e images (ícono picture grande).

**Tipo:** Molécula  
**Categoría:** Navigation  
**Tags:** navegacion, carousel, carrousel, controles, flechas, arrow, ver mas

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-nav-view-more -eva-3-tc-blue-3">
  <div class="view-more-circle -eva-3-shadow-static-hover">
    <i class="view-more-icon -arrow-bold-right"></i>
  </div>
  <span class="view-more-label">Ver más</span>
</div>
```

## Variantes
- `variant="elements"` (default): círculo con flecha `arrow-bold-right`, texto coloreado azul.
- `variant="images"`: ícono `picture` grande, texto en blanco.

## Cuándo Usar
- Entrada para abrir un slider/galería completa.
- Ver más amenities o elementos adicionales.

## Mejores Prácticas
- Mantener copy claro ("Ver más", "Ver galería").
- Ubicar junto al carrusel o lista relacionada.
- Asegurar contraste suficiente según variante.

## Iconos
- `arrow-bold-right`, `arrow-bold-left`, `picture` (según variante y metadatos)

## Dependencias
- `shadow`, `colours`, `text`, `positioning`
