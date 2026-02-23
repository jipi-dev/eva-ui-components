# Steppers

## Descripción
Control numérico con botones de incremento/decremento. Ideal para seleccionar cantidades acotadas con límites mínimos y máximos.

## Estructura HTML
```html
<div class="eva-3-steppers -md">
  <input class="steppers-tag" type="text" value="1" id="qty" readonly>
  <button type="button" class="steppers-icon-left eva-3-icon-minus" aria-label="Menos"></button>
  <button type="button" class="steppers-icon-right eva-3-icon-plus" aria-label="Más"></button>
</div>
```

## Variantes
- Tamaños: `-md` (default), `-lg`.
- Estados: `-invalid`, `-no-border`, `disabled` (en input y botones).

## Estados de borde
- `-invalid`: resalta el campo en error.
- `-no-border`: elimina el contorno exterior.

## Ejemplo HTML
```html
<div class="eva-3-steppers -lg -invalid">
  <input class="steppers-tag" id="tickets" value="2" readonly>
  <button type="button" class="steppers-icon-left eva-3-icon-minus" aria-label="Menos"></button>
  <button type="button" class="steppers-icon-right eva-3-icon-plus" aria-label="Más"></button>
</div>
```

## Cuándo usar
- Selección de unidades (personas, noches, tickets) dentro de un rango conocido.

## Mejores prácticas
- Definí límites `min` y `max` y deshabilitá los botones cuando se alcanzan.
- Mantené el valor siempre visible dentro del input readonly.

## Dependencias
- Íconos `minus` y `plus`.