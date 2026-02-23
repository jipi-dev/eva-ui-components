# Driver (React)

## Descripción

Elemento compacto (badge/label) para comunicar atributos, beneficios, estados o pertenencia a submarcas. Soporta texto (`Driver.Text`) e íconos opcionales (`Driver.Icon`). Diseñado para resaltar información clave de productos o reservas.

**Tipo:** Átomo  
**Categoría:** Status / Labels  
**Tags:** react, driver, badge, label, status, loyalty, unbeatable, urgent, benefits

## Cuándo Usar
- Destacar atributos clave (beneficios, urgencia, nuevos, estados success/warning/error).
- Mostrar pertenencia a programas (loyalty/unbeatable) o campañas.

## Mejores Prácticas
- Mantén textos cortos (1-3 palabras) para evitar desbordes.
- Elige la variante según semántica (success/warning/error/information) o brand (loyalty/unbeatable).
- Combina ícono + texto solo si aporta claridad; evita duplicar significado.

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
| `variant` | `enum` | `''` (default) | Variante del driver. Valores: `''` (default), `'secondary'`, `'benefits'`, `'urgent'`, `'default-lighten'`, `'new'`, `'new-lighten'`, `'information'`, `'success'`, `'warning'`, `'error'`, `'loyalty'`, `'unbeatable'`, `'mintur'`. |
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-driver`. |
| `children` | `Driver.Text \| Driver.Icon \| array` | — | Puede ser un único `Driver.Text`, un único `Driver.Icon`, o array de ambos. |

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
| `icon` | `string` | `'star-filled'` | Nombre del ícono (ej. `'star'`, `'star-filled'`). |
| `className` | `string` | `''` | Clases adicionales para `driver-icon`. |

## Estructura renderizada

```jsx
<div className={`eva-3-driver ${classes} ${className}`}>
  {children}
</div>
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

### Submarcas

#### Loyalty
```jsx
<Driver variant="loyalty">
  <Driver.Text>Loyalty</Driver.Text>
</Driver>
```

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
  <Driver.Icon icon="star-filled" />
  <Driver.Icon icon="star" />
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
- Íconos: `star`, `star-filled` (opcionales en `Driver.Icon`).
- Clase base: `eva-3-driver`.
- Categoría: `labels` (type: atoms).

## Notas

- `children` valida tipos con `instanceOfFunctional` para `Driver.Text` y `Driver.Icon`.
- Máximo ancho: `210px` con ellipsis.
- Drivers adyacentes: `margin-left: 8px` automático entre drivers hermanos.
