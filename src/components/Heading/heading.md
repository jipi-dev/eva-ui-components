# Heading

## Descripción

Componente tipográfico con variantes para títulos, subtítulos, body text, botones, captions, overlines, párrafos y links. Utiliza la typeface Rubik y aplica escalas tipográficas consistentes según la jerarquía del contenido.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<[tag] class="eva-3-[variante] [clases-adicionales]">Texto</[tag]>
```

- Clase base: `eva-3-[variante]` (reemplazar `[variante]` con h1, h2, h3, h4, h5, h6, body-1, body-2, button, caption, overline-1, overline-2, p, link).
- Tag HTML: Por defecto coincide con la variante semántica (`<h1>` para h1, `<h2>` para h2, etc.). Para variantes no semánticas (body-1, button, caption, etc.), usar `<p>` o `<span>` según contexto.

## Variantes

### Headings (h1-h6)

#### h1
- **Tamaño**: 44px
- **Line-height**: 48px
- **Letter-spacing**: -0.2px
- **Font-weight**: 500
- **Color**: `--color-neutral-800`

```html
<h1 class="eva-3-h1">H1, Ejemplo de título</h1>
```

#### h2
- **Tamaño**: 32px
- **Line-height**: 36px
- **Letter-spacing**: -0.2px
- **Font-weight**: 500

```html
<h2 class="eva-3-h2">H2, Ejemplo de título</h2>
```

#### h3
- **Tamaño**: 24px
- **Line-height**: 32px
- **Font-weight**: 500

```html
<h3 class="eva-3-h3">H3, Ejemplo de título</h3>
```

#### h4
- **Tamaño**: 20px
- **Line-height**: 28px
- **Font-weight**: 500

```html
<h4 class="eva-3-h4">H4, Ejemplo de título</h4>
```

#### h5
- **Tamaño**: 16px
- **Line-height**: 24px
- **Font-weight**: 500

```html
<h5 class="eva-3-h5">H5, Ejemplo de título</h5>
```

#### h6
- **Tamaño**: 14px
- **Line-height**: 20px
- **Letter-spacing**: 0.1px
- **Font-weight**: 500

```html
<h6 class="eva-3-h6">H6, Ejemplo de título</h6>
```

### Body Text

#### body-1
- **Tamaño**: 16px
- **Line-height**: 24px
- **Font-weight**: normal

```html
<p class="eva-3-body-1">Body-1, Ejemplo de body 1</p>
```

#### body-2
- **Tamaño**: 14px
- **Line-height**: 20px
- **Letter-spacing**: 0.05px
- **Font-weight**: normal

```html
<p class="eva-3-body-2">Body-2, Ejemplo de body 2</p>
```

### Button Text

#### button
- **Tamaño**: 14px
- **Line-height**: 20px
- **Font-weight**: 500

```html
<span class="eva-3-button">Button, Ejemplo de button</span>
```

### Caption

#### caption
- **Tamaño**: 12px
- **Line-height**: 16px
- **Letter-spacing**: 0.1px
- **Font-weight**: normal

```html
<span class="eva-3-caption">Caption, Ejemplo de caption</span>
```

### Overlines

#### overline-1
- **Tamaño**: 14px
- **Line-height**: 20px
- **Letter-spacing**: 1.2px
- **Font-weight**: 500
- **Text-transform**: uppercase

```html
<span class="eva-3-overline-1">Overline 1, Ejemplo de overline-1</span>
```

#### overline-2
- **Tamaño**: 12px
- **Line-height**: 16px
- **Letter-spacing**: 1px
- **Font-weight**: 500
- **Text-transform**: uppercase

```html
<span class="eva-3-overline-2">Overline 2, Ejemplo de overline-2</span>
```

### Paragraph

#### p
- **Tamaño**: 12px
- **Line-height**: 16px
- **Font-weight**: normal

```html
<p class="eva-3-p">Párrafo, Ejemplo de p, Lorem ipsum dolor sit amet...</p>
```

**Nota**: Existe clase deprecada `.-lg` para `eva-3-p` (font-size: 16px). No usar en código nuevo.

### Link

#### link
- **Mixin**: `eva-link`
- **Text-decoration**: none
- **Cursor**: pointer
- **Color**: enlace (ver eva-core)

```html
<a href="#" class="eva-3-link">Link, Ejemplo de link.</a>
```

#### link-underline
- Igual que `link` pero con `text-decoration: underline !important`.

```html
<a href="#" class="eva-3-link-underline">Link subrayado</a>
```

## Notas de estilo (SCSS)

- Todos los headings (h1-h6) usan `color: var(--color-neutral-800)` y `font-weight: normal` (pero mixins aplican 500 para algunos).
- Variantes usan mixins `@include eva-text-as("[variante]")` del eva-core para consistencia.
- `subtitle-s` disponible pero no documentado en MDX (usar con precaución).
- Links utilizan mixin `@include eva-link` para estilos consistentes.

## Accesibilidad

- **Jerarquía semántica**: Usar tags HTML correctos (`<h1>`, `<h2>`, etc.) según la jerarquía del documento.
- **No saltear niveles**: Ir de h1 a h2, luego h3, etc. No saltear de h1 a h3.
- **Variantes visuales independientes**: Si necesitas estilo de h3 pero semántica de h2, usar prop `tag` en React o aplicar clase a tag correcto:

```html
<h2 class="eva-3-h3">Subtítulo (semántica h2, estilo h3)</h2>
```

- **Links**: Siempre incluir `href` válido para enlaces navegables. Considerar `aria-label` si el texto del link no es descriptivo.

## Dependencias

- Mixin: `eva-text-as` del eva-core.
- Mixin: `eva-link` para variante link.
- Variables: `--color-neutral-800` para color de headings.
- Clase base: `eva-3-[variante]`.
- Categoría: `text` (type: atoms).

## Ejemplo completo

```html
<!-- Jerarquía semántica correcta -->
<h1 class="eva-3-h1">Título principal</h1>

<h2 class="eva-3-h2">Sección 1</h2>
<p class="eva-3-body-1">Contenido de la sección con body-1.</p>

<h3 class="eva-3-h3">Subsección 1.1</h3>
<p class="eva-3-body-2">Contenido con body-2.</p>
<p class="eva-3-caption">Nota al pie con caption.</p>

<h2 class="eva-3-h2">Sección 2</h2>
<span class="eva-3-overline-1">Categoría</span>
<a href="/mas-info" class="eva-3-link">Leer más</a>
```
