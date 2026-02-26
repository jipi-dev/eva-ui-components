# LoyaltyIllustrations - Componente React

## Descripción
Componente React para renderizar ilustraciones de Loyalty / Pasaporte Despegar.

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación

```jsx
import LoyaltyIllustrations from '@eva/components/LoyaltyIllustrations';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `name` | `string` | ✅ Sí | `'benefits-calendar'` | Nombre de la ilustración (sin prefijo ly-) |
| `localResourcesPath` | `string` | ✅ Sí | `'/ui/dist/resources/sprites'` | Ruta a los sprites |
| `className` | `string` | ❌ No | `''` | Clases CSS adicionales |

### Valores permitidos para `name`:

**Benefits:**
- `'benefits-calendar'`
- `'benefits-discounts'`
- `'benefits-pay-with-points'`
- `'benefits-plane'`
- `'benefits-validity'`

**Mechanics:**
- `'mechanics-arrow'`
- `'mechanics-check'`
- `'mechanics-passport'`
- `'mechanics-pay-with-points'`
- `'mechanics-pending'`
- `'mechanics-travel'`

**Modal:**
- `'modal-check'`
- `'modal-map'`
- `'modal-passport'`
- `'modal-pending'`

**Feedback:**
- `'feedback-error'`
- `'feedback-on-hold'`
- `'feedback-success'`

## Uso básico

```jsx
<LoyaltyIllustrations name="benefits-pay-with-points" />
```

## Variantes por categoría

### Benefits

```jsx
<LoyaltyIllustrations name="benefits-calendar" />
<LoyaltyIllustrations name="benefits-discounts" />
<LoyaltyIllustrations name="benefits-pay-with-points" />
<LoyaltyIllustrations name="benefits-plane" />
<LoyaltyIllustrations name="benefits-validity" />
```

### Mechanics

```jsx
<LoyaltyIllustrations name="mechanics-arrow" />
<LoyaltyIllustrations name="mechanics-check" />
<LoyaltyIllustrations name="mechanics-passport" />
<LoyaltyIllustrations name="mechanics-pay-with-points" />
<LoyaltyIllustrations name="mechanics-pending" />
<LoyaltyIllustrations name="mechanics-travel" />
```

### Modal

```jsx
<LoyaltyIllustrations name="modal-check" />
<LoyaltyIllustrations name="modal-map" />
<LoyaltyIllustrations name="modal-passport" />
<LoyaltyIllustrations name="modal-pending" />
```

### Feedback

```jsx
<LoyaltyIllustrations name="feedback-error" />
<LoyaltyIllustrations name="feedback-on-hold" />
<LoyaltyIllustrations name="feedback-success" />
```

## Ejemplo con children (label)

```jsx
<LoyaltyIllustrations name="benefits-pay-with-points">
  Paga con puntos
</LoyaltyIllustrations>
```

Renderiza:
```html
<div class="eva-3-loyalty-illustrations">
  <img src="..." alt="Paga con puntos" />
  Paga con puntos
</div>
```

## Ruta personalizada

```jsx
<LoyaltyIllustrations 
  name="benefits-plane" 
  localResourcesPath="/custom/sprites"
/>
```

## Ejemplo completo en tarjeta de beneficios

```jsx
import React from 'react';
import LoyaltyIllustrations from '@eva/components/LoyaltyIllustrations';

const BenefitCard = ({ benefit }) => {
  const illustrationMap = {
    'discounts': 'benefits-discounts',
    'travel': 'benefits-plane',
    'points': 'benefits-pay-with-points',
  };

  return (
    <div className="benefit-card">
      <LoyaltyIllustrations 
        name={illustrationMap[benefit.type]}
        className="benefit-icon"
      />
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </div>
  );
};
```

## Ejemplo con estados de feedback

```jsx
import React from 'react';
import LoyaltyIllustrations from '@eva/components/LoyaltyIllustrations';

const StatusMessage = ({ status, message }) => {
  const statusIllustration = {
    success: 'feedback-success',
    error: 'feedback-error',
    pending: 'feedback-on-hold',
  };

  return (
    <div className="status-message">
      <LoyaltyIllustrations name={statusIllustration[status]} />
      <p>{message}</p>
    </div>
  );
};
```

## PropTypes

```jsx
LoyaltyIllustrations.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.oneOf([
    'benefits-calendar',
    'benefits-discounts',
    'benefits-pay-with-points',
    'benefits-plane',
    'benefits-validity',
    'mechanics-arrow',
    'mechanics-check',
    'mechanics-passport',
    'mechanics-pay-with-points',
    'mechanics-pending',
    'mechanics-travel',
    'modal-check',
    'modal-map',
    'modal-passport',
    'modal-pending',
    'feedback-error',
    'feedback-on-hold',
    'feedback-success'
  ]).isRequired,
  className: PropTypes.string,
  localResourcesPath: PropTypes.string.isRequired,
};
```

## Implementación interna

```jsx
const LoyaltyIllustrations = ({
  name = 'benefits-calendar',
  className = '',
  localResourcesPath = '/ui/dist/resources/sprites',
  children = 'label text',
}) => {
  return (
    <div className={`eva-3-loyalty-illustrations ${className}`}>
      <img 
        className="loyalty-illustrations-img" 
        src={`${localResourcesPath}/ly-${name}.svg`}
        alt={children}
      />
      {children}
    </div>
  );
};
```

**Nota:** El prefijo `ly-` se agrega automáticamente al nombre del archivo.

## Accesibilidad

El atributo `alt` usa el valor de `children`:

```jsx
<LoyaltyIllustrations name="benefits-plane">
  Beneficios de viaje
</LoyaltyIllustrations>
```

Renderiza:
```html
<img alt="Beneficios de viaje" ... />
```

## HOC: withUtilities
Envuelto con `withUtilities` para props de utilidad del sistema EVA.

## Dependencias

### Sprites (18 archivos)
Ver sección de dependencias en la documentación HTML.

## Guía de selección

| Contexto | Categoría sugerida |
|----------|-------------------|
| Mostrar beneficios | `benefits-*` |
| Explicar mecánicas | `mechanics-*` |
| Modales informativos | `modal-*` |
| Estados de proceso | `feedback-*` |

## Buenas prácticas

### ✅ Hacer
- Usar ilustraciones acordes al contexto
- Proporcionar `children` descriptivo para accesibilidad
- Usar categoría `feedback-*` para estados de proceso

### ❌ Evitar
- Usar ilustraciones de feedback para decoración
- Omitir el texto descriptivo (`children`)
- Mezclar ilustraciones de diferentes contextos

## Notas técnicas
- **Status**: Loyalty
- **Categoría**: Loyalty
- **Tipo**: Atoms
- **Formato**: SVG
- **Prefijo automático**: ly-
