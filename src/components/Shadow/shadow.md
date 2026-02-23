# Shadow

## Descripción
Utilidad de sombras aplicada a contenedores o elementos interactivos para dar profundidad. Incluye variantes estáticas y con hover.

## Estructura HTML
```html
<div class="-eva-3-shadow-1">Contenido</div>
```

## Variantes
- `-eva-3-shadow-1`, `-eva-3-shadow-2`: Sombras crecientes.
- `-eva-3-shadow-line`: Línea superior sutil (ideal sticky top).
- `-eva-3-shadow-static`: Sombra suave fija.
- `-eva-3-shadow-1-hover`, `-eva-3-shadow-2-hover`: Incrementan sombra al hover.
- `-eva-3-shadow-static-hover`, `-eva-3-shadow-line-hover`: Hover con sombra.
- `-eva-3-shadow-top` / `-eva-3-shadow-bottom`: Bordes difuminados para contenedores sticky.
- Modificador `.-plus` sobre `.eva-3-shadow` para intensificar sombra al hover.

## Ejemplo HTML
```html
<div class="eva-3-card -eva-3-shadow-1-hover">
  Contenido
</div>
```

## Cuándo usar
- Resaltar tarjetas al pasar el cursor.
- Dar profundidad a elementos sticky (headers/footers).

## Mejores prácticas
- Evitá encadenar múltiples sombras; elegí la variante mínima necesaria.
- Para sticky, usa `-top` o `-bottom` según posición.

## Dependencias
- No requiere íconos. Se apoya en variables de color EVA.