# Card

## Descripción

Módulo rectangular con esquinas redondeadas para presentar información de forma modular. Puede incluir sombras (utility `shadow`) y padding (utility `positioning`).

**Tipo:** Molécula  
**Categoría:** Layout / Cards  
**Tags:** card, container, shadow, padding, layout

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Cuándo Usar
- Agrupar contenido relacionado en listados, resúmenes o módulos clickeables.
- Destacar bloques con sombra o padding para mejorar jerarquía visual.

## Mejores Prácticas
- Usa las utilidades `shadow` según profundidad deseada; evita sombras fuertes en listas densas.
- Ajusta padding con `positioning` en lugar de estilos inline para mantener consistencia.
- Si es interactiva, añade `tabindex="0"` y maneja `:focus-visible`; evita anidar múltiples cards clickeables.

## Dependencias
- Clases base `eva-3-card` y utilidades `shadow` y `positioning` provistas por EVA.
- Outline accesible depende del mixin `eva-focus` aplicado vía `:focus-visible`.

## Estructura HTML

```html
<div class="eva-3-card [clases-adicionales]" tabindex="0">
  <!-- contenido heterogéneo -->
  Contenido
</div>
```

- Clase base: `eva-3-card`.
- Opcional: utilidades de sombra (`shadow`) y padding (`positioning`).
- `tabindex="0"` permite foco y `focus-visible` aplica outline accesible.

## Sombras (usa utilidad shadow)

- `-shadow-line` (line): estado default.
- `-shadow-line-hover`: muestra sombra en hover.
- `-shadow-static`: para elementos por encima de otros.
- `-shadow-static-hover`: sombra en hover.

Ejemplos:
```html
<div class="eva-3-card -shadow-line -eva-3-p-md">Card con line shadow</div>
<div class="eva-3-card -shadow-line-hover -eva-3-p-md">Card con line-hover shadow</div>
<div class="eva-3-card -shadow-static -eva-3-p-md">Card con static shadow</div>
<div class="eva-3-card -shadow-static-hover -eva-3-p-md">Card con static-hover shadow</div>
```

## Padding (usa utilidad positioning)

Agrega padding con clases de posicionamiento, por ejemplo:
```html
<div class="eva-3-card -eva-3-p-md">Contenido con padding md</div>
```

## Notas de estilo (referencia SCSS)

- `box-sizing: border-box`, `border-radius: $spacing-2`, `background: var(--color-white)`.
- `:focus-visible` aplica mixin `eva-focus` (outline accesible).

## Ejemplos rápidos

```html
<div class="eva-3-card -shadow-line -eva-3-p-md">Ejemplo de Card</div>
```

