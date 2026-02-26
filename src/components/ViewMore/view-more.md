# View More

## Descripción
Contenedor que recorta texto largo y muestra un disparador “Ver más / Ver menos” para expandirlo. Útil en descripciones largas, políticas o reseñas.

**Tipo:** Molécula  
**Categoría:** Content / Utility  
**Tags:** ver mas, expandir, truncate, collapsible, leer mas

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-view-more [ -expanded ] [clases-adicionales]">
  <div class="view-more-content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat eros sit amet eros egestas...
    </p>
  </div>

  <div class="view-more-shadow"></div>

  <button class="eva-3-link view-more-toggle" aria-expanded="false">
    Ver más
    <i class="eva-3-icon-arrow-bold-down"></i>
  </button>
</div>
```

- Clase base: `eva-3-view-more`.
- `view-more-content`: bloque con `max-height` y `overflow: hidden` para colapsar.
- `view-more-shadow`: gradiente inferior que indica contenido truncado (se oculta en `-expanded`).
- `view-more-toggle`: botón/link para cambiar estado; usa `aria-expanded`.
- Modificador `-expanded`: remueve `max-height`/shadow y cambia texto a “Ver menos”.

## Variantes / Estados
- **Colapsado (default):** contenido truncado, shadow visible, botón “Ver más”.
- **Expandido (`-expanded`):** contenido completo, sin shadow, botón “Ver menos” y flecha invertida.

## Cuándo Usar
- Descripciones o reseñas extensas donde se quiere ahorrar espacio.
- Textos secundarios que no requieren ser vistos completos de inmediato.

## Mejores Prácticas
- Definí un `max-height` adecuado (3-5 líneas) para mantener contexto.
- Usa transiciones suaves para expandir/colapsar.
- Cambia `aria-expanded` y `aria-controls` para accesibilidad.
- Mantené coherencia de copy: “Ver más” / “Ver menos”.

## Dependencias
- Utilidades de texto (`text`, `link`).
- Íconos: `arrow-bold-down`, `arrow-bold-up` (según estado).