# LogoLoyalty - Componente React

## Descripción
Componente React para renderizar logos de Loyalty / Pasaporte Despegar desde recursos locales.

## Importación

```jsx
import LogoLoyalty from '@eva/components/LogoLoyalty';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `name` | `string` | ✅ Sí | `'loyalty-logo'` | Nombre del logo |
| `localResourcesPath` | `string` | ✅ Sí | `'/ui/dist/resources/images'` | Ruta a los recursos |
| `className` | `string` | ❌ No | `''` | Clases CSS adicionales |

### Valores permitidos para `name`:
- `'loyalty-logo'`
- `'loyalty-logo-white'`
- `'loyalty-isologotipo'`
- `'loyalty-isologotipo-white'`
- `'loyalty-isologotipo-decolar'`
- `'loyalty-isologotipo-decolar-white'`

## Uso básico

```jsx
<LogoLoyalty name="loyalty-logo" />
```

## Variantes

### Logo Pasaporte Despegar
```jsx
<LogoLoyalty name="loyalty-logo" />
```

### Logo White
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <LogoLoyalty name="loyalty-logo-white" />
</div>
```

### Isologotipo Despegar
```jsx
<LogoLoyalty name="loyalty-isologotipo" />
```

### Isologotipo Despegar White
```jsx
<LogoLoyalty name="loyalty-isologotipo-white" />
```

### Isologotipo Decolar
```jsx
<LogoLoyalty name="loyalty-isologotipo-decolar" />
```

### Isologotipo Decolar White
```jsx
<LogoLoyalty name="loyalty-isologotipo-decolar-white" />
```

## Ruta personalizada

```jsx
<LogoLoyalty 
  name="loyalty-logo" 
  localResourcesPath="/custom/path/images"
/>
```

## Ejemplo completo

```jsx
import React from 'react';
import LogoLoyalty from '@eva/components/LogoLoyalty';

const LoyaltyHeader = ({ brand = 'despegar', isDark = false }) => {
  const logoName = isDark 
    ? `loyalty-isologotipo${brand === 'decolar' ? '-decolar' : ''}-white`
    : `loyalty-isologotipo${brand === 'decolar' ? '-decolar' : ''}`;

  return (
    <header>
      <LogoLoyalty name={logoName} className="loyalty-header-logo" />
    </header>
  );
};
```

## PropTypes

```jsx
LogoLoyalty.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf([
    'loyalty-logo',
    'loyalty-logo-white',
    'loyalty-isologotipo',
    'loyalty-isologotipo-white',
    'loyalty-isologotipo-decolar',
    'loyalty-isologotipo-decolar-white'
  ]).isRequired,
  localResourcesPath: PropTypes.string.isRequired,
};
```

## Accesibilidad

El componente incluye automáticamente el atributo `alt`:

```jsx
<LogoLoyalty name="loyalty-logo" />
// Renderiza: <img alt="loyalty-logo" ... />
```

## HOC: withUtilities
El componente usa `withUtilities` para props de utilidad adicionales.

## Dependencias

### Sprites (6 archivos):
- loyalty-logo.svg
- loyalty-logo-white.svg
- loyalty-isologotipo.svg
- loyalty-isologotipo-white.svg
- loyalty-isologotipo-decolar.svg
- loyalty-isologotipo-decolar-white.svg

## Notas técnicas
- **Status**: Loyalty
- **Categoría**: Loyalty
- **Tipo**: Atoms
- **Formato**: SVG
