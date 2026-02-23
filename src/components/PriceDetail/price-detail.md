# PriceDetail

## Descripción
Desglose de precios con cabecera y lista de ítems (una o dos columnas). Permite resaltar totales, descuentos, impuestos y beneficios Loyalty.

**Tipo:** Molécula  
**Categoría:** Pricebox  
**Tags:** desglose, precio, impuestos, resumen

## Estructura HTML
```html
<div class="eva-3-price-detail">
  <div class="-price-detail-item h4">Desglose de precio</div>
  <div class="-price-detail-item body-1">Viaje a Cancún</div>
  <div class="-price-detail-item -price-main-title">Precio por persona</div>
  <div class="-price-detail-item -price-main">
    <em class="-price-detail-currency">$</em>
    <span>20.000</span>
  </div>

  <div class="-price-detail-item -double-col">
    <div class="-price-detail-item-title">Tarifa base</div>
    <div class="-price-detail-item-description">$ 100.000</div>
  </div>

  <div class="-price-detail-item -double-col -border-top">
    <div class="-price-detail-item-title">Impuestos</div>
    <div class="-price-detail-item-description">$ 20.000</div>
  </div>

  <div class="-price-detail-item -border-top -eva-3-tc-green-3">
    Descuento aplicado -$ 5.000
  </div>
  <div class="-price-detail-item -border-top">
    <div class="eva-3-pricing-points">Sumás <span class="-eva-3-bold">300 puntos</span></div>
  </div>
</div>
```

## Características
- Clase base `eva-3-price-detail`.
- Ítems libres (`-price-detail-item`) y formato doble columna (`-double-col`).
- Modificador `-border-top` para separar filas.
- Bloque principal de precio con moneda y monto (`-price-main`).
- Opción de padding interno: `-inner-padding`.

## Cuándo Usar
- Mostrar resumen de costos en flujos de checkout o detalle de producto.
- Destacar descuentos, impuestos o puntos acumulados.

## Mejores Prácticas
- Ordenar de lo general a lo específico (precio base → impuestos → totales/beneficios).
- Usar `-eva-3-tc-green-3` para descuentos y `-eva-3-tc-gray-2` para textos aclaratorios.
- Mantener textos breves para evitar wrapping excesivo.

## Dependencias
- `pricing-points`, `icon`, `heading`, utilidades de color/spacing.

## Iconos
- Opcionales en el contenido (ej. `checkmark`).# PriceDetail

## Descripción
Molécula de desglose de precio: muestra título, descripción y lista de items con totales, subtotales o mensajes.

**Tipo:** Molécula  
**Categoría:** Pricebox  
**Tags:** desglose, precios, detalle

## Estructura HTML
```html
<div class="eva-3-price-detail -inner-padding">
  <div class="-price-detail-item eva-3-h4">Desglose de precio</div>
  <div class="-price-detail-item">Viaje a Cancún</div>
  <div class="-price-detail-item -price-main-title">Precio por persona</div>
  <div class="-price-detail-item -price-main">
    <em>$</em>
    <span>20.000</span>
  </div>

  <div class="-price-detail-item -double-col">
    <div class="-price-detail-item-title">Precio por persona</div>
    <div class="-price-detail-item-description">$ 999.999</div>
  </div>

  <div class="-price-detail-item -double-col -border-top eva-3-tc-green-3">
    <div class="-price-detail-item-title">99% descuentos</div>
    <div class="-price-detail-item-description">- $ 999.999</div>
  </div>

  <div class="-price-detail-item -border-top eva-3-p eva-3-tc-gray-2">
    Texto libre o adicionales
  </div>
</div>
```

## Características
- Clase base `eva-3-price-detail`; padding opcional `-inner-padding`.
- Ítems libres `-price-detail-item` y de dos columnas `-double-col`.
- Borde opcional por ítem con `-border-top`.
- Permite resaltar valores con utilidades de color/tipografía.

## Cuándo Usar
- Desglose de precios en priceboxes o flujos de checkout.
- Mostrar impuestos, descuentos, acumulación/canje de puntos, aclaraciones.

## Mejores Prácticas
- Ordenar de mayor a menor relevancia: precio principal, descuentos, impuestos, notas.
- Usar `-border-top` para separar bloques y mejorar legibilidad.
- Evitar textos extensos en una sola línea; usar ítems libres para descripciones largas.

## Dependencias
- `heading`, `icon`, `pricing-points`, utilidades de color/positioning.

## Iconos
- Puede incluir íconos según contenido (ej. `checkmark` en listas de inclusiones).