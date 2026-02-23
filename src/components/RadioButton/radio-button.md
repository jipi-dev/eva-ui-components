# RadioButton

## Descripción
Átomo de opción única en formularios. Permite elegir un valor dentro de un grupo.

**Tipo:** Átomo  
**Categoría:** Form  
**Tags:** radio, selección, opción única, formulario

## Estructura HTML
```html
<span class="eva-3-radio -md">
  <label class="radio-label-container" for="eva-radio-1">
    <input class="radio-tag" id="eva-radio-1" type="radio" name="example" />
    <i class="radio-circle"></i>
  </label>
</span>

<!-- Variante lighten -->
<span class="eva-3-radio -md -lighten">
  <label class="radio-label-container" for="eva-radio-2">
    <input class="radio-tag" id="eva-radio-2" type="radio" name="example" />
    <i class="radio-circle"></i>
  </label>
</span>
```

## Características
- Clase base `eva-3-radio` con modificadores: `-md` (tamaño) y `-lighten` (uso en fondos oscuros).
- Input tipo `radio` con `name` compartido para agrupar opciones.
- Estado `disabled` heredado desde el input.

## Cuándo Usar
- Selección exclusiva entre pocas opciones (ej. género, método de contacto, plan).

## Mejores Prácticas
- Asegurar labels descriptivos y claros; utilizar `aria-checked` implícito del input.
- Evitar usar radio cuando las opciones son muchas; considerar select.

## Dependencias
- Ninguna especial; usa utilidades de prefijo y estilos base.

## Iconos
- No aplica.