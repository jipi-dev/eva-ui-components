# Uploader - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Uploader from '@despegar/eva-ui/Uploader';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `files` | array<{ id: string, name: string, size?: string, status?: 'default' \| 'uploading' \| 'success' \| 'error', progress?: number, errorMessage?: string }> | `[]` | Lista de archivos a renderizar. |
| `accept` | string | `''` | Extensiones aceptadas (pasadas al input). |
| `multiple` | bool | `true` | Permite seleccionar múltiples archivos. |
| `maxFiles` | number | `null` | Límite de archivos; puede deshabilitar la dropzone. |
| `disabled` | bool | `false` | Deshabilita interacción del dropzone. |
| `onSelect` | func(files: FileList) | `undefined` | Handler al seleccionar/soltar archivos. |
| `onRemove` | func(id: string) | `undefined` | Remueve archivo por id. |
| `onRetry` | func(id: string) | `undefined` | Reintenta archivo en error. |
| `dropzoneText` | node | Default copy | Texto del área punteada. |
| `helpText` | node | `null` | Copy secundario (límite, formatos). |
| `className` | string | `''` | Clases extra. |

## Uso Básico
```jsx
const initial = [];

function Example() {
  const [files, setFiles] = useState(initial);

  const handleSelect = (fileList) => {
    const next = Array.from(fileList).map((file) => ({
      id: file.name,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      status: 'uploading',
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...next]);
    // disparar upload async
  };

  return (
    <Uploader
      accept=".pdf,.jpg,.png"
      files={files}
      onSelect={handleSelect}
      onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
      onRetry={(id) => retryUpload(id)}
      helpText="Máx. 5 archivos · 5 MB c/u"
    />
  );
}
```

## Límite de archivos
```jsx
<Uploader
  maxFiles={3}
  files={files}
  disabled={files.length >= 3}
  helpText="Hasta 3 archivos (PDF, JPG)"
  onSelect={handleSelect}
  onRemove={handleRemove}
/>
```

## Notas
- Internamente usa `UploadItem` para cada entrada; pasa `status`, `progress`, `errorMessage` y handlers.
- `onSelect` recibe los archivos del input/drag; gestionar validaciones de peso/formatos en el handler.
- Controlar `disabled` y `maxFiles` para evitar selecciones extra.
- `dropzoneText` y `helpText` aceptan nodos para personalizar copy e íconos.