# LogoLoyalty

## Descripción
Átomo que incluye los logos de Loyalty / Pasaporte Despegar. Los logos se sirven como imágenes SVG desde recursos locales.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Tipo de componente
- **Tipo**: Átomo
- **Categoría**: Loyalty
- **Status**: Loyalty
- **Tags**: pasaporte, isologo

## Estructura HTML

```html
<img 
  src="/ui/dist/resources/images/loyalty-logo.svg" 
  alt="loyalty-logo"
  class="custom-class" 
/>
```

## Variantes

### Loyalty Logo
```html
<img src="/ui/dist/resources/images/loyalty-logo.svg" alt="loyalty-logo" />
```

### Loyalty Logo White
```html
<img src="/ui/dist/resources/images/loyalty-logo-white.svg" alt="loyalty-logo-white" />
```

### Loyalty Isologotipo (Despegar)
```html
<img src="/ui/dist/resources/images/loyalty-isologotipo.svg" alt="loyalty-isologotipo" />
```

### Loyalty Isologotipo White (Despegar)
```html
<img src="/ui/dist/resources/images/loyalty-isologotipo-white.svg" alt="loyalty-isologotipo-white" />
```

### Loyalty Isologotipo Decolar
```html
<img src="/ui/dist/resources/images/loyalty-isologotipo-decolar.svg" alt="loyalty-isologotipo-decolar" />
```

### Loyalty Isologotipo Decolar White
```html
<img src="/ui/dist/resources/images/loyalty-isologotipo-decolar-white.svg" alt="loyalty-isologotipo-decolar-white" />
```

## Ruta personalizada

Puedes cambiar la ruta base de los recursos:

```html
<img src="/custom/path/loyalty-logo.svg" alt="loyalty-logo" />
```

## Estados
No aplica. El componente LogoLoyalty no tiene estados interactivos.

## Estilos CSS
El componente **LogoLoyalty** no tiene estilos CSS propios.

## Accesibilidad
- **Alt text**: Incluir siempre el atributo `alt`
- **Role**: Usar `role="img"` cuando sea necesario
- **Contraste**: Usar variantes "white" sobre fondos oscuros

## Dependencias

### Sprites (6 archivos SVG)
- loyalty-logo.svg
- loyalty-logo-white.svg
- loyalty-isologotipo.svg
- loyalty-isologotipo-white.svg
- loyalty-isologotipo-decolar.svg
- loyalty-isologotipo-decolar-white.svg

## Guía de uso

### Pasaporte Despegar
Usar las variantes con "loyalty-isologotipo" (sin "-decolar") para marca Despegar.

### Pasaporte Decolar
Usar las variantes con "loyalty-isologotipo-decolar" para marca Decolar.

### Logo completo vs Isologotipo
- **loyalty-logo**: Logo completo de Pasaporte Despegar
- **loyalty-isologotipo**: Isologo + logotipo combinado

### Colores
- **Default**: Para fondos claros
- **White**: Para fondos oscuros
