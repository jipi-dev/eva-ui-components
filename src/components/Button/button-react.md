# Button (React)

## Descripción

Componente React para botones EVA UI. Internamente delega en `ButtonBase` y expone props para tamaño, variante, estado y comportamiento. 

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** react, button, primary, secondary, link, white, dark, loading, disabled, icon

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- CTA principales y secundarios en flows web/app.
- Acciones que requieran feedback de carga (`loading`).
- Botones con ícono único (`iconOnly`) o con ícono previo/siguiente.

## Mejores Prácticas
- Usa un solo botón primario por vista; secundarios para acciones de menor jerarquía.
- Mantén el texto breve (verbo + objeto) y evita dos íconos.
- Si el botón navega, pasa `href`; si ejecuta lógica, usa `onClick`.
- En loading, no dispares `onClick` repetidamente; controla `disabled` o maneja idempotencia.

## Dependencias
- `ButtonBase` interno (hereda props como `btnType`, `href`, `loadingText`).
- Clases públicas `eva-3-btn` y modificadores de variante/tamaño se aplican desde la librería.

**Import obligatorio:**

```jsx
import { Button } from "@despegar/eva-react-components";
```

---

## Estructura del componente

`Button` es un wrapper de `ButtonBase` que normaliza props y delega el render.

```jsx
<Button
  size="lg"
  variant="primary"
  disabled={false}
  loading={false}
  iconOnly={false}
  icon={false}
  next={false}
  onClick={handleClick}
>
  {children}
</Button>
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | **requerido** | Tamaño del botón. |
| `variant` | `'primary' \| 'secondary' \| 'link' \| 'white' \| 'dark'` | **requerido** | Variante visual del botón. |
| `disabled` | `boolean` | `false` | Estado deshabilitado. |
| `loading` | `boolean` | `false` | Estado de carga. |
| `next` | `boolean` | `false` | Muestra ícono de “siguiente”. |
| `icon` | `string \| boolean` | `false` | Ícono junto al texto. |
| `iconOnly` | `boolean` | `false` | Botón circular solo con ícono. |
| `className` | `string` | `''` | Clase adicional para el botón. |
| `children` | `string \| ReactNode` | **requerido** | Texto/contenido del botón. |
| `onClick` | `function` | `undefined` | Handler de click. |
| `btnType` | `'default' \| 'social' \| 'ghost'` | `'default'` | Tipo base de botón. |
| `href` | `string` | `undefined` | Si existe y no hay `onClick`, renderiza `<a>`. |
| `loadingText` | `string` | `'Cargando'` | Texto del estado de carga. |

> **Nota:** `Button` hereda comportamiento de `ButtonBase`. Props como `btnType`, `href` y `loadingText` son soportadas por `ButtonBase` y pueden pasarse a `Button` mediante `...rest`.

> **Defaults internos de `ButtonBase`:** `size='lg'`, `variant='primary'`, `loadingText='Cargando'`, `btnType='default'`.

> **`children` es obligatorio.** El componente no renderiza ningún texto por defecto — siempre debés pasar el contenido entre las etiquetas del componente.

---

## Ejemplos

### Botones comunes

```jsx
<Button size="lg" variant="primary">
  {children}
</Button>
```

```jsx
<Button size="lg" variant="secondary">
  {children}
</Button>
```

### Botón deshabilitado

```jsx
<Button size="lg" variant="primary" disabled>
  {children}
</Button>
```

### Botón Dark (solo para Loyalty)

```jsx
<Button size="lg" variant="dark">
  {children}
</Button>
```

### Botón Link

```jsx
<Button size="lg" variant="link">
  {children}
</Button>
```

### Botón White

```jsx
<Button size="lg" variant="white">
  {children}
</Button>
```

### Estado de carga

```jsx
<Button size="lg" variant="primary" loading>
  {children}
</Button>
```

### Botón con ícono

```jsx
<Button size="lg" variant="primary" icon="edit">
  {children}
</Button>
```

### Botón con ícono a la derecha (next)

```jsx
<Button size="lg" variant="primary" next>
  {children}
</Button>
```

### Ícono solo (iconOnly)

```jsx
<Button size="lg" variant="primary" icon="search" iconOnly />
```

```jsx
<Button size="lg" variant="secondary" icon="edit" iconOnly />
```

---