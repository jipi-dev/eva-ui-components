# Modal Bottom Sheet - React

## Importación

```jsx
import ModalBottomSheet from '@despegar/eva-ui/ModalBottomSheet';
```

## Descripción
Bottom sheet para mobile que aparece desde el borde inferior, con título opcional, expansión al 90%, y footer sticky.

**Tipo:** Organismo  
**Categoría:** Overlays / Sheets  
**Tags:** react, modal, bottom-sheet, mobile, overlay, sticky-footer

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Flujos mobile donde se necesita mostrar opciones, filtros o formularios breves sin salir de la pantalla.
- Selección contextual o acciones rápidas que no requieren un modal centrado.

## Mejores Prácticas
- Controla `show` y `onClose` externamente; si usas `closeOnClickOutside`, asegúrate de manejar el source `'overlay'`.
- Usa `expanded` para contenidos largos con scroll y `showStickyFooter` para CTAs persistentes.
- Mantén títulos cortos; si no hay título, oculta el header pasando string vacío.

## Dependencias
- Overlay, animaciones y handler visual (barra superior) provistos por la librería.
- Sin botón de cierre integrado; el cierre se maneja por overlay o acciones internas.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | `boolean` | `false` | Controla la visibilidad del modal |
| `onClose` | `function` | `() => {}` | Callback que se ejecuta al cerrar. Recibe `(event, 'overlay')` |
| `title` | `string` | `''` | Título del modal. Si está vacío, no se muestra |
| `expanded` | `boolean` | `false` | Expande el modal a 90% de altura |
| `showStickyFooter` | `boolean` | `false` | Muestra footer sticky en la parte inferior |
| `footer` | `node` | `''` | Contenido del footer |
| `closeOnClickOutside` | `boolean` | `false` | Permite cerrar haciendo click en el overlay |
| `className` | `string` | `''` | Clases CSS adicionales |
| `children` | `any` | `''` | Contenido del modal |

## Uso Básico

```jsx
import React, { useState } from 'react';
import ModalBottomSheet from '@despegar/eva-ui/ModalBottomSheet';

function MyComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>
        Abrir Bottom Sheet
      </button>

      <ModalBottomSheet
        show={show}
        onClose={() => setShow(false)}
        title="Selecciona una opción"
      >
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </ModalBottomSheet>
    </>
  );
}
```

## Ejemplos

### Modal Expandido

```jsx
<ModalBottomSheet
  show={show}
  onClose={() => setShow(false)}
  title="Contenido Largo"
  expanded
>
  <div style={{ height: '1000px' }}>
    <p>Contenido largo con scroll...</p>
  </div>
</ModalBottomSheet>
```

### Con Footer Sticky

```jsx
<ModalBottomSheet
  show={show}
  onClose={() => setShow(false)}
  title="Formulario"
  showStickyFooter
  footer={
    <button onClick={handleSubmit}>
      Guardar
    </button>
  }
>
  <form>
    <input type="text" placeholder="Nombre" />
    <input type="email" placeholder="Email" />
  </form>
</ModalBottomSheet>
```

### Sin Título

```jsx
<ModalBottomSheet
  show={show}
  onClose={() => setShow(false)}
  title=""
>
  <p>Contenido sin título</p>
</ModalBottomSheet>
```

### Con Cierre por Click Fuera

```jsx
<ModalBottomSheet
  show={show}
  onClose={(event, source) => {
    console.log('Cerrado desde:', source); // 'overlay'
    setShow(false);
  }}
  title="Opciones"
  closeOnClickOutside
>
  <p>Click fuera para cerrar</p>
</ModalBottomSheet>
```

### Modal con Lista de Opciones

```jsx
function OptionsSheet() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, label: 'Opción 1' },
    { id: 2, label: 'Opción 2' },
    { id: 3, label: 'Opción 3' }
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setShow(false);
  };

  return (
    <>
      <button onClick={() => setShow(true)}>
        Seleccionar: {selected?.label || 'Ninguna'}
      </button>

      <ModalBottomSheet
        show={show}
        onClose={() => setShow(false)}
        title="Selecciona una opción"
      >
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {options.map(option => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              style={{
                padding: '16px',
                borderBottom: '1px solid #eee',
                cursor: 'pointer'
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </ModalBottomSheet>
    </>
  );
}
```

