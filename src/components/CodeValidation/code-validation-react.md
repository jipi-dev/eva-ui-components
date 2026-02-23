# CodeValidation (React)

## Descripción

Molécula de 6 celdas para ingresar códigos de verificación. Usa `Input` (un carácter por celda) y muestra mensajes de error vía `ValidationInline`. Soporta tamaño `md/lg`, estado inválido y deshabilitado.

**Tipo:** Molécula  
**Categoría:** Forms / Verification  
**Tags:** react, code, otp, validation, inline error, 2fa, 6-digit

## Cuándo Usar
- Ingreso de códigos OTP/2FA o validaciones de 6 dígitos/letras.
- Flujos de seguridad, recuperación de cuenta o confirmación de contacto.

## Mejores Prácticas
- Enfocar automáticamente la primera celda y avanzar con `onChange` si es viable.
- Mostrar errores con `invalid` + `errorText` y permitir reintentos claros.
- Usar `size` consistente con la densidad del formulario (`md` en mobile, `lg` en desktop).

## Dependencias
- `Input` interno (EVA) por celda y `ValidationInline` para el mensaje de error.
- Clases `eva-3-code-validation` y `code-validation-input` provistas por la librería.

**Import típico:**
```jsx
import { CodeValidation } from "@despegar/eva-react-components";
```

## Props (CodeValidation)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-code-validation`. |
| `size` | `'lg' \| 'md'` | `'lg'` | Tamaño propagado a cada `Input` interno. |
| `invalid` | `bool` | `false` | Muestra estado de error en contenedor e `InlineValidation`. |
| `disabled` | `bool` | `false` | Deshabilita todos los inputs. |
| `errorText` | `string` | `'Descripcion del error'` | Texto a mostrar en `ValidationInline`. |
| `children` | `CodeValidation.Cell[]` (6) | 6 celdas autogeneradas | Deben ser exactamente 6 elementos `<CodeValidation.Cell />`. Si no se proveen, se generan 6 con placeholders `A B C 1 2 3`. |

## Props (CodeValidation.Cell)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `inputId` | `string` | — | **Requerido.** `id` del input interno. |
| `placeholder` | `string` | `A/B/C/1/2/3` secuencial | Placeholder de la celda (un carácter). |
| `disabled` | `bool` | `false` | Se sobreescribe si el contenedor pasa `disabled`. |
| `onChange` | `func` | — | Handler del `input` nativo. |
| `...rest` | — | — | Se propaga al `Input` (ej. `value`, `onBlur`, `onFocus`). |

## Estructura renderizada

```jsx
<div className={`eva-3-code-validation ${className} ${classes}`}>
  <ValidationInline invalid={invalid} message={errorText}>
    <div className="code-validation-input">
      {children.map((child, i) => React.cloneElement(child, {
        ...child.props,
        size,
        disabled,
        key: placeHolders[i],
        placeholder: child.props.placeholder || placeHolders[i],
      }))}
    </div>
  </ValidationInline>
</div>
```

- `classes` agrega `-invalid` cuando `invalid=true`.
- `placeHolders`: `['A','B','C','1','2','3']`.
- Cada celda renderiza un `Input` con `maxLength={1}` y texto centrado.

## Ejemplos

### Básico (tamaño lg por defecto)
```jsx
<CodeValidation>
  <CodeValidation.Cell inputId="cv-1" />
  <CodeValidation.Cell inputId="cv-2" />
  <CodeValidation.Cell inputId="cv-3" />
  <CodeValidation.Cell inputId="cv-4" />
  <CodeValidation.Cell inputId="cv-5" />
  <CodeValidation.Cell inputId="cv-6" />
</CodeValidation>
```

### Tamaño md
```jsx
<CodeValidation size="md">
  <CodeValidation.Cell inputId="cv-md-1" />
  <CodeValidation.Cell inputId="cv-md-2" />
  <CodeValidation.Cell inputId="cv-md-3" />
  <CodeValidation.Cell inputId="cv-md-4" />
  <CodeValidation.Cell inputId="cv-md-5" />
  <CodeValidation.Cell inputId="cv-md-6" />
</CodeValidation>
```

### Inválido con mensaje custom
```jsx
<CodeValidation invalid errorText="Código inválido">
  <CodeValidation.Cell inputId="cv-inv-1" />
  <CodeValidation.Cell inputId="cv-inv-2" />
  <CodeValidation.Cell inputId="cv-inv-3" />
  <CodeValidation.Cell inputId="cv-inv-4" />
  <CodeValidation.Cell inputId="cv-inv-5" />
  <CodeValidation.Cell inputId="cv-inv-6" />
</CodeValidation>
```

### Deshabilitado
```jsx
<CodeValidation disabled>
  <CodeValidation.Cell inputId="cv-dis-1" />
  <CodeValidation.Cell inputId="cv-dis-2" />
  <CodeValidation.Cell inputId="cv-dis-3" />
  <CodeValidation.Cell inputId="cv-dis-4" />
  <CodeValidation.Cell inputId="cv-dis-5" />
  <CodeValidation.Cell inputId="cv-dis-6" />
</CodeValidation>
```

### Con placeholders y handlers personalizados
```jsx
<CodeValidation size="md" onChange={() => {}}>
  <CodeValidation.Cell inputId="cv-p-1" placeholder="X" />
  <CodeValidation.Cell inputId="cv-p-2" onChange={(e) => console.log(e.target.value)} />
  <CodeValidation.Cell inputId="cv-p-3" placeholder="Z" />
  <CodeValidation.Cell inputId="cv-p-4" />
  <CodeValidation.Cell inputId="cv-p-5" />
  <CodeValidation.Cell inputId="cv-p-6" />
</CodeValidation>
```

## Accesibilidad

- Cada celda requiere `id` único; `Input` maneja asociación con label interno (label vacío por defecto).
- `maxLength={1}` limita a un carácter; considerar manejo de focus/auto-advance en la lógica de negocio si se desea.
- `ValidationInline` puede anunciar errores; use `aria-live` en su implementación si se necesita feedback audible.
- `disabled` nativo bloquea foco e interacción.

## Dependencias

- Componentes: `Input`, `ValidationInline`.
- Clase base: `eva-3-code-validation`.
- HOC/utilidades: `withUtilities`, `classResolver`, `instanceOfFunctional`, `PREFIX`.
- Íconos: `user` (metadata, no se muestran por defecto).
