# Modal Fullscreen

## Descripción
Pantalla intermedia tipo modal a fullscreen para dashboards. Incluye header con breadcrumb opcional y botón de cierre; cuerpo para contenido flexible.

**Tipo:** Molécula  
**Categoría:** Modals  
**Tags:** popup, emergente, ventana, window, overlay

## Estructura HTML
```html
<div class="eva-3-modal-fullscreen -show-modal">
  <div class="modal-fullscreen-header">
    <i class="modal-fullscreen-close" role="button" aria-label="Close modal"></i>
    <div class="modal-fullscreen-header-container">
      <!-- Breadcrumb opcional -->
      <nav class="breadcrumb">Inicio / Sección</nav>
      <!-- Título -->
      <h4 class="modal-fullscreen-title">Tus productos</h4>
    </div>
  </div>
  <div class="modal-fullscreen-content">
    <div>
      <!-- Contenido principal -->
    </div>
  </div>
</div>
```

## Variantes
- `-no-padding`: quita padding del contenedor de contenido.
- `-close-on-left`: mueve el botón de cierre a la izquierda en mobile (<768px) para patrón de navegación.
- Sin título: ocultar `<h4>` si no se pasa `title` o se usa prop `noTitle`.

## Cuándo Usar
- Overlays a pantalla completa dentro de dashboards o flujos de gestión.
- Visualizaciones o formularios extensos donde el modal clásico queda chico.
- Casos donde se requiere mantener contexto de navegación (breadcrumb).

## Mejores Prácticas
- Mantener el cierre siempre visible (ESc + botón).
- Usar breadcrumb cuando el contexto de navegación importe.
- Evitar nesting de modales; este ya ocupa toda la pantalla.
- En mobile, considerar `closeOnLeftMobile` para patrón back.

## Accesibilidad
- Botón de cerrar con `role="button"`, `tabIndex=0`, `aria-label="Close modal"`.
- Soporte de teclado: tecla ESC cierra.

## Iconos
- `cross` (close), `close` (alias)

## Dependencias
- `breadcrumb` (opcional)
