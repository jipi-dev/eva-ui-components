# Eva Button Ghost System

El sistema de botones Ghost Eva proporciona botones transparentes con bordes para acciones secundarias y casos donde necesitas un impacto visual más ligero. Los botones están disponibles tanto para React/TypeScript como para HTML puro.

## Instalación y Configuración

### CSS Required
```html
<!-- Incluir en el <head> de tu HTML -->
<link rel="stylesheet" href="./eva/eva-core.min.css">
```

### Para React/TypeScript
```tsx
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';
```

## Ejemplos de Uso

### React/TypeScript

#### Uso Básico
```tsx
import React from 'react';
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';

function MyComponent() {
  return (
    <div>
      {/* Botón ghost básico */}
      <ButtonGhost size="lg" variant="">
        Acción secundaria
      </ButtonGhost>
      
      {/* Botón ghost con variante darken */}
      <ButtonGhost size="md" variant="darken">
        Más información
      </ButtonGhost>
      
      {/* Botón ghost deshabilitado */}
      <ButtonGhost size="lg" variant="" disabled>
        No disponible
      </ButtonGhost>
    </div>
  );
}
```

#### Botones Ghost con Iconos
```tsx
import React from 'react';
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';

function ButtonGhostExamples() {
  return (
    <div>
      {/* Botón ghost con icono a la izquierda */}
      <ButtonGhost size="lg" variant="" icon="info">
        Más detalles
      </ButtonGhost>
      
      {/* Botón ghost solo con icono */}
      <ButtonGhost size="md" variant="darken" iconOnly icon="close" />
      
      {/* Botón ghost con flecha siguiente */}
      <ButtonGhost size="lg" variant="lighten" next>
        Explorar más
      </ButtonGhost>
      
      {/* Botón ghost con icono personalizado */}
      <ButtonGhost size="md" variant="" icon="download">
        Descargar gratis
      </ButtonGhost>
    </div>
  );
}
```

#### Botones Ghost como Enlaces
```tsx
import React from 'react';
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';

function ButtonGhostLinks() {
  return (
    <div>
      {/* Botón ghost como enlace externo */}
      <ButtonGhost size="lg" variant="" href="https://example.com">
        Sitio web
      </ButtonGhost>
      
      {/* Botón ghost como enlace interno */}
      <ButtonGhost size="md" variant="lighten" href="/help" icon="question-circle">
        Centro de ayuda
      </ButtonGhost>
      
      {/* Botón ghost como enlace con icono */}
      <ButtonGhost size="lg" variant="darken" href="/contact" icon="mail">
        Contactar soporte
      </ButtonGhost>
    </div>
  );
}
```

#### Estados de Botón Ghost
```tsx
import React from 'react';
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';

function ButtonGhostStates() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simular operación async
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      {/* Botón ghost normal */}
      <ButtonGhost size="lg" variant="" onClick={handleClick}>
        Procesar
      </ButtonGhost>
      
      {/* Botón ghost en estado de carga */}
      <ButtonGhost size="lg" variant="" loading={loading}>
        {loading ? 'Procesando...' : 'Procesar'}
      </ButtonGhost>
      
      {/* Botón ghost deshabilitado */}
      <ButtonGhost size="lg" variant="" disabled>
        No disponible
      </ButtonGhost>
    </div>
  );
}
```

#### Diferentes Variantes Ghost
```tsx
import React from 'react';
import { ButtonGhost } from './components/ButtonGhost/ButtonGhost';

function ButtonGhostVariants() {
  return (
    <div className="button-group">
      {/* Variante por defecto (sin variante) */}
      <ButtonGhost size="lg" variant="">
        Por defecto
      </ButtonGhost>
      
      {/* Variante darken */}
      <ButtonGhost size="lg" variant="darken">
        Darken
      </ButtonGhost>
      
      {/* Variante lighten */}
      <ButtonGhost size="lg" variant="lighten">
        Lighten
      </ButtonGhost>
      
      {/* Variante white-loyalty */}
      <ButtonGhost size="lg" variant="white-loyalty">
        White Loyalty
      </ButtonGhost>
    </div>
  );
}
```

