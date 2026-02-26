# Heading - React

## Descripción

Componente React tipográfico con variantes para títulos, body text, botones, captions, overlines, párrafos y links. Permite independizar la semántica HTML del estilo visual mediante las props `variant` y `tag`.

**Tipo:** Fundacional  
**Categoría:** Typography  
**Tags:** react, heading, typography, h1, h2, h3, h4, h5, h6, body, caption, overline, link

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Definir jerarquía textual en páginas y componentes con estilos EVA.
- Renderizar links tipográficos (`variant="link"`) con control del tag (`<a>` o custom).

## Mejores Prácticas
- Usa un solo `h1` por pantalla y respeta jerarquía descendente de headings.
- Desacopla semántica y estilo con `tag` cuando necesites otro elemento (ej. `div` para grids).
- Asegura contraste suficiente y line-height adecuado según dispositivo.

## Dependencias
- Usa clases tipográficas EVA (`eva-3-[variant]`) aplicadas internamente.
- Íconos no son necesarios; puede coexistir con otros componentes (links, buttons) como wrapper de texto.

## Props

| Prop        | Tipo                                   | Requerido | Default            | Descripción                                                                                            |
| ----------- | -------------------------------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `variant`   | `string` (oneOf 15 variantes)          | Sí        | -                  | Variante tipográfica: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle-s`, `body-1`, `body-2`, `button`, `caption`, `overline-1`, `overline-2`, `p`, `link` |
| `children`  | `any`                                  | No        | `'Example of Text'`| Contenido del heading                                                                                  |
| `tag`       | `string`                               | No        | Auto (ver nota)    | Tag HTML customizado. Si no se proporciona, se infiere de `variant`                                   |
| `className` | `string`                               | No        | `''`               | Clases CSS adicionales                                                                                 |
| `href`      | `string`                               | No        | `undefined`        | URL para variante `link` (convierte automáticamente el tag en `<a>`)                                  |
| `onClick`   | `func`                                 | No        | `undefined`        | Handler de click                                                                                       |

**Nota sobre tag automático**:
- Variantes h1-h6 → tag `<h1>` a `<h6>`
- Variante `link` → tag `<a>`
- Otras variantes → tag `<p>`

## Importación

```jsx
import { Heading } from '@despegar/react-eva';
```

## Estructura

```jsx
<[tag] className="eva-3-[variant] [className]" href={href} onClick={onClick}>
  {children}
</[tag]>
```

## Ejemplos de uso

### Headings (h1-h6)

```jsx
import { Heading } from '@despegar/react-eva';

function PageTitle() {
  return (
    <>
      <Heading variant="h1">Título principal</Heading>
      <Heading variant="h2">Sección</Heading>
      <Heading variant="h3">Subsección</Heading>
      <Heading variant="h4">Subtítulo menor</Heading>
      <Heading variant="h5">Encabezado pequeño</Heading>
      <Heading variant="h6">Encabezado mínimo</Heading>
    </>
  );
}
```

### Body Text

```jsx
<Heading variant="body-1">
  Texto de cuerpo principal con 16px, ideal para contenido legible.
</Heading>

<Heading variant="body-2">
  Texto secundario con 14px, para contenido menos importante.
</Heading>
```

### Button Text

```jsx
<button>
  <Heading variant="button">Texto de botón</Heading>
</button>
```

### Caption

```jsx
<Heading variant="caption">
  Texto pequeño para notas al pie o metadata.
</Heading>
```

### Overlines

```jsx
<Heading variant="overline-1">Categoría destacada</Heading>
<Heading variant="overline-2">Etiqueta pequeña</Heading>
```

### Paragraph

```jsx
<Heading variant="p">
  Párrafo con tamaño mínimo (12px), para textos legales o disclaimers.
</Heading>
```

### Link

```jsx
<Heading variant="link" href="/mas-info">
  Enlace navegable
</Heading>

<Heading variant="link" onClick={() => console.log('Click')}>
  Enlace con handler (sin href)
