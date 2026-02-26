# Dropdown (React)

## Descripción

Row colapsable con título siempre visible y lista de ítems desplegable. Controla estado de apertura/cierre con hook interno `useState`. Soporta callback `onToggle`, estado inicial abierto (`initialStateOpen`) e integración con `ViewMore` para opciones adicionales.

**Tipo:** Molécula  
**Categoría:** Navigation / Disclosure  
**Tags:** react, dropdown, accordion, collapsible, list, view-more

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Listas cortas de opciones expandibles bajo un título fijo.
- Bloques de filtros o información secundaria que se puede ocultar/mostrar.

## Mejores Prácticas
- Mantén títulos claros; limita el contenido interno a opciones relacionadas.
- Usa `initialStateOpen` solo si el contenido es crítico y debe verse de inicio.
- Provee `onToggle` si necesitas sincronizar estado externo o analíticas.

## Dependencias
- Usa `Icon` (chevron) para el indicador de apertura.
- Compatible con `ViewMore` y `LabelForm` en su contenido.

**Import típico:**
```jsx
import { Dropdown } from "@despegar/eva-react-components";
```

## Props (Dropdown)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `'Título dropdown'` | **Requerido.** Texto del título (siempre visible). |
| `titleClassName` | `string` | `''` | Clases adicionales para el span `item-label`. |
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-dropdown`. |
| `initialStateOpen` | `bool` | `false` | Si `true`, el dropdown inicia desplegado (clase `-active`). |
| `onToggle` | `func` | — | Callback ejecutado al abrir/cerrar. Recibe objeto `{isOpen: bool}`. |
| `children` | `Dropdown.Item[] \| ViewMore` | 3 `Dropdown.Item` default | **Requerido.** Array de `Dropdown.Item` o mix con `ViewMore`. |

## Sub-componente Dropdown.Item

Renderiza un ítem dentro del dropdown.

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode` | `<LabelForm size="md">Opción</LabelForm>` | **Requerido.** Contenido del ítem. |
| `viewMore` | `bool` | `false` | Si `true`, agrega clase `view-more-content` (para ítems dentro de `ViewMore`). |
| `...rest` | — | — | Props adicionales se propagan al `<li>`. |

## Estado interno (React)

- `open`: boolean, controla clase `-active` en `dropdown-item` y visibilidad de `dropdown-subcontent`.

## Estructura renderizada

```jsx
<ul className={`eva-3-dropdown ${className}`}>
  <li className={`dropdown-item ${classes}`}>
    <span role="presentation" className="dropdown-item-container" onClick={onToggleHandler} tabIndex="0">
      <span className={`item-label ${titleClassName}`}>
        {title}
      </span>
      <Icon icon="chevron-down" className="dropdown-icon" />
    </span>
    <ul className="dropdown-subcontent">
      {children}
    </ul>
  </li>
</ul>
```

- `classes` agrega `-active` cuando `open=true`.
- `onToggleHandler` alterna estado `open` y ejecuta `onToggle` si está definido.

## Ejemplos

### Básico (colapsado por defecto)
```jsx
<Dropdown title="Filtros">
  <Dropdown.Item>
    <LabelForm size="md">Opción 1</LabelForm>
  </Dropdown.Item>
  <Dropdown.Item>
    Opción 2
  </Dropdown.Item>
  <Dropdown.Item>
    Opción 837
  </Dropdown.Item>
</Dropdown>
```

### Con estado inicial abierto
```jsx
<Dropdown title="Filtros" initialStateOpen>
  <Dropdown.Item>Opción 1</Dropdown.Item>
  <Dropdown.Item>Opción 2</Dropdown.Item>
  <Dropdown.Item>Opción 3</Dropdown.Item>
</Dropdown>
```

### Con callback onToggle
```jsx
<Dropdown
  title="Filtros"
  onToggle={({ isOpen }) => console.log('Dropdown abierto:', isOpen)}
>
  <Dropdown.Item>Opción 1</Dropdown.Item>
  <Dropdown.Item>Opción 2</Dropdown.Item>
</Dropdown>
```

### Con clases custom en título
```jsx
<Dropdown title="Filtros" titleClassName="custom-title-class">
  <Dropdown.Item>Opción 1</Dropdown.Item>
  <Dropdown.Item>Opción 2</Dropdown.Item>
</Dropdown>
```

### Con ViewMore para opciones adicionales
```jsx
<Dropdown title="Filtros" initialStateOpen>
  <Dropdown.Item>
    <LabelForm size="md">Opción 1</LabelForm>
  </Dropdown.Item>
  <Dropdown.Item>Opción 2</Dropdown.Item>
  <Dropdown.Item>Opción 837</Dropdown.Item>
  <ViewMore variant="collapsible-bottom" viewMoreText="Ver más opciones" viewLessText="Ver menos opciones">
    <Dropdown.Item viewMore>
      Opción 838 oculta
    </Dropdown.Item>
    <Dropdown.Item viewMore>
      Opción 839 oculta
    </Dropdown.Item>
  </ViewMore>
</Dropdown>
```

- `viewMore` prop en `Dropdown.Item` agrega clase `view-more-content`.

## Accesibilidad

- `dropdown-item-container` tiene `tabIndex="0"` para navegación por teclado.
- `role="presentation"` en el contenedor clickeable; considerar `<button>` para mejor semántica (mejora futura).
- `:focus-visible` aplica outline accesible en contenedores.
- Ícono chevron rota 180° para indicar estado abierto (visual feedback).
- `onToggle` callback útil para anunciar estado a lectores de pantalla vía `aria-live`.

## Dependencias

- Componentes: `LabelForm`, `ViewMore`, `Icon`.
- HOC/utilidades: `withUtilities`, `classResolver`, `instanceOfFunctional`, `PREFIX`.
- Íconos: `chevron-down` (default), `chevron-up`, `arrow-down`, `arrow-up` (metadata).
- Clase base: `eva-3-dropdown`.
- Categoría: `form` (type: molecules).

## Notas

- `children` valida tipos con `instanceOfFunctional` para `Dropdown.Item` y `ViewMore`.
- Estado controlado internamente con `useState`; no hay prop `open` controlada desde fuera.
- `onToggle` recibe objeto `{isOpen: bool}` con el nuevo estado (asume cambio no ha ocurrido aún en el handler).
