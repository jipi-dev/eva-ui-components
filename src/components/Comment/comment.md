# Comment

## Descripción

Molécula para mostrar comentarios de usuarios con calificación, nacionalidad, texto positivo/negativo y botón de traducción opcional. Presenta header con datos de usuario, ítems de comentario con expansión "leer más/menos" y estado de carga.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<div class="eva-3-comment [-loading] [clases-adicionales]">
  <!-- Header -->
  <div class="comment-header">
    <div class="comment-flag-container">
      <div class="eva-3-flag comment-flag"><!-- Bandera --></div>
    </div>
    <div class="comment-header-text">
      <span class="comment-name">Nombre del Usuario</span>
      <span class="comment-info">
        <span class="comment-filter">Viajo en Familia</span>
        <span class="comment-date"> - Febrero 2020</span>
      </span>
    </div>
    <div class="comment-rating">
      <span class="comment-rating-number">
        <div class="eva-3-rating -md -good">9,3</div>
      </span>
      <span class="comment-rating-text">Huésped verificado por Despegar.com</span>
    </div>
  </div>

  <!-- Items (comentarios) -->
  <div class="comment-items">
    <!-- Positivo -->
    <div class="comment-item -pos [-read-more]">
      <i class="eva-3-icon-checkmark comment-icon"></i>
      <div class="comment-text-container">
        <div class="comment-text-subcontainer">
          <p class="comment-text">
            Comentario positivo...
            <span role="presentation" class="comment-text-less">Ver menos</span>
          </p>
        </div>
        <span class="comment-text-more-dots">
          ...
          <span role="presentation" class="comment-text-more">Ver más</span>
        </span>
      </div>
    </div>
    <!-- Negativo -->
    <div class="comment-item -neg [-read-more]">
      <i class="eva-3-icon-cross comment-icon"></i>
      <div class="comment-text-container">
        <div class="comment-text-subcontainer">
          <p class="comment-text">
            Comentario negativo...
            <span role="presentation" class="comment-text-less">Ver menos</span>
          </p>
        </div>
        <span class="comment-text-more-dots">
          ...
          <span role="presentation" class="comment-text-more">Ver mas</span>
        </span>
      </div>
    </div>
    <!-- Overlay de carga -->
    <div class="comment-items-overlay -eva-3-bc-light">
      <div class="eva-3-loader comment-items-loader"></div>
    </div>
  </div>

  <!-- Botón traducir (opcional) -->
  <div class="comment-btn">
    <button class="eva-3-btn-ghost -darken -md">Traducir Comentario</button>
  </div>
</div>
```

- Clase base: `eva-3-comment`.
- Modificador `-loading`: muestra overlay con loader sobre `comment-items`.
- `comment-header`: bandera (Flags), nombre, info (categoría + fecha) y rating.
- `comment-items`: contenedor de positivo (`-pos`) y negativo (`-neg`), cada uno con ícono y texto expandible.
- `comment-btn`: botón opcional para traducir (ButtonGhost).

## Elementos

### Header

```html
<div class="comment-header">
  <div class="comment-flag-container">
    <div class="eva-3-flag comment-flag"><!-- bandera --></div>
  </div>
  <div class="comment-header-text">
    <span class="comment-name">Roberto Souviron</span>
    <span class="comment-info">
      <span class="comment-filter">Viajo con amigos</span>
      <span class="comment-date"> - 29/09/2020</span>
    </span>
  </div>
  <div class="comment-rating">
    <span class="comment-rating-number">
      <div class="eva-3-rating -md -good">9.8</div>
    </span>
    <span class="comment-rating-text">Huésped verificado por Despegar.com</span>
  </div>
</div>
```

### Items (comentarios)

```html
<div class="comment-items">
  <div class="comment-item -pos">
    <i class="eva-3-icon-checkmark comment-icon"></i>
    <div class="comment-text-container">
      <div class="comment-text-subcontainer">
        <p class="comment-text">Comentario positivo...</p>
      </div>
      <span class="comment-text-more-dots">... <span class="comment-text-more">Ver más</span></span>
    </div>
  </div>
  <div class="comment-item -neg">
    <i class="eva-3-icon-cross comment-icon"></i>
    <div class="comment-text-container">
      <div class="comment-text-subcontainer">
        <p class="comment-text">Comentario negativo...</p>
      </div>
      <span class="comment-text-more-dots">... <span class="comment-text-more">Ver más</span></span>
    </div>
  </div>
</div>
```

## Estados

### Default

Comentarios truncados a `max-height: 36px` con "Ver más" visible.

### Read More (`-read-more`)

Agrega `-read-more` al `.comment-item` para expandir texto completo, oculta `comment-text-more-dots` y muestra `comment-text-less`.

```html
<div class="comment-item -pos -read-more">
  <!-- texto expandido -->
</div>
```

### Loading (`-loading`)

Agrega `-loading` al contenedor principal; muestra overlay con loader sobre `comment-items`.

```html
<div class="eva-3-comment -loading">
  <!-- ... -->
</div>
```

## Notas de estilo (SCSS)

- `comment-header`: posicionamiento absoluto de bandera (izq) y rating (der); responsive flex en mobile.
- `comment-item`: íconos checkmark (positivo/success-500) y cross (negativo/error-500).
- `comment-text-container`: truncado con float hack; `max-height: 36px` y gradiente para "Ver más".
- `-read-more`: remueve max-height, oculta dots, muestra "Ver menos".
- `comment-items-overlay`: opacity 0/invisible por defecto; visible con `-loading`.
- Responsive: mobile convierte header a flex, oculta rating-text, ajusta padding.

## Accesibilidad

- `comment-text-more` / `comment-text-less` usan `role="presentation"` y `onClick`; considerar botones `<button>` para mejores prácticas (teclado/lectores).
- Rating interno usa componente `Rating` con score semántico (`good`, `regular`, `bad`).
- Bandera usa componente `Flags` con atributo `country`.

## Dependencias

- Componentes: `Rating`, `Loader`, `ButtonGhost`, `Flags`, `Icon`.
- Íconos: `checkmark` (positivo), `cross` (negativo), `error` (metadata).
- Clase base: `eva-3-comment`.
- Categoría: `reviews` (type: molecules).

## Ejemplo rápido

```html
<div class="eva-3-comment">
  <div class="comment-header">
    <div class="comment-flag-container"><div class="eva-3-flag comment-flag">AR</div></div>
    <div class="comment-header-text">
      <span class="comment-name">Roberto Souviron</span>
      <span class="comment-info"><span class="comment-filter">Viajo con amigos</span><span class="comment-date"> - 29/09/2020</span></span>
    </div>
    <div class="comment-rating">
      <span class="comment-rating-number"><div class="eva-3-rating -md -good">9.8</div></span>
      <span class="comment-rating-text">Huésped verificado por Despegar.com</span>
    </div>
  </div>
  <div class="comment-items">
    <div class="comment-item -pos">
      <i class="eva-3-icon-checkmark comment-icon"></i>
      <div class="comment-text-container">
        <div class="comment-text-subcontainer"><p class="comment-text">Excelente...</p></div>
        <span class="comment-text-more-dots">... <span class="comment-text-more">Ver más</span></span>
      </div>
    </div>
    <div class="comment-item -neg">
      <i class="eva-3-icon-cross comment-icon"></i>
      <div class="comment-text-container">
        <div class="comment-text-subcontainer"><p class="comment-text">Nada</p></div>
      </div>
    </div>
  </div>
  <div class="comment-btn">
    <button class="eva-3-btn-ghost -darken -md">Traducir Comentario</button>
  </div>
</div>
```
