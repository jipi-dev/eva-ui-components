# Modal

## Descripción
La molécula modal la usamos para agregar contenido adicional. Este contenido puede ser meramente informativo o bien, requerir una acción por parte del usuario.

**Tipo:** Molécula  
**Categoría:** Modals  
**Tags:** popup, emergente, ventana, window, overlay

## Estructura HTML

```html
<div class="eva-3-modal -show-modal">
  <!-- Overlay/Backdrop -->
  <div class="modal-overlay"></div>
  
  <!-- Modal Header -->
  <div class="modal-header">
    <div class="modal-title-container">
      <h4 class="modal-title">Titulo del modal</h4>
    </div>
    <i class="eva-3-icon -cross modal-close" role="button" tabindex="0" aria-label="Close modal"></i>
  </div>
  
  <!-- Modal Content -->
  <div class="modal-content">
    <p>Contenido del modal</p>
  </div>
  
  <!-- Modal Footer (opcional) -->
  <div class="modal-footer">
    <button>Aceptar</button>
  </div>
</div>
```

## Tamaños

### Default (690px)
El modal por defecto tiene un ancho máximo de 690px en desktop y se vuelve fullscreen en mobile (< 768px).

```html
<div class="eva-3-modal -show-modal">
  <!-- contenido -->
</div>
```

### Small (400px)
El modal pequeño tiene un ancho máximo de 400px y se mantiene centrado incluso en mobile.

```html
<div class="eva-3-modal -show-modal -sm">
  <!-- contenido -->
</div>
```

## Variantes

### Close on Left
Variante con el botón de cerrar a la izquierda, útil para navegación en mobile mostrando un ícono de flecha hacia atrás.

```html
<div class="eva-3-modal -show-modal -close-on-left">
  <!-- El ícono de cerrar se muestra a la izquierda -->
  <!-- En mobile muestra arrow-bold-left, en desktop muestra cross -->
</div>
```

### Close on Left with Title
Similar a close-on-left pero con título incluido.

```html
<div class="eva-3-modal -show-modal -close-on-left">
  <div class="modal-header">
    <i class="eva-3-icon -arrow-bold-left modal-close"></i>
    <h4 class="modal-title">Título</h4>
  </div>
</div>
```

### Image Header
Modal con imagen en el header y botón de cerrar con color blanco para contraste.

```html
<div class="eva-3-modal -show-modal -image-header -close-icon-white">
  <div class="modal-header">
    <img src="imagen.jpg" class="header-image" alt="Header">
    <i class="eva-3-icon -cross modal-close"></i>
  </div>
  <div class="modal-content">
    <!-- contenido -->
  </div>
</div>
```

### Image in Content
Modal con imagen a ancho completo en el contenido.

```html
<div class="eva-3-modal -show-modal">
  <div class="modal-header">
    <h4 class="modal-title">Título</h4>
  </div>
  <div class="modal-content">
    <img src="imagen.jpg" class="modal-image-full" alt="Contenido">
    <p>Texto adicional</p>
  </div>
</div>
```

### Border Bottom
Agrega un borde inferior al header.

```html
<div class="eva-3-modal -show-modal -border-bottom">
  <!-- contenido -->
</div>
```

### No Padding
Remueve el padding del contenido.

```html
<div class="eva-3-modal -show-modal -no-padding">
  <!-- contenido -->
</div>
```

### Smooth Scroll
Habilita scroll suave con soporte webkit.

```html
<div class="eva-3-modal -show-modal -smooth-scroll">
  <!-- contenido con scroll -->
</div>
```

### Title Large
Permite títulos de 2 líneas con ellipsis.

```html
<div class="eva-3-modal -show-modal -title-lg">
  <div class="modal-header">
    <h4 class="modal-title">Título largo que puede ocupar hasta dos líneas completas</h4>
  </div>
</div>
```

### Sticky Footer
Footer pegado al fondo del modal.

