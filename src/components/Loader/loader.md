# Loader

## Descripción

Indicador de carga animado (spinner circular) para mostrar mientras se cargan recursos. Soporta 2 tamaños (medium default, large), color blanco para fondos oscuros, texto opcional debajo, y opción de pausar la animación para optimizar performance.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<div class="eva-3-loader [-lg] [-white] [-stop] [clases-adicionales]">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label [-lg]">Cargando...</span>
</div>
```

- Clase base: `eva-3-loader`.
- Modificadores de tamaño: `-lg` (large, 42px), sin clase (medium, 34px).
- Modificadores de color: `-white` (para fondos oscuros).
- Modificadores de estado: `-stop` (pausa la animación).
- Label opcional: `loader-label` (texto debajo del spinner).

## Uso básico

### Loader default (medium)

```html
<div class="eva-3-loader">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

- **Tamaño**: 34px x 34px.
- **Color**: `--brand-primary-3` (azul).

## Tamaños

### Medium (default, sin clase)

```html
<div class="eva-3-loader">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

- **Tamaño**: 34px x 34px.
- **Border-width del spinner**: 3px.

### Large (`-lg`)

```html
<div class="eva-3-loader -lg">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

- **Tamaño**: 42px x 42px.
- **Border-width del spinner**: 4px.

## Variantes

### Color blanco (`-white`)

```html
<div class="eva-3-loader -white">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

**Uso**: Para fondos oscuros (ej: modals con overlay oscuro, backgrounds oscuros).
- **Border color**: `--color-white`.
- **Circle after color**: `--color-white`.

### Con texto (label)

```html
<div class="eva-3-loader">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label">Cargando...</span>
</div>
```

- **Texto**: `loader-label` con margin-top `$spacing-2`.
- **Font**: `subtitle-s` (texto pequeño, medium weight).
- **Color**: `--brand-primary-3` (mismo que spinner).

### Label large (`-lg`)

```html
<div class="eva-3-loader -lg">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label -lg">Cargando recursos...</span>
</div>
```

- **Font**: `h6` (heading 6, más grande).
- **Margin-top**: Mismo que medium.

**Nota**: La clase `-lg` se aplica **también** al `loader-label` para mantener proporciones.

### Animación pausada (`-stop`)

```html
<div class="eva-3-loader -stop">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

**Uso**: Para **optimizar performance** cuando el loader no está visible (ej: en tabs ocultos, modals cerrados).
- **Animación**: `animation: none !important` en todos los elementos animados.

**Importante**: Recordar **quitar** la clase `-stop` cuando el loader vuelva a ser visible.

## Combinaciones

### Large + white

```html
<div class="eva-3-loader -lg -white">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

### Large + white + label

```html
<div class="eva-3-loader -lg -white">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label -lg">Procesando...</span>
</div>
```

**Nota**: Agregar clase `-lg` también al label para font-size apropiado.

### Medium + label + stop

```html
<div class="eva-3-loader -stop">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label">Pausado</span>
</div>
```

## Notas de estilo (SCSS)

### Animaciones

#### `eva-loader-rotate`

```scss
@keyframes eva-loader-rotate {
  to { transform: rotate(360deg); }
}
```

- Aplicada a: `loader-container`.
- Duración: `1568ms` linear infinite.
- Efecto: Rotación continua del contenedor (360°).

#### `loader-mask`

```scss
@keyframes loader-mask {
  12.5% { transform: rotate(135deg);  }
  25% { transform: rotate(270deg);  }
  37.5% { transform: rotate(405deg);  }
  50% { transform: rotate(540deg);  }
  62.5% { transform: rotate(675deg);  }
  75% { transform: rotate(810deg);  }
  87.5% { transform: rotate(945deg);  }
  to { transform: rotate(1080deg); }
}
```

- Aplicada a: `loader-spinner`.
- Duración: `5332ms` cubic-bezier(0.4, 0, 0.2, 1) infinite both.
- Efecto: Rotación progresiva (8 pasos hasta 1080°).

#### `left-spin` y `right-spin`

```scss
@keyframes left-spin {
  from { transform: rotate(130deg); }
  50% { transform: rotate(-5deg); }
  to { transform: rotate(130deg); }
}

