# PriceboxSticky

## Descripción
Molécula fija (sticky) que mantiene visible el precio y beneficios mientras el usuario navega. Soporta descuentos, info extra y variantes Loyalty.

**Tipo:** Molécula  
**Categoría:** Pricebox  
**Tags:** fix, precios, footer, fijo

## Estructura HTML
```html
<div class="eva-3-pricebox-sticky eva-3-shadow -with-info -with-label -loyalty -green">
  <div class="pricebox-content-container">
    <div class="pricebox-sticky-more-info">
      <h4 class="pricebox-sticky-message">San Pedro, una escapada con energía rural</h4>
      <div class="pricebox-sticky-discount-container">
        <span class="eva-3-label -md -green"></span>
      </div>
      <div class="pricebox-sticky-loyalty-container eva-3-pricing-points">
        Podrías sumar <span class="-eva-3-bold">300 puntos</span>
      </div>
      <div class="pricebox-sticky-info-container">
        <p class="pricebox-sticky-description">Precio final por noche</p>
        <div class="pricebox-sticky-price">
          <span class="pricebox-sticky-icon-container"><i class="eva-3-icon-info-circle"></i></span>
          <p class="pricebox-sticky-currency">$</p>
          100.000<sup class="pricebox-sticky-cents">00</sup>
        </div>
        <p class="pricebox-sticky-description">Total 2 personas $24.894</p>
      </div>
    </div>
    <button class="eva-3-btn -primary -lg pricebox-sticky-button">Comprar</button>
  </div>
  <div class="pricebox-sticky-footer-loyalty-container eva-3-pricing-points -eva-3-hide-medium-up">
    Podrías sumar <span class="-eva-3-bold">300 puntos</span>
  </div>
</div>
```

## Características
- Base `eva-3-pricebox-sticky` con sombra `eva-3-shadow`.
- Variantes: `-with-info`, `-with-label`, `-loyalty`, color `-green`/`-purple`/`-desktop-white`.
- Muestra mensaje, descuento (`Label`), info icon, precio largo (`-long`), y beneficios Loyalty (acumulación o canje).
- Puede incluir `Driver` promocional en layout Disney.
- Botón de acción principal pegado al bloque.

## Cuándo Usar
- Página de detalle donde el CTA de compra debe permanecer visible al hacer scroll.
- Mostrar canje/acumulación de puntos cerca del precio.

## Mejores Prácticas
- Evitar exceso de texto; mantener mensaje y beneficio concisos.
- Usar `typeDiscount` coherente con branding y fondo (ej. `desktop-white` sobre fondos claros).
- En mobile, revisar que no tape contenido crítico; usar hide/show según scroll si es necesario.

## Dependencias
- `button`, `label`, `pricing-points`, `driver`, `heading`, `icon`, `shadow`, `text`.

## Iconos
- `info-circle` (precio), `info`, `gift`, `pig-offer` según promoción.