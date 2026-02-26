# Label - React

## Descripción

Componente React para etiquetas decorativas tipo "ribbon" que muestran descuentos, promociones y ofertas. Se posicionan en esquinas de tarjetas/imágenes con diseño de cinta (tail triangular). Soporta 7 variantes (green, purple, loyalty, compound, secret-deals, member-deals, member-deals-logged) y 4 posiciones.

**Tipo:** Átomo  
**Categoría:** Status / Marketing  
**Tags:** react, label, ribbon, descuento, promo, loyalty, member-deals, secret-deals, corner, posicion

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Mostrar descuentos, badges de programa o deals destacados sobre tarjetas o imágenes.
- Señalar exclusividad (member/loyalty/secret deals) o mensajes compuestos.

## Mejores Prácticas
- Elegí la posición según el layout (top/bottom, left/right) evitando tapar información clave.
- Usa el tamaño `sm` solo en contenedores chicos; `md` por defecto en cards estándar.
- Define `content.primary` breve; usa `content.secondary` solo cuando aporte contexto (compound/member).

## Dependencias
- Íconos no requeridos; estilos provistos por la clase `Label` (ribbon CSS incluido en la lib).
- Requiere pasar `size`, `variant`, `ribbonPosition` y `content.primary`.

## Instalación

```jsx
import Label from 'eva-main/client/src/components/Label/Label.jsx';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `size` | `'sm'` \| `'md'` | ✅ Sí | `'md'` | Tamaño del label (sm: pequeño, md: mediano) |
| `variant` | `'green'` \| `'loyalty'` \| `'purple'` \| `'compound'` \| `'secret-deals'` \| `'member-deals'` \| `'member-deals-logged'` | ✅ Sí | `'green'` | Variante de color/estilo |
| `ribbonPosition` | `'top-left'` \| `'top-right'` \| `'bottom-left'` \| `'bottom-right'` | ✅ Sí | `'top-left'` | Posición del ribbon en la tarjeta |
| `content` | `object` | No | `{ primary: '-30%', secondary: '%' }` | Objeto con contenido primary (texto principal) y secondary (texto secundario para compound) |
| `content.primary` | `string` | ✅ Sí | - | Texto principal del label |
| `content.secondary` | `string` | No | - | Texto secundario (solo para compound/member-deals) |
| `className` | `string` | No | `''` | Clases adicionales para el wrapper |

**Notas importantes**:
- `size`, `variant` y `ribbonPosition` son **requeridos**.
- `content.primary` es **requerido** dentro del objeto `content`.
- `content.secondary` es opcional, usado en labels compound/member-deals.

## Uso básico

### Label green simple

```jsx
<Label
  variant="green"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-30%',
  }}
/>
```

### Label small

```jsx
<Label
  variant="green"
  ribbonPosition="top-left"
  size="sm"
  content={{
    primary: '-20%',
  }}
/>
```

## Variantes

### Green (descuento estándar)

```jsx
<Label
  variant="green"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-30%',
  }}
/>
```

**Uso**: Descuentos generales.

### Purple (programa chanchito)

```jsx
<Label
  variant="purple"
  ribbonPosition="top-right"
  size="md"
  content={{
    primary: '-30%',
  }}
/>
```

**Uso**: Programa de ahorro "chanchito" (icon: `pig-offer`).

### Loyalty (programa de lealtad)

```jsx
<Label
  variant="loyalty"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: 'Ahorrá 3200 puntos',
  }}
/>
```

**Uso**: Exclusivo para programa de lealtad (icon: `loyalty-filled`).

### Compound (descuento + incentivo)

```jsx
<Label
  variant="compound"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-30%',
    secondary: '%',
  }}
/>
```

**Uso**: Descuento + Secret Deal. **Requiere `content.secondary`**.
- Primera sección: texto `primary` en verde con fondo verde.
- Segunda sección: texto `secondary` con ícono `gift` en fondo blanco.

### Secret Deals (incentivo de login)

```jsx
<Label
  variant="secret-deals"
  ribbonPosition="top-right"
  size="md"
  content={{
    primary: '%',
  }}
/>
```

**Uso**: Incentivo para que el usuario inicie sesión (icon: `gift` rojo).

### Member Deals (no logueado)

```jsx
<Label
  variant="member-deals"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-15%',
    secondary: '%',
  }}
