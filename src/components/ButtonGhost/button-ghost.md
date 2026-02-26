# Button Ghost Component

## Descripción

Ghost buttons son botones transparentes con solo borde y texto, utilizados para acciones secundarias o terciarias. Proporcionan un peso visual más ligero en comparación con los botones sólidos.

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** ghost, button, secondary, tertiary, outline, loading, disabled

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Cuándo Usar
- Acciones secundarias/terciarias donde se busca menor peso visual.
- Superficies con fondo claro u oscuro (ajustar contraste con variante adecuada).
- Alternativa a `-link` cuando se requiere borde y hit area evidente.

## Mejores Prácticas
- Usa un solo ghost por grupo de acciones para no saturar la interfaz.
- Mantén el copy breve y claro; evita mayúsculas sostenidas largas.
- Combina con tamaños `-md` o `-lg` según jerarquía y contexto.
- Deshabilita con `-disabled` + `disabled` y evita hover en ese estado.

## Dependencias
- Clase base `eva-3-btn-ghost`; modificadores `-primary`, `-secondary`, tamaños `-md|-lg`, estados `-disabled` y `-loading`.
- Íconos opcionales con `.btn-icon` y fuente de íconos EVA.

## Estructura HTML

### Estructura Base

```html
<button class="eva-3-btn-ghost [tamaño] [variante] [estados]">
  <!-- Ícono opcional al inicio -->
  <i class="[clase-icono] btn-icon"></i>
  <!-- Texto del botón -->
  <em class="btn-text">[texto]</em>
</button>
```

## Variantes

### Primary (-primary)
Ghost button primario con borde de color de marca primario.

**CSS Classes:**
- Base: `.eva-3-btn-ghost`
- Modificador: `.-primary`
- Tamaño: `.-lg` o `.-md` (opcional, por defecto es `md`)

**HTML:**
```html
<button class="eva-3-btn-ghost -lg -primary">
  <em class="btn-text">Button Primary</em>
</button>
```

### Secondary (-secondary)
Ghost button secundario con borde de color neutral.

**CSS Classes:**
- Base: `.eva-3-btn-ghost`
- Modificador: `.-secondary`

**HTML:**
```html
<button class="eva-3-btn-ghost -lg -secondary">
  <em class="btn-text">Button Secondary</em>
</button>
```

## Tamaños

### Medium (-md)
Tamaño mediano (opcional, es el valor por defecto).

**CSS Class:** `.-md`

**Especificaciones:**
- Height: 40px
- Padding: 12px 20px
- Font Size: 16px

```html
<button class="eva-3-btn-ghost -md -primary">
  <em class="btn-text">Medium</em>
</button>
```

**Sin especificar tamaño (default a md):**
```html
<button class="eva-3-btn-ghost -primary">
  <em class="btn-text">Medium (por defecto)</em>
</button>
```

### Large (-lg)
Tamaño grande (opcional).

**CSS Class:** `.-lg`

**Especificaciones:**
- Height: 48px
- Padding: 16px 24px
- Font Size: 16px

```html
<button class="eva-3-btn-ghost -lg -primary">
  <em class="btn-text">Large</em>
</button>
```

**Nota**: El tamaño es opcional. Si no se especifica, el botón tomará el tamaño `md` por defecto. Solo se soportan los tamaños `md` y `lg`.

## Estados

### Default
Estado normal con fondo transparente y borde de color.

```html
<button class="eva-3-btn-ghost -lg -primary">
  <em class="btn-text">Default State</em>
</button>
```

### Hover
Al hacer hover, el fondo se llena con el mismo color y el texto se vuelve blanco.

**Comportamiento:**
- Background: Color del borde
- Text Color: #ffffff
- Transform: translateY(-1px)
- Shadow: 0 4px 12px rgba(color, 0.2)

### Disabled (-disabled)
Botón deshabilitado con opacidad reducida.

**CSS Class:** `.-disabled`
**HTML Attribute:** `disabled`

```html
<button class="eva-3-btn-ghost -lg -primary -disabled" disabled>
  <em class="btn-text">Disabled</em>
</button>
```

