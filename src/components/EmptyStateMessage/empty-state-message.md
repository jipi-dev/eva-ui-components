# Empty State Message

## Descripción

Mensaje mostrado cuando no hay resultados disponibles o hay un error. Presenta ilustración/ícono, título, descripción opcional y botones de acción. Soporta múltiples layouts (default, box, vertical) y estados (default, error-state).

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<div class="eva-3-empty-state-message [-error-state] [-box-layout] [-vertical] [-icon] [-secondary-button] [clases-adicionales]">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image">
      <!-- Ilustración de fondo vía CSS o img si -icon -->
    </div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">
        No hay resultados...
      </div>
      <p class="eva-3-heading -body-1 empty-state-message-description">
        Solo podemos buscar vuelos 330 días antes de tu fecha.
      </p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
        <!-- Botón secundario opcional -->
        <button class="eva-3-btn -lg -link">Omitir</button>
      </div>
    </div>
  </div>
</div>
```

- Clase base: `eva-3-empty-state-message`.
- Modificadores: `-error-state`, `-box-layout`, `-vertical`, `-icon`, `-secondary-button`.
- `empty-state-message-image`: contenedor de ilustración (background CSS o `<img>` si `-icon`).
- `empty-state-message-content`: título (Heading h3), descripción (Heading body-1), botones (Button).

## Layouts

### Default

Layout full-width con ilustración de fondo en `empty-state-message-image` (vía CSS).

```html
<div class="eva-3-empty-state-message">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">Titulo primario</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Descripción</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Volar a Neuquén</button>
      </div>
    </div>
  </div>
</div>
```

### Box Layout (`-box-layout`)

Contenedor con borde, fondo blanco, sin ilustración de fondo (ideal para clusters de resultados).

```html
<div class="eva-3-empty-state-message -box-layout">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
```

### Vertical Layout (`-vertical` + `-box-layout`)

Layout vertical (ilustración arriba, contenido abajo). Requiere `-box-layout`.

```html
<div class="eva-3-empty-state-message -box-layout -vertical">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
```

### Icon Layout (`-icon` + `-box-layout`)

Ícono ilustrado (`<img>`) en lugar de ilustración de fondo. Requiere `-box-layout`.

```html
<div class="eva-3-empty-state-message -box-layout -icon">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image">
      <img src="https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg" alt="" />
    </div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
```

## Estados

### Default

Ilustración default (`--eva-illustration-18`).

### Error State (`-error-state`)

Mensaje de error con ilustración de error (`--eva-illustration-23`).

```html
<div class="eva-3-empty-state-message -error-state">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">Detectamos un problema</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Por favor intenta de nuevo</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
```

## Variantes de botones

### Dos botones (`-secondary-button`)

```html
<div class="eva-3-empty-state-message -secondary-button">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
        <button class="eva-3-btn -lg -link">Omitir</button>
      </div>
    </div>
  </div>
</div>
```

### Sin botón

Omitir `.empty-state-message-button` si no se necesita acción.

```html
<div class="eva-3-empty-state-message">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
    </div>
  </div>
</div>
```

## Notas de estilo (SCSS)

- Default: ilustración de fondo vía CSS variable (`--eva-illustration-18` para default, `--eva-illustration-23` para error).
- `-box-layout`: `border: 1px solid neutral-300`, `border-radius: $border-radius-4`, `background-color: white`, sin ilustración de fondo (a menos que `-icon`).
- `-vertical`: `display: block` en container (imagen arriba, contenido abajo con `padding-top`).
- `-icon`: `empty-state-message-image` width/height `72px`, contiene `<img>` en lugar de background.
- Responsive: mobile centra imagen, desktop flex row con imagen a la izquierda.
- Botón secundario: `margin-right: $spacing-4` en primer botón (solo si no es error-state).

## Accesibilidad

- Título usa `Heading` con variante `h3` (semántica).
- Descripción usa `Heading body-1` con tag `<p>`.
- Ilustraciones decorativas (`<img>` con `alt=""` vacío).
- Botones con texto descriptivo; considerar `aria-label` si el texto es genérico.

## Dependencias

- Componentes: `heading`, `button`, `grid`, `illustrations`.
- Sprites: `empty-state-message-error-image.svg`, `empty-state-message-default-mobile.svg`, `empty-state-message-default.svg`.
- Clase base: `eva-3-empty-state-message`.
- Categoría: `state` (type: molecules).

## Ejemplo rápido

```html
<div class="eva-3-empty-state-message -box-layout">
  <div class="empty-state-message-container">
    <div class="empty-state-message-image"></div>
    <div class="empty-state-message-content">
      <div class="eva-3-heading -h3 empty-state-message-title">No hay resultados...</div>
      <p class="eva-3-heading -body-1 empty-state-message-description">Solo podemos buscar vuelos 330 días antes de tu fecha.</p>
      <div class="empty-state-message-button">
        <button class="eva-3-btn -lg -primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
```
