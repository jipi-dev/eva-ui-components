# RedemptionSwitch

## Descripción
Molécula para activar/desactivar uso de puntos Loyalty o incentivar registro. Variantes horizontales, pill y cards colapsables para ReSearch.

**Tipo:** Molécula  
**Categoría:** Loyalty  
**Tags:** loyalty, puntos, canje, redención, switch

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-redemption-switch -loyalty">
  <img class="redemption-logo" src=".../loyalty-logo.svg" alt="redemption logo" />
  <div class="redemption-content">
    <div class="redemption-title -eva-3-bold">Empezá a sumar puntos</div>
    <div class="redemption-subtitle">Registrate</div>
  </div>
  <div class="redemption-switch">
    <label class="switch-label" for="example-switch">
      <input class="switch-input" type="checkbox" id="example-switch" />
      <span class="switch-container"><span class="switch-circle"></span></span>
    </label>
  </div>
</div>

<!-- Variante horizontal/pill usa icono loyalty en vez de logo -->
```

## Características
- Clase base `eva-3-redemption-switch`; modificadores: `-horizontal`, `-collapsed`, `-highlighted`, `-card`, `-desktop`, `-pill`, `-loyalty`.
- Distintas configuraciones según `variant` (switch visible u oculto, layout card o pill).
- Logo loyalty o ícono según variante.

## Cuándo Usar
- Ofrecer canje/uso de puntos en flujos de compra o rebúsqueda.
- Mostrar card de registro a programa de fidelidad.

## Mejores Prácticas
- Elegir variante pill/horizontal para espacios reducidos; card para mensajes de registro.
- Evitar sobrecargar de texto; mantener título/subtítulo breves.

## Dependencias
- `switch`, `icon`, `colours`, `colours-variables-loyalty`, `text`.

## Iconos
- `loyalty-filled`, `chevron-right` (card), según variante.