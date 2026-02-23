# Colours Unbeatable (Imbatibles)

## Descripción

Paleta adicional exclusiva para la submarca Imbatibles de Despegar. Provee variables CSS personalizadas para fondos y textos vinculados a la marca. No existe componente React asociado; si se necesitan estos colores, deben incluirse explícitamente en el manifest.

**Tipo:** Fundacional  
**Categoría:** Visual / Colour  
**Tags:** colours, unbeatable, imbatibles, palette, tokens, variables CSS

## Cuándo Usar
- Piezas y experiencias de la submarca Imbatibles.
- Necesidad de aplicar branding diferencial sin mezclar con la paleta general.

## Mejores Prácticas
- Limita el uso a contextos de Imbatibles.
- Agrega el átomo al manifest para exponer las variables en `:root`.
- Verifica contraste al usar el amarillo primario como fondo.

## Dependencias
- Variables CSS `--eva-unbeatable-*` disponibles al incluir el átomo en el build.

## Alcance y uso

- **Scope**: solo para componentes y experiencias de la submarca Imbatibles. No usar fuera de este contexto.
- **Manifest**: agregar el componente/utility al manifest para disponer de las variables en el build.
- **Sin React**: es una utilidad de variables CSS, no un componente visual.
- **Variables `:root`**: al incluir este átomo como dependencia, las variables se integran en `eva.min.css` bajo `:root`.

## Variables CSS

```css
:root {
  --eva-unbeatable-primary-500: #EFE02C;

  --eva-unbeatable-secondary-800: #410062;
}
```

## Paletas

### Primaria

- **Color**: `#EFE02C`
- **Variable**: `--eva-unbeatable-primary-500`
- **Uso**: amarillo brillante característico de Imbatibles.

**Ejemplo de uso en CSS:**
```css
.my-component {
  background-color: var(--eva-unbeatable-primary-500);
}
```

### Secundaria

- **Color**: `#410062`
- **Variable**: `--eva-unbeatable-secondary-800`
- **Uso**: morado oscuro para contraste y elementos secundarios.

**Ejemplo de uso en CSS:**
```css
.my-component {
  color: var(--eva-unbeatable-secondary-800);
}
```

## Ejemplos de uso

### Fondo con primario
```css
.unbeatable-banner {
  background-color: var(--eva-unbeatable-primary-500);
  color: var(--eva-unbeatable-secondary-800);
}
```

### Texto con secundario
```css
.unbeatable-title {
  color: var(--eva-unbeatable-secondary-800);
}
```

### Borde con primario
```css
.unbeatable-card {
  border: 2px solid var(--eva-unbeatable-primary-500);
}
```

## Dependencias

- Utility CSS puro, sin dependencias de íconos ni sprites.
- Categoría: `colours` (atoms).
