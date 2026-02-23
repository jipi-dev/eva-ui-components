# Order

## Descripción
Molécula de pastillas de ordenamiento/acción rápida: permite cambiar sorting, filtros o vista. Cada ítem puede tener ícono o badge numérico.

**Tipo:** Molécula  
**Categoría:** Filters  
**Tags:** pastilla, ordenamiento, sticky, filter, list, filtro

## Estructura HTML
```html
<div class="eva-3-order -eva-3-shadow-static">
  <ul class="order-container">
    <li class="order-item">
      <span class="order-link">
        <i class="order-item-icon -filter"></i>
        <span class="order-text">Filtros</span>
      </span>
    </li>
    <li class="order-item">
      <span class="order-link">
        <span class="order-item-badge">8</span>
        <span class="order-text">Alertas</span>
      </span>
    </li>
  </ul>
</div>
```

## Características
- Cada item puede mostrar ícono (`order-item-icon`) o badge numérico (`order-item-badge`).
- Wrapper con sombra estática (`-eva-3-shadow-static`).
- Lista horizontal de acciones táctiles.

## Cuándo Usar
- Controles de ordenamiento/sorting.
- Accesos a filtros o vista (lista/mapa, etc.).
- Acciones rápidas sticky en mobile/desktop.

## Mejores Prácticas
- Limitar a pocas acciones (3-4) para evitar saturar.
- Usar badge solo para notificaciones o conteos relevantes.
- Iconos consistentes con la acción.

## Dependencias
- `shadow`

## Iconos
- `filter`, `budget`, `order`, `list`, `notification`, `location`, `time` (según ítem configurado)
