# LabelForm - React

## Descripción

Componente React para labels de formulario con estilo uppercase, bold y letter-spacing. Se usa para identificar campos (Input, Select, Textarea, Checkbox, etc.). Simple wrapper del `<label>` HTML con estilos predefinidos.

**Tipo:** Átomo  
**Categoría:** Forms / Typography  
**Tags:** react, label, form, htmlFor, uppercase, helper, spacing

## Cuándo Usar
- Etiquetar campos de formulario (inputs, selects, textareas, checkboxes/radios).
- Necesidad de estilo consistente en headings de campo (uppercase, tracking).

## Mejores Prácticas
- Siempre proveer `htmlFor` asociado al `id` del control para accesibilidad.
- Usa el tamaño (`-sm|-md|-lg`) acorde al control y densidad del formulario.
- Mantén el copy corto y claro; evita saltos de línea innecesarios.

## Dependencias
- Wrapper de `<label>` con estilos EVA; no requiere otros componentes.
- Se suele combinar con `Input`, `Select`, `Textarea`, `Checkbox`, `RadioButton`.

## Instalación

```jsx
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `children` | `string` \| `node` | ✅ Sí | `'Label del elemento'` | Contenido del label (texto o JSX) |
| `htmlFor` | `string` | No | - | ID del input asociado (equivalente al atributo `for` HTML) |
| `className` | `string` | No | `''` | Clases adicionales para el label |

**Nota**: `children` es **requerido**. Siempre proporcionar `htmlFor` para accesibilidad.

## Uso básico

### Label simple

```jsx
<LabelForm htmlFor="name-input">
  Nombre completo
</LabelForm>
```

### Con Input

```jsx
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';
import Input from 'eva-main/client/src/components/Input/Input.jsx';

<div>
  <LabelForm htmlFor="email-input" marginBottom="sm">
    Email
  </LabelForm>
  <Input size="lg" id="email-input" placeholder="tu@email.com" />
</div>
```

## Tamaños

### Small (`-sm`)

```jsx
<LabelForm htmlFor="small-input" className="-sm" marginBottom="sm">
  Código postal
</LabelForm>
<Input size="md" id="small-input" />
```

### Medium (`-md`)

```jsx
<LabelForm htmlFor="medium-input" className="-md" marginBottom="sm">
  Teléfono
</LabelForm>
<Input size="lg" id="medium-input" />
```

### Large (`-lg`)

```jsx
<LabelForm htmlFor="large-input" className="-lg" marginBottom="sm">
  Dirección
</LabelForm>
<Input size="lg" id="large-input" />
```

**Nota**: `-md` y `-lg` tienen el mismo font-size (14px).

## Posicionamiento

### Label arriba (bloque)

```jsx
<div>
  <LabelForm htmlFor="block-input" marginBottom="sm">
    Nombre
  </LabelForm>
  <Input size="lg" id="block-input" placeholder="Juan Pérez" />
</div>
```

**Uso con utilities HOC**: `marginBottom="sm"` (agrega `-eva-3-mb-sm`).

### Label inline (a un lado)

```jsx
<div className="-eva-3-valign">
  <LabelForm htmlFor="inline-input" marginRight="sm">
    Edad
  </LabelForm>
  <Input size="md" id="inline-input" type="number" placeholder="25" />
</div>
```

**Alineación vertical**: wrapper con `-eva-3-valign`.
**Margen right**: `marginRight="sm"` (agrega `-eva-3-mr-sm`).

## Uso con Checkbox

```jsx
import Checkbox from 'eva-main/client/src/components/Checkbox/Checkbox.jsx';

<Checkbox
  id="terms-checkbox"
  label="Acepto los términos y condiciones"
  labelForm
/>
```

**Nota**: El component Checkbox tiene prop `labelForm` que internamente usa LabelForm. NO es necesario envolver Checkbox con LabelForm manualmente.

## Ejemplo con InputField

```jsx
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';
import InputField from 'eva-main/client/src/components/InputField/InputField.jsx';

<div>
  <LabelForm htmlFor="inputfield-example" marginBottom="sm">
    Nombre
  </LabelForm>
  <InputField label="Nombre completo" id="inputfield-example" />
</div>
```

**Nota**: InputField ya tiene su label integrado (flotante), por lo que NO requiere LabelForm externo.

## Con utility classes

```jsx
<LabelForm
  htmlFor="custom-input"
  className="-md custom-class"
  marginBottom="md"
  marginTop="sm"
>
  Campo personalizado