</Heading>
```

### Personalización de tag (semántica independiente de estilo)

```jsx
{/* Estilo de h3 pero semántica de h2 */}
<Heading variant="h3" tag="h2">
  Subtítulo con jerarquía h2 pero estilo h3
</Heading>

{/* Body-1 como span inline */}
<Heading variant="body-1" tag="span">
  Texto inline con estilo body-1
</Heading>

{/* Link sin href (solo onClick) */}
<Heading variant="link" tag="button" onClick={handleClick}>
  Botón estilizado como link
</Heading>
```

### Uso común con EmptyStateMessage

```jsx
import { EmptyStateMessage, Heading } from '@despegar/react-eva';

function EmptyResults() {
  return (
    <EmptyStateMessage
      title="No hay resultados"
      description="Intenta ajustar los filtros"
      buttonText="Volver"
    />
  );
}

// EmptyStateMessage internamente usa:
// <Heading variant="h3" className="empty-state-message-title">{title}</Heading>
// <Heading variant="body-1" as="p" className="empty-state-message-description">{description}</Heading>
```

## PropTypes

```javascript
import PropTypes from 'prop-types';

Heading.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle-s',
    'body-1',
    'body-2',
    'button',
    'caption',
    'overline-1',
    'overline-2',
    'p',
    'link',
  ]).isRequired,
  children: PropTypes.any,
  tag: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Heading.defaultProps = {
  children: 'Example of Text',
};
```

## Accesibilidad

- **Jerarquía semántica**: Usar prop `tag` para mantener jerarquía correcta del documento (`<h1>`, `<h2>`, etc.) independientemente del estilo visual.

```jsx
{/* Correcto: semántica h2, estilo h3 */}
<Heading variant="h3" tag="h2">Subtítulo</Heading>

{/* Incorrecto: no saltear niveles */}
<Heading variant="h1">Título</Heading>
<Heading variant="h3">Subsección</Heading> {/* Falta h2 */}
```

- **Links**: 
  - Usar `href` para navegación (`<a>`).
  - Si solo onClick, considerar `tag="button"` para semántica correcta.
  - Links deben tener texto descriptivo o `aria-label`.

```jsx
{/* Correcto: link navegable */}
<Heading variant="link" href="/destino">Leer más</Heading>

{/* Correcto: acción con semántica de botón */}
<Heading variant="link" tag="button" onClick={handleAction}>Acción</Heading>

{/* Mejorable: link con texto genérico */}
<Heading variant="link" href="/destino" aria-label="Leer más sobre ofertas de vuelos">
  Leer más
</Heading>
```

- **Color**: Headings usan `--color-neutral-800` por defecto. Verificar contraste si se customiza el color.

## Dependencias

- HOC: `withUtilities` para clases de utilidad.
- Mixin: `eva-text-as` del eva-core (aplicado vía SCSS).
- Variables: `--color-neutral-800` para color de headings.
- Categoría: `text` (type: atoms).

## Notas

- `subtitle-s` está disponible en PropTypes pero no documentado en MDX oficial. Usar con precaución.
- `link-underline` no está en PropTypes React pero existe en SCSS. Para usarlo, aplicar clase manualmente con `className`.
- Default de `children` es `'Example of Text'` (útil para prototipos).
- El componente es stateless y pasa `{...rest}` props adicionales al tag renderizado.

## Ejemplo completo

```jsx
import { Heading } from '@despegar/react-eva';

function Article() {
  return (
    <article>
      <Heading variant="h1">Título del artículo</Heading>
      
      <Heading variant="overline-1">Categoría: Viajes</Heading>
      
      <Heading variant="h2">Introducción</Heading>
      <Heading variant="body-1">
        Este es el contenido principal del artículo con texto legible...
      </Heading>
      
      <Heading variant="h3" tag="h2">Sección importante (h2 semántico, h3 visual)</Heading>
      <Heading variant="body-2">
        Contenido secundario con tamaño reducido.
      </Heading>
      
      <Heading variant="caption">
        Última actualización: 11 de febrero de 2026
      </Heading>
      
      <Heading variant="link" href="/leer-mas">
        Leer artículo completo
      </Heading>
    </article>
  );
}
```
