# Mealplans

## Descripción
Átomo que contiene ilustraciones SVG de planes de comida (mealplans). Las ilustraciones miden 32x32px por defecto.

## Tipo de componente
- **Tipo**: Átomo
- **Categoría**: Illustrations
- **Tags**: comida, amenity, amenidad, planes de comida

## Estructura HTML

```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-all-inclusive.svg" alt="All inclusive" />
  All inclusive
</div>
```

## Variantes

### All Inclusive
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-all-inclusive.svg" alt="All inclusive" />
  All inclusive
</div>
```

### Breakfast
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-breakfast.svg" alt="Breakfast" />
  Breakfast
</div>
```

### American Breakfast
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-american-breakfast.svg" alt="American breakfast" />
  American breakfast
</div>
```

### Continental Breakfast
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-continental-breakfast.svg" alt="Continental breakfast" />
  Continental breakfast
</div>
```

### Buffet Breakfast
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-buffet-breakfast.svg" alt="Buffet breakfast" />
  Buffet breakfast
</div>
```

### Full Board
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-full-board.svg" alt="Full board" />
  Full board
</div>
```

### Half Board
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-half-board.svg" alt="Half board" />
  Half board
</div>
```

### Magic
```html
<div class="eva-3-mealplans">
  <img class="mealplans-img" src="/ui/dist/resources/sprites/ic-magic.svg" alt="Magic plan" />
  Magic plan
</div>
```

## Estados
No aplica. Las ilustraciones son estáticas.

## Estilos CSS

```css
.eva-3-mealplans {
  display: inline-block;
  position: relative;
  padding: 6px 8px 6px 36px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
  background-color: var(--color-white);
  color: var(--color-neutral-800);
  font-size: 12px;
  font-weight: 400;
}

.mealplans-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 32px;
}
```

## Implementación

### Opción 1: Tag img
```html
<img src="/ui/dist/resources/sprites/ic-all-inclusive.svg" alt="All inclusive" width="32" height="32" />
```

### Opción 2: SVG inline
Insertar el código SVG directamente en el HTML (mejor performance, no requiere request adicional).

[Más información sobre uso de SVG](https://css-tricks.com/using-svg/)

## Accesibilidad
- Incluir siempre el atributo `alt` con descripción del plan de comida
- El texto debe ser legible (min 12px)

## Dependencias

### Sprites (8 archivos SVG)
- ic-all-inclusive.svg
- ic-american-breakfast.svg
- ic-breakfast.svg
- ic-buffet-breakfast.svg
- ic-continental-breakfast.svg
- ic-full-board.svg
- ic-half-board.svg
- ic-magic.svg

## Cambiar tamaño

Por ser SVG, se puede cambiar el tamaño:

```css
.mealplans-img {
  width: 64px;
  height: 64px;
}
```

## Descarga
Agregar en `eva.manifest.json`:

```json
{
  \"dependencies\": {
    \"components\": [\"mealplans\"]
  }
}
```

Recursos disponibles en: `eva/resources/sprites/`

## Notas
- Tamaño default: 32x32px
- Formato: SVG (escalable)
- Solución temporal hasta documentación oficial de moléculas de mealplans
