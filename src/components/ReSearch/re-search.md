# ReSearch

## Descripción
Molécula de “rebúsqueda” que resume datos ingresados y permite reabrir/editar la búsqueda. Soporta columnas múltiples con switch de Loyalty.

**Tipo:** Molécula  
**Categoría:** Search  
**Tags:** búsqueda, resumen, resultados, rebúsqueda

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-re-search -eva-3-shadow-static-hover -show">
  <ul class="re-search-container">
    <li class="re-search-item">
      <i class="eva-3-icon-location re-search-item-icon"></i>
      <span class="origin">Buenos Aires</span>
      <span>|</span>
      <span class="destination">Bariloche</span>
    </li>
    <li class="re-search-item">
      <i class="eva-3-icon-calendar re-search-item-icon"></i>
      <span class="item-date-container">Sab, 18 Ago 2019</span>
    </li>
    <li class="re-search-item re-search-action">
      <button class="eva-3-btn-ghost -md">
        <i class="eva-3-icon-search"></i>Buscar
      </button>
    </li>
  </ul>
  <div class="re-search-content -eva-3-shadow-bottom">
    <div class="eva-3-transition"><span>searchbox!</span></div>
  </div>
</div>

<!-- Variante multiple-columns con switch loyalty -->
<div class="eva-3-re-search -multiple-columns -show">
  <div class="re-search-container">
    <div class="re-search-main-col">...items...</div>
    <div class="re-search-aside">
      <div class="re-search-loyalty">
        <!-- RedemptionSwitch variant collapsedReSearch -->
      </div>
    </div>
  </div>
</div>
```

## Características
- Clase base `eva-3-re-search`; sombras `-shadow-static-hover` y `-shadow-bottom` en content.
- Modificadores: `-show-content`, `-with-inputs`, `-multiple-columns`, `-purple`, `-sticky`, `-sticky-animated`, `-show`, `-hide`.
- Items con clase `re-search-item`; pueden ser acción (`re-search-action`) o contener tooltips.
- Contenido desplegable `re-search-content` se muestra al click.

## Cuándo Usar
- Flujos de resultados donde se necesita editar parámetros rápidamente sin abandonar la página.
- Rebuscar con filtros compactos o mostrar resumen de búsqueda.

## Mejores Prácticas
- Mantener 3–5 ítems visibles; si se necesitan más, moverlos al panel desplegable.
- Usar `-multiple-columns` cuando se requiera switch de Loyalty o layout dividido.
- Proveer feedback visual al togglear (`-show/-hide`).

## Dependencias
- `tooltip`, `redemption-switch`, `button-ghost`, `shadow`, `hide-content`, `icon`.

## Iconos
- Según contenido: `location`, `calendar`, `user`, `search`, etc.