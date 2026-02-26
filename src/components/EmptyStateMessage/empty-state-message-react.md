# Empty State Message - React

## Descripción

Componente React para mensaje de estado vacío o error con ilustración, título, descripción y botones. Soporta múltiples layouts (box, vertical, icon) y estados (default, error-state).

**Tipo:** Organismo  
**Categoría:** Feedback / Empty States  
**Tags:** react, empty state, error, illustration, cta, vertical, box, icon

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Cuando no hay resultados o ocurrió un error recuperable y necesitas explicar al usuario.
- Para ofrecer acciones siguientes (primaria y secundaria) en ausencia de contenido.

## Mejores Prácticas
- Mantén título y descripción concisos; prioriza la acción principal si existe.
- Usa `error-state` solo para fallas; `default` para vacíos neutros.
- `boxLayout` + `verticalLayout` funcionan bien en listados; `icon` para espacios reducidos.

## Dependencias
- Usa `Heading`, `Button` internos y clases `eva-3-empty-state-message` con modificadores.
- Ilustraciones via variables `--eva-illustration-*` o `iconSrc` para layout `-icon`.

## Props

| Prop                    | Tipo                       | Requerido | Default      | Descripción                                                                                                         |
| ----------------------- | -------------------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `title`                 | `string`                   | Sí        | -            | Título principal del mensaje                                                                                        |
| `description`           | `string`                   | No        | `undefined`  | Descripción opcional del mensaje                                                                                    |
| `backgroundImage`       | `'default'` \| `'error-state'` | No        | `'default'`  | Variante de ilustración de fondo: `default` (`--eva-illustration-18`) o `error-state` (`--eva-illustration-23`)    |
| `boxLayout`             | `bool`                     | No        | `false`      | Activa layout box (borde, fondo blanco)                                                                             |
| `verticalLayout`        | `bool`                     | No        | `false`      | Activa layout vertical (imagen arriba, contenido abajo). Requiere `boxLayout`                                      |
| `icon`                  | `bool`                     | No        | `false`      | Muestra ícono `<img>` en lugar de ilustración de fondo. Requiere `boxLayout`                                       |
| `iconSrc`               | `string`                   | No        | `'https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg'` | URL de ícono para layout `-icon` |
| `noButton`              | `bool`                     | No        | `false`      | Oculta botón primario                                                                                               |
| `buttonText`            | `string`                   | No        | `undefined`  | Texto del botón primario                                                                                            |
| `onClick`               | `func`                     | No        | `undefined`  | Handler del botón primario                                                                                          |
| `buttonSecondaryText`   | `string`                   | No        | `undefined`  | Texto del botón secundario (link). Si se proporciona, activa clase `-secondary-button`                             |
| `onClickSecondary`      | `func`                     | No        | `undefined`  | Handler del botón secundario                                                                                        |
| `className`             | `string`                   | No        | `''`         | Clases CSS adicionales                                                                                              |

## Importación

```jsx
import { EmptyStateMessage } from '@despegar/react-eva';
```

## Estructura

```jsx
<div className="eva-3-empty-state-message [-error-state] [-box-layout] [-vertical] [-icon] [-secondary-button] [className]">
  <div className="empty-state-message-container">
    <div className="empty-state-message-image">
      {icon ? <img src={iconSrc} alt="" /> : null}
    </div>
    <div className="empty-state-message-content">
      <Heading variant="h3" className="empty-state-message-title">{title}</Heading>
      {description && <Heading variant="body-1" as="p" className="empty-state-message-description">{description}</Heading>}
      {(!noButton || buttonSecondaryText) && (
        <div className="empty-state-message-button">
          {!noButton && buttonText && <Button size="lg" variant="primary" onClick={onClick}>{buttonText}</Button>}
          {buttonSecondaryText && <Button size="lg" variant="link" onClick={onClickSecondary}>{buttonSecondaryText}</Button>}
        </div>
      )}
    </div>
  </div>
</div>
```

## Ejemplos de uso

### Default

```jsx
import { EmptyStateMessage } from '@despegar/react-eva';

function SearchResults() {
  return (
    <EmptyStateMessage
      title="No hay resultados..."
      description="Solo podemos buscar vuelos 330 días antes de tu fecha."
      buttonText="Aceptar"
      onClick={() => console.log('Aceptar')}
    />
  );
}
```

### Box Layout

```jsx
<EmptyStateMessage
  title="No hay resultados..."
  description="Solo podemos buscar vuelos 330 días antes de tu fecha."
  boxLayout
  buttonText="Aceptar"
  onClick={() => console.log('Aceptar')}
/>
```

### Vertical Layout

```jsx
<EmptyStateMessage
  title="No hay resultados..."
  description="Solo podemos buscar vuelos 330 días antes de tu fecha."
  boxLayout
  verticalLayout
  buttonText="Aceptar"
  onClick={() => console.log('Aceptar')}
/>
```

### Icon Layout

```jsx
<EmptyStateMessage
  title="No hay resultados..."
  description="Solo podemos buscar vuelos 330 días antes de tu fecha."
  boxLayout
  icon
  iconSrc="https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg"
  buttonText="Aceptar"
  onClick={() => console.log('Aceptar')}
/>
```

### Error State

```jsx
<EmptyStateMessage
  title="Detectamos un problema"
  description="Por favor intenta de nuevo"
  backgroundImage="error-state"
  buttonText="Aceptar"
  onClick={() => console.log('Retry')}
/>
```

### Dos botones

```jsx
<EmptyStateMessage
  title="No hay resultados..."
  description="Solo podemos buscar vuelos 330 días antes de tu fecha."
  buttonText="Aceptar"
  onClick={() => console.log('Aceptar')}
  buttonSecondaryText="Omitir"
  onClickSecondary={() => console.log('Omitir')}
/>
```

### Sin botón

```jsx
<EmptyStateMessage
  title="No hay resultados..."
  description="Solo podemos buscar vuelos 330 días antes de tu fecha."
  noButton
/>
```

## PropTypes

```javascript
EmptyStateMessage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundImage: PropTypes.oneOf(['default', 'error-state']),
  boxLayout: PropTypes.bool,
  verticalLayout: PropTypes.bool,
  icon: PropTypes.bool,
  iconSrc: PropTypes.string,
  noButton: PropTypes.bool,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  buttonSecondaryText: PropTypes.string,
  onClickSecondary: PropTypes.func,
  className: PropTypes.string,
};

EmptyStateMessage.defaultProps = {
  backgroundImage: 'default',
  iconSrc: 'https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg',
};
```

## Accesibilidad

- `Heading` con variante `h3` para título (semántica correcta).
- Descripción usa `Heading body-1` con `as="p"`.
- Ícono usa `<img alt="">` (decorativo).
- Botones tienen texto descriptivo; considerar `aria-label` si el texto es genérico ("Aceptar").

## Dependencias

- Componentes: `Heading`, `Button` (internos).
- HOC: `withUtilities` para clases de utilidad.
- Sprites: `empty-state-message-error-image.svg`, `empty-state-message-default-mobile.svg`, `empty-state-message-default.svg`.
- Categoría: `state` (type: molecules).

## Notas

- `boxLayout` es requerido para usar `verticalLayout` o `icon`.
- `buttonSecondaryText` activa automáticamente clase `-secondary-button` (margen entre botones).
- No usar ambas props `noButton={true}` y `buttonText` simultáneamente (inconsistente).
- Ilustraciones de fondo se cargan vía CSS variables (`--eva-illustration-18` o `--eva-illustration-23`).
