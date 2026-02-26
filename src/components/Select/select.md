# Select

## Descripción
Átomo de menú desplegable nativo con estilos EVA. Incluye label opcional y variantes sin borde o inválido.

**Tipo:** Átomo  
**Categoría:** Form  
**Tags:** select, dropdown, combo, formulario

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<label class="eva-3-label-form -eva-3-mb-sm" for="eva-select">País</label>
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="eva-select">
      <option class="select-option" value="false" disabled selected>Seleccione una opción</option>
      <option class="select-option" value="1">Option 1</option>
      <option class="select-option" value="2">Option 2</option>
    </select>
  </div>
</div>

<!-- Variantes -->
<div class="eva-3-select -md -no-border"></div>
<div class="eva-3-select -lg -invalid"></div>
<div class="eva-3-select -lg"><span class="select-gradient"></span></div>
```

## Características
- Tamaños: `-lg`, `-md`.
- Modificadores: `-no-border`, `-invalid`; gradiente opcional con `select-gradient` para textos largos.
- Label opcional con clase `eva-3-label-form` si `labelForm` es true.
- Opción por defecto (`Seleccione una opción`) controlada por prop.

## Cuándo Usar
- Selección de una opción entre lista acotada y conocida.

## Mejores Prácticas
- Incluir placeholder deshabilitado para guiar la primera elección.
- Usar `-invalid` solo cuando exista feedback de error cercano.
- Preferir `md` en espacios reducidos, `lg` en formularios amplios.

## Dependencias
- `label-form` opcional; utilidades de tamaño/paleta.

## Iconos
- No aplica (usa caret nativo del select).### Select

#### Description

Control que muestra un menú de opciones. Dropdown select component for choosing from a list of options. Supports labels, validation states, and custom styling.

#### Estructura - Select Default

Ejemplo de select por defecto.

```html
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-structure">
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

#### Select Deshabilitado

Para poder utilizar esta variante solo hace falta agregar el atributo html `disabled` al select.

```html
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-disabled" disabled>
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

#### Select Inválido

En los casos en los que se necesite validar, al igual que otros componentes con la clase `-invalid` podrá indicarse el recuadro de validación.

```html
<div class="eva-3-select -lg -invalid">
  <div class="select-container">
    <select class="select-tag" id="select-invalid">
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

#### Select con Gradiente

Si es necesario, existe la variante de gradient para las opciones largas.

```html
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-gradient">
      <option class="select-option" value="1">Opción larga para ver el gradient</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
    <span class="select-gradient"></span>
  </div>
</div>
```

#### Select con Label

Existen dos formas de utilizar el select con label. Recordar que el componente label-form no es una dependencia del Select, por lo tanto debe ser agregado al eva.manifest.

**1. Label con atributo `for` asociado al `id` del select:**

```html
<label for="select-with-label" class="eva-3-label-form -eva-3-mb-sm">Label</label>
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-with-label">
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

**2. Label que engloba al select:**

```html
<label class="eva-3-label-form -eva-3-mb-sm">
  Label
  <div class="eva-3-select -lg -eva-3-mt-sm">
    <div class="select-container">
      <select class="select-tag" id="select-wrapped">
        <option class="select-option" value="1">Opción 1</option>
        <option class="select-option" value="2">Opción 2</option>
        <option class="select-option" value="3">Opción 3</option>
      </select>
    </div>
  </div>
</label>
```

**Nota**: El componente `label-form` no es una dependencia del Select, por lo tanto debe ser agregado al eva.manifest si se desea usar.

#### Select sin Borde

Variante sin borde usando la clase `-no-border`.

```html
<div class="eva-3-select -lg -no-border">
  <div class="select-container">
    <select class="select-tag" id="select-no-border">
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

#### Select con Opción por Defecto

Por defecto, el select incluye una opción inicial deshabilitada "Seleccione una opción". Esta opción tiene `value="false"` y está deshabilitada.

```html
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-default">
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

## Estructura HTML

### Estructura Base

```html
<div class="eva-3-select [tamaño] [variantes] [estados]">
  <div class="select-container">
    <select class="select-tag" id="[id-único]" [atributos-adicionales]>
      <!-- Opción por defecto opcional -->
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <!-- Opciones -->
      <option class="select-option" value="[valor]">[texto]</option>
    </select>
    <!-- Gradiente opcional -->
    <span class="select-gradient"></span>
  </div>
