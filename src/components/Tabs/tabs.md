# Tabs

## Descripción
Menú de navegación por pestañas para agrupar contenido relacionado. Soporta subtítulos, deshabilitados y navegación horizontal con swipe o flechas.

## Estructura HTML
```html
<div class="eva-3-tabs -no-stroke">
  <div class="tabs-nav-corners-container">
    <div class="tabs-nav-container">
      <ul class="tabs-nav">
        <li class="tabs-nav-item -active">Título 1</li>
        <li class="tabs-nav-item">Título 2</li>
        <li class="tabs-nav-item -subtitle -disabled">
          <span class="tab-label">Título 3</span>
          <span class="tab-label">Subtítulo</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="tabs-container">
    <div class="tab-content -active"><div class="tab-inner-content">Contenido 1</div></div>
    <div class="tab-content"><div class="tab-inner-content">Contenido 2</div></div>
    <div class="tab-content"><div class="tab-inner-content">Contenido 3</div></div>
  </div>
</div>
```

## Variantes
- `-no-stroke`: sin borde ni radius del contenedor.
- `-bg-white` (deprecated): borde pensado para fondo blanco.
- `-centered` (deprecated): centra la navegación.
- Navegación con flechas: se usa `useNavigation` en React; agrega NavSlider y clases `-first` / `-last`.
- Ítem deshabilitado: agregar `-disabled` en el `<li>` correspondiente.

## Comportamiento mobile
- Permite scroll horizontal y admite degradados laterales con clases `-first` / `-last` para indicar overflow.

## Cuándo usar
- Para secciones relacionadas en el mismo contexto sin recargar la página.

## Mejores prácticas
- Limitá la cantidad de tabs visibles y usa subtítulos solo cuando aporte claridad.
- Mantén el contenido accesible: tabs son navegables con teclado y deben tener foco visible.

## Dependencias
- Utiliza `NavSlider` para flechas opcionales; sin íconos propios.