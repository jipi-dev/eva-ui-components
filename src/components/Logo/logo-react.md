# Logo - Componente React

## Descripción
Componente React para renderizar los logos de Despegar/Decolar. Los logos se sirven como imágenes SVG desde Staticontent (versión 0.0.1).

**Tipo:** Activo visual  
**Categoría:** Brand / Identity  
**Tags:** react, logo, despegar, decolar, isologo, symbol, svg, staticontent

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Cabeceras, footers o lugares donde debas mostrar identidad de marca.
- Variantes blancas sobre fondos oscuros; primarias sobre fondos claros.

## Mejores Prácticas
- Elige la variante correcta según contraste (white vs primary) y orientación (horizontal/vertical).
- Usa `symbol` cuando necesites ícono compacto sin texto.
- Asegura dimensiones consistentes; no estirar el SVG.

## Dependencias
- Assets SVG servidos desde staticontent (v0.0.1) referenciados por `name`.

## Importación

```jsx
import Logo from '@eva/components/Logo';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `name` | `string` | ✅ Sí | - | Nombre del logo a mostrar (14 opciones disponibles) |
| `className` | `string` | ❌ No | `''` | Clases CSS adicionales |

### Valores permitidos para `name`:

#### Despegar:
- `'isologo_despegar_horizontal_primary'`
- `'isologo_despegar_horizontal_white'`
- `'isologo_despegar_horizontal_tagline'`
- `'isologo_despegar_vertical_primary'`
- `'isologo_despegar_vertical_white'`
- `'symbol_primary'`
- `'symbol_white'`

#### Decolar:
- `'isologo_decolar_horizontal_primary'`
- `'isologo_decolar_horizontal_white'`
- `'isologo_decolar_horizontal_tagline'`
- `'isologo_decolar_vertical_primary'`
- `'isologo_decolar_vertical_white'`
- `'isologo_decolar_vertical_tagline'`
- `'symbol_primary'` (mismo que Despegar)
- `'symbol_white'` (mismo que Despegar)

## PropTypes

```jsx
Logo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf([
    'isologo_despegar_horizontal_primary',
    'isologo_despegar_horizontal_white',
    'isologo_despegar_horizontal_tagline',
    'isologo_despegar_vertical_primary',
    'isologo_despegar_vertical_white',
    'isologo_decolar_horizontal_primary',
    'isologo_decolar_horizontal_white',
    'isologo_decolar_horizontal_tagline',
    'isologo_decolar_vertical_primary',
    'isologo_decolar_vertical_white',
    'isologo_decolar_vertical_tagline',
    'symbol_primary',
    'symbol_white'
  ]).isRequired,
};
```

## Uso básico

### Logo Despegar Horizontal Primary
```jsx
<Logo name="isologo_despegar_horizontal_primary" />
```

### Logo Despegar Horizontal White
```jsx
<Logo name="isologo_despegar_horizontal_white" />
```

### Logo con tagline
```jsx
<Logo name="isologo_despegar_horizontal_tagline" />
```

## Variantes

### Logos Despegar

#### Horizontal Primary
```jsx
<Logo name="isologo_despegar_horizontal_primary" />
```

#### Horizontal White (para fondos oscuros)
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <Logo name="isologo_despegar_horizontal_white" />
</div>
```

#### Horizontal con Tagline
```jsx
<Logo name="isologo_despegar_horizontal_tagline" />
```

#### Vertical Primary
```jsx
<Logo name="isologo_despegar_vertical_primary" />
```

#### Vertical White
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <Logo name="isologo_despegar_vertical_white" />
</div>
```

#### Symbol Primary (solo icono)
```jsx
<Logo name="symbol_primary" />
```

#### Symbol White
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <Logo name="symbol_white" />
</div>
```

### Logos Decolar

#### Horizontal Primary
```jsx
<Logo name="isologo_decolar_horizontal_primary" />
```

#### Horizontal White
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <Logo name="isologo_decolar_horizontal_white" />
</div>
```

#### Horizontal con Tagline
```jsx
<Logo name="isologo_decolar_horizontal_tagline" />
```

#### Vertical Primary
```jsx
<Logo name="isologo_decolar_vertical_primary" />
```

#### Vertical White
```jsx
<div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
  <Logo name="isologo_decolar_vertical_white" />
</div>
```

#### Vertical con Tagline
```jsx
<Logo name="isologo_decolar_vertical_tagline" />
```

## Personalización con className

### Logo con tamaño personalizado
```jsx
<Logo 
  name="isologo_despegar_horizontal_primary" 
  className="custom-logo" 
/>
```

```css
.custom-logo {
  width: auto;
  height: 50px;
}
```

### Logo en header responsive
```jsx
<Logo 
  name="isologo_despegar_horizontal_primary" 
  className="header-logo" 
/>
```

```css
.header-logo {
  height: 32px;
}

@media (min-width: 768px) {
  .header-logo {
    height: 48px;
  }
}
```

## Ejemplo completo en Header

```jsx
import React from 'react';
import Logo from '@eva/components/Logo';

const Header = ({ isDarkBackground = false }) => {
  return (
    <header 
      style={{ 
        backgroundColor: isDarkBackground ? '#1a1a1a' : '#ffffff',
        padding: '16px'
      }}
    >
      <Logo 
        name={
          isDarkBackground 
            ? 'isologo_despegar_horizontal_white' 
            : 'isologo_despegar_horizontal_primary'
        }
        className="header-logo"
      />
    </header>
  );
};