/>
```

**Uso**: Descuento exclusivo para miembros, vista no logueado.
- Primera sección: `secondary` con ícono `loyalty-filled` en bubblegum-1.
- Segunda sección: `primary` en verde.

### Member Deals Logged (logueado con tachado)

```jsx
<Label
  variant="member-deals-logged"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-15%',
    secondary: '%',
  }}
/>
```

**Uso**: Descuento exclusivo para miembros, vista logueado. El texto `primary` aparece **tachado** (clase `-linethrough`).

## Posiciones del Ribbon

### Top Left

```jsx
<Label
  variant="green"
  ribbonPosition="top-left"
  size="md"
  content={{ primary: '-30%' }}
/>
```

### Top Right

```jsx
<Label
  variant="green"
  ribbonPosition="top-right"
  size="md"
  content={{ primary: '-30%' }}
/>
```

### Bottom Left

```jsx
<Label
  variant="green"
  ribbonPosition="bottom-left"
  size="md"
  content={{ primary: '-30%' }}
/>
```

### Bottom Right

```jsx
<Label
  variant="green"
  ribbonPosition="bottom-right"
  size="md"
  content={{ primary: '-30%' }}
/>
```

## Tamaños

### Small (`sm`)

```jsx
<Label
  variant="purple"
  ribbonPosition="top-left"
  size="sm"
  content={{ primary: '-30%' }}
/>
```

### Medium (`md`)

```jsx
<Label
  variant="purple"
  ribbonPosition="top-left"
  size="md"
  content={{ primary: '-30%' }}
/>
```

## Ejemplo en tarjeta de producto

```jsx
import React from 'react';
import Label from 'eva-main/client/src/components/Label/Label.jsx';

function ProductCard() {
  return (
    <div className="product-card" style={{ position: 'relative', width: '300px' }}>
      <Label
        variant="green"
        ribbonPosition="top-left"
        size="md"
        content={{ primary: '-40%' }}
      />
      <img src="/hotel.jpg" alt="Hotel" className="product-image" />
      <div className="product-info">
        <h3>Hotel Paradise</h3>
        <p className="price">$120 <span className="old-price">$200</span></p>
      </div>
    </div>
  );
}
```

## Ejemplo con loyalty

```jsx
<div style={{ position: 'relative', width: '300px' }}>
  <Label
    variant="loyalty"
    ribbonPosition="top-right"
    size="md"
    content={{ primary: 'Ahorrá 5000 puntos' }}
  />
  <img src="/flight.jpg" alt="Vuelo" />
</div>
```

## Ejemplo Compound

```jsx
<Label
  variant="compound"
  ribbonPosition="bottom-left"
  size="md"
  content={{
    primary: '-50%',
    secondary: 'Secret Deal',
  }}
/>
```

## Ejemplo Member Deals (comparación)

### No logueado

```jsx
<Label
  variant="member-deals"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-25%',
    secondary: '%',
  }}
/>
```

### Logueado (tachado)

```jsx
<Label
  variant="member-deals-logged"
  ribbonPosition="top-left"
  size="md"
  content={{
    primary: '-25%',
    secondary: '%',
  }}
/>
```

## Clases personalizadas

```jsx
<Label
  variant="green"
  ribbonPosition="top-left"
  size="md"
  content={{ primary: '-30%' }}
  className="-eva-3-mb-md custom-label"
/>
```

## PropTypes

```jsx
Label.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']).isRequired,
  variant: PropTypes.oneOf([
    'green',
    'loyalty',
    'purple',
    'compound',
    'secret-deals',
    'member-deals',
    'member-deals-logged',
  ]).isRequired,
  ribbonPosition: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]).isRequired,
  content: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
  }),
};
```

## Estructura renderizada

```jsx
// Variante simple (green, purple, loyalty, secret-deals)
<div className={`eva-3-label -${size} -${ribbonPosition} ${className} -${variant}`}>
  <span className="label-container">
    {/* Ícono condicional según variante */}
    {variant === 'secret-deals' && <Icon icon="gift" className="label-icon -eva-3-tc-red-3" />}
    {variant === 'purple' && <Icon icon="pig-offer" className="label-icon" />}
    {variant === 'loyalty' && <Icon icon="loyalty-filled" className="label-icon" />}
    <span className="eva-3-bold label-text">
      {content.primary}
    </span>
  </span>
</div>

// Variante compound
<div className={`eva-3-label -${size} -${ribbonPosition} ${className} -compound`}>
  <span className="label-container">
    <span className="eva-3-bold label-text">{content.primary}</span>
  </span>
  <span className="label-container -eva-3-bc-white">
    <Icon icon="gift" className="label-icon -eva-3-tc-red-3" />
    <span className="eva-3-bold label-text -eva-3-tc-gray-1">
      {content.secondary}
    </span>
  </span>
