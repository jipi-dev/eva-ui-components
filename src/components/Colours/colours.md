# Colours Component

## Descripción

La paleta de colores del design system EVA UI se encuentra disponible en variables de CSS3. Los colores están organizados en diferentes categorías para facilitar su uso y mantener la consistencia visual en todas las aplicaciones.

**Tipo:** Fundacional  
**Categoría:** Visual / Colour  
**Tags:** colours, palette, brand, neutrals, states, gradients, tokens, variables

## Cuándo Usar
- Al definir fondos, textos, bordes y estados en componentes y páginas.
- Para mapear tokens de marca en productos (brand, loyalty, unbeatable).

## Mejores Prácticas
- Usa variables CSS (`var(--brand-primary-3)`) en lugar de valores hex directos.
- Respeta las combinaciones de contraste (texto/fondo) y WCAG AA cuando aplique.
- Usa tonos de estado (info/success/warning/error) para feedback y alertas.

## Dependencias
- Variables CSS definidas en EVA UI (`--brand-*`, `--neutral-*`, `--state-*`, `--gradient-*`).

## Categorías de Colores

Los colores que utilizamos son:

- **Colores corporativos** (Brand)
- **Colores de estado** (Info, Success, Warning, Error)
- **Colores neutrales** (Grises, Black, White)
- **Gradientes** (solo para fondos)

## Variables CSS

### Colores Corporativos (Brand)

Estos son 3: **primary**, **secondary** y **tertiary**; y sus variantes de tono (1-4).

#### Primary

```css
--brand-primary-1: #EBE5F5  /* Tono más claro */
--brand-primary-2: #A780FF
--brand-primary-3: #4300D2  /* Tono principal */
--brand-primary-4: #270570  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.my-component {
  background-color: var(--brand-primary-3);
}
```

```css
.my-text {
  color: var(--brand-primary-3);
}
```

#### Secondary

```css
--brand-secondary-1: #FCE8E6  /* Tono más claro */
--brand-secondary-2: #F6AEA7
--brand-secondary-3: #E61A06  /* Tono principal */
--brand-secondary-4: #8A1004  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.my-component {
  background-color: var(--brand-secondary-3);
}
```

#### Tertiary

```css
--brand-tertiary-1: #ECFDF9  /* Tono más claro */
--brand-tertiary-2: #CBF6EC
--brand-tertiary-3: #ADEDDD
--brand-tertiary-4: #62C1A3  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.my-component {
  background-color: var(--brand-tertiary-4);
}
```

### Colores de Estado

Estos son 4: **info**, **success**, **warning** y **error**; y sus variantes de tono (100, 300, 500, 900).

#### Info

```css
--color-info-100: #ECF4FE  /* Tono más claro */
--color-info-300: #C5DFFD
--color-info-500: #2D77CF  /* Tono principal */
--color-info-900: #19406E  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.info-message {
  background-color: var(--color-info-100);
  color: var(--color-info-900);
}
```

#### Success

```css
--color-success-100: #E6FBFB  /* Tono más claro */
--color-success-300: #C9F0ED
--color-success-500: #028574  /* Tono principal */
--color-success-900: #01423A  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.success-message {
  background-color: var(--color-success-100);
  color: var(--color-success-900);
}
```

#### Warning

```css
--color-warning-100: #FEF4E6  /* Tono más claro */
--color-warning-300: #FDDDB4
--color-warning-500: #C87203  /* Tono principal */
--color-warning-900: #643902  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.warning-message {
  background-color: var(--color-warning-100);
  color: var(--color-warning-900);
}
```

#### Error

```css
--color-error-100: #FEEDEC  /* Tono más claro */
--color-error-300: #FDCAC5
--color-error-500: #CB4032  /* Tono principal */
--color-error-900: #6E2119  /* Tono más oscuro */
```

**Ejemplo de uso:**
```css
.error-message {
  background-color: var(--color-error-100);
  color: var(--color-error-900);
}
```

### Colores Neutrales (Grises)

Estos son: **black**, **white** y **neutrals** con sus variantes de tono (100-800).

```css
--color-black: #000000
--color-neutral-800: #323439  /* Más oscuro */
--color-neutral-700: #565A60
--color-neutral-600: #72777F
--color-neutral-400: #C0C4CC
--color-neutral-300: #DDE1E8
--color-neutral-200: #E9ECF1
--color-neutral-100: #F2F4F5  /* Más claro */
--color-white: #FFFFFF
```

