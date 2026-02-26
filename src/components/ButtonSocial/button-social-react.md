# Button Social (React)

## Descripción

Botón para autenticación/acciones sociales. Variantes por marca y tamaños `md`/`lg`. Se expone como `ButtonSocial` y usa la clase pública `eva-3-btn` de EVA UI.

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** react, social, oauth, login, share, google, facebook, twitter, x, loading, disabled

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Flujos de login/social auth (`Ingresá con ...`).
- Acciones sociales (share) donde se requiere branding de proveedor.

## Mejores Prácticas
- Usa el copy del proveedor y respeta los colores oficiales.
- En loading/deshabilitado, evita múltiples submits; combina `loading` + `disabled` si hace falta.
- Define `aria-label` si el texto es dinámico o truncado.

## Dependencias
- Íconos sociales EVA (`social-facebook`, `social-google`, `social-twitter`/`social-x`).
- Clase pública `eva-3-btn` y modificadores de la librería para variantes y tamaños.

**Import típico:**
```jsx
import { ButtonSocial } from "@despegar/eva-react-components";
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | `'lg'` | Tamaño del botón. |
| `variant` | `'google' \| 'facebook' \| 'x' \| 'twitter'` | `'google'` | Variante social. `facebook` usa ícono `facebook-filled`. |
| `disabled` | `boolean` | `false` | Estado deshabilitado (`-disable` + `disabled`). |
| `loading` | `boolean` | `false` | Estado de carga (`-loading`). |
| `className` | `string` | `''` | Clases adicionales. |
| `onClick` | `function` | `undefined` | Handler de click. |
| `children` | `ReactNode` | `Ingresa con {capitalize(variant)}` | Texto del botón. |

## Estructura renderizada

```jsx
<ButtonSocial
  className={`${className} ${disabled ? '-disable' : ''}`}
  size={size}
  variant={variant}
  disabled={disabled}
  loading={loading}
  icon={`social-${variant === 'facebook' ? 'facebook-filled' : variant}`}
  {...rest}
>
  {children || `Ingresa con ${capitalize(variant)}`}
</ButtonSocial>
```

## Ejemplos

### Variantes sociales
```jsx
<ButtonSocial size="lg" variant="facebook">Iniciar sesión con facebook</ButtonSocial>
<ButtonSocial size="lg" variant="twitter">Iniciar sesión con twitter</ButtonSocial>
<ButtonSocial size="lg" variant="google">Iniciar sesión con google</ButtonSocial>
```

### Tamaños
```jsx
<ButtonSocial size="lg" variant="google">Botón Large</ButtonSocial>
<ButtonSocial size="md" variant="google">Botón Medium</ButtonSocial>
```

### Loading
```jsx
<ButtonSocial size="lg" variant="google" loading>
  Botón Medium
</ButtonSocial>
```

### Disabled
```jsx
<ButtonSocial size="lg" variant="google" disabled>
  Botón Medium
</ButtonSocial>
```

## Notas de estilo (referencia SCSS)

- Base social (`-facebook`, `-google`, `-twitter`/`-x`): borde 1px y texto `var(--color-neutral-800)`, fondo transparente.
- Hover/active: fondo `var(--color-neutral-100)`.
- Loading/disable: borde `var(--color-neutral-400)`, ícono/texto `var(--color-neutral-400)`.
- Íconos: facebook `#337FFF`, google `#E94335`, twitter/x `var(--color-neutral-800)`.

## Accesibilidad

- Usa `aria-disabled` cuando corresponda.
- Define `aria-label`/`title` si el texto cambia o es dinámico.
- Mantén foco visible; el `ButtonBase` gestiona estados `disabled`/`loading`.

## Dependencias

- Clase pública: `eva-3-btn` (botón estándar EVA UI). No es necesario conocer `ButtonBase`.
- Íconos sociales: `social-facebook`, `social-google`, `social-twitter`/`social-x`.