</div>

// Variante member-deals
<div className={`eva-3-label -${size} -${ribbonPosition} ${className} -compound`}>
  {/* Orden invertido según ribbonPositionIsLeft */}
  <span className="label-container -eva-3-bc-bubblegum-1">
    <Icon icon="loyalty-filled" className="label-icon" />
    <span className="eva-3-bold label-text">{content.secondary}</span>
  </span>
  <span className="label-container">
    <span className={`eva-3-bold label-text ${variant === 'member-deals-logged' ? '-linethrough' : ''}`}>
      {content.primary}
    </span>
  </span>
</div>
```

## Lógica interna

El componente determina:
- **isCompound**: `variant === 'compound' || variant === 'member-deals' || variant === 'member-deals-logged'`.
- **ribbonPositionIsLeft**: `ribbonPosition === 'top-left' || ribbonPosition === 'bottom-left'`.
- **Orden de containers**: En compound, el orden cambia según `ribbonPositionIsLeft` para que el tail esté en el primer container visible.

## Accesibilidad

### Texto descriptivo

El texto debe ser claro y conciso (ej: "-30%", "Ahorrá 3200 puntos").

### Contraste

Asegurar contraste suficiente entre texto y background (todos los labels usan texto blanco excepto secret-deals que usa neutral-700).

### Íconos decorativos

Los íconos son decorativos (acompañan el texto principal). Si se requiere, agregar `aria-hidden="true"` al Icon:

```jsx
<Icon icon="gift" className="label-icon" aria-hidden="true" />
```

### Contexto visual

El label debe estar dentro de un contexto visual (tarjeta, imagen) para que el usuario entienda a qué producto/oferta aplica el descuento.

## Dependencias

### Componentes internos
- `Icon` (renderizado condicionalmente según variante)

### HOC
- `withUtilities` (agrega utilidades de EVA UI)

### Componentes importados
- `Colours` (variables de color)
- `ColoursVariablesLoyalty` (colores loyalty como bubblegum-1)
- `Text` (mixins eva-text-as)
- `Shadow` (sombras)

### Categoría
- **Type**: atoms
- **Category**: labels
- **Primary class**: `eva-3-label`
- **Tags**: discount, descuento, destaque, etiqueta

## Notas adicionales

- **Tail triangular**: El triángulo decorativo (tail) se crea con pseudo-elemento `::before` usando borders. Su color coincide con el background del label.
- **Secret-deals**: Usa doble tail (`::before` + `::after`) para simular borde también en el triángulo.
- **Member-deals order**: El orden de los `label-container` se invierte dinámicamente según `ribbonPositionIsLeft` para que el tail quede en el primer elemento visible.
- **Linethrough**: La clase `-linethrough` en `label-text` crea una línea tachada con pseudo-elemento `::before` (height 3px, color success-100).
- **Icon margin**: Los íconos tienen `margin-bottom: 2px` y si hay texto después, `margin-left: $spacing-2`.

## Ejemplo completo (todas las variantes)

```jsx
import React from 'react';
import Label from 'eva-main/client/src/components/Label/Label.jsx';

function LabelShowcase() {
  return (
    <div className="label-showcase">
      <h3>Green</h3>
      <Label variant="green" ribbonPosition="top-left" size="md" content={{ primary: '-30%' }} />

      <h3>Purple</h3>
      <Label variant="purple" ribbonPosition="top-right" size="md" content={{ primary: '-20%' }} />

      <h3>Loyalty</h3>
      <Label variant="loyalty" ribbonPosition="top-left" size="md" content={{ primary: 'Ahorrá 5000 puntos' }} />

      <h3>Compound</h3>
      <Label variant="compound" ribbonPosition="bottom-left" size="md" content={{ primary: '-40%', secondary: 'Secret Deal' }} />

      <h3>Secret Deals</h3>
      <Label variant="secret-deals" ribbonPosition="top-right" size="md" content={{ primary: '%' }} />

      <h3>Member Deals (no logueado)</h3>
      <Label variant="member-deals" ribbonPosition="top-left" size="md" content={{ primary: '-25%', secondary: '%' }} />

      <h3>Member Deals Logged (tachado)</h3>
      <Label variant="member-deals-logged" ribbonPosition="bottom-right" size="md" content={{ primary: '-25%', secondary: '%' }} />
    </div>
  );
}
```