@keyframes right-spin {
  from { transform: rotate(-130deg); }
  50% { transform: rotate(5deg); }
  to { transform: rotate(-130deg); }
}
```

- Aplicadas a: `spinner-circle` dentro de `spinner-left` y `spinner-right`.
- Duración: `1333ms` cubic-bezier(0.4, 0, 0.2, 1) infinite both.
- Efecto: Oscilación de los círculos (left: 130° → -5° → 130°, right: -130° → 5° → -130°).

### Estructura del spinner

- **loader-container**: Contenedor rotante (animation `eva-loader-rotate`).
- **loader-spinner**: Máscara rotante (animation `loader-mask`), color `--brand-primary-3`.
- **spinner-container**: Mitad izquierda/derecha (overflow hidden).
- **spinner-circle**: Semicírculo con border (animation `left-spin`/`right-spin`), pseudo-elemento `::after` con dot en el extremo.

### Tamaños

- **Medium**: 34px container, 3px border.
- **Large**: 42px container, 4px border.

### Label font

- **Medium**: `subtitle-s` (texto pequeño).
- **Large**: `h6` (heading 6).
- **Color**: `--brand-primary-3` (azul) o `--color-white` (si `-white`).

## Accesibilidad

### Texto alternativo (label)

Si el loader tiene texto (`loader-label`), es suficiente para screen readers. Si **NO** tiene texto, agregar `aria-label`:

```html
<div class="eva-3-loader" aria-label="Cargando">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</div>
```

### Role y aria-live

Para anunciar cambios de estado:

```html
<div class="eva-3-loader" role="status" aria-live="polite" aria-label="Cargando contenido">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label">Cargando...</span>
</div>
```

- `role="status"`: Indica región de estado.
- `aria-live="polite"`: Anuncia cambios cuando el screen reader esté libre.

### Animación y motion sickness

Usuarios con `prefers-reduced-motion` pueden experimentar mareos con animaciones continuas. Considerar pausar animación:

```css
@media (prefers-reduced-motion: reduce) {
  .eva-3-loader {
    animation: none !important;
  }
  .eva-3-loader * {
    animation: none !important;
  }
}
```

## Dependencias

- Variables: `--brand-primary-3`, `--color-white`, `$spacing-*`.
- Mixins: `eva-text-as` (para label font).
- Clase base: `eva-3-loader`.
- Categoría: `state` (type: atoms).

## Ejemplos completos

### Loader centrado en página

```html
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <div class="eva-3-loader -lg">
    <div class="loader-container">
      <div class="loader-spinner">
        <div class="spinner-container spinner-left">
          <div class="spinner-circle"></div>
        </div>
        <div class="spinner-container spinner-right">
          <div class="spinner-circle"></div>
        </div>
      </div>
    </div>
    <span class="loader-label -lg">Cargando...</span>
  </div>
</div>
```

### Loader en modal (fondo oscuro)

```html
<div class="modal-overlay" style="background: rgba(0,0,0,0.8);">
  <div class="modal-content">
    <div class="eva-3-loader -lg -white">
      <div class="loader-container">
        <div class="loader-spinner">
          <div class="spinner-container spinner-left">
            <div class="spinner-circle"></div>
          </div>
          <div class="spinner-container spinner-right">
            <div class="spinner-circle"></div>
          </div>
        </div>
      </div>
      <span class="loader-label -lg">Procesando pago...</span>
    </div>
  </div>
</div>
```

### Loader en botón (inline)

```html
<button class="eva-3-button -lg -primary" disabled style="display: flex; align-items: center; gap: 8px;">
  <div class="eva-3-loader" style="display: inline-block;">
    <div class="loader-container">
      <div class="loader-spinner">
        <div class="spinner-container spinner-left">
          <div class="spinner-circle"></div>
        </div>
        <div class="spinner-container spinner-right">
          <div class="spinner-circle"></div>
        </div>
      </div>
    </div>
  </div>
  Enviando...
</button>
```

### Loader con control de animación (JavaScript)

```html
<div id="my-loader" class="eva-3-loader -lg -stop">
  <div class="loader-container">
    <div class="loader-spinner">
      <div class="spinner-container spinner-left">
        <div class="spinner-circle"></div>
      </div>
      <div class="spinner-container spinner-right">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
  <span class="loader-label -lg">Cargando...</span>
</div>

<script>
  const loader = document.getElementById('my-loader');
  // Reanudar animación
  loader.classList.remove('-stop');
  
  // Pausar animación (después de 5 segundos)
  setTimeout(() => {
    loader.classList.add('-stop');
  }, 5000);
</script>
```
