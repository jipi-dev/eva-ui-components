# LabelForm

## Descripción

Label para formularios con estilo uppercase, bold y letter-spacing. Se usa para identificar campos de formulario (Input, Select, Textarea, Checkbox, etc.). Soporta tamaños (sm, md, lg) y posicionamiento (bloque o inline). **Siempre** asociar con el `id` del campo usando el atributo `for`.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<label class="eva-3-label-form [-sm|-md|-lg] [clases-adicionales]" for="input-id">
  Label de formulario
</label>
```

- Clase base: `eva-3-label-form`.
- Modificadores de tamaño: `-sm` (12px), `-md` (14px), `-lg` (14px).
- Atributo `for`: Asocia el label con el `id` del input/campo.

## Uso básico

### Label default (sin tamaño explícito)

```html
<label class="eva-3-label-form" for="default-input">
  Nombre
</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input id="default-input" class="input-tag" type="text" placeholder="Ingresa tu nombre" />
  </div>
</div>
```

**Font-size default**: 12px (mismo que `-sm`).

## Tamaños

### Small (`-sm`)

```html
<label class="eva-3-label-form -sm" for="small-input">
  Email
</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input id="small-input" class="input-tag" type="email" placeholder="email@ejemplo.com" />
  </div>
</div>
```

- **Font-size**: 12px.

### Medium (`-md`)

```html
<label class="eva-3-label-form -md" for="medium-input">
  Teléfono
</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input id="medium-input" class="input-tag" type="tel" placeholder="+54 11 1234-5678" />
  </div>
</div>
```

- **Font-size**: 14px.

### Large (`-lg`)

```html
<label class="eva-3-label-form -lg" for="large-input">
  Dirección
</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input id="large-input" class="input-tag" type="text" placeholder="Calle 123" />
  </div>
</div>
```

- **Font-size**: 14px (mismo que `-md`).

## Posicionamiento

### Label arriba (bloque)

```html
<label class="eva-3-label-form -eva-3-mb-sm" for="block-input">
  Nombre completo
</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input id="block-input" class="input-tag" type="text" placeholder="Juan Pérez" />
  </div>
</div>
```

**Margen bottom**: Usar utility classes como `-eva-3-mb-sm` (margin-bottom small).

### Label inline (a un lado)

```html
<div class="-eva-3-valign">
  <label class="eva-3-label-form -eva-3-mr-sm" for="inline-input">
    Edad
  </label>
  <div class="eva-3-input -md">
    <div class="input-container">
      <input id="inline-input" class="input-tag" type="number" placeholder="25" />
    </div>
  </div>
</div>
```

**Alineación vertical**: Usar `-eva-3-valign` (utility para vertical-align).
**Margen right**: Usar `-eva-3-mr-sm` (margin-right small).

## Uso con Checkbox

```html
<label class="eva-3-label-form">
  <input type="checkbox" id="terms-checkbox" />
  <span>Acepto los términos y condiciones</span>
</label>
```

**Nota**: Para Checkbox, el `for` NO es necesario si el input está **dentro** del label (estructura wrapper). El label genera el foco automáticamente.

## Uso con Input

### Ejemplo completo (label arriba)

```html
<div>
  <label class="eva-3-label-form -md -eva-3-mb-sm" for="complete-input">
    Correo electrónico
  </label>
  <div class="eva-3-input -lg">
    <div class="input-container">
      <input
        id="complete-input"
        class="input-tag"
        type="email"
        placeholder="tu@email.com"
      />
    </div>
  </div>
</div>
```

### Ejemplo inline (label a la izquierda)

```html
<div class="-eva-3-valign">
  <label class="eva-3-label-form -sm -eva-3-mr-sm" for="inline-example">
    Código postal
  </label>
  <div class="eva-3-input -md">
    <div class="input-container">
      <input
        id="inline-example"
        class="input-tag"
        type="text"
        placeholder="1000"
      />
    </div>
  </div>
