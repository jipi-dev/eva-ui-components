# Upload Item

## Descripción
Fila de archivo cargado o en proceso. Muestra nombre, peso, estado (cargando, error, listo) y acciones como eliminar o reintentar. Se usa dentro de listados de uploads.

**Tipo:** Molécula  
**Categoría:** Forms / Feedback  
**Tags:** upload, file, progress, error, success, lista

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-upload-item [-uploading|-success|-error] [clases-adicionales]">
  <div class="upload-icon">
    <i class="eva-3-icon-upload"></i>
  </div>

  <div class="upload-info">
    <div class="upload-name">pasaporte.pdf</div>
    <div class="upload-meta">1.2 MB · PDF</div>

    <div class="upload-progress">
      <div class="upload-progress-bar" style="width: 65%"></div>
    </div>

    <div class="upload-error">No pudimos subir el archivo. Probá de nuevo.</div>
  </div>

  <div class="upload-actions">
    <button class="eva-3-link -sm" aria-label="Reintentar">Reintentar</button>
    <button class="eva-3-link -sm" aria-label="Eliminar">
      <i class="eva-3-icon-close"></i>
    </button>
  </div>
</div>
```

- Clase base: `eva-3-upload-item`.
- Modificadores: `-uploading`, `-success`, `-error` (aplican colores/estados).
- `upload-progress` y `upload-progress-bar`: barra interna opcional para estado de carga.
- `upload-error`: texto de error (visible en estado `-error`).
- `upload-actions`: botones de reintentar/eliminar; ícono close opcional.

## Variantes / Estados
- **Default:** solo nombre/peso y botón eliminar.
- **Uploading (`-uploading`):** muestra barra de progreso; deshabilita eliminar si se desea.
- **Success (`-success`):** color estado exitoso, oculta barra; puede mostrar ícono check.
- **Error (`-error`):** muestra mensaje de error y acción `Reintentar`.

## Cuándo Usar
- Para listar archivos seleccionados en un uploader.
- Mostrar feedback de estado de carga individual.
- Permitir gestionar cada archivo (eliminar, reintentar).

## Mejores Prácticas
- Limitar la longitud del nombre con ellipsis para mantener layout.
- Mostrar tamaño/extension para claridad.
- Deshabilitar acciones mientras se sube si no son seguras.
- Ubicar mensajes de error junto al archivo afectado.

## Dependencias
- Iconos: `upload`, `close`, opcional `check`.
- Utilidades: `link` para acciones, `progress-bar` (estilos de barra), `text`.