# Modal - React

## Importación

```jsx
import Modal from '@despegar/eva-ui/Modal';
```

## Descripción
Modal estándar con header opcional, tamaños (`sm/default`), variantes de close, sticky footer, y opciones de padding y fondo.

**Tipo:** Organismo  
**Categoría:** Overlays / Dialogs  
**Tags:** react, modal, dialog, overlay, header, footer, sticky, close-on-outside

## Cuándo Usar
- Bloquear la atención para confirmaciones, formularios cortos o contenido destacado.
- Mostrar información que requiere foco sin navegar a otra página.

## Mejores Prácticas
- Usa `show` controlado y `toggleModal` para manejo de estado y accesibilidad (focus trap gestionado por la lib).
- Evita meter formularios muy largos; considera variantes fullscreen/side-sheet para contenidos extensos.
- Mantén acciones primarias en el footer; usa `showStickyFooter` para CTAs persistentes.

## Dependencias
- Overlay, foco y clases `eva-3-modal` manejados por la librería.
- Ícono de cierre integrado; se puede ocultar con `noCloseIcon` o mover con `variant`.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | `boolean` | `false` | Controla la visibilidad del modal |
| `toggleModal` | `function` | - | **Requerido**. Callback que se ejecuta al cerrar el modal |
| `title` | `string` | `"Titulo del modal"` | Título que se muestra en el header |
| `titleLg` | `boolean` | `false` | Permite títulos de 2 líneas con ellipsis |
| `size` | `'' \| 'sm'` | `''` | Tamaño del modal. `'sm'` para 400px, default para 690px |
| `variant` | `'' \| 'close-on-left' \| 'close-on-left-with-title'` | `''` | Variante del modal |
| `noPadding` | `boolean` | `false` | Remueve el padding del contenido |
| `showStickyFooter` | `boolean` | `false` | Muestra el footer pegado al fondo |
| `footer` | `node` | `''` | Contenido del footer |
| `borderBottom` | `boolean` | `false` | Agrega borde inferior al header |
| `hideHeader` | `boolean` | `false` | Oculta completamente el header |
| `noHeader` | `boolean` | `false` | Alternativa a `hideHeader` |
| `smoothScroll` | `boolean` | `false` | Habilita scroll suave webkit |
| `closeOnClickOutside` | `boolean` | `true` | Permite cerrar haciendo click en el overlay |
| `noCloseIcon` | `boolean` | `false` | Oculta el ícono de cerrar |
| `headerImage` | `node` | - | Imagen para mostrar en el header |
| `closeIconColor` | `'' \| 'white'` | `''` | Color del ícono de cerrar. `'white'` para contraste en imágenes |
| `tiers` | `boolean` | `false` | Variante especial para loyalty tiers |
| `color` | `boolean` | `false` | Variante con color de fondo especial |
| `className` | `string` | `''` | Clases CSS adicionales |
| `children` | `node` | - | Contenido del modal |

## Uso Básico

```jsx
import React, { useState } from 'react';
import Modal from '@despegar/eva-ui/Modal';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Abrir Modal</button>
      <Modal
        show={showModal}
        toggleModal={() => setShowModal(false)}
        title="Mi Modal"
      >
        <p>Este es el contenido del modal.</p>
      </Modal>
    </>
  );
}
```

## Ejemplos

### Modal con Footer
```jsx
<Modal
  show={showModal}
  toggleModal={() => setShowModal(false)}
  title="Confirmar acción"
  showStickyFooter
  footer={
    <>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
      <button onClick={handleConfirm}>Confirmar</button>
    </>
  }
>
  <p>¿Estás seguro de que quieres continuar?</p>
</Modal>
```

### Modal Small
```jsx
<Modal
  show={showModal}
  toggleModal={() => setShowModal(false)}
  title="Confirmación"
  size="sm"
>
  <p>Mensaje breve</p>
</Modal>
```

### Modal con Header Image
```jsx
<Modal
  show={showModal}
  toggleModal={() => setShowModal(false)}
  headerImage={<img src="/promo.jpg" alt="Promoción" />}
  closeIconColor="white"
>
  <h2>¡Oferta Especial!</h2>
  <p>Aprovecha nuestras promociones.</p>
</Modal>
```

### Close on Left (navegación mobile)
```jsx
<Modal
  show={showModal}
  toggleModal={() => setShowModal(false)}
  title="Navegación"
  variant="close-on-left"
>
  <p>Modal con navegación tipo mobile</p>
</Modal>
```

## Notas Importantes

- El modal es un componente controlado, debes manejar el estado `show` externamente
- Automáticamente previene el scroll del body cuando está abierto
- Soporte de tecla ESC para cerrar
- En mobile (< 768px), el modal default se vuelve fullscreen automáticamente
- El modal small mantiene su tamaño incluso en mobile