</div>
```

## Notas de estilo (SCSS)

### Propiedades

```scss
.eva-3-label-form {
  display: inline-block;
  color: var(--color-neutral-800);
  font-size: 12px; // Default
  font-weight: 500; // Medium/Bold
  text-transform: uppercase;
  letter-spacing: 1pt;
}
```

- **Text-transform**: uppercase (MAYÚSCULAS).
- **Letter-spacing**: 1pt (espaciado entre letras).
- **Font-weight**: 500 (Medium/Bold).
- **Color**: `--color-neutral-800` (gris oscuro).

### Tamaños

- **-sm**: 12px.
- **-md**: 14px.
- **-lg**: 14px (mismo que `-md`).

### Responsive

Actualmente **NO** hay variaciones responsive específicas (el código comentado muestra que hubo un intento previo). El tamaño es fijo por clase.

## Accesibilidad

### Atributo `for` obligatorio

**SIEMPRE** usar el atributo `for` asociado al `id` del input:

```html
<label for="my-input">Nombre</label>
<input id="my-input" />
```

Esto permite:
- Click en el label para hacer focus en el input.
- Screen readers asocien correctamente label e input.

### Excepción: Label wrapper

Si el input está **dentro** del label, el `for` NO es necesario:

```html
<label>
  Nombre
  <input type="text" />
</label>
```

### Uppercase y legibilidad

El texto en **uppercase** reduce la legibilidad. Usar textos cortos y claros (ej: "NOMBRE", "EMAIL", "TELÉFONO").

### Color de contraste

El color `--color-neutral-800` tiene suficiente contraste sobre fondo blanco (ratio > 4.5:1 para textos pequeños).

## Dependencias

- Variables: `--color-neutral-800`.
- Utilities: Clases de posicionamiento (margin, valign) disponibles en EVA UI.
- Clase base: `eva-3-label-form`.
- Categoría: `form` (type: atoms).

## Ejemplos completos

### Formulario con múltiples campos

```html
<form>
  <!-- Campo 1: Nombre -->
  <div class="-eva-3-mb-md">
    <label class="eva-3-label-form -md -eva-3-mb-sm" for="form-name">
      Nombre completo
    </label>
    <div class="eva-3-input -lg">
      <div class="input-container">
        <input
          id="form-name"
          class="input-tag"
          type="text"
          placeholder="Juan Pérez"
        />
      </div>
    </div>
  </div>

  <!-- Campo 2: Email -->
  <div class="-eva-3-mb-md">
    <label class="eva-3-label-form -md -eva-3-mb-sm" for="form-email">
      Email
    </label>
    <div class="eva-3-input -lg">
      <div class="input-container">
        <input
          id="form-email"
          class="input-tag"
          type="email"
          placeholder="email@ejemplo.com"
        />
      </div>
    </div>
  </div>

  <!-- Campo 3: Teléfono (inline) -->
  <div class="-eva-3-mb-md -eva-3-valign">
    <label class="eva-3-label-form -sm -eva-3-mr-sm" for="form-phone">
      Teléfono
    </label>
    <div class="eva-3-input -md">
      <div class="input-container">
        <input
          id="form-phone"
          class="input-tag"
          type="tel"
          placeholder="+54 11"
        />
      </div>
    </div>
  </div>

  <!-- Campo 4: Checkbox -->
  <div class="-eva-3-mb-lg">
    <label class="eva-3-label-form">
      <input type="checkbox" id="form-terms" />
      <span>Acepto los términos y condiciones</span>
    </label>
  </div>

  <button type="submit" class="eva-3-button -lg -primary">
    Enviar
  </button>
</form>
```

### Label con helper text

```html
<div>
  <label class="eva-3-label-form -md -eva-3-mb-sm" for="helper-input">
    Contraseña
  </label>
  <div class="eva-3-input -lg -eva-3-mb-sm">
    <div class="input-container">
      <input
        id="helper-input"
        class="input-tag"
        type="password"
        placeholder="Contraseña"
      />
    </div>
  </div>
  <p class="eva-3-body-2 -eva-3-tc-gray-1">
    Mínimo 8 caracteres, incluir mayúsculas y números
  </p>
</div>
```

### Label con Input inválido

```html
<div>
  <label class="eva-3-label-form -md -eva-3-mb-sm" for="invalid-input">
    Email
  </label>
  <div class="eva-3-input -lg -invalid -eva-3-mb-sm">
    <div class="input-container">
      <input
        id="invalid-input"
        class="input-tag"
        type="email"
        placeholder="email@ejemplo.com"
        aria-invalid="true"
        aria-describedby="invalid-error"
      />
    </div>
  </div>
  <span id="invalid-error" class="eva-3-body-2 -eva-3-tc-error-500">
    Por favor ingresa un email válido
  </span>
</div>
```
