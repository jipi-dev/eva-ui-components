# Switch

## Descripción
Interruptor binario para activar/desactivar opciones. Incluye variantes para fondos oscuros y uso loyalty.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<span class="eva-3-switch -md -loyalty">
  <label class="switch-label" for="notify">
    <input class="switch-input" type="checkbox" id="notify" />
    <span class="switch-container">
      <span class="switch-circle"></span>
    </span>
  </label>
</span>
```

## Variantes
- Tamaños: default (sm) y `-md`.
- `-loyalty`: color especial para programas de puntos.
- `-lighten`: pensado para fondos brand primarios (contraste alto).
- Estados: `disabled`, `checked` (nativo), combinables.

## Ejemplos HTML
```html
<span class="eva-3-switch">
  <label class="switch-label">
    <input class="switch-input" type="checkbox" checked />
    <span class="switch-container"><span class="switch-circle"></span></span>
  </label>
</span>

<span class="eva-3-switch -md -lighten">
  <label class="switch-label">
    <input class="switch-input" type="checkbox" />
    <span class="switch-container"><span class="switch-circle"></span></span>
  </label>
</span>
```

## Cuándo usar
- Encendido/apagado de preferencias o filtros rápidos.

## Mejores prácticas
- Asegurá contraste adecuado; usa `-lighten` sobre fondos oscuros/brand.
- Siempre vinculá el `label` con `id` para accesibilidad.

## Dependencias
- Sin íconos.