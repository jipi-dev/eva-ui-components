# MessageToast

## Descripción
Organismo Toast Message para mostrar contenido contextual temporal. Extiende del componente Message. Se usa para notificaciones efímeras.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Tipo de componente
- **Tipo**: Molécula
- **Categoría**: Messages
- **Tags**: mensajes, alertas, alert, info, success, error, secondary, warning, snackbar

## Estructura HTML

```html
<div class="eva-3-message eva-3-message--toast eva-3-shadow-static -success">
  <i class="eva-3-icon -cross message-close"></i>
  <div class="message-icon-container">
    <i class="eva-3-icon -checkmark-circle-filled message-icon"></i>
  </div>
  <div class="message-header">
    <h5 class="eva-3-heading -h6 message-title">Título del mensaje</h5>
  </div>
  <div class="message-body">
    <div class="eva-3-heading -body-2 message-text">
      Mensaje toast...
    </div>
  </div>
</div>
```

## Variantes de estado

### Info
```html
<div class="eva-3-message eva-3-message--toast -info">
  <i class="eva-3-icon -cross message-close"></i>
  <div class="message-icon-container">
    <i class="eva-3-icon -info-circle-filled message-icon"></i>
  </div>
  <div class="message-header">
    <h5 class="message-title">Título</h5>
  </div>
  <div class="message-body">
    <div class="message-text">Información...</div>
  </div>
</div>
```

### Success
```html
<div class="eva-3-message eva-3-message--toast -success">...</div>
```

### Warning
```html
<div class="eva-3-message eva-3-message--toast -warning">...</div>
```

### Error
```html
<div class="eva-3-message eva-3-message--toast -error">...</div>
```

## Variantes secundarias

### Info Secondary
```html
<div class="eva-3-message eva-3-message--toast -info-secondary">...</div>
```

### Success Secondary
```html
<div class="eva-3-message eva-3-message--toast -success-secondary">...</div>
```

## Opciones de contenido

### Sin título
```html
<div class="eva-3-message eva-3-message--toast -success -no-title">
  <i class="eva-3-icon -cross message-close"></i>
  <div class="message-icon-container">...</div>
  <div class="message-body">
    <div class="message-text">Solo contenido...</div>
  </div>
</div>
```

### Sin contenido (solo título)
```html
<div class="eva-3-message eva-3-message--toast -success -no-content">
  <i class="eva-3-icon -cross message-close"></i>
  <div class="message-icon-container">...</div>
  <div class="message-header">
    <h5 class="message-title">Solo título</h5>
  </div>
</div>
```

## Con accionable (botón)

```html
<div class="eva-3-message eva-3-message--toast -info -with-button">
  <div class="message-icon-container">...</div>
  <div class="message-header">
    <h5 class="message-title">Título</h5>
  </div>
  <div class="message-body">
    <div class="message-text">Texto...</div>
    <div class="message-action">
      <a href="#" class="eva-3-heading -link message-link">Action</a>
    </div>
  </div>
</div>
```

**Nota**: Con `-with-button`, el ícono de cerrar (×) no se muestra.

## Con loading (barra de progreso)

```html
<div class="eva-3-message eva-3-message--toast -success -loading">
  <i class="eva-3-icon -cross message-close"></i>
  <div class="message-icon-container">...</div>
  <div class="message-header">
    <h5 class="message-title">Cargando...</h5>
  </div>
  <div class="message-body">
    <div class="message-text">Procesando...</div>
    <span class="message-loader"></span>
  </div>
</div>
```

## Estilos CSS

### Dimensiones
```css
.eva-3-message--toast {
  max-width: 350px;
  overflow: hidden;
}
```

### Botón de cerrar
```css
.message-close {
  position: absolute;
  top: 20px;
  right: 16px;
  padding: 0 4px;
  cursor: pointer;
}
```

### Loader (barra de progreso)
```css
.-loading .message-loader {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2%;
  height: 4px;
  animation: eva-message-toast-loading 5s infinite;
}
```

### Colores de loader por variante
- **Info**: `--color-white` (sobre fondo oscuro)
- **Info Secondary**: `--color-info-500`
- **Success**: `--color-success-300`
- **Success Secondary**: `--color-success-500`
- **Warning**: `--color-warning-300`
- **Error**: `--brand-secondary-2`

### Clases principales
- `.eva-3-message--toast`: Contenedor toast
- `.-loading`: Estado cargando con barra
- `.-no-content`: Sin contenido
- `.-no-title`: Sin título
- `.-with-button`: Con botón de acción (sin close button)

## Accesibilidad
- El botón cerrar tiene `tabIndex="0"` y `role="presentation"`
- Click en el ícono de cerrar ejecuta `onCloseClick`
- Textos claros y concisos
- Tiempo de auto-cierre recomendado: 5 segundos

## Dependencias

### Componentes
- Message (extiende de este)
- Shadow

### Iconos
- close, cross
- checkmark-circle
- (y todos los iconos de Message)

## Diferencias con Message

| Feature | Message | MessageToast |
|---------|---------|--------------|
| Max width | Sin límite | 350px |
| Botón cerrar | ❌ | ✅ |
| Loading bar | ❌ | ✅ |
| Collapsible | ✅ | ❌ |
| Shadow | Opcional | Static siempre |
| Uso | Contenido estático | Notificaciones temporales |

## Animación de loading

La barra de loading se anima de 0% a 100% en 5 segundos:

```scss
@keyframes eva-message-toast-loading {
  0% { width: 2%; }
  100% { width: 100%; }
}
```

## Responsive

En pantallas large (≥1024px):
```css
@media (min-width: 1024px) {
  .eva-3-message--toast .message-title {
    font-size: 18px; /* h5 en lugar de h6 */
  }
}
```

## Notas
- Max width fijo: 350px
- Sombra estática siempre aplicada
- No soporta modo colapsable
- Ideal para notificaciones de 3-5 segundos
