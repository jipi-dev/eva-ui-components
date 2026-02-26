# Button Ghost (React)

## Descripción

Componente React para botón ghost de EVA UI. 

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** react, ghost, button, secondary, outline, loading, disabled

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Acciones secundarias/terciarias con menor peso visual que un botón sólido.
- Sobre fondos claros u oscuros ajustando `variant` (`lighten/darken/white-loyalty`).

## Mejores Prácticas
- Usa tamaños `md`/`lg` según jerarquía; evita mezclar muchos ghosts juntos.
- Deshabilita con `disabled` durante cargas o validaciones; evita hover en ese estado.
- Si navega, pasa `href`; si actúa en-page, usa `onClick`.

## Dependencias
- `ButtonBase` interno (props compartidas `href`, `loadingText`, `btnType`).
- Clases públicas ghost (`eva-3-btn-ghost`) aplicadas por la librería.

**Import sugerido:**

```jsx
import { ButtonGhost } from "@despegar/eva-react-components";
```

---

## Estructura del componente

```jsx
<ButtonGhost
  size="lg"
  variant="darken"
  disabled={false}
  loading={false}
  onClick={handleClick}
>
  Texto del botón
</ButtonGhost>
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | **requerido** | Tamaño del botón ghost. |
| `variant` | `'' \| 'darken' \| 'lighten' \| 'white-loyalty'` | **requerido** | Variante visual del ghost. |
| `disabled` | `boolean` | `false` | Estado deshabilitado. |
| `loading` | `boolean` | `false` | Estado de carga. |
| `className` | `string` | `''` | Clase adicional. |
| `children` | `string` | `'Ver Detalle'` | Texto del botón. |
| `onClick` | `function` | `undefined` | Handler de click. |
| `next` | `boolean` | `false` | Muestra ícono “siguiente”. |
| `icon` | `string \| boolean` | `false` | Ícono junto al texto. |
| `iconOnly` | `boolean` | `false` | Botón circular solo con ícono. |
| `href` | `string` | `undefined` | Si existe y no hay `onClick`, renderiza `<a>`. |
| `inputId` | `string` | `undefined` | ID del input dentro de DottedArea (si aplica). |

> **Hereda de `ButtonBase`:** soporta props como `href` y `loadingText` vía `...rest`.

> **Defaults internos de `ButtonBase`:** `size='lg'`, `variant='primary'`, `loadingText='Cargando'`, `btnType='default'`.

---

## Ejemplos

### Tamaños

Estos son los tamaños disponibles para los buttons ghost. Con solo aplicar alguna de las props `size="md"` o `size="lg"`.

```jsx
<ButtonGhost size="lg">
  Botón Large
</ButtonGhost>
```

```jsx
<ButtonGhost size="md">
  Botón Medium
</ButtonGhost>
```

---

### Variantes de color

Los botones ghost aplican principalmente sobre color aunque también se pueden usar sobre gris o blanco como un tercer nivel de lectura. Se usa la variable “Light” o “Dark” para garantizar la legibilidad/contraste con relación a background.

```jsx
<ButtonGhost size="lg" variant="lighten">
  Botón claro
</ButtonGhost>
```

```jsx
<ButtonGhost size="lg" variant="darken">
  Botón oscuro
</ButtonGhost>
```

```jsx
<ButtonGhost size="lg" variant="white-loyalty">
  Botón blanco de loyalty
</ButtonGhost>
```

---

### Variante deshabilitada

Los botones ghost también pueden deshabilitarse usando `disabled`.

```jsx
<ButtonGhost size="lg" disabled>
  Botón deshabilitado
</ButtonGhost>
```

---

### Variante cargando

Los botones ghost también pueden estar en estado cargando usando `loading`.

```jsx
<ButtonGhost size="lg" loading>
  Botón cargando
</ButtonGhost>
```

---

### Botones con ícono

Al incorporar un ícono al botón, se generan variaciones en el padding para ajustar visualmente el elemento.

```jsx
<ButtonGhost size="lg" icon="favorite">
  Botón con icono
</ButtonGhost>
```

```jsx
<ButtonGhost next size="lg">
  Botón con icono
</ButtonGhost>
```

---

### Ícono solo (iconOnly)

Nueva variante botón circular: se agregó la posibilidad de utilizar botones ghost circulares con un solo ícono.

```jsx
<ButtonGhost size="md" iconOnly variant="darken" icon="search" />
```

```jsx
<ButtonGhost size="md" iconOnly variant="darken" icon="edit" />
```
