# Uploader

## Descripción
Contenedor de carga de archivos que combina dropzone/botón de selección y listado de archivos (`Upload Item`) con estados de progreso, éxito y error.

**Tipo:** Organismo  
**Categoría:** Forms / Feedback  
**Tags:** upload, dropzone, files, drag and drop, progress

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-uploader [clases-adicionales]">
  <!-- Zona de carga -->
  <label class="eva-3-dotted-area" for="uploader-input">
    <div class="message">
      <div class="message-icon">
        <i class="eva-3-icon-upload"></i>
      </div>
      <p>Arrastrá tus archivos acá o <span class="eva-3-heading -link">buscalos</span>.</p>
      <p class="message-help">Máx. 5 archivos · 5 MB c/u</p>
    </div>
    <input
      id="uploader-input"
      class="-eva-3-hide"
      type="file"
      accept=".pdf,.jpg,.png"
      multiple
    />
  </label>

  <!-- Lista de archivos -->
  <div class="upload-list">
    <div class="eva-3-upload-item -uploading">
      <div class="upload-icon"><i class="eva-3-icon-upload"></i></div>
      <div class="upload-info">
        <div class="upload-name">pasaporte.pdf</div>
        <div class="upload-meta">1.2 MB · PDF</div>
        <div class="upload-progress"><div class="upload-progress-bar" style="width: 45%"></div></div>
      </div>
      <div class="upload-actions">
        <button class="eva-3-link -sm" aria-label="Eliminar"><i class="eva-3-icon-close"></i></button>
      </div>
    </div>

    <div class="eva-3-upload-item -error">
      <div class="upload-icon"><i class="eva-3-icon-upload"></i></div>
      <div class="upload-info">
        <div class="upload-name">dni.jpg</div>
        <div class="upload-meta">640 KB · JPG</div>
        <div class="upload-error">No pudimos subir el archivo.</div>
      </div>
      <div class="upload-actions">
        <button class="eva-3-link -sm">Reintentar</button>
        <button class="eva-3-link -sm" aria-label="Eliminar"><i class="eva-3-icon-close"></i></button>
      </div>
    </div>
  </div>
</div>
```

- Clase base: `eva-3-uploader`.
- Dropzone con `eva-3-dotted-area` reutiliza estilos del componente Dotted Area.
- Lista: `upload-list` conteniendo `eva-3-upload-item`.
- Input file oculto (`-eva-3-hide`) asociado al label.

## Variantes / Estados
- **Default:** dropzone + lista vacía.
- **Con archivos cargando:** ítems con barra de progreso.
- **Con errores:** ítems con mensaje de error y acción de reintento.
- **Límite alcanzado:** se puede deshabilitar dropzone (`disabled`) o mostrar copy aclaratorio.

## Cuándo Usar
- Flujos que requieren subir uno o varios archivos con feedback inmediato.
- Cargas manuales donde drag & drop mejora la experiencia.

## Mejores Prácticas
- Informar formatos permitidos, tamaño máximo y cantidad.
- Mostrar progreso por archivo y, si aplica, total.
- Deshabilitar dropzone al superar el límite de archivos.
- Permitir eliminar o reintentar sin recargar la página.

## Dependencias
- Componentes: `dotted-area`, `upload-item`, `progress-bar`, `heading`, `hide-content`.
- Íconos: `upload`, `close`.