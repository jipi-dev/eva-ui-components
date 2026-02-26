# Select - React

## Importación
```jsx
import Select from '@despegar/eva-ui/Select';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'lg' \| 'md'` | `'lg'` | Tamaño. |
| `id` | string | `'eva-select'` | ID del select. |
| `children` | `Select.Option[]` | demo | Opciones. |
| `noBorder` | bool | `false` | Sin borde. |
| `disabled` | bool | `false` | Deshabilitado. |
| `invalid` | bool | `false` | Estado inválido. |
| `defaultOption` | bool | `true` | Muestra opción “Seleccione una opción”. |
| `gradient` | bool | `false` | Agrega gradiente lateral. |
| `labelForm` | bool | `false` | Usa clase `eva-3-label-form` en el label. |
| `label` | string \| node | `''` | Texto del label. |
| `labelClasses` | string | `''` | Clases extra para label. |
| `className` | string | `''` | Clases extra. |
| `...rest` | — | — | Props nativos del `<select>` (value, onChange, etc.). |

### `Select.Option`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | string \| number | — | Valor (requerido). |
| `disabled` | bool | `false` | Deshabilitado. |
| `children` | string \| number | `value` | Texto visible. |

## Uso Básico
```jsx
<Select id="country" label="País" onChange={onChange}>
  <Select.Option value="ar">Argentina</Select.Option>
  <Select.Option value="br">Brasil</Select.Option>
</Select>
```

## Variante Sin Borde e Inválido
```jsx
<Select
  size="md"
  noBorder
  invalid
  label="Método de pago"
  defaultOption={false}
>
  <Select.Option value="card">Tarjeta</Select.Option>
  <Select.Option value="cash">Efectivo</Select.Option>
</Select>
```

## Notas
- Si `children` es fragmento, se normaliza a array. 
- `defaultOption` inserta una opción deshabilitada al inicio.# Select (React)

## Descripción

Componente React para select de EVA UI. **Ejemplos pendientes** (se agregarán luego).

**Import sugerido:**

```jsx
import { Select } from "@despegar/eva-react-components";
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
<Select
  size="lg"
  options={[{ value: "1", label: "Opción 1" }]}
  disabled={false}
  onChange={handleChange}
/>
```

---

## Props (pendiente de validar)

- `size`: `'md' | 'lg'`
- `options`: `Array<{ value: string | number, label: string }>`
- `disabled`: `boolean`
- `invalid`: `boolean`
- `placeholder`: `string`
- `className`: `string`
- `onChange`: `function`

---

## Ejemplos

> Pendientes de agregar.
