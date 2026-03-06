# Driver (React)

## Descripción

Elemento compacto (badge/label) para comunicar atributos, beneficios, estados o pertenencia a submarcas. Soporta texto (`Driver.Text`) e íconos opcionales (`Driver.Icon`). Diseñado para resaltar información clave de productos o reservas.

**Tipo:** Átomo  
**Categoría:** Status / Labels  
**Tags:** react, driver, badge, label, status, loyalty, unbeatable, urgent, benefits

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Destacar atributos clave (beneficios, urgencia, nuevos, estados success/warning/error).
- Mostrar pertenencia a programas (loyalty/unbeatable) o campañas.

## Mejores Prácticas
- Mantén textos cortos (1-3 palabras) para evitar desbordes.
- Elige la variante según semántica (success/warning/error/information) o brand (loyalty/unbeatable/ifood).
- Combina ícono + texto solo si aporta claridad; evita duplicar significado.
- Para variantes Loyalty, usar el ícono `loyalty-filled` como referencia visual del tier.

## Dependencias
- Usa clases `eva-3-driver` y modificadores de variante provistos por EVA.
- `Driver.Icon` usa el set de íconos EVA (`Icon` interno).

**Import típico:**
```jsx
import { Driver } from "@despegar/eva-react-components";
```

## Props (Driver)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `enum` | `''` (default) | Variante del driver. Ver tabla de variantes más abajo. |
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-driver`. |
| `children` | `Driver.Text \| Driver.Icon \| array` | — | Puede ser un único `Driver.Text`, un único `Driver.Icon`, o array de ambos. |

### Valores de `variant`

| Grupo | Valor | Descripción |
|-------|-------|-------------|
| Atributos | `''` | Default — fondo `neutral-800`, texto `white` |
| Atributos | `'secondary'` | Fondo `neutral-200`, texto `neutral-800` |
| Atributos | `'benefits'` | Fondo `success-300`, texto `success-900` |
| Atributos | `'urgent'` | Fondo `error-300`, texto `error-900` |
| Atributos | `'default-lighten'` | Fondo `white`, texto `neutral-800` |
| New | `'new'` | Fondo `brand-primary-4`, texto `white` |
| New | `'new-lighten'` | Fondo `brand-primary-1`, texto `brand-primary-4` |
| Estados | `'information'` | Sin estilo propio; usa default |
| Estados | `'success'` | Fondo `success-300`, texto `success-900` |
| Estados | `'warning'` | Fondo `warning-300`, texto `warning-900` |
| Estados | `'error'` | Fondo `error-300`, texto `error-900` |
| Loyalty | `'loyalty'` | Tier Explorador — fondo `--eva-loyalty-primary-500`, texto `white` |
| Loyalty | `'traveller'` | Tier Viajero — fondo `--eva-loyalty-secondary-500`, texto `neutral-800` |
| Loyalty | `'global'` | Tier Global — fondo `--eva-loyalty-tertiary-900`, texto `white` |
| Loyalty | `'premium'` | Tier Premium — fondo `--eva-loyalty-quaternary-800`, texto `white` |
| Submarcas | `'unbeatable'` | Fondo `--eva-unbeatable-secondary-800`, texto `--eva-unbeatable-primary-500` |
| Submarcas | `'mintur'` | Fondo `#37BBED`, texto `white` |
| Submarcas | `'ifood'` | Fondo `#EB0033`, texto `white` |
| Submarcas | `'club-ifood'` | Fondo `#C375FF`, texto `white` |

## Sub-componentes

### Driver.Text

Renderiza el texto del driver.

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `string` | `'Driver text'` | Texto a mostrar. |
| `className` | `string` | `''` | Clases adicionales para `driver-text`. |

### Driver.Icon

Renderiza un ícono en el driver.

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `string` | `'star-filled'` | Nombre del ícono (ej. `'star'`, `'star-filled'`, `'loyalty-filled'`). |
| `className` | `string` | `''` | Clases adicionales para `driver-icon`. |

## Estructura renderizada

```jsx
<span className={`eva-3-driver ${classes} ${className}`}>
  {children}
</span>
```

- `classes` agrega `-{variant}` según la prop `variant`.
- `children` puede ser:
  - `<Driver.Text>Texto</Driver.Text>`
  - `<Driver.Icon icon="star" />`
  - `[<Driver.Icon />, <Driver.Text />]`

## Ejemplos

### Atributos

