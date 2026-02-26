# Colours Loyalty (Pasaporte)

## Descripción

Paleta adicional exclusiva para el programa de Loyalty (Pasaporte). Expone variables CSS personalizadas para fondos y textos vinculados al programa. No existe componente React asociado; si se necesitan estos colores, deben incluirse explícitamente en el manifest.

**Tipo:** Fundacional  
**Categoría:** Visual / Colour  
**Tags:** colours, loyalty, pasaporte, palette, tokens, variables CSS

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Cuándo Usar
- Experiencias, banners o flujos del programa Loyalty/Pasaporte.
- Cuando debas aplicar branding específico sin afectar la paleta general.

## Mejores Prácticas
- No usar fuera de piezas de Loyalty; mantiene coherencia de marca.
- Incluye el átomo en el manifest para exponer las variables en `eva.min.css`.
- Respeta contraste en textos sobre fondos de colores saturados.

## Dependencias
- Variables CSS `--eva-loyalty-*` disponibles al incluir el átomo en el build.

## Alcance y uso

- **Scope**: solo para piezas del programa de Loyalty/Pasaporte. No usar en experiencias fuera del programa.
- **Manifest**: agregar el componente/utility al manifest para disponer de las variables en el build.
- **Sin React**: es una utilidad de variables CSS, no un componente visual.

## Variables CSS

```css
:root {
  --eva-loyalty-primary-700: #F04A51;
  --eva-loyalty-primary-500: #FF5C63;
  --eva-loyalty-primary-300: #FF7A80;
  --eva-loyalty-primary-200: #FFBDC0;
  --eva-loyalty-primary-100: #FFF1F2;

  --eva-loyalty-secondary-500: #FAE74B;
  --eva-loyalty-secondary-300: #FFF288;
  --eva-loyalty-secondary-200: #FFF5AB;
  --eva-loyalty-secondary-100: #FFFBDB;

  --eva-loyalty-tertiary-900: #12101C;
  --eva-loyalty-tertiary-800: #1B182B;
  --eva-loyalty-tertiary-600: #353645;
  --eva-loyalty-tertiary-400: #535466;

  --eva-loyalty-quaternary-800: #897940;
  --eva-loyalty-quaternary-500: #E0CB82;
  --eva-loyalty-quaternary-300: #ECE0B4;
  --eva-loyalty-quaternary-100: #F9F5E6;
}
```

## Ejemplos de uso

### Fondo
```css
.my-component {
  background-color: var(--eva-loyalty-primary-500);
}
```

### Texto
```css
.my-component {
  color: var(--eva-loyalty-primary-500);
}
```

## Dependencias

- Utility CSS puro, sin dependencias de íconos ni sprites.
- Categoría: `colours` (atoms).