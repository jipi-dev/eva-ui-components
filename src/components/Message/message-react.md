# Message - Componente React

## Importación
```jsx
import Message from '@eva/components/Message';
```

## Descripción
Alerta informativa con variantes (info/success/warning/error y secundarias), soporte de colapsado, ícono opcional, CTA y cierre.

**Tipo:** Molécula  
**Categoría:** Feedback / Alerts  
**Tags:** react, message, alert, info, success, warning, error, dismissible, collapsible

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Mostrar alertas en página con título + cuerpo y acciones opcionales.
- Estados informativos, éxito, advertencia o error en formularios y flujos.

## Mejores Prácticas
- Usa la variante secundaria para fondos blancos y primaria para fondos grises/coloreados.
- Si es dismissible, define `onCloseClick` y mantiene el mensaje breve.
- Evita colapsable en alertas críticas; úsalo para info contextual.

## Dependencias
- Subcomponentes `Message.Text`, `Message.Link`, `Message.Action`.
- Ícono default según variante; puede sobrescribirse con `icon` (set de íconos EVA).

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variation` | `string` | `'info'` | **Requerido**. Variante del message |
| `title` | `string` | `'Título del mensaje'` | Título |
| `noTitle` | `boolean` | `false` | Oculta el título |
| `collapsible` | `boolean` | `false` | Hace el message colapsable |
| `icon` | `string` | `null` | Icono personalizado (opcional) |
| `onCloseClick` | `function` | `() => {}` | Callback al cerrar (para toast) |
| `className` | `string` | `''` | Clases adicionales |
| `children` | `node` | - | Contenido (Text, Link, Action) |

### Valores para `variation`:
- `'info'`
- `'info-secondary'`
- `'success'`
- `'success-secondary'`
- `'warning'`
- `'warning-secondary'`
- `'error'`
- `'error-secondary'`

## Subcomponentes

- `Message.Text`: Para texto del cuerpo
- `Message.Link`: Para enlaces
- `Message.Action`: Para CTAs

## Uso básico

```jsx
<Message title="Título del mensaje" variation="info">
  <Message.Text>
    Suspendisse eleifend at nisi. 
    <Message.Link href="#">pulvinar</Message.Link> ultricies.
  </Message.Text>
</Message>
```

## Variantes

### Info
```jsx
<Message title="Información" variation="info">
  <Message.Text>Mensaje informativo...</Message.Text>
</Message>
```

### Success
```jsx
<Message title="¡Éxito!" variation="success">
  <Message.Text>Operación exitosa.</Message.Text>
</Message>
```

### Warning
```jsx
<Message title="Advertencia" variation="warning">
  <Message.Text>Revisa la información.</Message.Text>
</Message>
```

### Error
```jsx
<Message title="Error" variation="error">
  <Message.Text>Ocurrió un problema.</Message.Text>
</Message>
```

### Variantes secundarias
```jsx
<Message title="Info secundario" variation="info-secondary" border>
  <Message.Text>Fondo blanco con borde...</Message.Text>
</Message>
```

## Sin título

```jsx
<Message noTitle variation="info">
  <Message.Text>Mensaje sin título...</Message.Text>
</Message>
```

## Colapsable

```jsx
<Message collapsible title="Ver más información" variation="info">
  <Message.Text>Primer párrafo...</Message.Text>
  <Message.Text>Segundo párrafo...</Message.Text>
  <Message.Text>Tercer párrafo...</Message.Text>
</Message>
```

## Con CTAs

```jsx
<Message title="Acción requerida" variation="info">
  <Message.Text>
    Necesitas completar tu perfil.
  </Message.Text>
  <Message.Action>
    <Message.Link href="/perfil">Ir a perfil</Message.Link>
    <ButtonGhost size="md" variant="lighten" href="#">Ver detalles</ButtonGhost>
  </Message.Action>
</Message>
```

## Subcomponentes Props

### Message.Text

| Prop | Tipo | Default |
|------|------|---------|
| `tag` | `string` | `'div'` |
| `children` | `node` | `''` |

```jsx
<Message.Text tag="p">Párrafo de texto</Message.Text>
```

### Message.Link

| Prop | Tipo | Default |
|------|------|---------|
| `href` | `string` | `'#'` |
| `target` | `string` | `''` |
| `underline` | `boolean` | `false` |
| `children` | `string` | `''` |

```jsx
<Message.Link href="/ayuda" target="_blank" underline>
  Ver ayuda
</Message.Link>
```

### Message.Action

| Prop | Tipo | Default |
|------|------|---------|
| `children` | `node` | - |

```jsx
<Message.Action>
  <Message.Link href="#">Link</Message.Link>
  <ButtonGhost>Botón</ButtonGhost>
</Message.Action>
```

## Ejemplo completo

```jsx
import React from 'react';
import Message from '@eva/components/Message';
import ButtonGhost from '@eva/components/ButtonGhost';

const PaymentConfirmation = ({ booking }) => {
  return (
    <Message 
      title="¡Reserva confirmada!" 
      variation="success"
    >
      <Message.Text>
        Tu reserva #{booking.id} ha sido confirmada exitosamente.
        Recibirás un email con los detalles.
      </Message.Text>
      <Message.Action>
        <Message.Link href={`/bookings/${booking.id}`}>
          Ver detalles
        </Message.Link>
        <ButtonGhost size="md" variant="lighten" href="/bookings">
          Mis reservas
        </ButtonGhost>
      </Message.Action>
    </Message>
  );
};
```

## Con estado colapsable controlado

```jsx
const [isExpanded, setIsExpanded] = useState(false);

<Message 
  collapsible
  title="Términos y condiciones" 
  variation="info"
>
  <Message.Text>Contenido largo...</Message.Text>
  <Message.Text>Más contenido...</Message.Text>
</Message>
```

## Icono personalizado

```jsx
<Message 
  title="Notificación especial" 
  variation="info"
  icon="smile-circle"
>
  <Message.Text>Usa un icono diferente...</Message.Text>
</Message>
```

## PropTypes

```jsx
Message.propTypes = {
  className: PropTypes.string,
  variation: PropTypes.oneOf([
    'info', 'info-secondary',
    'warning', 'warning-secondary',
    'success', 'success-secondary',
    'error', 'error-secondary'
  ]).isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
  noTitle: PropTypes.bool,
  collapsible: PropTypes.bool,
  onCloseClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([
      instanceOfFunctional(Text),
      instanceOfFunctional(Link),
      instanceOfFunctional(Action)
    ])),
    instanceOfFunctional(Text),
    instanceOfFunctional(Link),
    instanceOfFunctional(Action),
  ]),
};
```

## HOC: withUtilities
Envuelto con `withUtilities`.

## Dependencias
- Heading, Shadow, Button, ButtonGhost, Icon
- Iconos: info-circle-filled, warning-filled, checkmark-circle-filled, error-circle-filled, chevron-down, cross

## Notas
- Por default incluye 2 children de ejemplo si no se pasan
- El mensaje colapsable tiene un max-height de 150px cuando está colapsado
- Los subcomponentes se acceden como `Message.Text`, `Message.Link`, `Message.Action`
