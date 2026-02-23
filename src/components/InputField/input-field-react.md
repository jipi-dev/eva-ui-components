# Input Field (React)

## Descripción

Campo de texto con label flotante. El label funciona como placeholder cuando está vacío y se eleva al enfocar o con contenido. Pensado para formularios de Checkout y Suppliers.

**Tipo:** Átomo  
**Categoría:** Forms / Controls  
**Tags:** react, input-field, floating label, icon, invalid, readonly

## Cuándo Usar
- Formularios donde el label debe permanecer visible sin ocupar espacio adicional.
- Casos donde se necesita ícono integrado o estado de error inline.

## Mejores Prácticas
- Mantén el `placeholder` vacío; el label cumple esa función.
- Usa `invalid` junto a `ValidationInline` para mensajes de error.
- Marca `readOnly` si el campo no debe editarse pero sí copiarse.

## Dependencias
- Componentes opcionales: `ValidationInline` para errores, `Heading` para helper, `Icon` interno mediante prop `icon`.

**Import sugerido:**

```jsx
import { InputField, ValidationInline, Heading } from "@despegar/eva-react-components";
```

---

## Estructura del componente

```jsx
<InputField
  label="Nombre"
  id="input-id"
  icon=""
  iconLeft={false}
  disabled={false}
  invalid={false}
  readOnly={false}
  className=""
  inputClasses=""
  placeholder="" // oculto, el label ocupa su lugar
  onChange={handleChange}
/>
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string \| ReactNode` | **requerido** | Texto/slot que actúa como placeholder flotante. |
| `icon` | `string` | `''` | Nombre del ícono (se muestra a la derecha por defecto). |
| `iconLeft` | `boolean` | `false` | Mueve el ícono a la izquierda. |
| `disabled` | `boolean` | `false` | Estado deshabilitado. |
| `invalid` | `boolean` | `false` | Estado inválido (borde/error). |
| `readOnly` | `boolean` | `false` | Solo lectura (no editable). |
| `id` | `string` | `''` | Identificador para asociar con `label` y accesibilidad. |
| `className` | `string` | `''` | Clases extra en el contenedor. |
| `inputClasses` | `string` | `''` | Clases extra en el `<input>`. |
| `placeholder` | `string` | `''` | Placeholder oculto; el label cumple su función. |
| `value` | `any` | `undefined` | Valor controlado. |
| `defaultValue` | `any` | `undefined` | Valor por defecto (no controlado). |
| `onChange` | `function` | `undefined` | Handler de cambio. |
| `onFocus` | `function` | `undefined` | Handler de foco. |
| `onBlur` | `function` | `undefined` | Handler de blur. |
| `onMouseUp` | `function` | `undefined` | Handler mouse up. |
| `onMouseDown` | `function` | `undefined` | Handler mouse down. |

> Icon usa el componente `Icon` interno. Para validación usa `ValidationInline` (ver ejemplo).

---

## Ejemplos

### Input field default

```jsx
<InputField label="Nombre" id="input-common" />
```

---

### Input field deshabilitado

```jsx
<InputField label="Nombre" disabled id="input-disabled" />
```

---

### Input field solo lectura

```jsx
<InputField label="Nombre" readOnly id="input-readonly" value="Ada Lovelace" />
```

---

### Input inválido (con ValidationInline)

```jsx
<ValidationInline message="Validation inline" invalid>
  <InputField label="Nombre" invalid id="input-invalid" />
</ValidationInline>
```

---

### Input field con ícono

```jsx
<InputField label="Nombre" icon="info-circle" id="input-icon" />
```

```jsx
<InputField label="Nombre" icon="info-circle" iconLeft id="input-icon-left" />
```

---

### Input field con helper text

```jsx
<div>
  <InputField label="Nombre" id="input-with-helper" />
  <Heading tag="p" variant="caption" marginTop="xsm">Helper text</Heading>
</div>
```

---

### Fallback Safari (:placeholder-shown)

Usa clases en `className` si necesitas forzar el estado del label en browsers sin soporte:

```jsx
<InputField label="Nombre" id="input-with-classes" className="-empty" />
```

```jsx
<InputField label="Nombre" id="input-with-classes" className="-not-empty" />
```
