# ProgressBar

## Descripción
Átomo de barra de progreso configurable por porcentaje, con soporte de colores personalizados.

**Tipo:** Átomo  
**Categoría:** State  
**Tags:** barra de progreso, carga, loading, upload

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-progress-bar">
  <div
    class="progress-bar-content -eva-3-bc-green-3"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="65"
    style="width: 65%;"
  ></div>
</div>
```

## Características
- Clase base `eva-3-progress-bar` y relleno `progress-bar-content`.
- Control por props: `minValue`, `maxValue`, `progressValue`; ancho calculado en `%`.
- Permite clase de color (`colorClass`) para variantes.
- Accesible con atributos `role="progressbar"` y `aria-*`.

## Cuándo Usar
- Seguimiento de carga o avance de procesos (uploads, steps, encuestas).
- Mostrar porcentaje de cumplimiento en formularios largos.

## Mejores Prácticas
- Mantener contraste suficiente entre fondo y relleno.
- Actualizar `aria-valuenow` según el valor real para accesibilidad.
- Evitar animaciones excesivas que dificulten lectura.

## Dependencias
- Ninguna específica; puede combinarse con utilidades de color.

## Iconos
- No aplica.