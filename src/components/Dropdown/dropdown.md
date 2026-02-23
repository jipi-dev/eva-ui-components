# Dropdown

## Descripción

Row colapsable que oculta información desplegable mediante clic/tap. Muestra un título siempre visible con ícono chevron; al activar (clase `-active`), despliega lista de items (`dropdown-subitem`). Soporta integración con `ViewMore` para opciones adicionales ocultas.

## Estructura HTML

```html
<ul class="eva-3-dropdown [clases-adicionales]">
  <li class="dropdown-item [-active]">
    <span role="presentation" class="dropdown-item-container" tabindex="0">
      <span class="item-label [clases-titulo]">Título dropdown</span>
      <i class="eva-3-icon-chevron-down dropdown-icon"></i>
    </span>
    <ul class="dropdown-subcontent">
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">
          Opción 1
        </span>
      </li>
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">
          Opción 2
        </span>
      </li>
      <!-- ViewMore opcional -->
    </ul>
  </li>
</ul>
```

- Clase base: `eva-3-dropdown`.
- `dropdown-item`: contenedor del título y subcontent; agregar `-active` para mostrar desplegado.
- `dropdown-item-container`: wrapper clickeable con `tabindex="0"` para foco.
- `item-label`: título del dropdown (siempre visible).
- `dropdown-icon`: ícono chevron (rota 180° cuando `-active`).
- `dropdown-subcontent`: lista de items colapsable (`max-height: 0` → `3000px` en `-active`).
- `dropdown-subitem`: cada ítem dentro del subcontent; puede tener clase `view-more-content` si está dentro de `ViewMore`.

## Estados

### Colapsado (default)

```html
<ul class="eva-3-dropdown">
  <li class="dropdown-item">
    <span role="presentation" class="dropdown-item-container" tabindex="0">
      <span class="item-label">Filtros</span>
      <i class="eva-3-icon-chevron-down dropdown-icon"></i>
    </span>
    <ul class="dropdown-subcontent">
      <!-- oculto: max-height: 0, opacity: 0, visibility: hidden -->
    </ul>
  </li>
</ul>
```

### Desplegado (`-active`)

```html
<ul class="eva-3-dropdown">
  <li class="dropdown-item -active">
    <span role="presentation" class="dropdown-item-container" tabindex="0">
      <span class="item-label">Filtros</span>
      <i class="eva-3-icon-chevron-down dropdown-icon"></i> <!-- rotado 180° -->
    </span>
    <ul class="dropdown-subcontent">
      <!-- visible: max-height: 3000px, opacity: 1, visibility: visible -->
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">Opción 1</span>
      </li>
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">Opción 2</span>
      </li>
    </ul>
  </li>
</ul>
```

## Integración con ViewMore

Para opciones adicionales ocultas, integrar `ViewMore` dentro de `dropdown-subcontent`:

```html
<ul class="dropdown-subcontent">
  <li class="dropdown-subitem">Opción 1</li>
  <li class="dropdown-subitem">Opción 2</li>
  <!-- ViewMore -->
  <div class="eva-3-view-more">
    <li class="dropdown-subitem view-more-content">Opción oculta 1</li>
    <li class="dropdown-subitem view-more-content">Opción oculta 2</li>
    <button class="view-more-btn">Ver más opciones</button>
  </div>
</ul>
```

- `view-more-content` en `dropdown-subitem` indica ítem dentro de ViewMore.

## Notas de estilo (SCSS)

- `dropdown-item`: `padding: 20px 8px`, `border-top: 1px solid neutral-300` (último también `border-bottom`).
- `.-active`:
  - `dropdown-icon`: `transform: rotateZ(180deg)`.
  - `dropdown-subcontent`: transición `max-height` (0 → 3000px), `opacity` (0 → 1), `visibility` (hidden → visible), `transform: translateY(8px)`.
- `dropdown-item-container`: `position: relative`, `cursor: pointer`, `:focus-visible` aplica `eva-focus` con borde rounded.
- `dropdown-icon`: `position: absolute`, `right: 8px`, `font-size: 16px`, color `neutral-800`.
- `dropdown-subitem`: `margin-top: 16px` (primer hijo `8px`); `.view-more-content` sin `margin-top`.
- Responsive small: fondo `white` en `eva-3-dropdown`.

## Accesibilidad

- `dropdown-item-container` tiene `tabindex="0"` para foco por teclado.
- `role="presentation"` en el contenedor clickeable (considerar `<button>` para mejor semántica).
- `:focus-visible` aplica outline accesible en contenedores.
- Ícono chevron rota para indicar estado (visual feedback).

## Dependencias

- Componentes: `label-form`, `view-more`, `Icon`.
- Íconos: `chevron-down`, `chevron-up`, `arrow-down`, `arrow-up` (metadata; solo chevron-down usado por defecto).
- Clase base: `eva-3-dropdown`.
- Categoría: `form` (type: molecules).

## Ejemplo rápido

```html
<ul class="eva-3-dropdown">
  <li class="dropdown-item -active">
    <span role="presentation" class="dropdown-item-container" tabindex="0">
      <span class="item-label">Filtros</span>
      <i class="eva-3-icon-chevron-down dropdown-icon"></i>
    </span>
    <ul class="dropdown-subcontent">
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">Opción 1</span>
      </li>
      <li class="dropdown-subitem">
        <span class="dropdown-item-container" tabindex="0">Opción 2</span>
      </li>
    </ul>
  </li>
</ul>
```
