# Avatar

## Descripción

Muestra la representación del usuario en forma de imagen, inicial o ícono. Útil para reviews, perfiles o listados de usuarios.

**Tipo:** Átomo  
**Categoría:** Identity / Media  
**Tags:** avatar, image, letter, icon, user, profile

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Cuándo Usar
- Representar usuarios/personas con foto, inicial o ícono en listas, encabezados o tarjetas.
- Mostrar identidad en reviews, comentarios o dashboards.

## Mejores Prácticas
- Siempre incluye `alt` descriptivo en imágenes; si no hay foto, usa inicial o ícono como fallback.
- Mantén consistencia de tamaño (base o `-md`) según densidad del layout.
- Evita combinar múltiples avatares muy juntos sin spacing; usa utilidades de margen.

## Dependencias
- Clases `eva-3-avatar` y modificadores `-image`, `-letter`, `-icon`, `-md` provistos por EVA.
- Íconos via `eva-3-icon-*`; colores de fondo/texto definidos en tokens de marca.

## Estructura HTML

```html
<div class="eva-3-avatar -[tipo] -[tamaño] [clases-adicionales]">
  <img class="avatar-image" src="[url]" alt="Avatar Usuario" />
  <!-- o -->
  <span class="avatar-letter">[Inicial]</span>
  <!-- o -->
  <span class="avatar-icon">
    <i class="eva-3-icon-user"></i>
  </span>
</div>
```

## Variantes (tipo)

### Imagen (-image)
Muestra una foto de usuario.

```html
<div class="eva-3-avatar -image">
  <img class="avatar-image" src="/path/to/avatar.jpg" alt="Avatar Usuario" />
</div>
```

### Letra (-letter)
Muestra una inicial cuando no hay imagen.

```html
<div class="eva-3-avatar -letter">
  <span class="avatar-letter">J</span>
</div>
```

### Ícono (-icon)
Muestra un ícono (por defecto `user`).

```html
<div class="eva-3-avatar -icon">
  <span class="avatar-icon">
    <i class="eva-3-icon-user"></i>
  </span>
</div>
```

## Tamaños

- Default: sin modificador (tamaño base)
- Mediano: `-md`

```html
<div class="eva-3-avatar -image -md">
  <img class="avatar-image" src="/path/to/avatar.jpg" alt="Avatar Usuario" />
</div>
```

### Dimensiones (referencia de estilos)

- Base: 42x42px, texto 24px, borde circular (50%).
- `-md`: 30x30px, texto 16px.

## Estados y notas

- Si usas `-image`, el contenido interno es `<img>` con `src` y `alt`.
- Para `-letter` o `-icon`, el contenido es texto o ícono dentro del `<span>` correspondiente.
- Usa clases adicionales en el contenedor si necesitas alineación o espaciados (p. ej. utilidades EVA UI).
- Colores de fondo: `-icon` y `-letter` usan `var(--brand-primary-3)` de fondo; `-icon` pinta el ícono con `var(--brand-primary-1)` y `-letter` el texto en `var(--color-white)`.

## Ejemplos rápidos

**Avatar con foto**
```html
<div class="eva-3-avatar -image">
  <img class="avatar-image" src="/ui/inc/images/demo/ada-avatar.jpg" alt="Avatar Usuario" />
</div>
```

**Avatar con letra**
```html
<div class="eva-3-avatar -letter">
  <span class="avatar-letter">J</span>
</div>
```

**Avatar con ícono (-md)**
```html
<div class="eva-3-avatar -icon -md">
  <span class="avatar-icon">
    <i class="eva-3-icon-user"></i>
  </span>
</div>
```

## Dependencias

- Íconos EVA UI (por defecto `user`).