```html
<div class="eva-3-modal -show-modal -show-sticky-footer">
  <div class="modal-header">
    <h4 class="modal-title">Título</h4>
  </div>
  <div class="modal-content">
    <!-- contenido -->
  </div>
  <div class="modal-footer">
    <button>Aceptar</button>
  </div>
</div>
```

### Hide Header
Oculta completamente el header.

```html
<div class="eva-3-modal -show-modal -hide-header">
  <div class="modal-content">
    <!-- contenido sin header -->
  </div>
</div>
```

## Comportamiento Responsive

### Desktop (≥ 768px)
- Modal default: 690px max-width, centrado con margin-top de 80px
- Modal small: 400px max-width, centrado
- Background con overlay rgba(0,0,0,0.8)
- Border-radius en las esquinas

### Mobile (< 768px)
- Modal default: fullscreen (100% width y height), sin border-radius
- Modal small: mantiene 400px max-width centrado con margin
- Header sticky en la parte superior
- Footer fixed en la parte inferior (cuando no es -sm)

## Mostrar/Ocultar Modal

Para mostrar el modal, agregar la clase `-show-modal`:

```html
<div class="eva-3-modal -show-modal">
  <!-- contenido -->
</div>
```

También se puede agregar al elemento `<html>` para bloquear scroll del body:

```html
<html class="-show-modal">
  <body>
    <div class="eva-3-modal -show-modal">
      <!-- contenido -->
    </div>
  </body>
</html>
```

## Overlay Pattern

El modal incluye un overlay/backdrop automático que:
- Cubre toda la pantalla
- Tiene fondo semi-transparente
- Permite cerrar el modal al hacer click fuera del contenido

## Accesibilidad

- Botón de cerrar con `role="button"`, `tabindex="0"` y `aria-label="Close modal"`
- Soporte de teclado: tecla ESC cierra el modal
- Focus visible con outline en elementos interactivos
- ARIA labels apropiados en iconos

## Iconos Requeridos
- `cross` (cerrar)
- `close` (alternativo)
- `arrow-bold-left` (variante close-on-left en mobile)

## Dependencias
- `button-ghost`
- `button`
- `colours`
- `positioning`
- `hide-content`

## Cuándo Usar

### Modal Default
- Contenido informativo de longitud media
- Formularios simples
- Confirmaciones con botones de acción
- Alertas que requieren atención del usuario

### Modal Small
- Confirmaciones simples
- Mensajes cortos
- Acciones rápidas con poco contenido

### Close on Left
- Flujos de navegación en mobile
- Cuando el modal actúa como una nueva "página" temporal
- Aplicaciones que siguen patrones de navegación nativos

### Image Header
- Modals promocionales
- Contenido visual destacado
- Anuncios con imagen principal

## Mejores Prácticas

1. **Contenido Conciso:** Mantener el contenido breve y al punto
2. **Acción Clara:** Si requiere acción, los botones deben ser claros
3. **Un Modal a la Vez:** Evitar modales sobre modales
4. **Escapable:** Siempre permitir cerrar con ESC o click fuera
5. **Mobile First:** Considerar que el modal default se vuelve fullscreen en mobile
6. **Sticky Footer:** Usar cuando hay acciones importantes que deben estar siempre visibles
7. **Max Height:** Considerar el alto del contenido para evitar modals muy largos

## Estilos CSS

### Variables Principales
- `$modal-max_width: 690px` - Ancho máximo default
- `$modal-sm-max_width: 400px` - Ancho máximo small
- `$modal-margin-top: 80px` - Margen superior en desktop
- `$modal-close-width: 24px` - Tamaño del botón cerrar
- Border-radius: 4px en esquinas
- Z-index: 200 para el modal

### Colores
- Background: `white`
- Title: `neutral-800`
- Border: `neutral-300`
- Overlay: `rgba(0, 0, 0, 0.8)`

### Transiciones
- Opacity y visibility con transition
- Color del botón cerrar con transition 0.2s
- Smooth scroll en contenido cuando está habilitado
