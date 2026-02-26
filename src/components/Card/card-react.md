# Card (React)

## Descripción

Contenedor rectangular con esquinas redondeadas. Soporta utilidades de sombra (`shadow`) y padding (`positioning`) a través de clases. Expone `className` y `children`.

**Tipo:** Molécula  
**Categoría:** Layout / Surface  
**Tags:** react, card, container, shadow, padding, surface

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Agrupar contenido en superficies diferenciadas (listados, resúmenes, tarjetas de resultado).
- Necesitar elevación ligera con sombras utilitarias.

## Mejores Prácticas
- Usa sombras utilitarias según jerarquía (`-shadow-line`, `-shadow-static`, etc.).
- Aplica padding con utilidades (`-eva-3-p-*`) en lugar de inline styles.
- Si es interactiva, controla foco interno; si es solo contenedor, `tabIndex` opcional.

## Dependencias
- Clase base `eva-3-card`; utilidades `shadow` y `positioning` para sombra/padding.

**Import típico:**
```jsx
import { Card } from "@despegar/eva-react-components";
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | `string` | `''` | Clases adicionales (incluye sombras/padding utilitarios). |
| `children` | `ReactNode` | `<p style={{ lineHeight:'300px', width:'290px', textAlign:'center' }}>Contenido</p>` | Contenido a renderizar. |

## Estructura renderizada

```jsx
<div className={`eva-3-card ${className}`} tabIndex="0">
  {children}
</div>
```

## Ejemplos

### Con shadow line y padding md
```jsx
<Card className="-shadow-line -eva-3-p-md">
  Ejemplo de Card con line shadow
</Card>
```

### Con shadow lineHover
```jsx
<Card className="-shadow-line-hover -eva-3-p-md">
  Ejemplo de Card con line-hover shadow
</Card>
```

### Con shadow static
```jsx
<Card className="-shadow-static -eva-3-p-md">
  Ejemplo de Card con static shadow
</Card>
```

### Con shadow staticHover
```jsx
<Card className="-shadow-static-hover -eva-3-p-md">
  Ejemplo de Card con static-hover shadow
</Card>
```

## Notas de estilo (referencia)

- Clase base `eva-3-card`: `box-sizing: border-box`, `border-radius: $spacing-2`, `background: var(--color-white)`.
- `:focus-visible` aplica outline accesible (`eva-focus`).
- Las sombras y paddings se aplican vía utilidades (`shadow`, `positioning`).

## Accesibilidad

- Lleva `tabIndex="0"` para foco navegable; `focus-visible` aplica outline.
- Si el contenido es interactivo, asegurar orden de tab correcto dentro de la card.

## Dependencias

- Utilidades: `shadow`, `positioning` para sombras y padding.
- Clase base: `eva-3-card`.