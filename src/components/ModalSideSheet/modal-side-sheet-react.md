# Modal Side Sheet - React

## Importación
```jsx
import ModalSideSheet from '@despegar/eva-ui/ModalSideSheet';
```

## Descripción
Side sheet deslizable desde izquierda/derecha, con header opcional, tamaños (`sm/md/lg`) y footer sticky.

**Tipo:** Organismo  
**Categoría:** Overlays / Sheets  
**Tags:** react, modal, side-sheet, drawer, overlay, sticky-footer

## Cuándo Usar
- Panel de filtros, detalles o configuración sin abandonar la página.
- Navegación auxiliar o menús contextuales que deben mantener el contexto visible.

## Mejores Prácticas
- Controla `show`/`toggleModal` externamente; define `position` según layout (por defecto `right`).
- Usa `fixedHeader` para listas largas; `showStickyFooter` para CTAs persistentes.
- Evita usar `noPadding` salvo que el contenido maneje su propio spacing.

## Dependencias
- Hereda overlay y animaciones del sistema de modal; soporta `ESC` y click en X.
- Footer sticky y header gestionados por la librería.

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | bool | false | Muestra el side sheet |
| `toggleModal` | func | — (req) | Callback de cierre (X, ESC) |
| `title` | string | 'Titulo...' | Texto del header |
| `white` | bool | false | Fondo blanco |
| `fixedHeader` | bool | false | Header sticky |
| `noTitle` | bool | false | Oculta título |
| `noPadding` | bool | false | Sin padding en contenido |
| `size` | 'sm' \| 'md' \| 'lg' | 'sm' | Tamaño |
| `position` | 'right' \| 'left' | 'right' | Lado de despliegue |
| `showStickyFooter` | bool | false | Muestra footer fijo |
| `footer` | node | '' | Contenido del footer sticky |
| `className` | string | '' | Clases extra |
| `children` | any | demo | Contenido principal |

## Uso Básico
```jsx
const [open, setOpen] = useState(false);

<ModalSideSheet
  show={open}
  toggleModal={() => setOpen(false)}
  title="Filtros"
>
  <p>Contenido de filtros...</p>
</ModalSideSheet>
```

## Con Footer Sticky
```jsx
<ModalSideSheet
  show={open}
  toggleModal={() => setOpen(false)}
  title="Acción"
  showStickyFooter
  footer={
    <div className="actions">
      <button onClick={() => setOpen(false)}>Cancelar</button>
      <button onClick={handleApply}>Aplicar</button>
    </div>
  }
>
  <LongList />
</ModalSideSheet>
```

## Posición Izquierda y Header Fijo
```jsx
<ModalSideSheet
  show={open}
  toggleModal={() => setOpen(false)}
  title="Menu"
  position="left"
  fixedHeader
>
  <MenuItems />
</ModalSideSheet>
```

## Sin Título y Sin Padding
```jsx
<ModalSideSheet
  show={open}
  toggleModal={() => setOpen(false)}
  noTitle
  noPadding
>
  <FullBleedContent />
</ModalSideSheet>
```

## Notas
- Controlado externamente con `show`.
- Click en X y tecla ESC disparan `toggleModal`.
- Si `noTitle` es true, el `<h4>` no se renderiza.
- `fixedHeader` útil para contenidos largos.
