# Marker

## Descripción
Molécula para marcar puntos específicos en mapas (Google Maps, etc). Soporta múltiples variantes: common, POI, location, minimarker.

## Tipo de componente
- **Tipo**: Molécula
- **Categoría**: Labels
- **Tags**: mapa, poi, punto, etiqueta

## Estructura HTML

```html
<div class="eva-3-marker eva-3-shadow-1">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-tip"></span>
  </div>
</div>
```

## Variantes

### Marker común
```html
<div class="eva-3-marker eva-3-shadow-1">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-tip"></span>
  </div>
</div>
```

### Marker activo
```html
<div class="eva-3-marker eva-3-shadow-1 -active">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-tip"></span>
  </div>
</div>
```

### Marker visitado
```html
<div class="eva-3-marker eva-3-shadow-1 -visited">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-tip"></span>
  </div>
</div>
```

### Marker secundario (background)
```html
<div class="eva-3-marker eva-3-shadow-1 -secondary">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-tip"></span>
  </div>
</div>
```

### Con precio
```html
<div class="eva-3-marker eva-3-shadow-1">
  <div class="marker-container">
    <i class="eva-3-icon -rentals-ui"></i>
    <span class="marker-text">$100.000</span>
    <span class="marker-tip"></span>
  </div>
</div>
```

### Minimarker
```html
<div class="eva-3-marker eva-3-shadow-1 -minimarker">
  <div class="marker-container">
    <span class="marker-tip"></span>
  </div>
</div>
```

### Minimarker expandible (con precio)
```html
<div class="eva-3-marker eva-3-shadow-1 -minimarker -expand">
  <div class="marker-container">
    <span class="marker-text">$100</span>
    <span class="marker-tip"></span>
  </div>
</div>
```

### POI Marker
```html
<div class="eva-3-marker eva-3-shadow-1 -poi-marker">
  <div class="marker-container">
    <i class="eva-3-icon -poi"></i>
  </div>
</div>
```

### Location Marker
```html
<div class="eva-3-marker -location-marker">
  <div class="marker-container"></div>
</div>
```

### Con logo (34x30)
```html
<div class="eva-3-marker eva-3-shadow-1">
  <div class="marker-container">
    <img src="/path/to/logo.png" alt="marker logo" />
    <span class="marker-tip"></span>
  </div>
</div>
```

### Con imagen (64x30)
```html
<div class="eva-3-marker eva-3-shadow-1">
  <div class="marker-container">
    <img src="/path/to/image.png" alt="marker" />
    <span class="marker-text">$100.000</span>
    <span class="marker-tip"></span>
  </div>
</div>
```

## Estados

### Normal
Sin clases adicionales

### Activo
```html
<div class="eva-3-marker -active">...</div>
```
Borde y color primario

### Visitado
```html
<div class="eva-3-marker -visited">...</div>
```
Borde e icono en neutral (gris)

### Secundario
```html
<div class="eva-3-marker -secondary">...</div>
```
Opacidad 50% (segundo plano)

### Hover
```html
<div class="eva-3-marker -hover">...</div>
```
Estado hover ejecutado con clase

## Estilos CSS

### Variables
```css
$marker-height: 36px;
$marker-poi-width: 28px;
$minimarker-width: 28px;
$marker-location-width: 28px;
$marker-tip-width: 12px;
$marker-tip-height: 14px;
```

### Clases principales
- `.eva-3-marker`: Contenedor principal
- `.-poi-marker`: Formato POI (circular)
- `.-location-marker`: Marker de ubicación (circular azul)
- `.-minimarker`: Versión mini (28x28px)
- `.-expand`: Minimarker expandible en hover
- `.-active`: Estado activo
- `.-visited`: Estado visitado
- `.-secondary`: Opacidad reducida
- `.-hover`: Hover con clase

## Accesibilidad
- Usar dentro de un contenedor para evitar conflictos con Google Maps
- Incluir alt text en imágenes
- El marker debe ser clickeable (cursor: pointer)

## Dependencias

### Componentes
- Shadow
- Positioning

### Iconos
- pig-offer
- gift
- poi
- rentals-ui

## Notas de implementación

**Importante**: Cualquier marker debe usarse dentro de un contenedor para que sus estilos no se vean afectados por Google Maps:

```html
<div class="marker-wrapper">
  <div class="eva-3-marker">...</div>
</div>
```

### Minimarker expandible
El cambio de tamaño en hover puede mover la posición del marker en el mapa. Considerar esto en la implementación.
