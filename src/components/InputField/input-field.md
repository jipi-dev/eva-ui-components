# Input Field

## Descripción

Campo de texto flotante utilizado principalmente en Checkout y Suppliers. El label actúa como placeholder cuando el input está vacío y se eleva al enfocar o al tener contenido.

**Tipo:** Átomo  
**Categoría:** Forms / Controls  
**Tags:** input-field, floating label, placeholder, icon, invalid, readonly

## Cuándo Usar
- Formularios donde se quiere ahorrar espacio usando labels flotantes.
- Inputs con contenido persistente que requiere contexto del label siempre visible.

## Mejores Prácticas
- Deja el `placeholder` vacío y usa el label como indicador de estado vacío.
- Usa `-empty` / `-not-empty` para compatibilidad (ej. Safari) cuando controlás el valor.
- Combina `-invalid` con un mensaje `validation-inline` debajo.
- Indica `readonly` cuando no debe editarse pero sí copiarse.

## Dependencias
- Clases: `eva-3-input-field`, `input-container`, `input-tag`, `input-label`, `input-icon`.
- Íconos opcionales en `input-icon` (fuente EVA). Mensajes de error con `validation-inline`.

---

## Estructura HTML

```html
<div class="eva-3-input-field [-invalid] [-icon] [-left] [-readonly] [-empty|-not-empty]">
  <div class="input-container">
    <input
      id="input-id"
      class="input-tag"
      placeholder=""  <!-- placeholder queda oculto; el label cumple esa función -->
      disabled
      readonly
    />
    <label class="input-label" for="input-id">Label o placeholder</label>
    <span class="input-icon"></span> <!-- opcional si hay ícono -->
  </div>
</div>
```

> El placeholder permanece vacío/oculto para que el label sea el indicador de estado vacío/foco.

---

## Clases y modificadores

- `eva-3-input-field`: contenedor principal.
- `input-container`: wrapper interno.
- `input-tag`: elemento `<input>`.
- `input-label`: label flotante asociado al `for`/`id`.
- `input-icon`: contenedor del ícono (opcional).

Modificadores del contenedor:
- `-invalid`: estado inválido (borde/error).
- `-icon`: hay ícono presente.
- `-left`: el ícono se ubica a la izquierda.
- `-readonly`: estado de solo lectura.
- `-empty`: fuerza estado "vacío" (fallback Safari).
- `-not-empty`: fuerza estado "con contenido" (fallback Safari).

---

## Estados y variantes

### Default

```html
<div class="eva-3-input-field">
  <div class="input-container">
    <input id="input-common" class="input-tag" placeholder="" />
    <label class="input-label" for="input-common">Nombre</label>
  </div>
</div>
```

### Deshabilitado

```html
<div class="eva-3-input-field">
  <div class="input-container">
    <input id="input-disabled" class="input-tag" placeholder="" disabled />
    <label class="input-label" for="input-disabled">Nombre</label>
  </div>
</div>
```

### Solo lectura

```html
<div class="eva-3-input-field -readonly">
  <div class="input-container">
    <input id="input-readonly" class="input-tag" placeholder="" readonly value="Ada Lovelace" />
    <label class="input-label" for="input-readonly">Nombre</label>
  </div>
</div>
```

### Inválido (con helper)

```html
<div class="eva-3-input-field -invalid">
  <div class="input-container">
    <input id="input-invalid" class="input-tag" placeholder="" />
    <label class="input-label" for="input-invalid">Nombre</label>
    <span class="input-icon"></span>
  </div>
  <p class="validation-inline">Validation inline</p>
</div>
```

### Con ícono (derecha)

```html
<div class="eva-3-input-field -icon">
  <div class="input-container">
    <input id="input-icon" class="input-tag" placeholder="" />
    <label class="input-label" for="input-icon">Nombre</label>
    <span class="input-icon">i</span>
  </div>
</div>
```

### Con ícono a la izquierda

```html
<div class="eva-3-input-field -icon -left">
  <div class="input-container">
    <input id="input-icon-left" class="input-tag" placeholder="" />
    <label class="input-label" for="input-icon-left">Nombre</label>
    <span class="input-icon">i</span>
  </div>
</div>
```

### Helper text

```html
<div>
  <div class="eva-3-input-field">
    <div class="input-container">
      <input id="input-with-helper" class="input-tag" placeholder="" />
      <label class="input-label" for="input-with-helper">Nombre</label>
    </div>
  </div>
  <p class="eva-3-caption">Helper text</p>
</div>
```

---

## Compatibilidad :placeholder-shown (Safari)

El float del label depende de `:placeholder-shown`, que puede fallar en Safari. Para forzar el estado:

- `-empty`: fuerza el label en modo placeholder (input vacío).
- `-not-empty`: fuerza el label elevado (input con contenido).

Responsabilidad del integrador agregar/quitar estas clases según el estado del input en browsers sin soporte.