### Control Dinámico de Expansión

```jsx
function DynamicSheet() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <ModalBottomSheet
      show={show}
      onClose={() => setShow(false)}
      title="Contenido Dinámico"
      expanded={expanded}
      showStickyFooter
      footer={
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Contraer' : 'Expandir'}
        </button>
      }
    >
      <p>Este modal se puede expandir dinámicamente</p>
      {expanded && (
        <div>
          <p>Contenido adicional cuando está expandido...</p>
        </div>
      )}
    </ModalBottomSheet>
  );
}
```

## Manejo del Callback onClose

El callback `onClose` recibe dos parámetros:
1. `event`: El evento original
2. `source`: String indicando el origen del cierre. Actualmente: `'overlay'`

```jsx
const handleClose = (event, source) => {
  console.log('Evento:', event);
  console.log('Origen:', source); // 'overlay' si se cerró clickeando fuera
  
  // Lógica personalizada
  if (source === 'overlay') {
    console.log('Usuario cerró clickeando fuera');
  }
  
  setShow(false);
};

<ModalBottomSheet
  show={show}
  onClose={handleClose}
  closeOnClickOutside
>
  Contenido
</ModalBottomSheet>
```

## Características Especiales

### Handler Visual
El componente incluye automáticamente un indicador visual (barra) en la parte superior que sugiere que el modal puede cerrarse arrastrando hacia abajo. Este elemento se crea automáticamente con CSS.

### Sin Botón de Cerrar
A diferencia del Modal estándar, este componente NO incluye un botón X de cerrar. El cierre debe manejarse mediante:
- Click en el overlay (si `closeOnClickOutside` es `true`)
- Botones dentro del contenido
- Gestos de arrastre (implementación de usuario)

### Comportamiento de Scroll
- **Default (50%):** El contenido no tiene scroll
- **Expandido (90%):** El contenido tiene scroll automático si es necesario

## Notas Importantes

1. **Mobile Only:** Este componente está diseñado específicamente para dispositivos móviles
2. **State Controlado:** Debes manejar el estado `show` externamente
3. **No Close Button:** No hay botón X, el cierre es por overlay o botones en el contenido
4. **StopPropagation:** Los clicks en el sheet-container no cierran el modal
5. **Status New:** Este es un componente nuevo en la librería
6. **Título Opcional:** Si no pasas `title` o pasas string vacío, no se muestra el header

## Cuándo Usar

| Caso de Uso | Configuración |
|-------------|---------------|
| Lista de opciones | Default, sin footer |
| Filtros | Default o expanded, con footer |
| Formulario corto | Default, con footer sticky |
| Formulario largo | Expanded, con footer sticky |
| Menú contextual | Default, closeOnClickOutside |

## Con Otros Componentes

### Con Checkbox/Radio
```jsx
<ModalBottomSheet
  show={show}
  onClose={() => setShow(false)}
  title="Selecciona opciones"
  showStickyFooter
  footer={<button onClick={handleApply}>Aplicar</button>}
>
  <Checkbox label="Opción 1" />
  <Checkbox label="Opción 2" />
  <Checkbox label="Opción 3" />
</ModalBottomSheet>
```

### Con Input
```jsx
<ModalBottomSheet
  show={show}
  onClose={() => setShow(false)}
  title="Buscar"
>
  <Input
    placeholder="Escribe para buscar..."
    onChange={handleSearch}
  />
</ModalBottomSheet>
```

## Accesibilidad

- ✅ `role="presentation"` en contenedores
- ✅ Handler visual indica interactividad
- ✅ Transiciones suaves
- ⚠️ No incluye soporte de teclado por defecto (mobile-focused)

## Performance

- Transiciones CSS optimizadas (0.3s ease-in-out)
- Lazy rendering: contenido solo se renderiza cuando `show` es `true`
- Stop propagation evita re-renders innecesarios
