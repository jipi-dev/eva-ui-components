# Button Component

## Descripción

Nuestro sistema contempla botones con diferencias en el uso de color, tamaño y forma. Cada uno de ellos tiene un uso particular. Los botones son utilizados para acciones principales y secundarias en la interfaz.

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** button, primary, secondary, link, white, dark, loading, disabled

## Cuándo Usar
- Llamados a la acción primarios o secundarios en flujos transaccionales.
- Disparar acciones en formularios, modales y tarjetas.
- Estados de loading cuando la acción demora y se requiere feedback inmediato.

## Mejores Prácticas
- Un CTA primario por pantalla; secundarios para acciones de menor jerarquía.
- Mantén textos cortos en verbo + objeto ("Comprar", "Guardar cambios").
- Deshabilita (`disabled` + `-disable`) cuando la acción no está disponible; usa `-loading` para procesos en curso.
- Alinea íconos con `btn-icon` y evita más de un ícono por lado.

## Dependencias
- Clase base `eva-3-btn`; modificadores `-primary`, `-secondary`, `-link`, `-white`, `-dark`, tamaños `-md|-lg`, estados `-disable|-loading`.
- Íconos opcionales con clases EVA (`eva-3-icon-*`).

## Estructura HTML

### Estructura Base

```html
<button class="eva-3-btn [tamaño] [variante] [estados] [clases-adicionales]">
  <!-- Ícono opcional al inicio -->
  <i class="[clase-icono] btn-icon"></i>
  <!-- Texto del botón -->
  <em class="btn-text">[texto]</em>
  <!-- Ícono siguiente opcional -->
  <i class="eva-3-icon-chevron-right btn-icon"></i>
  <!-- Estado de carga opcional -->
  <span class="btn-status">Cargando</span>
</button>
```

### Estructura Botón Circular (iconOnly)

```html
<button class="eva-3-btn [tamaño] [variante] -circle">
  <i class="[clase-icono] btn-icon"></i>
</button>
```

## Variantes

### Primary (-primary)
Botón principal utilizado para acciones primarias con color de marca primario.

**CSS Classes:**
- Base: `.eva-3-btn`
- Modificador: `.-primary`
- Tamaño: `.-lg` o `.-md` (opcional, por defecto es `md`)

**HTML:**
```html
<button class="eva-3-btn -lg -primary">
  <em class="btn-text">Botón Primario</em>
</button>
```

### Secondary (-secondary)
Botón secundario para acciones alternativas con color de marca secundario.

**CSS Classes:**
- Base: `.eva-3-btn`
- Modificador: `.-secondary`

**HTML:**
```html
<button class="eva-3-btn -lg -secondary">
  <em class="btn-text">Botón Secundario</em>
</button>
```

### Link (-link)
Botón estilo enlace, sin fondo. Se usa para acciones que no requieren énfasis visual.

**CSS Classes:**
- Base: `.eva-3-btn`
- Modificador: `.-link`

**HTML:**
```html
<button class="eva-3-btn -lg -link">
  <em class="btn-text">Botón Link</em>
</button>
```

### White (-white)
Botón blanco, usado sobre fondos oscuros.

**CSS Classes:**
- Base: `.eva-3-btn`
- Modificador: `.-white`

**HTML:**
```html
<button class="eva-3-btn -lg -white">
  <em class="btn-text">Botón White</em>
</button>
```

### Dark (-dark)
Botón dark, solo para contexto Loyalty. Esta variante está diseñada específicamente para el contexto de Loyalty.

**CSS Classes:**
- Base: `.eva-3-btn`
- Modificador: `.-dark`

**HTML:**
```html
<button class="eva-3-btn -lg -dark">
  <em class="btn-text">Botón Dark</em>
</button>
```

## Tamaños

### Medium (-md)
Tamaño mediano (opcional, es el valor por defecto).

**CSS Class:** `.-md`

```html
<button class="eva-3-btn -md -primary">
  <em class="btn-text">Medium</em>
</button>
```

**Sin especificar tamaño (default a md):**
```html
<button class="eva-3-btn -primary">
  <em class="btn-text">Medium (por defecto)</em>
</button>
```

### Large (-lg)
Tamaño grande (opcional).

**CSS Class:** `.-lg`

```html
<button class="eva-3-btn -lg -primary">
  <em class="btn-text">Large</em>
</button>
```

**Nota**: El tamaño es opcional. Si no se especifica, el botón tomará el tamaño `md` por defecto. Solo se soportan los tamaños `md` y `lg`.

## Estados

### Default
Estado normal interactivo.

```html
<button class="eva-3-btn -lg -primary">
  <em class="btn-text">Button</em>
</button>
```

### Disabled (-disable)
Botón deshabilitado (usa atributo `disabled` de HTML).

**CSS Class:** `.-disable`
**HTML Attribute:** `disabled`

```html
<button class="eva-3-btn -lg -primary -disable" disabled>
  <em class="btn-text">Botón Deshabilitado</em>
</button>
```

### Loading (-loading)
Estado de carga, muestra `btn-status` y oculta `btn-text`. Los botones poseen un estado que nos informan al momento del click, que el navegador se encuentra procesando información.

**CSS Class:** `.-loading`

```html
<button class="eva-3-btn -lg -primary -loading">
  <span class="btn-status">Cargando</span>
</button>
```

