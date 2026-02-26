# ReviewsCards

## Descripción
Molécula de card de review con avatar, título, subtítulo y texto. Puede plegar/expandir con ViewMore.

**Tipo:** Molécula  
**Categoría:** Reviews  
**Tags:** comentarios, feedback, calificación, tarjeta

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-reviews-cards">
  <div class="eva-3-card -shadow-line -padding-lg">
    <div class="reviews-cards-profile">
      <div class="eva-3-avatar -image">
        <img src="https://bit.ly/33f5I7M" alt="" />
      </div>
      <div class="reviews-cards-text-container">
        <h5 class="reviews-cards-name">Gabriela Ferreira</h5>
        <span class="reviews-cards-date">Viajó en pareja - Jun 2018</span>
      </div>
    </div>
    <div class="reviews-cards-review">
      <p class="reviews-cards-text">Cama muy cómoda... (texto)</p>
    </div>
  </div>
</div>

<!-- Con ViewMore -->
<div class="reviews-cards-review -expanded">...</div>
<button class="reviews-more-button">Ver más</button>
```

## Características
- Usa `Card` con sombra `line` y padding `lg`.
- Avatar soporta tipos `image`, `icon`, `letter`.
- Texto plegable opcional mediante `ViewMore` (prop `useViewMore`).

## Cuándo Usar
- Mostrar testimonios o reseñas cortas en fichas de producto.
- Cards individuales en listados de comentarios destacados.

## Mejores Prácticas
- Mantener textos concisos; usar `useViewMore` para reviews largas.
- Mostrar subtítulo con contexto (fecha, tipo de viaje).

## Dependencias
- `avatar`, `card`, `heading`, `view-more`, `shadow`, `positioning`.

## Iconos
- Según avatar tipo `icon` (por defecto `user`).