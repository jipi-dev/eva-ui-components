# Overlay

## Descripción
Átomo de backdrop/opacidad para oscurecer o cubrir secciones de la UI. Útil como capa detrás de modals, loaders o estados de bloqueo.

**Tipo:** Átomo  
**Categoría:** Modals  
**Tags:** modal, fondo oscuro, overlay, backdrop

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-overlay -show-overlay">
  <!-- Contenido opcional dentro del overlay -->
  <p>Soy un Overlay</p>
</div>

<!-- Variante blanca sobre fondos oscuros -->
<div class="eva-3-overlay -show-overlay -white"></div>
```

## Características
- Base `eva-3-overlay`.
- Muestra/oculta con `-show-overlay`.
- Variante clara para fondos oscuros: `-white`.
- Acepta cualquier contenido como children.

## Cuándo Usar
- Fondo de modals, side-sheets o bottom-sheets.
- Bloquear interacción mientras se carga o procesa algo.
- Destacar un tooltip/coachmark aislando el resto del contenido.

## Mejores Prácticas
- Ajustar opacidad según el contraste del contenido frontal.
- Evitar overlays permanentes que bloqueen interacción sin acción clara para cerrar.
- Para accesibilidad, manejar foco y anunciar cambios de estado cuando se muestra.

## Dependencias
- Ninguna.

## Iconos
- No aplica.