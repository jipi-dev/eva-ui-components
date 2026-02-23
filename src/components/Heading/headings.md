# Heading Component

## Descripción

Dentro de nuestro sistema utilizamos typeface Rubik tanto en textos como en titulares. El componente Heading proporciona diferentes variantes tipográficas para encabezados, párrafos, body text, captions, overlines y links.

**Tipo:** Fundacional  
**Categoría:** Typography  
**Tags:** heading, typography, h1, h2, h3, h4, h5, h6, body, caption, overline, link

## Cuándo Usar
- Definir jerarquía visual de títulos y textos en pantallas y componentes.
- Aplicar estilos consistentes de body, captions y overlines.

## Mejores Prácticas
- Usa un único `h1` por página y respeta el orden jerárquico descendente.
- Selecciona la variante de body/caption adecuada al tamaño y densidad del layout.
- Mantén suficiente contraste y line-height según el contexto (desktop/mobile).

## Dependencias
- Variables de tipografía Rubik y clases `eva-3-[variant]` provistas por EVA UI.

## Tamaños

Hay 6 tamaños disponibles de heading van desde el `eva-3-h1` al `eva-3-h6`. También hay disponible diferentes tipos de headings para el body, button, caption, overline, párrafo, link.

## Estructura HTML

### Estructura Base

```html
<[tag] class="eva-3-[variant]" [atributos-adicionales]>
  [contenido]
</[tag]>
```

### Tags por Variante

- **h1-h6**: Usan su mismo tag (`<h1>`, `<h2>`, etc.)
- **body-1, body-2, button, caption, overline-1, overline-2, p**: Usan `<span>` o `<p>` por defecto
- **link**: Usa `<a>` por defecto

El tag puede ser personalizado según las necesidades del proyecto.

## Variantes

### Heading H1

Heading nivel 1, usado para el título principal de la página.

**Especificaciones:**
- font-size: 44px
- letter-spacing: -0.2px
- line-height: 48px
- font-weight: 500

**CSS Class:** `.eva-3-h1`

**HTML:**
```html
<h1 class="eva-3-h1">H1, Ejemplo de titulo</h1>
```

### Heading H2

Heading nivel 2, usado para subtítulos principales.

**Especificaciones:**
- font-size: 32px
- letter-spacing: -0.2px
- line-height: 36px
- font-weight: 500

**CSS Class:** `.eva-3-h2`

**HTML:**
```html
<h2 class="eva-3-h2">H2, Ejemplo de titulo</h2>
```

### Heading H3

Heading nivel 3, usado para secciones importantes.

**Especificaciones:**
- font-size: 24px
- line-height: 32px
- font-weight: 500

**CSS Class:** `.eva-3-h3`

**HTML:**
```html
<h3 class="eva-3-h3">H3, Ejemplo de titulo</h3>
```

### Heading H4

Heading nivel 4, usado para subsecciones.

**Especificaciones:**
- font-size: 20px
- line-height: 28px
- font-weight: 500

**CSS Class:** `.eva-3-h4`

**HTML:**
```html
<h4 class="eva-3-h4">H4, Ejemplo de titulo</h4>
```

### Heading H5

Heading nivel 5, usado para títulos pequeños.

**Especificaciones:**
- font-size: 16px
- line-height: 24px
- font-weight: 500

**CSS Class:** `.eva-3-h5`

**HTML:**
```html
<h5 class="eva-3-h5">H5, Ejemplo de titulo</h5>
```

### Heading H6

Heading nivel 6, el más pequeño de los headings.

**Especificaciones:**
- font-size: 14px
- letter-spacing: 0.1px
- line-height: 20px
- font-weight: 500

**CSS Class:** `.eva-3-h6`

**HTML:**
```html
<h6 class="eva-3-h6">H6, Ejemplo de titulo</h6>
```

### Body-1

Texto de cuerpo nivel 1, usado para contenido principal.

**Especificaciones:**
- font-size: 16px
- line-height: 24px

**CSS Class:** `.eva-3-body-1`

**HTML:**
```html
<span class="eva-3-body-1">Body-1, Ejemplo de body 1</span>
```

### Body-2

Texto de cuerpo nivel 2, usado para contenido secundario.

**Especificaciones:**
- font-size: 14px
- letter-spacing: 0.05px
- line-height: 20px

**CSS Class:** `.eva-3-body-2`

**HTML:**
```html
<span class="eva-3-body-2">Body-2, Ejemplo de body 2</span>
```

### Button

Estilo tipográfico para botones.

**Especificaciones:**
- font-size: 14px
- line-height: 20px
- font-weight: 500

**CSS Class:** `.eva-3-button`

**HTML:**
```html
<span class="eva-3-button">Button, Ejemplo de button</span>
```

### Caption

Texto pequeño para descripciones y notas.

**Especificaciones:**
- font-size: 12px
- letter-spacing: 0.1px
- line-height: 16px

**CSS Class:** `.eva-3-caption`

**HTML:**
```html
<span class="eva-3-caption">Caption, Ejemplo de caption</span>
```

### Overline-1

Texto en mayúsculas para etiquetas y categorías (nivel 1).

**Especificaciones:**
- font-size: 14px
- letter-spacing: 1.2px
- line-height: 20px
- font-weight: 500
- text-transform: uppercase

**CSS Class:** `.eva-3-overline-1`

**HTML:**
```html
<span class="eva-3-overline-1">Overline 1, Ejemplo de overline-1</span>
```

