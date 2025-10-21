# Eva Button System

El sistema de botones Eva proporciona componentes de botón consistentes y accesibles para aplicaciones web. Los botones están disponibles tanto para React/TypeScript como para HTML puro.

## Instalación y Configuración

### CSS Required
```html
<!-- Incluir en el <head> de tu HTML -->
<link rel="stylesheet" href="./eva/eva-core.min.css">
```

### Para React/TypeScript
```tsx
import { Button } from './components/Button/Button';
```

## Ejemplos de Uso

### React/TypeScript

#### Uso Básico
```tsx
import React from 'react';
import { Button } from './components/Button/Button';

function MyComponent() {
  return (
    <div>
      {/* Botón primario básico */}
      <Button size="lg" variant="primary">
        Continuar
      </Button>
      
      {/* Botón secundario */}
      <Button size="md" variant="secondary">
        Cancelar
      </Button>
      
      {/* Botón deshabilitado */}
      <Button size="lg" variant="primary" disabled>
        No disponible
      </Button>
    </div>
  );
}
```

#### Botones con Iconos
```tsx
import React from 'react';
import { Button } from './components/Button/Button';

function ButtonExamples() {
  return (
    <div>
      {/* Botón con icono a la izquierda */}
      <Button size="lg" variant="primary" icon="download">
        Descargar
      </Button>
      
      {/* Botón solo con icono */}
      <Button size="md" variant="secondary" iconOnly icon="edit" />
      
      {/* Botón con flecha siguiente */}
      <Button size="lg" variant="primary" next>
        Continuar
      </Button>
      
      {/* Botón con icono personalizado */}
      <Button size="md" variant="link" icon="star">
        Favorito
      </Button>
    </div>
  );
}
```

#### Estados de Botón
```tsx
import React from 'react';
import { Button } from './components/Button/Button';

function ButtonStates() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simular operación async
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      {/* Botón normal */}
      <Button size="lg" variant="primary" onClick={handleClick}>
        Procesar
      </Button>
      
      {/* Botón en estado de carga */}
      <Button size="lg" variant="primary" loading={loading}>
        {loading ? 'Procesando...' : 'Procesar'}
      </Button>
      
      {/* Botón deshabilitado */}
      <Button size="lg" variant="primary" disabled>
        No disponible
      </Button>
    </div>
  );
}
```

#### Diferentes Variantes
```tsx
import React from 'react';
import { Button } from './components/Button/Button';

function ButtonVariants() {
  return (
    <div className="button-group">
      {/* Variante primaria */}
      <Button size="lg" variant="primary">
        Primario
      </Button>
      
      {/* Variante secundaria */}
      <Button size="lg" variant="secondary">
        Secundario
      </Button>
      
      {/* Variante link */}
      <Button size="md" variant="link">
        Enlace
      </Button>
      
      {/* Variante blanca */}
      <Button size="lg" variant="white">
        Blanco
      </Button>
      
      {/* Variante oscura */}
      <Button size="lg" variant="dark">
        Oscuro
      </Button>
    </div>
  );
}
```

### HTML Puro

#### Uso Básico
```html
<!-- Botón primario básico -->
<button class="eva-3-btn -lg -primary" type="button">
  <span class="btn-text">Continuar</span>
</button>

<!-- Botón secundario -->
<button class="eva-3-btn -md -secondary" type="button">
  <span class="btn-text">Cancelar</span>
</button>

<!-- Botón deshabilitado -->
<button class="eva-3-btn -lg -primary -disable" type="button">
  <span class="btn-text">No disponible</span>
</button>
```

#### Botones con Iconos
```html
<!-- Botón con icono a la izquierda -->
<button class="eva-3-btn -lg -primary" type="button">
  <i class="eva-3-icon-download btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Descargar</span>
</button>

<!-- Botón solo con icono -->
<button class="eva-3-btn -md -secondary -circle" type="button">
  <i class="eva-3-icon-edit btn-icon" aria-hidden="true"></i>
</button>

<!-- Botón con flecha siguiente -->
<button class="eva-3-btn -lg -primary" type="button">
  <span class="btn-text">Continuar</span>
  <i class="eva-3-icon-chevron-right btn-icon" aria-hidden="true"></i>
</button>

<!-- Botón con icono personalizado -->
<button class="eva-3-btn -md -link" type="button">
  <i class="eva-3-icon-star btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Favorito</span>
</button>
```

#### Estados de Botón
```html
<!-- Botón normal -->
<button class="eva-3-btn -lg -primary" type="button">
  <span class="btn-text">Procesar</span>
</button>

<!-- Botón en estado de carga -->
<button class="eva-3-btn -lg -primary -loading" type="button">
  <span class="btn-status">Procesando...</span>
</button>

<!-- Botón deshabilitado -->
<button class="eva-3-btn -lg -primary -disable" type="button">
  <span class="btn-text">No disponible</span>
</button>
```

#### Diferentes Variantes
```html
<div class="button-group">
  <!-- Variante primaria -->
  <button class="eva-3-btn -lg -primary" type="button">
    <span class="btn-text">Primario</span>
  </button>
  
  <!-- Variante secundaria -->
  <button class="eva-3-btn -lg -secondary" type="button">
    <span class="btn-text">Secundario</span>
  </button>
  
  <!-- Variante link -->
  <button class="eva-3-btn -md -link" type="button">
    <span class="btn-text">Enlace</span>
  </button>
  
  <!-- Variante blanca -->
  <button class="eva-3-btn -lg -white" type="button">
    <span class="btn-text">Blanco</span>
  </button>
  
  <!-- Variante oscura -->
  <button class="eva-3-btn -lg -dark" type="button">
    <span class="btn-text">Oscuro</span>
  </button>
</div>
```

