# Carousel (React)

## Descripción

Organismo de navegación horizontal que facilita la visualización de contenido en forma de cards deslizables, reduciendo el scroll vertical especialmente en mobile. Soporta título configurable, flechas de navegación (`NavSlider`) y puntos indicadores (`NavDots`).

**Tipo:** Organismo  
**Categoría:** Carousels  
**Tags:** react, carousel, carrusel, cards, navegacion, listado

> **Importante:** EVA UI **no provee la funcionalidad de scroll/swipe**. Se recomienda integrar [Swiper](https://swiperjs.com/) para el comportamiento de deslizamiento y adaptar su markup al diseño de EVA UI.

## Instalación CSS

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

**Import:**
```jsx
import { Carousel } from "@despegar/eva-react-components";
```

## Props (Carousel)

| Prop | Tipo | Default | Requerido | Descripción |
|------|------|---------|-----------|-------------|
| `titleAlignment` | `'left' \| 'center' \| 'right'` | — | **Sí** | Alineación del título del carousel |
| `hasSubNav` | `boolean` | `false` | No | Muestra flechas de navegación (`NavSlider`) |
| `navsInNavigation` | `boolean` | `false` | No | `true`: flechas dentro del contenedor de cards (`-with-nav`). `false`: flechas en la barra de navegación inferior |
| `hasNavDots` | `boolean` | `true` | No | Muestra los puntos indicadores (`NavDots`) |
| `className` | `string` | `''` | No | Clases CSS adicionales para el contenedor raíz |
| `children` | `Card[]` | — | No | Array de componentes `Card` |

## Sub-componente: Carousel.CarouselNavigation

Contenedor interno de la barra de navegación inferior (nav dots + flechas externas). Se usa internamente por `Carousel` y raramente se instancia de forma directa.

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `hasSubNav` | `boolean` | `false` | Muestra flechas `NavSlider` en los laterales del nav |
| `className` | `string` | `''` | Clases adicionales |
| `children` | `NavDots` | — | Componente `NavDots` |

## Estructura renderizada

```jsx
<div className="eva-3-carousel [-with-nav] [className]">
  <div className="carousel-title-container [-title-align-{titleAlignment}]">
    <Heading variant="h6" tag="h6">Título</Heading>
  </div>
  <div className="carousel-cards-container">
    <div className="cards-container-list">
      {/* NavSlider izquierdo — solo si hasSubNav && navsInNavigation */}
      <ul className="list-container">
        <li className="card-item">
          <div className="card-item-link-container">
            {/* Card */}
          </div>
        </li>
      </ul>
      {/* NavSlider derecho — solo si hasSubNav && navsInNavigation */}
    </div>
  </div>
  <Carousel.CarouselNavigation hasSubNav={hasSubNav && !navsInNavigation}>
    {/* NavDots — solo si hasNavDots */}
  </Carousel.CarouselNavigation>
</div>
```

## Ejemplos

### Básico (solo scroll, con nav dots)

```jsx
<Carousel titleAlignment="left">
  <Card className="-eva-3-p-md -eva-3-shadow-line">
    Contenido card 1
  </Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">
    Contenido card 2
  </Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">
    Contenido card 3
  </Card>
</Carousel>
```

### Sin nav dots

```jsx
<Carousel titleAlignment="left" hasNavDots={false}>
  <Card className="-eva-3-p-md">Contenido card 1</Card>
  <Card className="-eva-3-p-md">Contenido card 2</Card>
</Carousel>
```

### Con flechas de navegación externas (debajo del carousel)

Las flechas aparecen en la barra inferior junto a los nav dots.

```jsx
<Carousel
  titleAlignment="left"
  hasSubNav={true}
  navsInNavigation={false}
>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 1</Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 2</Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 3</Card>
</Carousel>
```

### Con flechas de navegación internas (`-with-nav`)

Las flechas se posicionan dentro del contenedor de cards, a izquierda y derecha.

```jsx
<Carousel
  titleAlignment="center"
  hasSubNav={true}
  navsInNavigation={true}
>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 1</Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 2</Card>
  <Card className="-eva-3-p-md -eva-3-shadow-line">Card 3</Card>
</Carousel>
```

### Título centrado

```jsx
<Carousel titleAlignment="center" hasNavDots={true}>
  <Card className="-eva-3-p-md">Card 1</Card>
  <Card className="-eva-3-p-md">Card 2</Card>
</Carousel>
```

### Integración con Swiper (recomendada para scroll funcional)

EVA UI no provee la lógica de scroll. Para un carousel funcional, integrar Swiper y usar el markup de EVA:

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '@despegar/eva-react-components';

// Swiper maneja el scroll; las clases de EVA definen el aspecto visual
<div className="eva-3-carousel">
  <div className="carousel-title-container -title-align-left">
    <h6 className="eva-3-h6">Destinos destacados</h6>
  </div>
  <div className="carousel-cards-container">
    <div className="cards-container-list">
      <Swiper slidesPerView="auto" spaceBetween={8}>
        <SwiperSlide className="card-item">
          <div className="card-item-link-container">
            <Card className="-eva-3-p-md -eva-3-shadow-line">
              Contenido card 1
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-item">
          <div className="card-item-link-container">
            <Card className="-eva-3-p-md -eva-3-shadow-line">
              Contenido card 2
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
```

## Comportamiento de navegación

| Configuración | Resultado |
|---------------|-----------|
| `hasSubNav={false}` | Solo scroll horizontal, sin flechas |
| `hasSubNav={true}` `navsInNavigation={false}` | Flechas en barra inferior junto a nav dots |
| `hasSubNav={true}` `navsInNavigation={true}` | Flechas superpuestas dentro del contenedor de cards (`-with-nav`) |
| `hasNavDots={false}` | Sin puntos indicadores de posición |

## Accesibilidad

- El título debe usar la jerarquía de heading adecuada al contexto de la página.
- Las flechas de navegación deben tener `aria-label` ("Anterior", "Siguiente").
- Si se usa Swiper, configurar `a11y` para lectores de pantalla.
- Los nav dots tienen `role="presentation"` y son decorativos; la posición actual debe comunicarse por otro medio si es crítico.

## Dependencias

- Componentes EVA: `Card`, `Heading`, `NavDots`, `NavSlider`, `NavViewMore`, `Shadow`.
- HOC: `withUtilities`.
- Librería externa recomendada: [Swiper](https://swiperjs.com/) para funcionalidad de scroll/swipe.
- Clase base: `eva-3-carousel`.

## Notas

- `titleAlignment` es **requerido**.
- `children` solo acepta componentes `Card` (validado con `instanceOfFunctional(Card)`).
- Cuando `hasSubNav && navsInNavigation` es `true`, el contenedor raíz recibe la clase `-with-nav`.
- La lógica de qué card está activa (highlight en nav dots, posición del scroll) debe manejarse externamente.