## Características Especiales

### Botón con Ícono
El ícono puede estar al inicio del texto.

**CSS Class:** `.btn-icon`

```html
<button class="eva-3-btn-ghost -lg -primary">
  <i class="eva-3-icon-edit btn-icon"></i>
  <em class="btn-text">Edit</em>
</button>
```

### Botón con Ícono al Final

```html
<button class="eva-3-btn-ghost -lg -primary">
  <em class="btn-text">Continuar</em>
  <i class="eva-3-icon-chevron-right btn-icon"></i>
</button>
```

## CSS Classes

### Clases Principales

- **Base**: `.eva-3-btn-ghost` - Clase principal del botón ghost

### Clases de Tamaño

- `.-sm` - Tamaño pequeño
- `.-md` - Tamaño mediano (por defecto si no se especifica)
- `.-lg` - Tamaño grande

### Clases de Variante

- `.-primary` - Variante primaria
- `.-secondary` - Variante secundaria

### Clases de Estado

- `.-disabled` - Estado deshabilitado

### Clases de Elementos
### Clases de Tamaño

- `.-md` - Tamaño mediano (por defecto si no se especifica)
- `.-lg` - Tamaño grande

### Clases de Variante

**Primary:**
- `.btn-text` - Texto del botón
- `.btn-icon` - Ícono del botón

## Atributos HTML con Ícono

```html
<button class="eva-3-btn-ghost -lg -primary">
  <i class="eva-3-icon-save btn-icon"></i>
  <em class="btn-text">Guardar borrador</em>
</button>
```

### Ghost Secondary Deshabilitado

```html
<button class="eva-3-btn-ghost -md -secondary -disabled" disabled>
  <em class="btn-text">No disponible</em>
</button>
```

### Ghost Small con Ícono

```html
<button class="eva-3-btn-ghost -sm -primary">
  <i class="eva-3-icon-edit btn-icon"></i>
  <em class="btn-text">Editar</em>
</button>
```

### Ghost Secondary Deshabilitado

```html
<button class="eva-3-btn-ghost -md -secondary -disabled" disabled>
  <em class="btn-text">No disponible</em>
</button>
```

### Ghost en Card Headera un peso visual más ligero
- Ideal para botones de cancelar, reset o acciones alternativas
- No usar como llamado a la acción principal (CTA)
- Funciona bien en headers de cards o toolbars
- Usar cuando se quiere mantener el diseño limpio y minimalista
- Combinar con botones sólidos para establecer jerarquía visual

### Cuándo NO usar Ghost Buttons

- Como botón principal en formularios importantes
- En fondos donde el borde no tenga suficiente contraste
- Para acciones críticas que requieren máxima visibilidad
- En contextos donde se necesita máxima atención del usuario

## Accesibilidad

Para este componente es recomendable utilizar las siguientes etiquetas:

- **aria-role**: Definir el rol del botón
- **aria-disabled**: Indicar si el botón está deshabilitado
- **aria-label**: Proporcionar etiquetas descriptivas para botones con solo ícono

### Accessibility Guidelines

- Siempre incluir texto significativo en el elemento `btn-text`
- Asegurar suficiente contraste entre el borde y el fondo (mínimo 3:1 para WCAG AA)
- Asegurar suficiente contraste de texto (mínimo 4.5:1 para WCAG AA)
- Soporte para navegación por teclado
- El estado hover debe ser visible incluso sin color
- Usar `aria-disabled` cuando el botón esté deshabilitado
- Proporcionar `aria-label` para botones con solo ícono

## Diferencias con Button Regular

| Característica | Button Regular | Button Ghost |
|----------------|----------------|--------------|
| Fondo | Sólido de color | Transparente |
| Borde | Sin borde visible | Borde de 1px |
| Peso visual | Alto | Bajo |
| Uso principal | Acciones primarias | Acciones secundarias/terciarias |
| Hover | Darkening del fondo | Relleno con color |
| Jerarquía | Alta | Media-Baja |
