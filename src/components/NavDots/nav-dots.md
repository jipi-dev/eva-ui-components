# Nav Dots

## Descripción
Átomo de bullets/steps para navegación (carouseles o steps). Soporta variantes de color, tamaño y modo carousel que asigna clases de proximidad.

**Tipo:** Átomo  
**Categoría:** Navigation  
**Tags:** navegación, puntos, bullets

## Estructura HTML
```html
<ul class="eva-3-nav-dots -center -sm">
  <li class="nav-dot -active"></li>
  <li class="nav-dot"></li>
  <li class="nav-dot"></li>
</ul>
```

## Variantes
- Tamaños: `-sm`, `-lg`, default sin sufijo.
- Posición: `-left`, `-center`, `-right`.
- Colores: `-lighten` (variant lighten) o default.
- Modo carousel (`-carousel`): cada dot recibe clases `-active`, `-nearest`, `-near`, `-far` según distancia al activo.

## Cuándo Usar
- Indicadores de posición en carouseles.
- Steps de wizard simple (sin texto).

## Mejores Prácticas
- Asegurar contraste suficiente con el fondo.
- Marcar solo un dot como activo.
- Para accesibilidad, acompañar con texto o aria-live en contextos críticos.

## Dependencias
- Sin dependencias de componentes.
- Sin iconos.
