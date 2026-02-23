# Dotted Area

## Descripción

Área punteada para carga de archivos mediante clic o drag & drop. Presenta borde dashed, ícono de upload, mensaje personalizable e input file oculto. Soporta estados hover y dragging (con clase `-dragging` externa).

## Estructura HTML

```html
<label
  class="eva-3-dotted-area [-dragging] [clases-adicionales]"
  for="uploader-input"
  ondragenter="handleDragEnter"
  ondragleave="handleDragLeave"
  ondragover="handleDragOver"
  ondrop="handleDrop"
>
  <div class="message">
    <div class="message-icon">
      <i class="eva-3-icon-upload"></i>
    </div>
    <p>
      <span class="eva-3-heading -link">Cargá los documentos</span>
      o arrastralos a esta sección.
    </p>
    <p>Hasta 5 MB y en formato pdf, bmp, jpeg, jpg o png.</p>
  </div>
  <input
    class="-eva-3-hide"
    type="file"
    id="uploader-input"
    accept=".bmp,.pdf,.jpeg,.jpg,.png"
  />
</label>
```

- Clase base: `eva-3-dotted-area`.
- Modificador `-dragging`: aplica estilos de hover (borde/fondo brand) cuando se arrastra archivo sobre el área. Debe agregarse vía JS.
- `message`: contenedor del ícono y texto.
- `message-icon`: círculo con ícono upload centrado.
- Input file oculto con clase `-eva-3-hide` (HideContent utility).
- `accept`: formatos permitidos (ej. `".jpg,.png,.pdf"`).

## Estados

### Default

Borde dashed neutral, fondo neutral-100, ícono upload brand-primary.

```html
<label class="eva-3-dotted-area" for="uploader-input">
  <div class="message">
    <div class="message-icon">
      <i class="eva-3-icon-upload"></i>
    </div>
    <p>Arrastrá los archivos acá o <span class="eva-3-heading -link">buscalos</span> en tu computadora.</p>
  </div>
  <input class="-eva-3-hide" type="file" id="uploader-input" accept=".png,.jpg" />
</label>
```

### Hover / Dragging (`-dragging`)

Borde brand-primary, fondo brand-primary-1. Clase `-dragging` se agrega cuando el usuario arrastra archivo sobre el área.

```html
<label class="eva-3-dotted-area -dragging" for="uploader-input">
  <!-- ... -->
</label>
```

## Notas de estilo (SCSS)

- `display: flex`, `align-items: center`, `justify-content: center`, `min-height: 100px`.
- `border: 1px dashed neutral-300`, `border-radius: $border-radius-4`, `background: neutral-100`.
- `:hover` y `.-dragging`: cambia borde a brand-primary-3 y fondo a brand-primary-1.
- `message-icon`: círculo blanco con ícono upload brand-primary, `border-radius: 50%`.
- `message`: max-width `370px`, texto centrado, color neutral-600.
- Input file oculto con `-eva-3-hide`.

## Drag & Drop

El comportamiento drag & drop no está incluido en el componente HTML/CSS. Debe implementarse vía JS:

```js
const label = document.querySelector('.eva-3-dotted-area');

label.addEventListener('dragenter', (e) => {
  e.preventDefault();
  label.classList.add('-dragging');
});

label.addEventListener('dragleave', (e) => {
  e.preventDefault();
  label.classList.remove('-dragging');
});

label.addEventListener('dragover', (e) => {
  e.preventDefault();
});

label.addEventListener('drop', (e) => {
  e.preventDefault();
  label.classList.remove('-dragging');
  const files = e.dataTransfer.files;
  // procesar archivos
});
```

## Accesibilidad

- Usa `<label>` con `for` apuntando al `id` del input; permite clic en toda el área.
- Input file oculto mantiene accesibilidad para lectores de pantalla y teclado.
- Ícono y texto descriptivos facilitan comprensión del propósito.

## Dependencias

- Componentes: `hide-content` (utility para ocultar input), `heading` (para links en mensaje).
- Clase base: `eva-3-dotted-area`.
- Ícono: `upload` (en `message-icon`).
- Categoría: `form` (type: atoms).

## Ejemplo rápido

```html
<label class="eva-3-dotted-area" for="file-upload">
  <div class="message">
    <div class="message-icon">
      <i class="eva-3-icon-upload"></i>
    </div>
    <p>Arrastrá los archivos acá o <span class="eva-3-heading -link">buscalos</span> en tu computadora o celular.</p>
    <p>El tamaño máximo debe ser 5 MB.</p>
  </div>
  <input class="-eva-3-hide" type="file" id="file-upload" accept=".png,.jpg,.sketch" />
</label>
```
