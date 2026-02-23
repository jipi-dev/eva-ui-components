# PriceboxCluster

## Descripción
Pricebox para clusters/listados: muestra precio, descripción, botón de acción y variantes Loyalty (acumulación/canje) con opción responsive.

**Tipo:** Molécula  
**Categoría:** Pricebox  
**Tags:** resultados, precios, cluster

## Estructura HTML
```html
<div class="eva-3-pricebox-cluster -responsive -loyalty">
  <div class="pricebox-top-container">
    <div class="pricebox-value-container">
      <div class="pricebox-small-text">Precio por adulto desde</div>
      <div class="pricebox-value">
        <div class="pricebox-strikethrough-text">$ 250.000</div>
        <span class="pricebox-info-icon"><i class="eva-3-icon-info"></i></span>
        <span class="pricebox-currency">$</span>
        <span class="pricebox-big-text">222.539</span>
        <span class="pricebox-cents">00</span>
      </div>
      <div class="pricebox-small-text -description">Total por 10 días $20.000</div>
      <div class="pricebox-small-text -loyalty-description -eva-3-tc-bubblegum-1">
        Usando 4.058 puntos ($4.000)
      </div>
    </div>
    <div class="pricebox-action">
      <button class="eva-3-btn -md -primary -fullwidth">Comprar</button>
    </div>
  </div>
  <div class="pricebox-loyalty-container eva-3-pricing-points">
    <img class="pricing-points-logo" ... />
    <span>Sumás <span class="-eva-3-bold">300 puntos</span></span>
  </div>
  <div class="pricebox-bottom-container">cuotas</div>
</div>
```

## Características
- Base `eva-3-pricebox-cluster`.
- Modificadores: `-responsive` (layout adaptable) y `-loyalty` (mostrar acumulación/canje).
- Soporta precio tachado (`pricebox-strikethrough-text`), ícono info, currency/centavos separados.
- Acción principal en `pricebox-action` con botón full width.
- Zona inferior `pricebox-bottom-container` para cuotas/extra info.

## Cuándo Usar
- Resultados de búsqueda (hoteles, vuelos, paquetes) con llamado a la acción inmediato.
- Listas de ofertas con precio destacado y beneficios Loyalty.

## Mejores Prácticas
- Mantener textos breves en `small-text` para evitar overflow.
- Mostrar solo un tipo de beneficio Loyalty a la vez (acumulación o canje) para claridad.
- Usar `-responsive` en tarjetas estrechas o móviles.

## Dependencias
- `button`, `pricing-points`, `container`, `icon`, utilidades de color/positioning.

## Iconos
- `info` (detalle del precio) y los que se agreguen dentro del contenido.