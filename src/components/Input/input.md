# Input

## Descripción

Input de texto (text, email, password, search, etc.) para formularios. Usado en Checkout y flujos de carga de datos. Indica al usuario que puede ingresar información y admite íconos, helper y estados.

**Tipo:** Átomo  
**Categoría:** Forms / Controls  
**Tags:** input, text, email, password, icon, helper, disabled, invalid, readonly

## Estructura HTML
```html
<div class="eva-3-input -lg [-icon-left|-icon-right] [-invalid] [clases]">
  <div class="input-container">
    <input id="input-id" class="input-tag" type="text" placeholder="Placeholder" />
    <i class="eva-3-icon-location input-icon"></i> <!-- opcional -->
  </div>
</div>
```

## Variantes / Estados
- Tamaños: `-md`, `-lg`.
- Ícono izquierdo/derecho: `-icon-left`, `-icon-right` + `input-icon`.
- Estados: `-invalid`, `disabled`, `readonly`, `-no-border`.
- Con label externo (`label-form`) o label envolvente.
- Con helper text (heading/body pequeño debajo).

## Cuándo Usar
- Campos de entrada en formularios, modales o filtros.
- Cuando se necesita ícono contextual (ej: ubicación, búsqueda, info).

## Mejores Prácticas
- Asociar `label` con `for`/`id` para accesibilidad.
- Usa `type` correcto (`email`, `password`, `number`) para validación y teclado.
- Limita el placeholder a ejemplos breves; no reemplaza al label.
- En error, combinar `-invalid` con mensaje `validation-inline`.

## Dependencias
- Clase base `eva-3-input`, `input-container`, `input-tag`, `input-icon` (opcional).
- Utilidades: `label-form` para labels, `heading`/`validation-inline` para helper/errores.

---

## Ejemplos y casos

### Uso - Input Default

Ejemplo de input por defecto.

```html
<div class="eva-3-input -lg">
  <div class="input-container">
    <input
      id="input-common"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
    />
  </div>
</div>
```

#### Input Deshabilitado

El input deshabilitado responde al atributo `disabled` de HTML.

```html
<div class="eva-3-input -lg">
  <div class="input-container">
    <input
      id="input-disabled"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
      disabled
    />
  </div>
</div>
```

#### Input con Íconos

Tenemos la posibilidad de agregar un ícono a nuestros inputs. El ícono puede estar a la izquierda o a la derecha.

**Ícono a la izquierda:**

```html
<div class="eva-3-input -icon-left -lg">
  <div class="input-container">
    <input
      id="input-icon-left"
      class="input-tag"
      type="text"
      placeholder="placeholder"
    />
    <i class="eva-3-icon-location input-icon"></i>
  </div>
</div>
```

**Ícono a la derecha:**

```html
<div class="eva-3-input -icon-right -lg">
  <div class="input-container">
    <input
      id="input-icon-right"
      class="input-tag"
      type="text"
      placeholder="placeholder"
    />
    <i class="eva-3-icon-info-circle input-icon"></i>
  </div>
</div>
```

#### Input con Label

Existen dos formas de utilizar el input con label:

**1. Label con atributo `for` asociado al `id` del input:**

```html
<label for="input-with-label" class="eva-3-label-form -eva-3-mb-sm">Label</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input
      id="input-with-label"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
    />
  </div>
</div>
```

**2. Label que engloba al input:**

```html
<label class="eva-3-label-form -eva-3-mb-sm">
  Label
  <div class="eva-3-input -lg -eva-3-mt-sm">
    <div class="input-container">
      <input
        id="input-wrapped"
        class="input-tag"
        type="text"
        placeholder="Placeholder"
      />
    </div>
  </div>
</label>
```

**Nota**: El componente `label-form` no es una dependencia del Input, por lo tanto debe ser agregado al eva.manifest si se desea usar.

#### Input con Helper Text

Existe la posibilidad de adicionarle un elemento heading debajo del input para mostrar texto de ayuda.

```html
<label for="input-helper" class="eva-3-label-form -eva-3-mb-sm">Label</label>
<div class="eva-3-input -lg -eva-3-mb-sm">
  <div class="input-container">
    <input
      id="input-helper"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
    />
  </div>
</div>
<span class="eva-3-heading -body-2 -eva-3-tc-gray-1">Helper text</span>
```

#### Input Inválido

Estado inválido del input, se muestra con la clase `-invalid`.

```html
<div class="eva-3-input -lg -invalid">
  <div class="input-container">
    <input
      id="input-invalid"
      class="input-tag"
      type="email"
      placeholder="email@example.com"
    />
  </div>
</div>
```

#### Input sin Borde

Variante sin borde usando la clase `-no-border`.

```html
<div class="eva-3-input -lg -no-border">
  <div class="input-container">
    <input
      id="input-no-border"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
    />
  </div>
</div>
```

#### Input con Gradiente

Variante con gradiente usando la clase `-gradient` (se agrega un span con clase `input-gradient`).