**Ejemplo de uso:**
```css
.my-component {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-800);
  border: 1px solid var(--color-neutral-300);
}
```

### Gradientes

Actualmente disponible: **gradient-primary-500-300**. La nomenclatura indica el color de inicio y final del gradiente.

**Importante:** Solo debe usarse para fondos.

```css
--gradient-primary-500-300: linear-gradient(335deg, var(--brand-primary-2) 18%, var(--brand-primary-3) 107%);
```

**Ejemplo de uso:**
```css
.my-component {
  background-image: var(--gradient-primary-500-300);
}
```

**Nota:** Es necesario utilizar `background-image` ya que se utiliza la propiedad `linear-gradient`.

## Paleta Completa de Variables

### Todas las Variables CSS3

```css
:root {
  /* Brand Colors */
  --brand-primary-1: #EBE5F5;
  --brand-primary-2: #A780FF;
  --brand-primary-3: #4300D2;
  --brand-primary-4: #270570;
  --brand-secondary-1: #FCE8E6;
  --brand-secondary-2: #F6AEA7;
  --brand-secondary-3: #E61A06;
  --brand-secondary-4: #8A1004;
  --brand-tertiary-1: #ECFDF9;
  --brand-tertiary-2: #CBF6EC;
  --brand-tertiary-3: #ADEDDD;
  --brand-tertiary-4: #62C1A3;
  
  /* Neutral Colors */
  --color-black: #000000;
  --color-neutral-100: #F2F4F5;
  --color-neutral-200: #E9ECF1;
  --color-neutral-300: #DDE1E8;
  --color-neutral-400: #C0C4CC;
  --color-neutral-600: #72777F;
  --color-neutral-700: #565A60;
  --color-neutral-800: #323439;
  --color-white: #FFFFFF;
  
  /* State Colors - Info */
  --color-info-100: #ECF4FE;
  --color-info-300: #C5DFFD;
  --color-info-500: #2D77CF;
  --color-info-900: #19406E;
  
  /* State Colors - Success */
  --color-success-100: #E6FBFB;
  --color-success-300: #C9F0ED;
  --color-success-500: #028574;
  --color-success-900: #01423A;
  
  /* State Colors - Warning */
  --color-warning-100: #FEF4E6;
  --color-warning-300: #FDDDB4;
  --color-warning-500: #C87203;
  --color-warning-900: #643902;
  
  /* State Colors - Error */
  --color-error-100: #FEEDEC;
  --color-error-300: #FDCAC5;
  --color-error-500: #CB4032;
  --color-error-900: #6E2119;
  
  /* Gradients */
  --gradient-primary-500-300: linear-gradient(335deg, var(--brand-primary-2) 18%, var(--brand-primary-3) 107%);
}
```

## Ejemplos de Uso

### Componente con Brand Colors

```css
.hero-section {
  background-color: var(--brand-primary-3);
  color: var(--color-white);
}

.cta-button {
  background-color: var(--brand-secondary-3);
  color: var(--color-white);
}
```

### Mensajes de Estado

```css
.alert-info {
  background-color: var(--color-info-100);
  border-left: 4px solid var(--color-info-500);
  color: var(--color-info-900);
}

.alert-success {
  background-color: var(--color-success-100);
  border-left: 4px solid var(--color-success-500);
  color: var(--color-success-900);
}

.alert-warning {
  background-color: var(--color-warning-100);
  border-left: 4px solid var(--color-warning-500);
  color: var(--color-warning-900);
}

.alert-error {
  background-color: var(--color-error-100);
  border-left: 4px solid var(--color-error-500);
  color: var(--color-error-900);
}
```

### Uso de Neutrales

```css
.card {
  background-color: var(--color-white);
  border: 1px solid var(--color-neutral-300);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: var(--color-neutral-800);
}

.text-secondary {
  color: var(--color-neutral-600);
}

.divider {
  border-bottom: 1px solid var(--color-neutral-200);
}
```

### Uso de Gradiente

```css
.hero-banner {
  background-image: var(--gradient-primary-500-300);
  color: var(--color-white);
  padding: 60px 20px;
}
```

## Best Practices

### Usage Guidelines

- **Usar variables CSS3**: Siempre utilizar las variables de CSS3 en lugar de valores hardcodeados
- **Brand Colors**: Usar para elementos de marca, CTAs principales, headers
- **State Colors**: Usar para feedback visual (alertas, mensajes, validaciones)
- **Neutrales**: Usar para texto, fondos, bordes, separadores
- **Gradientes**: Solo para fondos, no para texto o bordes
- **Consistencia**: Mantener el uso consistente de colores según su propósito

