# Validation Inline - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ValidationInline from '@despegar/eva-ui/ValidationInline';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `type` | 'success' \| 'error' \| 'warning' \| 'info' | 'error' | Define color e ícono. |
| `message` | node | `''` | Texto del mensaje. |
| `showIcon` | bool | `true` | Muestra/oculta ícono. |
| `icon` | string | auto | Ícono custom (reemplaza el default por `type`). |
| `className` | string | `''` | Clases adicionales. |
| `ariaLive` | 'off' \| 'polite' \| 'assertive' | 'polite' | Canal de anuncio para lectores de pantalla. |

## Uso Básico
```jsx
<ValidationInline message="Ingresá un correo válido" />
```

## Success
```jsx
<ValidationInline type="success" message="Correo disponible" />
```

## Sin Ícono
```jsx
<ValidationInline type="warning" showIcon={false} message="Formato poco usual" />
```

## Notas
- Renderiza un contenedor inline con el ícono a la izquierda y texto alineado verticalmente.
- Ajusta colores e ícono según `type`. Para un ícono personalizado, pasa `icon="lock"` u otro valor.
- Define `ariaLive="assertive"` solo cuando el mensaje requiere atención inmediata.