</div>
```

## Tamaños

- **Large (-lg)**: Tamaño grande
- **Medium (-md)**: Tamaño mediano (requerido)

**Nota**: El tamaño es requerido. Solo se soportan los tamaños `lg` y `md`.

## Estados

- **Default**: Estado normal interactivo
- **Disabled**: Select deshabilitado (usa atributo `disabled` de HTML)
- **Invalid (-invalid)**: Estado inválido, muestra borde rojo

## Variantes

- **Sin borde (-no-border)**: Select sin borde visible
- **Con gradiente**: Agrega un span con clase `select-gradient` dentro de `select-container`

## CSS Classes

### Clases Principales

- **Base**: `.eva-3-select` - Clase principal del contenedor
- **Container**: `.select-container` - Contenedor interno
- **Select**: `.select-tag` - Clase del elemento select
- **Option**: `.select-option` - Clase de cada opción

### Clases de Tamaño

- `.-lg` - Tamaño grande
- `.-md` - Tamaño mediano (requerido)

### Clases de Estado

- `.-invalid` - Estado inválido
- `.-no-border` - Sin borde

### Clases de Elementos

- `.select-gradient` - Clase del gradiente

## Atributos HTML

El select acepta todos los atributos HTML estándar:

- `id`: Identificador único (requerido para asociar labels)
- `disabled`: Deshabilitar el select
- `multiple`: Permitir selección múltiple
- `name`: Nombre del campo para formularios
- `required`: Campo requerido
- `onChange`, `onFocus`, `onBlur`: Event handlers (solo en React, no aplica en HTML puro)

## Opciones

Las opciones deben tener:
- `class="select-option"`: Clase estándar para las opciones
- `value`: Valor de la opción (puede ser string o number)
- `disabled`: Opcional, para deshabilitar una opción específica

## Best Practices

### Usage Guidelines

- Siempre incluir un `id` único para el select
- Usar el atributo `for` en el label asociado al `id` del select para accesibilidad
- Proporcionar una opción por defecto o placeholder
- Limitar opciones a un número razonable (considerar búsqueda para muchas opciones)
- Agrupar opciones relacionadas con `<optgroup>` cuando sea apropiado
- Usar para 5+ opciones (usar radio buttons para menos opciones)

### Accessibility

- Siempre asociar label con select usando `for` y `id`
- Asegurar suficiente contraste de color
- Soporte para navegación por teclado
- Proporcionar mensajes de error claros
- Usar atributos `aria-*` cuando sea necesario

### Options Organization

- Usar `<optgroup>` para agrupación lógica
- Ordenar opciones alfabéticamente cuando sea apropiado
- Colocar opciones más comunes al principio
- Usar texto de opción claro y descriptivo

## Ejemplos Completos

### Select Completo con Label

```html
<label for="select-complete" class="eva-3-label-form -eva-3-mb-sm">País</label>
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-complete">
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <option class="select-option" value="ar">Argentina</option>
      <option class="select-option" value="br">Brasil</option>
      <option class="select-option" value="cl">Chile</option>
      <option class="select-option" value="co">Colombia</option>
    </select>
  </div>
</div>
```

### Select con Validación

```html
<label for="select-validation" class="eva-3-label-form -eva-3-mb-sm">Categoría</label>
<div class="eva-3-select -lg -invalid">
  <div class="select-container">
    <select class="select-tag" id="select-validation">
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <option class="select-option" value="1">Opción 1</option>
      <option class="select-option" value="2">Opción 2</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
  </div>
</div>
```

### Select con Gradiente y Opciones Largas

```html
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-long">
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <option class="select-option" value="1">Esta es una opción muy larga que requiere gradiente para verse correctamente</option>
      <option class="select-option" value="2">Otra opción larga con mucho texto</option>
      <option class="select-option" value="3">Opción 3</option>
    </select>
    <span class="select-gradient"></span>
  </div>
</div>
```

### Select con Optgroup

```html
<label for="select-grouped" class="eva-3-label-form -eva-3-mb-sm">Categoría</label>
<div class="eva-3-select -lg">
  <div class="select-container">
    <select class="select-tag" id="select-grouped">
      <option class="select-option" value="false" disabled>Seleccione una opción</option>
      <optgroup label="Frutas">
        <option class="select-option" value="apple">Manzana</option>
        <option class="select-option" value="banana">Banana</option>
      </optgroup>
      <optgroup label="Verduras">
        <option class="select-option" value="carrot">Zanahoria</option>
        <option class="select-option" value="lettuce">Lechuga</option>
      </optgroup>
    </select>
  </div>
</div>
```