### HTML Puro

#### Uso Básico
```html
<!-- Botón ghost básico -->
<button class="eva-3-btn-ghost -lg" type="button">
  <span class="btn-text">Acción secundaria</span>
</button>

<!-- Botón ghost con variante darken -->
<button class="eva-3-btn-ghost -md -darken" type="button">
  <span class="btn-text">Más información</span>
</button>

<!-- Botón ghost deshabilitado -->
<button class="eva-3-btn-ghost -lg -disable" type="button">
  <span class="btn-text">No disponible</span>
</button>
```

#### Botones Ghost con Iconos
```html
<!-- Botón ghost con icono a la izquierda -->
<button class="eva-3-btn-ghost -lg" type="button">
  <i class="eva-3-icon-info btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Más detalles</span>
</button>

<!-- Botón ghost solo con icono -->
<button class="eva-3-btn-ghost -md -darken -circle" type="button">
  <i class="eva-3-icon-close btn-icon" aria-hidden="true"></i>
</button>

<!-- Botón ghost con flecha siguiente -->
<button class="eva-3-btn-ghost -lg -lighten" type="button">
  <span class="btn-text">Explorar más</span>
  <i class="eva-3-icon-chevron-right btn-icon" aria-hidden="true"></i>
</button>

<!-- Botón ghost con icono personalizado -->
<button class="eva-3-btn-ghost -md" type="button">
  <i class="eva-3-icon-download btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Descargar gratis</span>
</button>
```

#### Botones Ghost como Enlaces
```html
<!-- Botón ghost como enlace externo -->
<a class="eva-3-btn-ghost -lg" href="https://example.com" target="_blank" rel="noopener">
  <span class="btn-text">Sitio web</span>
</a>

<!-- Botón ghost como enlace interno -->
<a class="eva-3-btn-ghost -md -lighten" href="/help">
  <i class="eva-3-icon-question-circle btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Centro de ayuda</span>
</a>

<!-- Botón ghost como enlace con icono -->
<a class="eva-3-btn-ghost -lg -darken" href="/contact">
  <i class="eva-3-icon-mail btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Contactar soporte</span>
</a>
```

#### Estados de Botón Ghost
```html
<!-- Botón ghost normal -->
<button class="eva-3-btn-ghost -lg" type="button">
  <span class="btn-text">Procesar</span>
</button>

<!-- Botón ghost en estado de carga -->
<button class="eva-3-btn-ghost -lg -loading" type="button">
  <span class="btn-status">Procesando...</span>
</button>

<!-- Botón ghost deshabilitado -->
<button class="eva-3-btn-ghost -lg -disable" type="button">
  <span class="btn-text">No disponible</span>
</button>
```

#### Diferentes Variantes Ghost
```html
<div class="button-group">
  <!-- Variante por defecto -->
  <button class="eva-3-btn-ghost -lg" type="button">
    <span class="btn-text">Por defecto</span>
  </button>
  
  <!-- Variante darken -->
  <button class="eva-3-btn-ghost -lg -darken" type="button">
    <span class="btn-text">Darken</span>
  </button>
  
  <!-- Variante lighten -->
  <button class="eva-3-btn-ghost -lg -lighten" type="button">
    <span class="btn-text">Lighten</span>
  </button>
  
  <!-- Variante white-loyalty -->
  <button class="eva-3-btn-ghost -lg -white-loyalty" type="button">
    <span class="btn-text">White Loyalty</span>
  </button>
</div>
```

