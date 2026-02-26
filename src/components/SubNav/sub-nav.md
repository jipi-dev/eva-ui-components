# SubNav

## Descripción
Menú secundario de navegación horizontal. Permite presentar secciones o categorías dentro de una misma vista. Soporta íconos, subtítulos, estados activo y deshabilitado, scroll horizontal con flechas de navegación y variantes de estilo (stroke, rounded, temas dark y gray).

Clase principal: `eva-3-sub-nav`

## Estructura HTML básica
```html
<nav class="eva-3-sub-nav" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Vuelos</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Hoteles</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Paquetes</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Autos</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Variantes del contenedor

### Con stroke (-stroke)
Agrega un borde al componente.
```html
<nav class="eva-3-sub-nav -stroke" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Precios</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Descripción</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Comodidades</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Opiniones</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Con bordes redondeados (-rounded -stroke)
Combinar `-rounded` con `-stroke` para obtener el borde redondeado.
```html
<nav class="eva-3-sub-nav -rounded -stroke" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Enero</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Febrero</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Marzo</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Variantes de ítem

### Ítem deshabilitado (-disabled)
Agregar `-disabled` al `<li>`, `tabindex="-1"` y `aria-disabled="true"`.
```html
<nav class="eva-3-sub-nav -stroke" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Enero</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Febrero</span>
        </li>
        <li class="sub-nav-item -disabled" role="menuitem" tabindex="-1" aria-disabled="true">
          <span class="sub-nav-label">Marzo</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Ítem con subtítulo (-subtitle)
Agregar `-subtitle` al `<li>` y un segundo `<span class="sub-nav-label">` con el subtítulo.
```html
<nav class="eva-3-sub-nav -stroke" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -subtitle -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Económica</span>
          <span class="sub-nav-label">desde $50.000</span>
        </li>
        <li class="sub-nav-item -subtitle" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Ejecutiva</span>
          <span class="sub-nav-label">desde $120.000</span>
        </li>
        <li class="sub-nav-item -subtitle" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Primera</span>
          <span class="sub-nav-label">desde $300.000</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Ítem con ícono (-icon)
Agregar `-icon` al `<li>` y un elemento `<i>` con la clase del ícono más `sub-nav-icon` antes del label.
```html
<nav class="eva-3-sub-nav -stroke" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -icon -active" role="menuitem" tabindex="0" aria-current="page">
          <i class="eva-3-icon-airplane sub-nav-icon"></i>
          <span class="sub-nav-label">Vuelos</span>
        </li>
        <li class="sub-nav-item -icon" role="menuitem" tabindex="0">
          <i class="eva-3-icon-hotel sub-nav-icon"></i>
          <span class="sub-nav-label">Hoteles</span>
        </li>
        <li class="sub-nav-item -icon" role="menuitem" tabindex="0">
          <i class="eva-3-icon-car sub-nav-icon"></i>
          <span class="sub-nav-label">Autos</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Scroll horizontal con flechas de navegación

Cuando los ítems superan el ancho del contenedor se usan flechas de navegación. Se controla con las clases `-first` y `-last` en el `<nav>`:

- `-first`: al inicio del scroll → muestra flecha derecha (`sub-nav-arrow-last -right`).
- `-last`: al final del scroll → muestra flecha izquierda (`sub-nav-arrow-first -left`).
- Ambas simultáneamente → `-first -last`.

Las flechas son contenedores con clase `eva-3-nav-slider -sm -white`.

```html
<!-- Scroll con flecha derecha (-first) -->
<nav class="eva-3-sub-nav -stroke -first" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="eva-3-nav-slider -sm -white sub-nav-arrow-last -right">
      <i class="nav-slider-icon -chevron-right"></i>
    </div>
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Item 1</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Item 2</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Item 3</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Item 4</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Item 5</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Temas

### Tema oscuro (-dark)
```html
<nav class="eva-3-sub-nav -dark" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Vuelos</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Hoteles</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Paquetes</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Tema gris (-gray)
```html
<nav class="eva-3-sub-nav -gray" role="menubar">
  <div class="sub-nav-corners-container">
    <div class="sub-nav-container">
      <ul class="sub-nav-items-container">
        <li class="sub-nav-item -active" role="menuitem" tabindex="0" aria-current="page">
          <span class="sub-nav-label">Vuelos</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Hoteles</span>
        </li>
        <li class="sub-nav-item" role="menuitem" tabindex="0">
          <span class="sub-nav-label">Paquetes</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Clases de modificadores

### Contenedor (`eva-3-sub-nav`)
| Clase | Descripción |
|-------|-------------|
| `-stroke` | Agrega borde al componente. |
| `-rounded` | Agrega border-radius (requiere `-stroke`). |
| `-first` | Indica inicio del scroll; muestra flecha derecha. |
| `-last` | Indica final del scroll; muestra flecha izquierda. |
| `-dark` | Tema de fondo oscuro. |
| `-gray` | Tema de fondo gris. |

### Ítem (`sub-nav-item`)
| Clase | Descripción |
|-------|-------------|
| `-active` | Estado activo del ítem. Agregar `aria-current="page"`. |
| `-disabled` | Estado deshabilitado. Usar `tabindex="-1"` y `aria-disabled="true"`. |
| `-subtitle` | Habilita subtítulo con un segundo `<span class="sub-nav-label">`. |
| `-icon` | Habilita ícono a la izquierda del label con `<i class="... sub-nav-icon">`. |

## Cuándo usar
- Navegación secundaria dentro de una sección de la página (ej: filtros, categorías de producto, pestañas de detalle).
- Cuando se necesita mostrar entre 3 y 8 opciones de navegación en una misma línea horizontal.

## Mejores prácticas
- Siempre marcar el ítem activo con `-active` y `aria-current="page"` para accesibilidad.
- Usar `-disabled` con `tabindex="-1"` para opciones no disponibles.
- Implementar las flechas de scroll cuando el contenido supera el ancho del contenedor.
- Combinar `-rounded` solo junto a `-stroke`.

## Dependencias
- Utiliza `eva-3-nav-slider` para las flechas de navegación opcionales.
