# Modal Bottom Sheet

## Descripción
Modal desde abajo específico para mobile. Se desliza desde la parte inferior de la pantalla ocupando 50% del viewport por defecto, expandible a 90%.

**Tipo:** Molécula  
**Categoría:** Modals  
**Status:** New  
**Tags:** popup, emergente, ventana, window, overlay, lateral

## Estructura HTML

```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet">
  <div class="sheet-container">
    <!-- Handler visual (barra de swipe) -->
    <!-- Se crea automáticamente con ::before -->
    
    <!-- Título (opcional) -->
    <h4 class="sheet-title">Título</h4>
    
    <!-- Contenido -->
    <div class="sheet-content">
      <p>Contenido del modal</p>
    </div>
    
    <!-- Footer sticky (opcional) -->
    <div class="sheet-footer">
      <button>Acción</button>
    </div>
  </div>
</div>
```

## Variantes

### Básico (50% altura)
```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet">
  <div class="sheet-container">
    <h4 class="sheet-title">Título</h4>
    <div class="sheet-content">
      <p>Contenido</p>
    </div>
  </div>
</div>
```

### Expandido (90% altura)
```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet -expanded">
  <div class="sheet-container">
    <h4 class="sheet-title">Título</h4>
    <div class="sheet-content">
      <!-- Contenido largo con scroll -->
    </div>
  </div>
</div>
```

### Sin Título
```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet -no-title">
  <div class="sheet-container">
    <div class="sheet-content">
      <!-- Contenido sin título -->
    </div>
  </div>
</div>
```

### Con Footer Sticky
```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet">
  <div class="sheet-container">
    <h4 class="sheet-title">Título</h4>
    <div class="sheet-content">
      <p>Contenido</p>
    </div>
    <div class="sheet-footer">
      <button>Confirmar</button>
    </div>
  </div>
</div>
```

## Características

### Handler Visual
El componente incluye automáticamente una barra indicadora (handler) en la parte superior:
- Ancho: 40px
- Alto: 4px
- Color: neutral-400
- Se crea con pseudo-elemento `::before`
- Indica que el modal es arrastrable

### Alturas
- **Default:** max-height 50% del viewport
- **Expandido:** min-height 90% del viewport

### Border Radius
- 20px en las esquinas superiores
- Esquinas inferiores sin radius (pegado al borde)

### Comportamiento de Scroll
- Estado default (50%): overflow hidden, sin scroll
- Estado expandido (90%): overflow-y auto, scroll habilitado

## Mostrar/Ocultar

Para mostrar:
```html
<div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet">
  <!-- contenido -->
</div>
```

También bloquea scroll del body:
```html
<html class="-show-modal-bottom-sheet">
  <body>
    <div class="eva-3-modal-bottom-sheet -show-modal-bottom-sheet">
      <!-- contenido -->
    </div>
  </body>
</html>
```

## Overlay
- Fondo semi-transparente que cubre toda la pantalla
- Click en overlay cierra el modal (si está habilitado)
- Transición suave de 0.3s

## Cuándo Usar

✅ **Usar cuando:**
- Opciones de selección en mobile
- Filtros y configuraciones
- Formularios cortos
- Menús contextuales
- Acciones secundarias que no requieren atención total

❌ **No usar cuando:**
- Contenido crítico que necesita atención completa
- Formularios muy largos
- En desktop (es específico para mobile)

## Mejores Prácticas

1. **Contenido Apropiado:** Ideal para listas, opciones, filtros
2. **Altura Inicial:** Usar 50% para contenido breve, expandir si es necesario
3. **Handler Visible:** El handler indica que puede cerrarse arrastrando hacia abajo
4. **Sin Botón Cerrar:** No incluye botón X, se cierra con gesto o click fuera
5. **Footer Sticky:** Usar para botones de acción importantes

## Estilos CSS

### Variables
- `$sheet-border-radius: 20px`
- `$sheet-handler-width: 40px` (spacing-10)
- `$sheet-handler-height: 4px` (spacing-1)
- `$default-transition: all 0.3s ease-in-out`

### Colores
- Background: white
- Handler: neutral-400
- Border footer: neutral-300

### Transiciones
- Entrada/salida: 0.3s ease-in-out
- Expansión: 0.3s ease-in-out

## Accesibilidad
- `role="presentation"` en el contenedor
- Click en overlay para cerrar (si está habilitado)
- Gestos táctiles para cerrar arrastrando

## Dependencias
- `button` component

## Iconos
- Listados en metadata: `cross`, `close` (pero no usados en el componente)