#### Botones Ghost en Formularios
```html
<form class="form">
  <div class="form-group">
    <label for="feedback">Comentarios</label>
    <textarea id="feedback" name="feedback" rows="4"></textarea>
  </div>
  
  <div class="form-actions">
    <!-- Botón principal -->
    <button class="eva-3-btn -lg -primary" type="submit">
      <span class="btn-text">Enviar comentarios</span>
    </button>
    
    <!-- Botón ghost secundario -->
    <button class="eva-3-btn-ghost -md" type="button">
      <span class="btn-text">Guardar borrador</span>
    </button>
    
    <!-- Botón ghost de cancelar -->
    <button class="eva-3-btn-ghost -md -darken" type="button">
      <i class="eva-3-icon-cross btn-icon" aria-hidden="true"></i>
      <span class="btn-text">Cancelar</span>
    </button>
  </div>
</form>
```

## Propiedades Disponibles

### Tamaños (size)
- `md` - Mediano (32px height)
- `lg` - Grande (48px height)

### Variantes Ghost (variant)
- `""` - Por defecto (borde gris claro, texto oscuro)
- `darken` - Versión más oscura (borde más visible)
- `lighten` - Versión más clara (borde más sutil)
- `white-loyalty` - Versión blanca para programas de lealtad

### Estados
- `disabled` - Botón deshabilitado
- `loading` - Botón en estado de carga
- `iconOnly` - Solo muestra el icono (botón circular)
- `next` - Muestra flecha de siguiente automáticamente

### Funcionalidad
- `href` - Convierte el botón en enlace (`<a>` tag)
- `icon` - Acepta cualquier nombre de icono del sistema Eva
- `onClick` - Manejador de clic para botones
- `inputId` - ID para accesibilidad con inputs de formulario

### Iconos
- `icon` - Acepta cualquier nombre de icono del sistema Eva o `true` para icono por defecto
- Consulta el listado completo en `ICONS.md`

## Ejemplos de Casos de Uso

### Navegación Secundaria
```tsx
// React
<ButtonGhost size="md" variant="lighten" icon="chevron-left">
  Atrás
</ButtonGhost>

<ButtonGhost size="md" variant="" href="/help">
  Ayuda
</ButtonGhost>
```

```html
<!-- HTML -->
<button class="eva-3-btn-ghost -md -lighten">
  <i class="eva-3-icon-chevron-left btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Atrás</span>
</button>

<a class="eva-3-btn-ghost -md" href="/help">
  <span class="btn-text">Ayuda</span>
</a>
```

### Acciones en Cards
```tsx
// React
<ButtonGhost size="md" variant="" icon="bookmark">
  Guardar para después
</ButtonGhost>

<ButtonGhost size="md" variant="darken" iconOnly icon="more" />

<ButtonGhost size="md" variant="lighten" icon="share">
  Compartir
</ButtonGhost>
```

```html
<!-- HTML -->
<button class="eva-3-btn-ghost -md">
  <i class="eva-3-icon-bookmark btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Guardar para después</span>
</button>

<button class="eva-3-btn-ghost -md -darken -circle">
  <i class="eva-3-icon-more btn-icon" aria-hidden="true"></i>
</button>

<button class="eva-3-btn-ghost -md -lighten">
  <i class="eva-3-icon-share btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Compartir</span>
</button>
```

### Formularios con Acciones Múltiples
```tsx
// React
<div className="form-actions">
  <Button size="lg" variant="primary" type="submit">
    Confirmar reserva
  </Button>
  
  <ButtonGhost size="md" variant="" type="button">
    Revisar más tarde
  </ButtonGhost>
  
  <ButtonGhost size="md" variant="darken" href="/terms">
    Ver términos
  </ButtonGhost>
</div>
```

```html
<!-- HTML -->
<div class="form-actions">
  <button class="eva-3-btn -lg -primary" type="submit">
    <span class="btn-text">Confirmar reserva</span>
  </button>
  
  <button class="eva-3-btn-ghost -md" type="button">
    <span class="btn-text">Revisar más tarde</span>
  </button>
  
  <a class="eva-3-btn-ghost -md -darken" href="/terms">
    <span class="btn-text">Ver términos</span>
  </a>
</div>
```

