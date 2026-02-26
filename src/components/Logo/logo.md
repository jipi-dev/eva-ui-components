# Logo

## Descripción
Átomo que incluye los logos de Despegar/Decolar. Los logos se sirven como imágenes SVG desde el servicio de Staticontent, versión 0.0.1.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Tipo de componente
- **Tipo**: Átomo
- **Categoría**: Illustrations
- **Tags**: decolar, despegar, isologo

## Estructura HTML

```html
<img 
  src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg" 
  alt="isologo_despegar_horizontal_primary"
  class="custom-class" 
/>
```

## Variantes

### Logos Despegar

#### Horizontal Primary
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg" alt="isologo_despegar_horizontal_primary" />
```

#### Horizontal White
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_white.svg" alt="isologo_despegar_horizontal_white" />
```

#### Horizontal Tagline
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_tagline.svg" alt="isologo_despegar_horizontal_tagline" />
```

#### Vertical Primary
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_vertical_primary.svg" alt="isologo_despegar_vertical_primary" />
```

#### Vertical White
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_vertical_white.svg" alt="isologo_despegar_vertical_white" />
```

#### Symbol Primary
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/symbol_primary.svg" alt="symbol_primary" />
```

#### Symbol White
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/symbol_white.svg" alt="symbol_white" />
```

### Logos Decolar

#### Horizontal Primary
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_horizontal_primary.svg" alt="isologo_decolar_horizontal_primary" />
```

#### Horizontal White
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_horizontal_white.svg" alt="isologo_decolar_horizontal_white" />
```

#### Horizontal Tagline
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_horizontal_tagline.svg" alt="isologo_decolar_horizontal_tagline" />
```

#### Vertical Primary
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_vertical_primary.svg" alt="isologo_decolar_vertical_primary" />
```

#### Vertical White
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_vertical_white.svg" alt="isologo_decolar_vertical_white" />
```

#### Vertical Tagline
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_decolar_vertical_tagline.svg" alt="isologo_decolar_vertical_tagline" />
```

#### Symbol (Decolar y Despegar usan el mismo símbolo)
Ver variantes "Symbol Primary" y "Symbol White" en la sección de Despegar.

## Estados
No aplica. El componente Logo no tiene estados interactivos.

## Estilos CSS
El componente **Logo** no tiene estilos CSS propios. Las dimensiones y estilos visuales del logo deben controlarse desde CSS:

```css
img {
  width: auto;
  height: 50px; /* Ajustar según necesidad */
}
```

## Accesibilidad
- **Alt text**: Siempre incluir el atributo `alt` con el nombre del logo para lectores de pantalla
- **Tamaño**: Asegurar que el logo tenga un tamaño legible (mínimo recomendado 32px de altura)
- **Contraste**: Usar la variante "white" sobre fondos oscuros y "primary" sobre fondos claros

```html
<img 
  src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg" 
  alt="Logo Despegar" 
  role="img"
/>
```

## Dependencias

### Imágenes (32 archivos SVG)
El componente depende de 32 imágenes SVG alojadas en Staticontent:

**Naming nuevo (isologo_):**
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

**Naming legacy (logo_):**
- logo_despegar_color_desktop.svg
- logo_despegar_color_mobile.svg
- logo_despegar_blanco_desktop.svg
- logo_despegar_blanco_mobile.svg
- logo_despegar_color_mobile_tagline.svg
- logo_despegar_color_desktop_tagline.svg
- logo_despegar_blanco_desktop_tagline.svg
- logo_despegar_blanco_mobile_tagline.svg
- logo_decolar_color_desktop.svg
- logo_decolar_color_mobile.svg
- logo_decolar_blanco_desktop.svg
- logo_decolar_blanco_mobile.svg
- logo_decolar_color_mobile_tagline.svg
- logo_decolar_color_desktop_tagline.svg
- logo_decolar_blanco_desktop_tagline.svg
- logo_decolar_blanco_mobile_tagline.svg
- symbol_despegar_color.svg
- symbol_despegar_blanco.svg
- symbol_decolar_color.svg

## Descarga e implementación

### Descargar recursos
Para utilizar los logos localmente, agregar en `eva.manifest.json`:

```json
{
  "dependencies": {
    "components": ["logo"]
  }
}
```

Después de la descarga, los SVGs estarán disponibles en: `eva/resources/images/`

### Implementación
Hay dos opciones de implementación:

#### 1. Usando Staticontent (Recomendado)
```html
<img src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/isologo_despegar_horizontal_primary.svg" alt="Logo Despegar" />
```

#### 2. Usando recursos locales
```html
<img src="/eva/resources/images/isologo_despegar_horizontal_primary.svg" alt="Logo Despegar" />
```

## Guía de uso

### ¿Cuándo usar cada variante?

**Horizontal Primary/White:**
- Headers y navegación principal
- Footers
- Emails
- Documentos oficiales

**Horizontal Tagline:**
- Páginas de aterrizaje
- Campañas de marketing
- Material promocional

**Vertical:**
- Espacios cuadrados o verticales
- Apps móviles
- Favicons grandes

**Symbol:**
- Favicons
- Apps móviles (icono)
- Espacios muy reducidos
- Marcas de agua

### Colores
- **Primary**: Para fondos blancos o claros
- **White**: Para fondos oscuros o con color

### Proporciones
Mantener siempre la proporción original del logo (aspect-ratio). No distorsionar.

```css
img {
  width: 100%;
  height: auto; /* Mantiene proporción */
  max-width: 200px;
}
```

## Notas adicionales
- Versión actual: **0.0.1**
- Servicio: **Staticontent** (https://www.staticontent.com/eva-core/assets/logos/)
- Formato: **SVG** (escalable sin pérdida de calidad)
- El componente no tiene estilos propios (archivo SCSS vacío)
- Soporta naming legacy para compatibilidad con versiones anteriores
