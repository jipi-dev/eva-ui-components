# SwipeActions

## Descripción
Acciones revelables mediante gesto swipe en mobile (p.ej. borrar o más opciones en listas). El gesto debe ser implementado por la app; el componente provee el layout de botones.

## Estructura HTML
```html
<div class="eva-3-card">
  <ul class="eva-3-swipe-actions -primary-action -secondary-action">
    <li class="swipe-actions-button -delete" role="menuitem">
      <i class="swipe-actions-icon eva-3-icon-trash -eva-3-icon-xsm"></i>
      Eliminar
    </li>
    <li class="swipe-actions-button" role="menuitem">
      <i class="swipe-actions-icon eva-3-icon-more -eva-3-icon-xsm"></i>
      Más
    </li>
  </ul>
</div>
```

## Variantes / Estados
- `-primary-action`: muestra el primer botón.
- `-secondary-action`: muestra el segundo botón (combina con `-primary-action`).

## Cuándo usar
- Listas móviles que requieren acciones rápidas (borrar, más opciones) sin ocupar espacio permanente.

## Mejores prácticas
- Implementá el gesto swipe y aplica/quita las clases según la dirección del gesto.
- En desktop, considerá exponer acciones visibles o con menú contextual.
- Asegurá accesibilidad con `role="menuitem"` y eventos de teclado.

## Dependencias
- Íconos: `trash`, `more`.
- Puede combinarse con sombras utilitarias (`-eva-3-shadow-line`, etc.) si se desea realce.