### Filtros y Controles
```tsx
// React
<div className="filter-controls">
  <ButtonGhost size="md" variant="lighten" icon="filter">
    Filtros
  </ButtonGhost>
  
  <ButtonGhost size="md" variant="" icon="grid">
    Ordenar
  </ButtonGhost>
  
  <ButtonGhost size="md" variant="darken" iconOnly icon="refresh" />
</div>
```

```html
<!-- HTML -->
<div class="filter-controls">
  <button class="eva-3-btn-ghost -md -lighten">
    <i class="eva-3-icon-filter btn-icon" aria-hidden="true"></i>
    <span class="btn-text">Filtros</span>
  </button>
  
  <button class="eva-3-btn-ghost -md">
    <i class="eva-3-icon-grid btn-icon" aria-hidden="true"></i>
    <span class="btn-text">Ordenar</span>
  </button>
  
  <button class="eva-3-btn-ghost -md -darken -circle">
    <i class="eva-3-icon-refresh btn-icon" aria-hidden="true"></i>
  </button>
</div>
```

## Clases CSS Disponibles

### Estructura Base
```css
.eva-3-btn-ghost {
  /* Estilos base del botón ghost */
}
```

### Tamaños
```css
.eva-3-btn-ghost.-md { /* Botón mediano */ }
.eva-3-btn-ghost.-lg { /* Botón grande */ }
```

### Variantes Ghost
```css
.eva-3-btn-ghost { /* Por defecto */ }
.eva-3-btn-ghost.-darken { /* Variante más oscura */ }
.eva-3-btn-ghost.-lighten { /* Variante más clara */ }
.eva-3-btn-ghost.-white-loyalty { /* Variante blanca para loyalty */ }
```

### Estados
```css
.eva-3-btn-ghost.-disable { /* Botón deshabilitado */ }
.eva-3-btn-ghost.-loading { /* Botón cargando */ }
.eva-3-btn-ghost.-circle { /* Solo icono */ }
```

### Elementos internos
```css
.btn-text { /* Texto del botón */ }
.btn-icon { /* Icono del botón */ }
.btn-status { /* Estado de carga */ }
```

## Diferencias con Button Regular

### Cuándo usar ButtonGhost
- **Acciones secundarias**: Cuando necesitas una acción menos prominente
- **Sobre fondos coloridos**: Los botones ghost funcionan bien sobre imágenes o fondos
- **Espacios limitados**: Cuando necesitas botones que no dominen visualmente
- **Enlaces importantes**: Para enlaces que necesitan más prominencia que un link simple

### Cuándo usar Button Regular
- **Acciones primarias**: La acción principal de la página o sección
- **Call-to-actions**: Botones que necesitan máxima atención
- **Formularios principales**: Botones de submit en formularios importantes

## Buenas Prácticas

### Accesibilidad
- Asegurar contraste suficiente con el fondo
- Usar `aria-label` para botones con solo icono
- Mantener tamaño mínimo de 44px para touch
- Indicar visualmente el estado del enlace cuando se usa `href`

### Semántica
- Usar para acciones secundarias o de apoyo
- No usar más de 2-3 botones ghost juntos
- Combinar con botones regulares para jerarquía clara
- Usar consistentemente las variantes según el contexto

### Visual
- Los botones ghost son ideales sobre fondos coloridos
- Mantener suficiente espacio entre botones ghost adyacentes
- Considerar el contraste con el fondo al elegir variante

## Integración con Figma

Este sistema de botones ghost está diseñado para integrarse perfectamente con Figma Code Components, permitiendo:

1. **Props tipadas**: TypeScript proporciona autocompletado y validación
2. **Variantes específicas**: Variantes optimizadas para diferentes contextos
3. **Flexibilidad**: Puede funcionar como botón o enlace
4. **Consistencia**: Mismo sistema visual en diseño y código

### Uso en Figma Code Component
```tsx
// El componente puede usarse directamente en Figma
<ButtonGhost size="lg" variant="darken" icon="info">
  Más información
</ButtonGhost>
```