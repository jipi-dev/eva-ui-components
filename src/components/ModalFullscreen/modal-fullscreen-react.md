# Modal Fullscreen - React

## Importación
```jsx
import ModalFullscreen from '@despegar/eva-ui/ModalFullscreen';
```

## Descripción
Modal de pantalla completa para flujos complejos, con header, soporte de breadcrumb y opción de mover el cierre a la izquierda en mobile.

**Tipo:** Organismo  
**Categoría:** Overlays / Fullscreen  
**Tags:** react, modal, fullscreen, breadcrumb, overlay, close-on-left

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Flujos que requieren gran superficie (tablas, formularios extensos, configuraciones).
- Casos mobile donde el modal convencional resulta estrecho.

## Mejores Prácticas
- Controla `show` y `toggleModal`; usa `closeOnLeftMobile` para respetar patrones de navegación back en mobile.
- Cuando integres `Breadcrumb`, mantén títulos concisos y consistentes con la ruta.
- Usa `noPadding` solo si el contenido gestiona su propio spacing.

## Dependencias
- Hereda overlay y comportamiento base de la librería Modal.
- Header, breadcrumb y botón de cierre provistos por el componente.

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | bool | false | Muestra el modal fullscreen |
| `toggleModal` | func | — (req) | Callback de cierre (X, ESC) |
| `title` | string | 'Tus productos' | Título en header |
| `noPadding` | bool | false | Quita padding del contenido |
| `closeOnLeftMobile` | bool | false | Mueve botón de cierre a la izquierda en mobile (<768px) |
| `Breadcrumb` | node | undefined | Breadcrumb opcional en header |
| `className` | string | '' | Clases extra |
| `children` | any | <> </> | Contenido principal |

## Uso Básico
```jsx
const [open, setOpen] = useState(false);

<ModalFullscreen
  show={open}
  toggleModal={() => setOpen(false)}
  title="Detalle"
>
  <p>Contenido fullscreen</p>
</ModalFullscreen>
```

## Con Breadcrumb y close a la izquierda (mobile)
```jsx
const bc = (
  <Breadcrumb>
    <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
    <Breadcrumb.Item active>Detalle</Breadcrumb.Item>
  </Breadcrumb>
);

<ModalFullscreen
  show={open}
  toggleModal={() => setOpen(false)}
  title="Dashboard"
  Breadcrumb={bc}
  closeOnLeftMobile
>
  <YourContent />
</ModalFullscreen>
```

## Sin padding
```jsx
<ModalFullscreen
  show={open}
  toggleModal={() => setOpen(false)}
  noPadding
>
  <FullWidthGrid />
</ModalFullscreen>
```

## Notas
- Controlado externamente con `show`.
- ESC y click en X disparan `toggleModal`.
- `closeOnLeftMobile` aplica pattern back en mobile.
- Si no se pasa `title` (o se gestiona internamente), ocultar el `<h4>` según diseño.
