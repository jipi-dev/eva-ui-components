# Upload Item - React

## Importación
```jsx
import UploadItem from '@despegar/eva-ui/UploadItem';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `fileName` | string | `''` | Nombre del archivo. |
| `fileSize` | string | `''` | Peso o metadata (ej: "1.2 MB · PDF"). |
| `status` | 'default' \| 'uploading' \| 'success' \| 'error' | 'default' | Estado visual. |
| `progress` | number | `0` | Avance 0-100 para `uploading`. |
| `errorMessage` | string | `''` | Mensaje a mostrar en estado `error`. |
| `onRemove` | func | `undefined` | Handler al eliminar archivo. |
| `onRetry` | func | `undefined` | Handler al reintentar. Visible en `error`. |
| `icon` | string | `'upload'` | Ícono a mostrar a la izquierda. |
| `className` | string | `''` | Clases extra. |
| `disabled` | bool | `false` | Deshabilita acciones. |

## Uso Básico
```jsx
<UploadItem fileName="pasaporte.pdf" fileSize="1.2 MB · PDF" onRemove={handleRemove} />
```

## Estado Cargando
```jsx
<UploadItem
  status="uploading"
  fileName="voucher.png"
  fileSize="820 KB"
  progress={65}
  onRemove={handleRemove}
/> 
```

## Estado Error con Reintento
```jsx
<UploadItem
  status="error"
  fileName="dni_frente.jpg"
  fileSize="640 KB"
  errorMessage="No pudimos subir el archivo."
  onRetry={() => retry('dni_frente.jpg')}
  onRemove={() => remove('dni_frente.jpg')}
/> 
```

## Notas
- Muestra barra de progreso cuando `status="uploading"` y `progress > 0`.
- Oculta barra y usa color de éxito cuando `status="success"`.
- En `error`, renderiza `errorMessage` y botón de reintento si `onRetry` está definido.
- `disabled` debe impedir acciones y ajustar estilos hover.