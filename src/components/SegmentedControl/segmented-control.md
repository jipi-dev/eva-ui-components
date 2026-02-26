# SegmentedControl

## Descripción
Átomo de botones segmentados (2 a 4 opciones) para alternar vistas o filtros rápidos.

**Tipo:** Átomo  
**Categoría:** Buttons  
**Tags:** segmented control, button group

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<ul class="eva-3-segmented-control -segments-3">
  <li class="segmented-item">
    <button class="segmented-button -active" type="button" id="seg-1">Opción 1</button>
  </li>
  <li class="segmented-item">
    <button class="segmented-button" type="button" id="seg-2">Opción 2</button>
  </li>
  <li class="segmented-item">
    <button class="segmented-button" type="button" id="seg-3">
      <i class="segmented-button-icon eva-3-icon-heart"></i>
      Con ícono
    </button>
  </li>
</ul>

<!-- Variante darken -->
<ul class="eva-3-segmented-control -segments-2 -darken">...</ul>
```

## Características
- Clase base `eva-3-segmented-control` con modificador `-segments-{n}` según cantidad (2 a 4).
- Botones usan clase `segmented-button`; activo agrega `-active`.
- Íconos opcionales dentro del botón con clase `segmented-button-icon`.
- Variante `-darken` para fondo neutro.

## Cuándo Usar
- Cambiar vistas (lista/mapa), tabs livianos, filtros binarios o de pocas opciones.

## Mejores Prácticas
- Limitar a 2–4 opciones; si hay más, considerar tabs o select.
- Marcar siempre una opción activa para contexto claro.
- Usar íconos solo si aportan claridad, no decorativos.

## Dependencias
- `icon` (para íconos opcionales).

## Iconos
- Cualquiera según necesidad (ej. `heart`, `map`, `list`).