#### Default
```jsx
<Driver>
  <Driver.Text>Default</Driver.Text>
</Driver>
```

#### Default Lighten
```jsx
<Driver variant="default-lighten">
  <Driver.Text>Default lighten</Driver.Text>
</Driver>
```

#### Secondary
```jsx
<Driver variant="secondary">
  <Driver.Text>Secondary</Driver.Text>
</Driver>
```

#### Benefits
```jsx
<Driver variant="benefits">
  <Driver.Text>Benefits</Driver.Text>
</Driver>
```

#### Urgent
```jsx
<Driver variant="urgent">
  <Driver.Text>Urgent</Driver.Text>
</Driver>
```

### New

#### New
```jsx
<Driver variant="new">
  <Driver.Text>New</Driver.Text>
</Driver>
```

#### New Lighten
```jsx
<Driver variant="new-lighten">
  <Driver.Text>New lighten</Driver.Text>
</Driver>
```

### Estados

#### Information
```jsx
<Driver variant="information">
  <Driver.Text>Information</Driver.Text>
</Driver>
```

#### Success
```jsx
<Driver variant="success">
  <Driver.Text>Success</Driver.Text>
</Driver>
```

#### Warning
```jsx
<Driver variant="warning">
  <Driver.Text>Warning</Driver.Text>
</Driver>
```

#### Error
```jsx
<Driver variant="error">
  <Driver.Text>Error</Driver.Text>
</Driver>
```

### Loyalty

Cada variante corresponde a un tier del programa Loyalty. Se recomienda acompañar con el ícono `loyalty-filled`.

#### Loyalty (Explorador)
```jsx
<Driver variant="loyalty">
  <Driver.Icon icon="loyalty-filled" />
  <Driver.Text>Loyalty</Driver.Text>
</Driver>
```

#### Viajero
```jsx
<Driver variant="traveller">
  <Driver.Icon icon="loyalty-filled" />
  <Driver.Text>Viajero</Driver.Text>
</Driver>
```

#### Global
```jsx
<Driver variant="global">
  <Driver.Icon icon="loyalty-filled" />
  <Driver.Text>Global</Driver.Text>
</Driver>
```

#### Premium
```jsx
<Driver variant="premium">
  <Driver.Icon icon="loyalty-filled" />
  <Driver.Text>Premium</Driver.Text>
</Driver>
```

### Submarcas

#### Unbeatable
```jsx
<Driver variant="unbeatable">
  <Driver.Text>Unbeatable</Driver.Text>
</Driver>
```

#### Mintur
```jsx
<Driver variant="mintur">
  <Driver.Text>Mintur</Driver.Text>
</Driver>
```

#### iFood
```jsx
<Driver variant="ifood">
  <Driver.Text>iFood</Driver.Text>
</Driver>
```

#### Club iFood
```jsx
<Driver variant="club-ifood">
  <Driver.Text>Club iFood</Driver.Text>
</Driver>
```

### Con ícono

```jsx
<Driver variant="benefits">
  <Driver.Icon icon="star-filled" />
  <Driver.Text>Benefits</Driver.Text>
</Driver>
```

### Solo ícono

```jsx
<Driver variant="urgent">
  <Driver.Icon icon="star" />
</Driver>
```

### Múltiples íconos y texto

```jsx
<Driver variant="loyalty">
  <Driver.Icon icon="loyalty-filled" />
  <Driver.Text>Loyalty</Driver.Text>
</Driver>
```

## Accesibilidad

- Texto descriptivo en `Driver.Text`; si solo se usa ícono, considerar `aria-label` en el contenedor.
- Variantes usan colores con contraste mínimo (success/warning/error con tonos 300/900).
- Drivers inline-flex permiten lectura natural en lectores de pantalla.

## Dependencias

- Componentes: `colours-variables-unbeatable` (para variante `-unbeatable`).
- HOC/utilidades: `withUtilities`, `classResolver`, `instanceOfFunctional`, `PREFIX`.
- Íconos: `star`, `star-filled`, `loyalty-filled` (opcionales en `Driver.Icon`).
- Clase base: `eva-3-driver`.
- Categoría: `labels` (type: atoms).

## Notas

- `children` valida tipos con `instanceOfFunctional` para `Driver.Text` y `Driver.Icon`.
- Máximo ancho: `210px` con ellipsis.
- Drivers adyacentes: `margin-left: 8px` automático entre drivers hermanos.
