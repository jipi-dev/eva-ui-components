# DottedArea (React)

## Descripción

Área punteada para carga de archivos mediante clic o drag & drop. Renderiza un `<label>` con ícono upload, mensaje personalizable e input file oculto. Soporta ref forwarding para acceso al input, formatos aceptados custom y handlers drag & drop.

**Import típico:**
```jsx
import { DottedArea } from "@despegar/eva-react-components";
```

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-dotted-area`. |
| `children` | `ReactNode` | 2 párrafos default | Contenido a mostrar dentro de `.message` (texto/links). |
| `acceptedFormats` | `string[]` | `['bmp','pdf','jpeg','jpg','png']` | Array de extensiones de archivo aceptadas. |
| `onChange` | `func` | `() => {}` | Handler disparado al cambiar el input file (selección de archivos). Recibe `ChangeEvent`. |
| `onDragEnter` | `func` | `(e) => e.preventDefault()` | Handler al entrar drag sobre el área. |
| `onDragLeave` | `func` | `(e) => e.preventDefault()` | Handler al salir drag del área. |
| `onDragOver` | `func` | `(e) => e.preventDefault()` | Handler durante drag sobre el área. |
| `onDrop` | `func` | `(e) => e.preventDefault()` | Handler al soltar archivos en el área. |
| `inputId` | `string` | `'uploader-input'` | `id` del input file interno (asociado al `htmlFor` del label). |
| `dragging` | `bool` | `false` | **DEPRECADO.** No aplica clase `-dragging`; manejar externamente vía `className`. |
| `dragAndDropText` | `string` | — | **DEPRECADO.** No usado. |
| `ref` | `Ref` | — | Ref forwarding: accede al input file interno (`<input type="file" />`). |

## Estructura renderizada

```jsx
<label
  className={`eva-3-dotted-area ${className}`}
  htmlFor={inputId}
  onDragEnter={onDragEnter}
  onDragLeave={onDragLeave}
  onDragOver={onDragOver}
  onDrop={onDrop}
  {...rest}
>
  <div className="message">
    <div className="message-icon">
      <Icon icon="upload" size="md" />
    </div>
    {children}
  </div>
  <input
    className="-eva-3-hide"
    type="file"
    id={inputId}
    ref={dottedRef}
    onChange={onChange}
    accept={acceptedFormats}
  />
</label>
```

- `children` por defecto: 2 párrafos con link "Cargá los documentos" y texto de formatos.
- Input file oculto con clase `-eva-3-hide` (HideContent utility).
- `accept` se genera a partir de `acceptedFormats` array.

## Ref Forwarding

El componente usa `React.forwardRef` para acceder al input file interno:

```jsx
const inputRef = useRef(null);

<DottedArea ref={inputRef} onChange={handleChange}>
  Arrastrá archivos...
</DottedArea>

// Acceso al input: inputRef.current (input DOM element)
```

## Ejemplos

### Básico
```jsx
<DottedArea onChange={(e) => console.log(e.target.files)}>
  Arrastrá los archivos acá o <Heading variant="link">buscalos</Heading> en tu computadora o celular.
  <br />
  El tamaño máximo debe ser 5 MB.
</DottedArea>
```

### Con formatos custom
```jsx
<DottedArea
  acceptedFormats={['png', 'jpg', 'sketch', 'exe']}
  onChange={(e) => console.log('Archivos:', e.target.files)}
>
  Arrastrá archivos (png, jpg, sketch, exe) o <Heading variant="link">buscalos</Heading>.
</DottedArea>
```

### Con handlers drag & drop
```jsx
import { useState } from 'react';

function FileUploader() {
  const [dragging, setDragging] = useState(false);

  return (
    <DottedArea
      className={dragging ? '-dragging' : ''}
      onDragEnter={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDragging(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        console.log('Dropped files:', files);
      }}
      onChange={(e) => console.log('Selected files:', e.target.files)}
    >
      {dragging ? 'Soltá los archivos aquí' : 'Arrastrá archivos o haz clic'}
    </DottedArea>
  );
}
```

### Con ref para acceso al input
```jsx
import { useRef } from 'react';

function ControlledUpload() {
  const inputRef = useRef(null);

  const clearFiles = () => {
    if (inputRef.current) {
      inputRef.current.value = ''; // reset input
    }
  };

  return (
    <>
      <DottedArea ref={inputRef} onChange={(e) => console.log(e.target.files)}>
        Arrastrá archivos aquí
      </DottedArea>
      <button onClick={clearFiles}>Limpiar</button>
    </>
  );
}
```

## Accesibilidad

- `<label>` con `htmlFor` apuntando al `id` del input; permite clic en toda el área.
- Input file oculto mantiene navegación por teclado y lectores de pantalla.
- Ícono upload y texto descriptivo facilitan comprensión del propósito.
- `onChange` dispara al seleccionar archivos; `onDrop` al soltarlos sobre el área.

## Dependencias

- Componentes: `HideContent` (utility para ocultar input), `Heading` (para links en children default), `Icon` (upload).
- HOC/utilidades: `withUtilities`, `PREFIX`.
- Clase base: `eva-3-dotted-area`.
- Ícono: `upload` (en `message-icon`).
- Categoría: `form` (type: atoms).

## Notas

- **Prop `dragging` deprecada**: no agrega clase `-dragging` automáticamente; gestionar estado externamente y pasar vía `className`.
- **Prop `dragAndDropText` deprecada**: no usada en implementación actual.
- **Ref forwarding**: accede al `<input type="file">` para operaciones como reset o validación.
