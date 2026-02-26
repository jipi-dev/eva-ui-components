# Input (React)

## Descripción

Campo de entrada React de EVA UI con soporte de tamaños, íconos, estados deshabilitado y distintas estrategias de etiquetado.

**Tipo:** Átomo  
**Categoría:** Forms / Controls  
**Tags:** react, input, text, email, password, icon, label, helper, disabled, readonly, invalid

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Campos de formularios donde se requiere input simple (text/email/password, etc.).
- Inputs con ícono contextual (left/right) o con label externo.

## Mejores Prácticas
- Asocia `id` y `LabelForm` para accesibilidad si usas label externo.
- Usa el `type` correcto para mejorar validación y teclado (mobile).
- Combina estados inválidos con mensajes `ValidationInline` cuando corresponda.
- Evita `placeholder` como reemplazo de label; úsalo para ejemplos breves.

## Dependencias
- Componentes opcionales: `LabelForm` para etiquetas externas, `Heading` para helper, íconos EVA vía prop `icon`.

**Import sugerido:**

```jsx
import { Input } from "@despegar/eva-react-components";
// Opcional para los ejemplos con label
import { LabelForm } from "@despegar/eva-react-components";
import { Heading } from "@despegar/eva-react-components";
```

---

## Estructura del componente

```jsx
<Input
  size="lg"
  type="text"
  placeholder="Placeholder"
  disabled={false}
  icon={undefined}
  iconPosition="left"
  label={undefined}
  labelForm={false}
  marginTop={undefined}
  marginBottom={undefined}
  className=""
  onChange={handleChange}
/>
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | `'lg'` | Tamaño del input. |
| `type` | `string` | `'text'` | Tipo de entrada HTML (`text`, `email`, `password`, etc.). |
| `placeholder` | `string` | `''` | Texto placeholder. |
| `disabled` | `boolean` | `false` | Deshabilita el campo. |
| `icon` | `string` | `undefined` | Nombre del ícono a mostrar. |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posición del ícono. |
| `id` | `string` | `undefined` | Id del input (útil para asociar labels). |
| `label` | `string` | `undefined` | Texto de label interno (UI React Library). |
| `labelForm` | `boolean` | `false` | Aplica estilos de `LabelForm` al label interno. |
| `marginTop` | `string` | `undefined` | Espaciado superior (token de spacing, ej: `'sm'`). |
| `marginBottom` | `string` | `undefined` | Espaciado inferior (token de spacing, ej: `'sm'`). |
| `className` | `string` | `''` | Clase adicional. |
| `onChange` | `function` | `undefined` | Handler de cambio del input. |

> `LabelForm` no es dependencia automática del `Input`; si se usa por fuera, debe agregarse al `eva.manifest`.

---

## Ejemplos

### Input default

```jsx
<Input size="lg" placeholder="Placeholder" id="input-common" />
```

---

### Input deshabilitado

```jsx
<Input size="lg" placeholder="Placeholder" disabled id="input-disabled" />
```

---

### Input con íconos

```jsx
<Input size="lg" icon="location" iconPosition="left" placeholder="Placeholder" />
```

```jsx
<Input size="lg" icon="info-circle" iconPosition="right" placeholder="Placeholder" />
```

---

### Input con label (htmlFor)

```jsx
<div>
  <LabelForm htmlFor="input-with-label" size="md" marginBottom="sm">Label</LabelForm>
  <Input size="lg" placeholder="Placeholder" id="input-with-label" />
</div>
```

---

### Input con label envolviendo el input

```jsx
<LabelForm size="lg" marginBottom="sm">
  <>
    Label
    <Input size="lg" placeholder="Placeholder" marginTop="sm" />
  </>
</LabelForm>
```

---

### Input con label integrado (props `label` y `labelForm`)

```jsx
<Input
  size="lg"
  placeholder="Placeholder"
  id="input-react"
  label="Label"
  labelForm
/>
```

---

### Input con helper text

```jsx
<div>
  <LabelForm htmlFor="input-with-helper" size="lg" marginBottom="sm">Label</LabelForm>
  <Input size="lg" placeholder="Placeholder" id="input-with-helper" marginBottom="sm" />
  <Heading tag="span" variant="body-2" className="-eva-3-tc-gray-1">Helper text</Heading>
</div>
```