```html
<div class="eva-3-input -lg">
  <div class="input-container">
    <input
      id="input-gradient"
      class="input-tag"
      type="text"
      placeholder="Placeholder"
    />
    <span class="input-gradient"></span>
  </div>
</div>
```

## Estructura HTML

### Estructura Base

```html
<div class="eva-3-input [tamaño] [icon-position] [variantes] [estados]">
  <div class="input-container">
    <input
      id="[id-único]"
      class="input-tag"
      type="[tipo]"
      placeholder="[placeholder]"
      [atributos-adicionales]
    />
    <!-- Ícono opcional -->
    <i class="[clase-icono] input-icon"></i>
    <!-- Gradiente opcional -->
    <span class="input-gradient"></span>
  </div>
</div>
```

## Tipos de Input

Los tipos de input soportados son:

- **text**: Entrada de texto estándar
- **number**: Entrada numérica
- **date**: Fecha
- **datetime-local**: Fecha y hora local
- **email**: Correo electrónico
- **file**: Archivo
- **image**: Imagen
- **month**: Mes
- **password**: Contraseña

## Tamaños

- **Large (-lg)**: Tamaño grande
- **Medium (-md)**: Tamaño mediano (requerido)

**Nota**: El tamaño es requerido. Solo se soportan los tamaños `lg` y `md`.

## Posiciones de Ícono

- **Izquierda (-icon-left)**: Ícono a la izquierda del input
- **Derecha (-icon-right)**: Ícono a la derecha del input

## Estados

- **Default**: Estado normal interactivo
- **Disabled**: Input deshabilitado (usa atributo `disabled` de HTML)
- **Invalid (-invalid)**: Estado inválido, muestra borde rojo

## Variantes

- **Sin borde (-no-border)**: Input sin borde visible
- **Con gradiente**: Agrega un span con clase `input-gradient` dentro de `input-container`

## CSS Classes

### Clases Principales

- **Base**: `.eva-3-input` - Clase principal del contenedor
- **Container**: `.input-container` - Contenedor interno
- **Input**: `.input-tag` - Clase del elemento input

### Clases de Tamaño

- `.-lg` - Tamaño grande
- `.-md` - Tamaño mediano (requerido)

### Clases de Posición de Ícono

- `.-icon-left` - Ícono a la izquierda
- `.-icon-right` - Ícono a la derecha

### Clases de Estado

- `.-invalid` - Estado inválido
- `.-no-border` - Sin borde

### Clases de Elementos

- `.input-icon` - Clase del ícono
- `.input-gradient` - Clase del gradiente

## Atributos HTML

El input acepta todos los atributos HTML estándar:

- `id`: Identificador único (requerido para asociar labels)
- `type`: Tipo de input (text, email, password, etc.)
- `placeholder`: Texto placeholder
- `disabled`: Deshabilitar el input
- `maxLength`: Longitud máxima de caracteres
- `value`: Valor del input
- `defaultValue`: Valor por defecto
- `onChange`, `onFocus`, `onBlur`, `onMouseUp`, `onMouseDown`: Event handlers (solo en React, no aplica en HTML puro)

## Best Practices

### Usage Guidelines

- Siempre incluir un `id` único para el input
- Usar el atributo `for` en el label asociado al `id` del input para accesibilidad
- Usar tipos de input apropiados (email, password, etc.)
- Proporcionar texto placeholder claro
- Mostrar feedback de validación inmediatamente
- Agrupar inputs relacionados juntos

### Accessibility

- Siempre asociar label con input usando `for` y `id`
- Asegurar suficiente contraste de color
- Soporte para navegación por teclado
- Proporcionar mensajes de error claros
- Usar atributos `aria-*` cuando sea necesario

### Validation

- Validar en blur para mejor UX
- Mostrar mensajes de error claramente
- Usar atributos de validación HTML5
- Proporcionar feedback en tiempo real para errores comunes

## Ejemplos Completos

### Input Completo con Label e Ícono

```html
<label for="input-complete" class="eva-3-label-form -eva-3-mb-sm">Email</label>
<div class="eva-3-input -icon-left -lg">
  <div class="input-container">
    <input
      id="input-complete"
      class="input-tag"
      type="email"
      placeholder="email@example.com"
    />
    <i class="eva-3-icon-mail input-icon"></i>
  </div>
</div>
```

### Input con Validación

```html
<label for="input-validation" class="eva-3-label-form -eva-3-mb-sm">Email</label>
<div class="eva-3-input -icon-right -lg -invalid">
  <div class="input-container">
    <input
      id="input-validation"
      class="input-tag"
      type="email"
      placeholder="email@example.com"
    />
    <i class="eva-3-icon-info-circle input-icon"></i>
  </div>
</div>
```

### Input de Contraseña

```html
<label for="input-password" class="eva-3-label-form -eva-3-mb-sm">Contraseña</label>
<div class="eva-3-input -lg">
  <div class="input-container">
    <input
      id="input-password"
      class="input-tag"
      type="password"
      placeholder="Ingresa tu contraseña"
    />
  </div>
</div>
```
