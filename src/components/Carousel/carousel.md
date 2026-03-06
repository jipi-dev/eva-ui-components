# Carousel

## Descripción

Organismo de navegación horizontal que facilita la visualización de contenido en forma de cards deslizables, reduciendo el scroll vertical especialmente en mobile. Permite presentar información modularizada con soporte para título, flechas de navegación y puntos indicadores (nav dots).

**Tipo:** Organismo  
**Categoría:** Carousels  
**Tags:** carrusel, fotos, listado, navegacion, cards

> **Importante:** EVA UI **no provee la funcionalidad de scroll/swipe** del carousel. Se recomienda usar la librería [Swiper](https://swiperjs.com/) para el comportamiento de deslizamiento, adaptando su markup al diseño provisto por EVA UI.

## Instalación CSS

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

## Estructura HTML

```html
<div class="eva-3-carousel [-with-nav]">

  <!-- Título (opcional) -->
  <div class="carousel-title-container [-title-align-left|-title-align-center|-title-align-right]">
    <h6 class="eva-3-h6">Título del carousel</h6>
  </div>

  <!-- Contenedor de cards -->
  <div class="carousel-cards-container">
    <div class="cards-container-list">

      <!-- Flecha izquierda (solo si -with-nav) -->
      <!-- <NavSlider -left> -->

      <ul class="list-container">
        <li class="card-item">
          <div class="card-item-link-container">
            <!-- Card EVA UI -->
            <div class="eva-3-card">...</div>
          </div>
        </li>
        <!-- más .card-item... -->
      </ul>

      <!-- Flecha derecha (solo si -with-nav) -->
      <!-- <NavSlider -right> -->

    </div>
  </div>

  <!-- Navegación inferior (nav dots + flechas externas) -->
  <div class="carousel-navigation-container">
    <!-- NavDots -->
    <ul class="eva-3-nav-dots -sm">
      <li class="nav-dot" role="presentation"></li>
      <li class="nav-dot -active" role="presentation"></li>
      <!-- más dots... -->
    </ul>
  </div>

</div>
```

## Clases modificadoras

| Clase | Descripción |
|-------|-------------|
| `eva-3-carousel` | Clase base obligatoria |
| `-title-align-left` | Alineación del título a la izquierda (default) |
| `-title-align-center` | Alineación del título al centro |
| `-title-align-right` | Alineación del título a la derecha |
| `-with-nav` | Incluye flechas de navegación (`NavSlider`) dentro del contenedor de cards |

## Variantes de navegación

### Sin navegación (solo scroll)

```html
<div class="eva-3-carousel">
  <div class="carousel-title-container -title-align-left">
    <h6 class="eva-3-h6">Destinos destacados</h6>
  </div>
  <div class="carousel-cards-container">
    <div class="cards-container-list">
      <ul class="list-container">
        <li class="card-item">
          <div class="card-item-link-container">
            <div class="eva-3-card">...</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="carousel-navigation-container">
    <ul class="eva-3-nav-dots -sm">
      <li class="nav-dot -active" role="presentation"></li>
      <li class="nav-dot" role="presentation"></li>
      <li class="nav-dot" role="presentation"></li>
    </ul>
  </div>
</div>
```

### Con flechas externas (debajo del carousel)

Las flechas de navegación (`eva-3-nav-slider`) se ubican dentro del `.carousel-navigation-container`, a los lados de los nav dots.

### Con flechas internas (`-with-nav`)

Agregar la clase `-with-nav` al contenedor principal. Los `eva-3-nav-slider` van dentro de `.cards-container-list` con clases `.-left` y `.-right`.

```html
<div class="eva-3-carousel -with-nav">
  <div class="carousel-cards-container">
    <div class="cards-container-list">
      <!-- NavSlider izquierdo -->
      <ul class="list-container">...</ul>
      <!-- NavSlider derecho -->
    </div>
  </div>
</div>
```

## Comportamiento de scroll

- **Desktop:** al hacer scroll en el contenedor, toda la fila visible se desplaza mostrando las cards siguientes (no de a una).
- **El primer chevron visible** es siempre el derecho. El izquierdo aparece recién después del primer desplazamiento.
- **Mobile:** scroll horizontal con Nav Dots para indicar posición.

## Notas de estilo (SCSS)

- `.eva-3-carousel`: `padding-left: 10px`.
- `.carousel-title-container`: `margin-bottom: $spacing-5`, `padding: 0 $spacing-2`.
- `.cards-container-list`: `overflow: hidden`, necesario para el deslizamiento.
- `.card-item`: `padding: $spacing-2 $spacing-3 $spacing-4`.
- `.carousel-navigation-container`: `display: flex`, `justify-content: center`, `padding: $spacing-3 0 10px`.
- `.-with-nav .cards-container-list`: `padding: 0 $spacing-3`.

## Accesibilidad

- Usar `role="presentation"` en cada `<li>` de nav dots.
- Las flechas de navegación deben tener `aria-label` descriptivos ("Anterior", "Siguiente").
- El título debe usar la jerarquía de heading correcta según el contexto.

## Dependencias

- Componentes EVA: `heading`, `card`, `nav-dots`, `nav-slider`, `nav-view-more`, `shadow`.
- Librería externa recomendada para funcionalidad de scroll: [Swiper](https://swiperjs.com/).
- Clase base: `eva-3-carousel`.

## Ejemplo rápido

```html
<div class="eva-3-carousel">
  <div class="carousel-title-container -title-align-left">
    <h6 class="eva-3-h6">¡Conocé lo mejor de Miami!</h6>
  </div>
  <div class="carousel-cards-container">
    <div class="cards-container-list">
      <ul class="list-container">
        <li class="card-item">
          <div class="card-item-link-container">
            <div class="eva-3-card -eva-3-p-md -eva-3-shadow-line">
              Contenido de la card
            </div>
          </div>
        </li>
        <li class="card-item">
          <div class="card-item-link-container">
            <div class="eva-3-card -eva-3-p-md -eva-3-shadow-line">
              Contenido de la card
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="carousel-navigation-container">
    <ul class="eva-3-nav-dots -sm">
      <li class="nav-dot -active" role="presentation"></li>
      <li class="nav-dot" role="presentation"></li>
      <li class="nav-dot" role="presentation"></li>
    </ul>
  </div>
</div>
```