export default Header;
```

## Ejemplo con selección de marca

```jsx
import React from 'react';
import Logo from '@eva/components/Logo';

const BrandLogo = ({ brand = 'despegar', variant = 'primary' }) => {
  const logoName = `isologo_${brand}_horizontal_${variant}`;
  
  return (
    <Logo name={logoName} className="brand-logo" />
  );
};

// Uso:
<BrandLogo brand="despegar" variant="primary" />
<BrandLogo brand="decolar" variant="white" />
```

## Accesibilidad

El componente automáticamente incluye el atributo `alt` con el valor del `name`:

```jsx
<Logo name="isologo_despegar_horizontal_primary" />
```

Renderiza:
```html
<img 
  src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg" 
  alt="isologo_despegar_horizontal_primary"
/>
```

### Mejorando el alt text
Para un mejor alt text, envolver el componente:

```jsx
<div role="img" aria-label="Logo Despegar">
  <Logo name="isologo_despegar_horizontal_primary" />
</div>
```

## Implementación interna

El componente renderiza una imagen con la siguiente estructura:

```jsx
const Logo = ({ name, className = '' }) => {
  return (
    <img 
      src={`https://www.staticontent.com/eva-core/assets/logos/0.0.1/${name}.svg`}
      className={className}
      alt={name}
    />
  );
};
```

## HOC: withUtilities

El componente está envuelto con el HOC `withUtilities`, que proporciona:
- Gestión automática de clases de utilidad
- Props adicionales de espaciado y layout
- Compatibilidad con el sistema de diseño EVA

## Dependencias

### Imagen Dependencies (32 archivos)
El componente referencia 32 imágenes SVG desde Staticontent:

#### Naming moderno:
- isologo_despegar_horizontal_primary.svg
- isologo_despegar_horizontal_white.svg
- isologo_despegar_horizontal_tagline.svg
- isologo_despegar_vertical_primary.svg
- isologo_despegar_vertical_white.svg
- isologo_decolar_horizontal_primary.svg
- isologo_decolar_horizontal_white.svg
- isologo_decolar_horizontal_tagline.svg
- isologo_decolar_vertical_primary.svg
- isologo_decolar_vertical_white.svg
- isologo_decolar_vertical_tagline.svg
- symbol_primary.svg
- symbol_white.svg

#### Naming legacy (compatibilidad):
- logo_despegar_color_desktop.svg
- logo_despegar_color_mobile.svg
- logo_despegar_blanco_desktop.svg
- logo_despegar_blanco_mobile.svg
- logo_despegar_color_mobile_tagline.svg
- (y 18 más...)

## Guía de uso

### ¿Qué variante usar?

#### Headers y navegación
```jsx
<Logo name="isologo_despegar_horizontal_primary" />
```

#### Páginas de marketing con tagline
```jsx
<Logo name="isologo_despegar_horizontal_tagline" />
```

#### Espacios verticales (sidebars)
```jsx
<Logo name="isologo_despegar_vertical_primary" />
```

#### Favicon o icono de app
```jsx
<Logo name="symbol_primary" />
```

#### Sobre fondos oscuros
```jsx
<Logo name="isologo_despegar_horizontal_white" />
```

### Reglas de color

**Primary (color):**
- Fondos blancos o claros
- Backgrounds neutros
- Documentos y emails

**White (blanco):**
- Fondos oscuros
- Backgrounds con color corporativo
- Imágenes de hero

## Comparación de variantes

| Variante | Uso recomendado | Proporción | Incluye tagline |
|----------|----------------|------------|-----------------|
| Horizontal Primary | Headers, navigation | ~3:1 | ❌ |
| Horizontal White | Dark headers | ~3:1 | ❌ |
| Horizontal Tagline | Landing pages | ~3:1 | ✅ |
| Vertical Primary | Sidebars | ~1:2 | ❌ |
| Vertical White | Dark sidebars | ~1:2 | ❌ |
| Vertical Tagline (Decolar) | Marketing vertical | ~1:2 | ✅ |
| Symbol Primary | Favicons | 1:1 | ❌ |
| Symbol White | Dark favicons | 1:1 | ❌ |

## Buenas prácticas

### ✅ Hacer
- Usar `primary` sobre fondos claros
- Usar `white` sobre fondos oscuros
- Mantener proporciones originales
- Usar `horizontal` para headers
- Usar `symbol` para favicons

### ❌ Evitar
- Distorsionar las proporciones del logo
- Usar `primary` sobre fondos oscuros (bajo contraste)
- Usar `white` sobre fondos claros (no se verá)
- Agregar efectos o filtros CSS al logo
- Modificar los colores del SVG

## Notas técnicas
- **Versión**: 0.0.1
- **Formato**: SVG (escalable)
- **CDN**: Staticontent (https://www.staticontent.com)
- **HOC**: withUtilities
- **Categoría**: Illustrations
- **Tipo**: Atoms
- **Sin estilos propios**: El archivo SCSS está vacío

## Testing

```jsx
import { render } from '@testing-library/react';
import Logo from '@eva/components/Logo';

describe('Logo Component', () => {
  it('renders with despegar primary logo', () => {
    const { container } = render(
      <Logo name="isologo_despegar_horizontal_primary" />
    );
    
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', 
      'https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg'
    );
    expect(img).toHaveAttribute('alt', 'isologo_despegar_horizontal_primary');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Logo name="symbol_primary" className="custom-class" />
    );
    
    const img = container.querySelector('img');
    expect(img).toHaveClass('custom-class');
  });
});
```