### Tonalidades

- **Tono 1 o 100**: Fondos suaves, estados hover ligeros
- **Tono 2 o 300**: Elementos secundarios, bordes suaves
- **Tono 3 o 500**: Color principal de la categoría
- **Tono 4 o 900**: Textos sobre fondos claros, elementos con más peso

### Contraste y Accesibilidad

- Asegurar contraste mínimo de 4.5:1 para texto normal
- Asegurar contraste mínimo de 3:1 para texto grande (18px+ o 14px+ bold)
- Usar tonos más oscuros (900, 4) para texto sobre fondos claros
- Usar tonos más claros (100, 1) para fondos sobre los que va texto oscuro
- Probar con herramientas de contraste (WCAG AA/AAA)

## Clases Utilitarias (Deprecadas)

⚠️ **Deprecation Warning**

Las clases utilitarias de colores se mantienen por motivos de retro-compatibilidad, **desaconsejamos su uso** ya que no se le dará mantenimiento a futuro.

**Recomendamos usar las variables de CSS3** para utilizar los colores del Design System.

### Clases de Fondo (Background Color)

**Brand Colors:**
```css
.-eva-3-bc-brand-primary-1 → #EBE5F5
.-eva-3-bc-brand-primary-2 → #A780FF
.-eva-3-bc-brand-primary-3 → #4300D2
.-eva-3-bc-brand-primary-4 → #270570

.-eva-3-bc-brand-secondary-1 → #FCE8E6
.-eva-3-bc-brand-secondary-2 → #F6AEA7
.-eva-3-bc-brand-secondary-3 → #E61A06
.-eva-3-bc-brand-secondary-4 → #8A1004

.-eva-3-bc-brand-tertiary-1 → #ECFDF9
.-eva-3-bc-brand-tertiary-2 → #CBF6EC
.-eva-3-bc-brand-tertiary-3 → #ADEDDD
.-eva-3-bc-brand-tertiary-4 → #62C1A3
```

**State Colors:**
```css
.-eva-3-bc-green-1 → #E6FBFB (success-100)
.-eva-3-bc-green-2 → #C9F0ED (success-300)
.-eva-3-bc-green-3 → #028574 (success-500)
.-eva-3-bc-green-4 → #01423A (success-900)

.-eva-3-bc-orange-1 → #FEF4E6 (warning-100)
.-eva-3-bc-orange-2 → #FDDDB4 (warning-300)
.-eva-3-bc-orange-3 → #C87203 (warning-500)
.-eva-3-bc-orange-4 → #643902 (warning-900)

.-eva-3-bc-red-1 → #FEEDEC (error-100)
.-eva-3-bc-red-2 → #FDCAC5 (error-300)
.-eva-3-bc-red-3 → #CB4032 (error-500)
.-eva-3-bc-red-4 → #6E2119 (error-900)
```

**Neutrals:**
```css
.-eva-3-bc-black → #000000
.-eva-3-bc-gray-4 → #323439
.-eva-3-bc-gray-3 → #565A60
.-eva-3-bc-gray-2 → #72777F
.-eva-3-bc-gray-1 → #DDE1E8
.-eva-3-bc-gray-0 → #F2F4F5
.-eva-3-bc-white → #FFFFFF
```

### Clases de Texto (Text Color)

**Brand Colors:**
```css
.-eva-3-tc-brand-primary-1 → #EBE5F5
.-eva-3-tc-brand-primary-2 → #A780FF
.-eva-3-tc-brand-primary-3 → #4300D2
.-eva-3-tc-brand-primary-4 → #270570
```

(Similar pattern para secondary, tertiary, state colors y neutrals, reemplazando `-bc-` por `-tc-`)

## Migración de Clases a Variables

Si estás usando clases deprecadas, aquí está la guía de migración:

**Antes (deprecado):**
```html
<div class="-eva-3-bc-brand-primary-3">
  <span class="-eva-3-tc-white">Texto</span>
</div>
```

**Después (recomendado):**
```html
<div style="background-color: var(--brand-primary-3); color: var(--color-white)">
  Texto
</div>
```

O mejor aún, usando clases propias:
```css
.my-component {
  background-color: var(--brand-primary-3);
  color: var(--color-white);
}
```

```html
<div class="my-component">
  Texto
</div>
```
