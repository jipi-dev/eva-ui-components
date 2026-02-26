# SelectField - React

## Importación
```jsx
import SelectField from '@despegar/eva-ui/SelectField';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | string | `''` | Ícono opcional (aplica `select-icon`). |
| `disabled` | bool | `false` | Deshabilita el select. |
| `invalid` | bool | `false` | Estado inválido (`-invalid`). |
| `id` | string | `''` | ID del select. |
| `label` | string \| node | `'País'` | Texto del label flotante. |
| `defaultOption` | bool | `true` | Inserta opción vacía deshabilitada. |
| `className` | string | `''` | Clases extra. |
| `children` | `SelectField.Option[]` | — | Opciones (requerido). |
| `...rest` | — | — | Props nativos del `<select>` (value, onChange, etc.). |

### `SelectField.Option`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | string \| number | — | Valor (requerido). |
| `disabled` | bool | `false` | Deshabilitado. |
| `children` | string \| number | `value` | Texto visible. |

## Uso Básico
```jsx
<SelectField id="country" label="País" icon="globe" onChange={onChange}>
  <SelectField.Option value="ar">Argentina</SelectField.Option>
  <SelectField.Option value="br">Brasil</SelectField.Option>
</SelectField>
```

## Estado Inválido
```jsx
<SelectField id="payment" label="Método" invalid defaultOption={false}>
  <SelectField.Option value="card">Tarjeta</SelectField.Option>
  <SelectField.Option value="cash">Efectivo</SelectField.Option>
</SelectField>
```

## Notas
- `defaultOption` agrega una opción deshabilitada `value=""` para placeholder.
- `icon` activa la clase `-icon` y renderiza `Icon` a la derecha.# Select Field (React)

## Descripción

Select con label flotante, opción vacía inicial, estado inválido e ícono opcional. Incluye componente `Option` anidado.

**Import sugerido:**

```jsx
import { SelectField, ValidationInline, Heading } from "@despegar/eva-react-components";
```

---

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Estructura del componente

```jsx
<SelectField
  label="País"
  id="select-id"
  icon=""
  disabled={false}
  invalid={false}
  defaultOption={true}
  className=""
  onChange={handleChange}
>
  <SelectField.Option value="" disabled />
  <SelectField.Option value="ar">Argentina</SelectField.Option>
  <SelectField.Option value="br">Brasil</SelectField.Option>
</SelectField>
```

---

## Props

### `SelectField`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string \| ReactNode` | `'País'` | Label flotante (requerido). |
| `icon` | `string` | `''` | Nombre del ícono (derecha). |
| `disabled` | `boolean` | `false` | Estado deshabilitado. |
| `invalid` | `boolean` | `false` | Estado inválido. |
| `children` | `SelectField.Option[]` | **requerido** | Opciones a renderizar. |
| `defaultOption` | `boolean` | `true` | Inserta opción vacía inicial (`disabled` + `selected`). |
| `id` | `string` | `''` | Id para asociar el `label`. |
| `className` | `string` | `''` | Clases extra en el contenedor. |
| `value` | `any` | `undefined` | Valor controlado. |
| `defaultValue` | `any` | `undefined` | Valor por defecto (no controlado). |
| `onChange` | `function` | `undefined` | Handler de cambio. |
| `onFocus` | `function` | `undefined` | Handler de foco. |
| `onBlur` | `function` | `undefined` | Handler de blur. |
| `onMouseUp` | `function` | `undefined` | Handler mouse up. |
| `onMouseDown` | `function` | `undefined` | Handler mouse down. |

### `SelectField.Option`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | `string \| number` | **requerido** | Valor de la opción. |
| `disabled` | `boolean` | `false` | Deshabilita la opción. |
| `children` | `string \| number` | `value` | Texto mostrado. |

---

## Ejemplos

### Select field default

```jsx
<SelectField label="País" id="select-common">
  <SelectField.Option value="" disabled />
  <SelectField.Option value="1">Option 1</SelectField.Option>
  <SelectField.Option value="2">Option 2</SelectField.Option>
  <SelectField.Option value="3">Option 3</SelectField.Option>
</SelectField>
```

---

### Select field deshabilitado

```jsx
<SelectField label="País" disabled id="select-disabled">
  <SelectField.Option value="" disabled />
  <SelectField.Option value="1">Option 1</SelectField.Option>
  <SelectField.Option value="2">Option 2</SelectField.Option>
  <SelectField.Option value="3">Option 3</SelectField.Option>
</SelectField>
```

---

### Select field inválido (con ValidationInline)

```jsx
<ValidationInline message="Validation inline" invalid>
  <SelectField label="País" invalid id="select-invalid">
    <SelectField.Option value="" disabled />
    <SelectField.Option value="1">Option 1</SelectField.Option>
    <SelectField.Option value="2">Option 2</SelectField.Option>
    <SelectField.Option value="3">Option 3</SelectField.Option>
  </SelectField>
</ValidationInline>
```

---

### Select field con ícono

```jsx
<SelectField label="País" icon="info-circle" id="select-icon">
  <SelectField.Option value="" disabled />
  <SelectField.Option value="1">Option 1</SelectField.Option>
  <SelectField.Option value="2">Option 2</SelectField.Option>
  <SelectField.Option value="3">Option 3</SelectField.Option>
</SelectField>
```

---

### Select field con helper text

```jsx
<div>
  <SelectField label="País" id="select-with-helper">
    <SelectField.Option value="" disabled />
    <SelectField.Option value="1">Option 1</SelectField.Option>
    <SelectField.Option value="2">Option 2</SelectField.Option>
    <SelectField.Option value="3">Option 3</SelectField.Option>
  </SelectField>
  <Heading tag="p" variant="caption" marginTop="xsm">Helper text</Heading>
</div>
```
