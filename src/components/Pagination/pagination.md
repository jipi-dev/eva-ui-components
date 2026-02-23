# Pagination

## Descripción
Molécula de navegación que permite recorrer páginas de resultados mostrando el estado actual y acciones Anterior/Siguiente.

**Tipo:** Molécula  
**Categoría:** Navigation  
**Tags:** paginador, página, next, prev, navegador

## Estructura HTML
```html
<div class="eva-3-pagination">
  <ul class="pagination-container">
    <li class="pagination-item-container page-prev">
      <a class="pagination-item" href="#">Anterior</a>
    </li>
    <li class="pagination-item-container">
      <a class="pagination-item -active" href="#">1</a>
    </li>
    <li class="pagination-item-container">
      <a class="pagination-item" href="#">2</a>
    </li>
    <li class="pagination-item-container page-next">
      <a class="pagination-item" href="#">Siguiente</a>
    </li>
  </ul>
</div>
```

## Características
- Clase base `eva-3-pagination` y lista `pagination-container`.
- Ítems prev/next con clases `page-prev` / `page-next` e íconos de flecha.
- Ítem activo usa modificador `-active` sobre `.pagination-item`.
- Texto configurable para Anterior/Siguiente.

## Cuándo Usar
- Listados paginados con más de una página.
- Búsquedas o resultados con navegación secuencial.

## Mejores Prácticas
- Mostrar al menos 3–5 páginas visibles; ocultar prev/next cuando no aplican.
- Mantener foco/ARIA con `aria-current` en el activo cuando sea posible.
- Ubicarlo cercano al listado; repetir al inicio y final en listas largas.

## Dependencias
- `heading`, `icon` (flechas `arrow-left`, `arrow-right`).

## Iconos
- `arrow-left`, `arrow-right` (en ítems prev/next).