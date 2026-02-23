# SelectField

## Descripción
Átomo de campo select estilizado con label flotante y opción de ícono incrustado.

**Tipo:** Átomo  
**Categoría:** Form  
**Tags:** select, dropdown, formulario, label flotante

## Estructura HTML
```html
<div class="eva-3-select-field -icon">
  <div class="select-container">
    <select class="select-tag" id="country-select">
      <option class="select-option" value="" disabled selected></option>
      <option class="select-option" value="ar">Argentina</option>
      <option class="select-option" value="br">Brasil</option>
    </select>
    <label class="select-label" for="country-select">País</label>
    <i class="select-icon eva-3-icon-globe" aria-hidden="true"></i>
  </div>
</div>

<!-- Variante inválida -->
<div class="eva-3-select-field -invalid">...</div>
```

## Características
- Clase base `eva-3-select-field`; modificadores `-invalid` y `-icon`.
- Label flotante posicionada dentro del contenedor.
- Ícono opcional a la derecha (`select-icon`).
- Opción por defecto vacía/placeholder cuando `defaultOption` es true.

## Cuándo Usar
- Formularios donde se requiere label flotante y/o ícono contextual en el select.

## Mejores Prácticas
- Mantener el label conciso; evitar textos largos que se solapen.
- Usar ícono solo si agrega claridad (ej. país, moneda).
- Para estados de error, acompañar `-invalid` con mensaje cercano.

## Dependencias
- `icon` para `select-icon` (opcional).

## Iconos
- Según contexto (ej. `globe`, `location`).# Select Field

## Descripción

Control de selección con label flotante y opción por defecto. Muestra un menú de opciones y permite estado inválido e ícono decorativo.

---

## Estructura HTML

```html
<div class="eva-3-select-field [-invalid] [-icon]">
  <div class="select-container">
    <select class="select-tag" id="select-id" disabled>
      <option class="select-option" disabled selected value=""></option> <!-- defaultOption -->
      <option class="select-option" value="ar">Argentina</option>
      <option class="select-option" value="br">Brasil</option>
    </select>
    <label class="select-label" for="select-id">País</label>
    <span class="select-icon"></span> <!-- opcional si hay ícono -->
  </div>
</div>
```

---

## Clases y modificadores

- `eva-3-select-field`: contenedor principal.
- `select-container`: wrapper interno.
- `select-tag`: elemento `<select>`.
- `select-label`: label flotante asociado al `for`/`id`.
- `select-icon`: ícono opcional.
- `select-option`: opciones del select.

Modificadores del contenedor:
- `-invalid`: estado inválido.
- `-icon`: muestra ícono a la derecha.

---

## Estados y variantes

### Default (con opción vacía por defecto)

```html
<div class="eva-3-select-field">
  <div class="select-container">
    <select class="select-tag" id="select-common">
      <option class="select-option" disabled selected value=""></option>
      <option class="select-option" value="1">Option 1</option>
      <option class="select-option" value="2">Option 2</option>
      <option class="select-option" value="3">Option 3</option>
    </select>
    <label class="select-label" for="select-common">País</label>
  </div>
</div>
```

### Deshabilitado

```html
<div class="eva-3-select-field">
  <div class="select-container">
    <select class="select-tag" id="select-disabled" disabled>
      <option class="select-option" disabled selected value=""></option>
      <option class="select-option" value="1">Option 1</option>
      <option class="select-option" value="2">Option 2</option>
      <option class="select-option" value="3">Option 3</option>
    </select>
    <label class="select-label" for="select-disabled">País</label>
  </div>
</div>
```

### Inválido (con helper)

```html
<div class="eva-3-select-field -invalid">
  <div class="select-container">
    <select class="select-tag" id="select-invalid">
      <option class="select-option" disabled selected value=""></option>
      <option class="select-option" value="1">Option 1</option>
      <option class="select-option" value="2">Option 2</option>
      <option class="select-option" value="3">Option 3</option>
    </select>
    <label class="select-label" for="select-invalid">País</label>
    <span class="select-icon"></span>
  </div>
  <p class="validation-inline">Validation inline</p>
</div>
```

### Con ícono

```html
<div class="eva-3-select-field -icon">
  <div class="select-container">
    <select class="select-tag" id="select-icon">
      <option class="select-option" disabled selected value=""></option>
      <option class="select-option" value="1">Option 1</option>
      <option class="select-option" value="2">Option 2</option>
      <option class="select-option" value="3">Option 3</option>
    </select>
    <label class="select-label" for="select-icon">País</label>
    <span class="select-icon">⌄</span>
  </div>
</div>
```

### Con helper text

```html
<div>
  <div class="eva-3-select-field">
    <div class="select-container">
      <select class="select-tag" id="select-with-helper">
        <option class="select-option" disabled selected value=""></option>
        <option class="select-option" value="1">Option 1</option>
        <option class="select-option" value="2">Option 2</option>
        <option class="select-option" value="3">Option 3</option>
      </select>
      <label class="select-label" for="select-with-helper">País</label>
    </div>
  </div>
  <p class="eva-3-caption">Helper text</p>
</div>
```