</LabelForm>
```

**Utilities disponibles** (vía HOC `withUtilities`):
- `marginTop`, `marginBottom`, `marginLeft`, `marginRight`: `'xsm'`, `'sm'`, `'md'`, `'lg'`, `'xlg'`.
- `paddingTop`, `paddingBottom`, etc.

## Formulario completo

```jsx
import React, { useState } from 'react';
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';
import Input from 'eva-main/client/src/components/Input/Input.jsx';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Nombre */}
      <div className="-eva-3-mb-md">
        <LabelForm htmlFor="form-name" marginBottom="sm">
          Nombre completo
        </LabelForm>
        <Input
          size="lg"
          id="form-name"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Juan Pérez"
        />
      </div>

      {/* Email */}
      <div className="-eva-3-mb-md">
        <LabelForm htmlFor="form-email" marginBottom="sm">
          Email
        </LabelForm>
        <Input
          size="lg"
          type="email"
          id="form-email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="email@ejemplo.com"
        />
      </div>

      {/* Teléfono (inline) */}
      <div className="-eva-3-mb-md -eva-3-valign">
        <LabelForm htmlFor="form-phone" marginRight="sm">
          Teléfono
        </LabelForm>
        <Input
          size="md"
          type="tel"
          id="form-phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          placeholder="+54 11"
        />
      </div>

      <button type="submit" className="eva-3-button -lg -primary">
        Enviar
      </button>
    </form>
  );
}
```

## PropTypes

```jsx
LabelForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
```

## Estructura renderizada

```jsx
<label className={`eva-3-label-form ${className}`} htmlFor={htmlFor}>
  {children}
</label>
```

Simple wrapper del `<label>` HTML con clase `eva-3-label-form` y props dinámicas.

## Accesibilidad

### htmlFor obligatorio

**SIEMPRE** proporcionar `htmlFor` asociado al `id` del input:

```jsx
<LabelForm htmlFor="my-input">Nombre</LabelForm>
<Input id="my-input" size="lg" />
```

Esto permite:
- Click en el label para hacer focus en el input.
- Screen readers asocien correctamente label e input.

### Excepción: Label wrapper

Si el input está **dentro** del label (estructura wrapper), `htmlFor` NO es necesario:

```jsx
<LabelForm>
  Nombre
  <input type="text" />
</LabelForm>
```

### Uppercase y legibilidad

El texto en **uppercase** (CSS: `text-transform: uppercase`) reduce legibilidad. Usar textos **cortos y claros**:

- ✅ "NOMBRE", "EMAIL", "TELÉFONO"
- ❌ "POR FAVOR INGRESA TU NOMBRE COMPLETO AQUÍ"

### Color de contraste

El color `--color-neutral-800` tiene suficiente contraste sobre fondo blanco (ratio > 4.5:1).

## Dependencias

### HOC
- `withUtilities` (agrega props de margin, padding, etc.)

### Categoría
- **Type**: atoms
- **Category**: form
- **Primary class**: `eva-3-label-form`
- **Tags**: discount, descuento, destaque, etiqueta *(tags incorrectos en metadata, debería ser "formulario", "label", etc.)*

## Notas adicionales

- **Simplicidad**: Es un wrapper muy simple del `<label>` HTML. La mayoría de la funcionalidad viene del CSS (uppercase, letter-spacing, font-weight).
- **WithUtilities HOC**: Permite usar props como `marginBottom="sm"` en lugar de clases manuales.
- **Children flexible**: Acepta texto plano o JSX (nodes).
- **Default children**: Si no se pasa children, el default es `'Label del elemento'` (pero PropTypes lo marca como requerido, así que siempre se debe pasar).

## Ejemplo avanzado (formulario con validación)

```jsx
import React, { useState } from 'react';
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';
import Input from 'eva-main/client/src/components/Input/Input.jsx';
import Heading from 'eva-main/client/src/components/Heading/Heading.jsx';

function AdvancedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError('Email inválido');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <div>
      <LabelForm htmlFor="email-validation" marginBottom="sm">
        Email
      </LabelForm>
      <Input
        size="lg"
        type="email"
        id="email-validation"
        value={email}
        onChange={handleChange}
        invalid={!!error}
        placeholder="tu@email.com"
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
        className="-eva-3-mb-sm"
      />
      {error && (
        <Heading
          tag="p"
          variant="body-2"
          id="email-error"
          className="-eva-3-tc-error-500"
        >
          {error}
        </Heading>
      )}
    </div>
  );
}
```

## Comparación con Input label prop

| Feature | LabelForm (externo) | Input label prop (integrado) |
|---------|---------------------|------------------------------|
| Estructura | Label + Input separados | Label dentro de Input |
| Estilo | Uppercase, bold, letter-spacing | Depende del Input (no uppercase) |
| Flexibilidad | ✅ Alta (puedes agregar cualquier cosa entre label e input) | ❌ Baja (label renderizado internamente) |
| Uso recomendado | Formularios tradicionales, layout personalizado | Formularios simples, rápido setup |
| Use case | LabelForm + Input clásico | Input con `label` prop + `labelForm={true}` |

```jsx
// Opción 1: LabelForm externo (más flexible)
<LabelForm htmlFor="opt1" marginBottom="sm">Nombre</LabelForm>
<Input size="lg" id="opt1" />

// Opción 2: Input con label integrado (más simple)
<Input size="lg" label="Nombre" labelForm={true} id="opt2" />
```