### Overline-2

Texto en mayúsculas para etiquetas y categorías (nivel 2).

**Especificaciones:**
- font-size: 12px
- letter-spacing: 1px
- line-height: 16px
- font-weight: 500
- text-transform: uppercase

**CSS Class:** `.eva-3-overline-2`

**HTML:**
```html
<span class="eva-3-overline-2">Overline 2, Ejemplo de overline-2</span>
```

### Párrafo (p)

Estilo de párrafo para bloques de texto.

**Especificaciones:**
- font-size: 12px
- line-height: 16px
- font-weight: normal

**CSS Class:** `.eva-3-p`

**HTML:**
```html
<p class="eva-3-p">Párrafo, Ejemplo de p, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

### Link

Estilo para enlaces de texto.

**CSS Class:** `.eva-3-link`

**HTML:**
```html
<a href="#" class="eva-3-link">Link, Ejemplo de link.</a>
```

## CSS Classes

### Clases Principales

- `.eva-3-h1` - Heading nivel 1 (44px)
- `.eva-3-h2` - Heading nivel 2 (32px)
- `.eva-3-h3` - Heading nivel 3 (24px)
- `.eva-3-h4` - Heading nivel 4 (20px)
- `.eva-3-h5` - Heading nivel 5 (16px)
- `.eva-3-h6` - Heading nivel 6 (14px)
- `.eva-3-body-1` - Body nivel 1 (16px)
- `.eva-3-body-2` - Body nivel 2 (14px)
- `.eva-3-button` - Estilo button (14px)
- `.eva-3-caption` - Caption (12px)
- `.eva-3-overline-1` - Overline nivel 1 (14px, uppercase)
- `.eva-3-overline-2` - Overline nivel 2 (12px, uppercase)
- `.eva-3-p` - Párrafo (12px)
- `.eva-3-link` - Enlace

## Atributos HTML

El componente acepta todos los atributos HTML estándar según el tag utilizado:

- `href`: Para variante link o cuando se usa tag `<a>`
- `onClick`: Event handler (solo en React, no aplica en HTML puro)
- `className`: Clases CSS adicionales
- Cualquier otro atributo HTML válido para el tag utilizado

## Ejemplos Completos

### Heading H1

```html
<h1 class="eva-3-h1">Título Principal</h1>
```

### Heading H2

```html
<h2 class="eva-3-h2">Subtítulo</h2>
```

### Heading H3

```html
<h3 class="eva-3-h3">Sección Importante</h3>
```

### Body Text

```html
<span class="eva-3-body-1">Este es un texto de body nivel 1 con 16px de tamaño.</span>
```

```html
<span class="eva-3-body-2">Este es un texto de body nivel 2 con 14px de tamaño.</span>
```

### Caption

```html
<span class="eva-3-caption">Este es un caption pequeño.</span>
```

### Overline

```html
<span class="eva-3-overline-1">CATEGORÍA</span>
```

```html
<span class="eva-3-overline-2">ETIQUETA</span>
```

### Link

```html
<a href="/productos" class="eva-3-link">Ver todos los productos</a>
```

### Párrafo

```html
<p class="eva-3-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

### Heading con Tag Personalizado

```html
<div class="eva-3-h3">Este es un h3 pero renderizado como div</div>
```

### Combinación de Elementos

```html
<article>
  <span class="eva-3-overline-1">TECNOLOGÍA</span>
  <h2 class="eva-3-h2">Nuevas funcionalidades</h2>
  <p class="eva-3-body-1">Descubre las últimas actualizaciones de nuestro sistema.</p>
  <a href="/novedades" class="eva-3-link">Leer más</a>
</article>
```

## Best Practices

### Usage Guidelines

- Usar h1 para el título principal de la página (solo uno por página)
- Usar h2-h6 para subtítulos y secciones jerárquicas
- Mantener la jerarquía semántica correcta (h1 > h2 > h3, etc.)
- Usar body-1 para texto principal de contenido
- Usar body-2 para texto secundario o complementario
- Usar caption para textos pequeños y descriptivos (metadatos, fechas, ayudas)
- Usar overline-1 y overline-2 para etiquetas y categorías
- Usar link para enlaces de texto
- No saltar niveles de heading (no ir de h2 a h4 sin h3)

### Jerarquía Visual vs Semántica

- Puedes usar clases de heading con tags diferentes si la jerarquía semántica lo requiere
- Ejemplo: `<h2 class="eva-3-h3">` si necesitas el estilo de h3 pero la importancia semántica de h2

### Accesibilidad

- Usar tags semánticos apropiados (h1-h6 para encabezados)
- Mantener la jerarquía de headings correcta para lectores de pantalla
- Asegurar suficiente contraste de color (mínimo 4.5:1 para texto normal, 3:1 para texto grande)
- Usar headings para estructura, no solo para estilo
- Los enlaces deben tener texto descriptivo, no solo "click aquí"
- Asegurar que los links tengan suficiente área de click (mínimo 44x44px)

## Tipografía

### Font Family

Todo el sistema utiliza **Rubik** como typeface principal:
- Font Family: 'Rubik', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Font Weights

- **Normal**: 400 (usado en párrafos y body text)
- **Medium**: 500 (usado en headings, buttons, overlines)

### Responsive Typography

Los tamaños de fuente pueden ajustarse en breakpoints móviles. Consulta la documentación de responsive design para más detalles.