#### Botones en Formularios
```html
<form class="form">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-actions">
    <!-- Botón de envío -->
    <button class="eva-3-btn -lg -primary" type="submit">
      <i class="eva-3-icon-send btn-icon" aria-hidden="true"></i>
      <span class="btn-text">Enviar</span>
    </button>
    
    <!-- Botón de cancelar -->
    <button class="eva-3-btn -md -secondary" type="button">
      <span class="btn-text">Cancelar</span>
    </button>
  </div>
</form>
```

## Propiedades Disponibles

### Tamaños (size)
- `md` - Mediano (32px height)
- `lg` - Grande (48px height)

### Variantes (variant)
- `primary` - Botón primario (azul, para acciones principales)
- `secondary` - Botón secundario (gris, para acciones secundarias)
- `link` - Botón estilo enlace (sin fondo, para acciones terciarias)
- `white` - Botón blanco (para fondos oscuros)
- `dark` - Botón oscuro (para fondos claros)

### Estados
- `disabled` - Botón deshabilitado
- `loading` - Botón en estado de carga
- `iconOnly` - Solo muestra el icono (botón circular)
- `next` - Muestra flecha de siguiente automáticamente

### Iconos
- `icon` - Acepta cualquier nombre de icono del sistema Eva o `true` para icono por defecto
- Consulta el listado completo en `ICONS.md`

## Ejemplos de Casos de Uso

### Navegación
```tsx
// React
<Button size="lg" variant="primary" next>
  Continuar al pago
</Button>

<Button size="md" variant="link" icon="chevron-left">
  Volver
</Button>
```

```html
<!-- HTML -->
<button class="eva-3-btn -lg -primary">
  <span class="btn-text">Continuar al pago</span>
  <i class="eva-3-icon-chevron-right btn-icon" aria-hidden="true"></i>
</button>

<button class="eva-3-btn -md -link">
  <i class="eva-3-icon-chevron-left btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Volver</span>
</button>
```

### Acciones de Contenido
```tsx
// React
<Button size="md" variant="secondary" icon="bookmark">
  Guardar
</Button>

<Button size="md" variant="link" icon="share">
  Compartir
</Button>

<Button size="md" variant="secondary" iconOnly icon="more" />
```

```html
<!-- HTML -->
<button class="eva-3-btn -md -secondary">
  <i class="eva-3-icon-bookmark btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Guardar</span>
</button>

<button class="eva-3-btn -md -link">
  <i class="eva-3-icon-share btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Compartir</span>
</button>

<button class="eva-3-btn -md -secondary -circle">
  <i class="eva-3-icon-more btn-icon" aria-hidden="true"></i>
</button>
```

### Formularios
```tsx
// React
<Button size="lg" variant="primary" type="submit" icon="checkmark">
  Confirmar reserva
</Button>

<Button size="md" variant="secondary" type="button">
  Cancelar
</Button>
```

```html
<!-- HTML -->
<button class="eva-3-btn -lg -primary" type="submit">
  <i class="eva-3-icon-checkmark btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Confirmar reserva</span>
</button>

<button class="eva-3-btn -md -secondary" type="button">
  <span class="btn-text">Cancelar</span>
</button>
```

## Clases CSS Disponibles

### Estructura Base
```css
.eva-3-btn {
  /* Estilos base del botón */
}
```

### Tamaños
```css
.eva-3-btn.-md { /* Botón mediano */ }
.eva-3-btn.-lg { /* Botón grande */ }
```

### Variantes
```css
.eva-3-btn.-primary { /* Botón primario */ }
.eva-3-btn.-secondary { /* Botón secundario */ }
.eva-3-btn.-link { /* Botón enlace */ }
.eva-3-btn.-white { /* Botón blanco */ }
.eva-3-btn.-dark { /* Botón oscuro */ }
```

### Estados
```css
.eva-3-btn.-disable { /* Botón deshabilitado */ }
.eva-3-btn.-loading { /* Botón cargando */ }
.eva-3-btn.-circle { /* Solo icono */ }
```

### Elementos internos
```css
.btn-text { /* Texto del botón */ }
.btn-icon { /* Icono del botón */ }
.btn-status { /* Estado de carga */ }
```

## Buenas Prácticas

### Accesibilidad
- Usar `type` apropiado (`button`, `submit`, `reset`)
- Incluir `aria-label` para botones con solo icono
- Mantener contraste adecuado con el fondo
- Asegurar tamaño mínimo de 44px para touch

### Semántica
- Usar `primary` para la acción principal de la página
- Usar `secondary` para acciones de apoyo
- Usar `link` para acciones terciarias o navegación interna
- Mantener consistencia en el uso de iconos

### Performance
- Los estilos se cargan una sola vez
- Los iconos usan fuentes web optimizadas
- Estados de loading previenen múltiples submits

## Integración con Figma

Este sistema de botones está diseñado para integrarse perfectamente con Figma Code Components, permitiendo:

1. **Props tipadas**: TypeScript proporciona autocompletado y validación
2. **Consistencia**: Mismo sistema de botones en diseño y código
3. **Estados**: Todos los estados visuales están implementados
4. **Iconografía**: Integración completa con el sistema de iconos Eva

### Uso en Figma Code Component
```tsx
// El componente puede usarse directamente en Figma
<Button size="lg" variant="primary" icon="star">
  Ejemplo
</Button>
```