**Nota**: Cuando el botón está en estado loading, el texto (`btn-text`) se oculta y solo se muestra `btn-status`.

## Características Especiales

### Botón con Ícono
El ícono puede estar al inicio del texto.

**CSS Class:** `.btn-icon`

```html
<button class="eva-3-btn -lg -primary">
  <i class="eva-3-icon-edit btn-icon"></i>
  <em class="btn-text">Botón</em>
</button>
```

### Botón con Ícono Siguiente (next)
Ícono chevron-right al final del texto.

```html
<button class="eva-3-btn -lg -primary">
  <em class="btn-text">Ver detalle</em>
  <i class="eva-3-icon-chevron-right btn-icon"></i>
</button>
```

### Icon Only (-circle)
Botón circular con solo un ícono. Nueva variante botón circular: Se agregó la posibilidad de utilizar los botones de EVA UI circulares, con un solo icono.

Es importante recordar que el botón solo debe contener un ícono dentro.

Es compatible con las versiones `-primary` y `-secondary`.

**CSS Class:** `.-circle`

```html
<button class="eva-3-btn -lg -primary -circle">
  <i class="eva-3-icon-search btn-icon"></i>
</button>
```

```html
<button class="eva-3-btn -lg -secondary -circle">
  <i class="eva-3-icon-edit btn-icon"></i>
</button>
```

### Botón como Enlace (href)
El botón puede renderizarse como un elemento `<a>` si se proporciona un `href` en lugar de un `onClick`.

```html
<a href="/ruta" class="eva-3-btn -lg -primary">
  <em class="btn-text">Ir a página</em>
</a>
```

## CSS Classes

### Clases Principales

- **Base**: `.eva-3-btn` - Clase principal del botón

### Clases de Tamaño

- `.-md` - Tamaño mediano (por defecto si no se especifica)
- `.-lg` - Tamaño grande

### Clases de Variante

- `.-primary` - Variante primaria
- `.-secondary` - Variante secundaria
- `.-link` - Variante link
- `.-white` - Variante white
- `.-dark` - Variante dark (solo Loyalty)

### Clases de Estado

- `.-disable` - Estado deshabilitado
- `.-loading` - Estado de carga
- `.-circle` - Botón circular (iconOnly)

### Clases de Elementos

- `.btn-text` - Texto del botón
- `.btn-icon` - Ícono del botón
- `.btn-status` - Estado de carga del botón

## Atributos HTML

El botón acepta todos los atributos HTML estándar:

- `disabled`: Deshabilitar el botón
- `type`: Tipo de botón (button, submit, reset)
- `onClick`: Event handler (solo en React, no aplica en HTML puro)
- `href`: Si se proporciona, el botón se renderiza como `<a>` en lugar de `<button>`

## Ejemplos Completos

### Botón Primary con Ícono

```html
<button class="eva-3-btn -lg -primary">
  <i class="eva-3-icon-save btn-icon"></i>
  <em class="btn-text">Guardar</em>
</button>
```

### Botón Secondary Deshabilitado

```html
<button class="eva-3-btn -lg -secondary -disable" disabled>
  <em class="btn-text">Cancelar</em>
</button>
```

### Botón en Estado de Carga

```html
<button class="eva-3-btn -lg -primary -loading">
  <span class="btn-status">Cargando</span>
</button>
```

### Botón Circular con Ícono

```html
<button class="eva-3-btn -lg -primary -circle" aria-label="Buscar">
  <i class="eva-3-icon-search btn-icon"></i>
</button>
```

### Botón con Ícono Siguiente

```html
<button class="eva-3-btn -lg -primary">
  <em class="btn-text">Ver detalle</em>
  <i class="eva-3-icon-chevron-right btn-icon"></i>
</button>
```

### Botón como Enlace

```html
<a href="/productos" class="eva-3-btn -lg -primary">
  <em class="btn-text">Ver productos</em>
</a>
```


## Best Practices

### Usage Guidelines

- Usar botones Primary para acciones principales (Guardar, Enviar, Continuar)
- Usar botones Secondary para acciones alternativas (Cancelar, Volver, Reset)
- Limitar a un botón Primary por vista/sección
- Agrupar acciones relacionadas juntas
- Usar tamaños consistentes dentro del mismo contexto
- Usar botones Link para acciones menos importantes
- Usar botones White sobre fondos oscuros
- Usar botones Dark solo en contexto Loyalty

## Accesibilidad

Para este componente es recomendable utilizar las siguientes etiquetas:

- **aria-role**: Definir el rol del botón
- **aria-disabled**: Indicar si el botón está deshabilitado
- **aria-hidden**: Ocultar elementos decorativos de los lectores de pantalla
- **aria-label** o **TITLE**: Proporcionar etiquetas descriptivas, especialmente para botones con solo ícono

### Accessibility Guidelines

- Siempre incluir texto significativo en el elemento `btn-text`
- Usar `aria-label` apropiado para botones con solo ícono
- Asegurar suficiente contraste de color
- Soporte para navegación por teclado
- Usar `aria-disabled` cuando el botón esté deshabilitado
- Proporcionar `title` o `aria-label` para botones circulares

Para más información sobre su correcta implementación, dirigirse a [Accesibilidad](https://eva.despegar.design/eva/docs/ui/accessibility/)
