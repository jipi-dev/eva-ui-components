# Code Validation

## Descripción

Molécula para ingresar códigos de verificación en 6 celdas. Usa `Input` y `ValidationInline` para presentar inputs de un carácter, mensajes de error y estado deshabilitado.

## Estructura HTML

```html
<div class="eva-3-code-validation [-invalid] [clases-adicionales]">
  <div class="eva-3-validation-inline [-invalid]">
    <div class="code-validation-input">
      <div class="code-validation-cell">
        <div class="eva-3-input -lg">
          <input id="cv-1" class="input-tag" type="text" maxlength="1" placeholder="A" aria-label="Código 1" />
        </div>
      </div>
      <!-- repetir 6 celdas en total -->
    </div>
    <p class="validation-msg">Descripcion del error</p>
  </div>
</div>
```

- Clase base: `eva-3-code-validation`.
- Interno: `code-validation-input` (contenedor flex) y `code-validation-cell` (wrapper de cada `Input`).
- Cada celda usa `Input` (clase `eva-3-input`) con `maxLength="1"`, placeholder autogenerado (`A`, `B`, `C`, `1`, `2`, `3` si no se provee).
- Mensaje de error se muestra dentro de `ValidationInline` (`validation-msg`).

## Tamaños

El tamaño se define en el contenedor y se propaga a cada `Input`.

- Default: `-lg` (si no se pasa tamaño).
- Opción: `-md`.

```html
<!-- Tamaño md -->
<div class="eva-3-code-validation">
  <div class="code-validation-input">
    <div class="code-validation-cell">
      <div class="eva-3-input -md">
        <input id="cv-md-1" class="input-tag" type="text" maxlength="1" placeholder="A" />
      </div>
    </div>
    <!-- ... 5 celdas más ... -->
  </div>
</div>
```

## Estados

- **Inválido**: agregar `-invalid` al contenedor (y a `eva-3-validation-inline`), muestra mensaje y bordes de error.
- **Deshabilitado**: `disabled` en cada `input-tag` (prop `disabled` en `CodeValidation`).

```html
<!-- Inválido con mensaje -->
<div class="eva-3-code-validation -invalid">
  <div class="eva-3-validation-inline -invalid">
    <div class="code-validation-input">
      <!-- 6 celdas -->
    </div>
    <p class="validation-msg">Custom error text</p>
  </div>
</div>

<!-- Deshabilitado -->
<div class="eva-3-code-validation">
  <div class="code-validation-input">
    <div class="code-validation-cell">
      <div class="eva-3-input -lg">
        <input id="cv-disabled-1" class="input-tag" type="text" maxlength="1" placeholder="A" disabled />
      </div>
    </div>
    <!-- ... 5 celdas más ... -->
  </div>
</div>
```

## Notas de estilo (SCSS)

- `code-validation-input` usa `display: flex`.
- Cada `code-validation-cell` tiene ancho fijo (`40px` mobile, `48px` >= medium) y separación por `margin-left`.
- Se sobrescriben estilos de `Input` para centrar texto y remover padding horizontal en `input-tag`.

## Accesibilidad

- Usa `id` único por celda; `maxLength=1` limita la entrada a un carácter.
- El mensaje de error queda asociado visualmente; combinar con `aria-live` si se necesita anuncio de errores (via `ValidationInline`).
- El atributo `disabled` en los inputs bloquea foco/interacción.

## Dependencias

- Componentes: `input`, `validation-inline`.
- Clase base: `eva-3-code-validation`.
- Íconos: `user` (según metadata; no se usan en la UI por defecto).

## Ejemplo rápido

```html
<div class="eva-3-code-validation -invalid">
  <div class="eva-3-validation-inline -invalid">
    <div class="code-validation-input">
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv1" class="input-tag" type="text" maxlength="1" placeholder="A" /></div></div>
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv2" class="input-tag" type="text" maxlength="1" placeholder="B" /></div></div>
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv3" class="input-tag" type="text" maxlength="1" placeholder="C" /></div></div>
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv4" class="input-tag" type="text" maxlength="1" placeholder="1" /></div></div>
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv5" class="input-tag" type="text" maxlength="1" placeholder="2" /></div></div>
      <div class="code-validation-cell"><div class="eva-3-input -lg"><input id="cv6" class="input-tag" type="text" maxlength="1" placeholder="3" /></div></div>
    </div>
    <p class="validation-msg">Código inválido</p>
  </div>
</div>
```
