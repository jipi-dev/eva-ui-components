# MessageToast - Componente React

## Importación
```jsx
import MessageToast from '@eva/components/MessageToast';
```

## Descripción
Toast desestimable con variantes (info/success/warning/error y secundarias), soporte de loading, CTA/link y cierre.

**Tipo:** Molécula  
**Categoría:** Feedback / Toasts  
**Tags:** react, toast, message, alert, info, success, warning, error, dismissible, loading

## Cuándo Usar
- Notificaciones breves y no bloqueantes, en overlay o contenedor fijo.
- Confirmaciones rápidas de acciones o alertas livianas.

## Mejores Prácticas
- Mantén títulos y textos muy cortos; ideal 1-2 líneas.
- Usa `loading` solo cuando el toast acompaña una acción en progreso.
- Define `onCloseClick` para permitir dismiss manual.

## Dependencias
- Hereda subcomponentes de `Message`: `MessageToast.Text`, `MessageToast.Link`, `MessageToast.Action`.
- Estilos de toast provistos por la librería según `variation` y estado.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variation` | `string` | - | **Requerido**. Variante del toast |
| `title` | `string` | - | Título del mensaje |
| `noTitle` | `boolean` | `false` | Oculta el título |
| `noContent` | `boolean` | `false` | Oculta el contenido |
| `loading` | `boolean` | `false` | Muestra barra de loading |
| `withButton` | `boolean` | `false` | Muestra variante con link/botón |
| `onCloseClick` | `function` | - | Callback al cerrar |
| `className` | `string` | `''` | Clases adicionales |
| `children` | `node` | - | Contenido |

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
Hereda de Message:
- `MessageToast.Text`
- `MessageToast.Link`
- `MessageToast.Action`

## Uso básico

```jsx
<MessageToast title="Título del mensaje" variation="success">
  <MessageToast.Text>
    Operación exitosa.
    <MessageToast.Link href="#">Ver detalles</MessageToast.Link>
  </MessageToast.Text>
</MessageToast>
```

## Variantes

### Info
```jsx
<MessageToast title="Información" variation="info">
  <MessageToast.Text>Mensaje informativo...</MessageToast.Text>
</MessageToast>
```

### Success
```jsx
<MessageToast title="¡Éxito!" variation="success">
  <MessageToast.Text>Operación completada.</MessageToast.Text>
</MessageToast>
```

### Warning
```jsx
<MessageToast title="Advertencia" variation="warning">
  <MessageToast.Text>Revisa los datos...</MessageToast.Text>
</MessageToast>
```

### Error
```jsx
<MessageToast title="Error" variation="error">
  <MessageToast.Text>Algo salió mal...</MessageToast.Text>
</MessageToast>
```

### Variantes secundarias
```jsx
<MessageToast title="Info secundario" variation="info-secondary">
  <MessageToast.Text>Fondo blanco...</MessageToast.Text>
</MessageToast>

<MessageToast title="Success secundario" variation="success-secondary">
  <MessageToast.Text>Acción completada.</MessageToast.Text>
</MessageToast>
```

## Sin título

```jsx
<MessageToast noTitle variation="success">
  <MessageToast.Text>Solo contenido, sin título.</MessageToast.Text>
</MessageToast>
```

## Sin contenido (solo título)

```jsx
<MessageToast 
  noContent 
  variation="success" 
  title="Guardado correctamente" 
/>
```

## Con accionable

```jsx
<MessageToast 
  variation="info" 
  title="Acción pendiente" 
  withButton
>
  <MessageToast.Text>
    Completa tu perfil para continuar.
  </MessageToast.Text>
  <MessageToast.Action>
    <MessageToast.Link href="/profile">
      Completar ahora
    </MessageToast.Link>
  </MessageToast.Action>
</MessageToast>
```

**Nota**: Con `withButton={true}`, el botón de cerrar (×) no se muestra.

## Con loading

```jsx
<MessageToast 
  variation="success" 
  title="Procesando" 
  loading
>
  <MessageToast.Text>
    Tu solicitud está siendo procesada...
  </MessageToast.Text>
</MessageToast>
```

## Ejemplo completo con auto-cierre

```jsx
import React, { useState, useEffect } from 'react';
import MessageToast from '@eva/components/MessageToast';

const ToastNotification = () => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000); // Auto-cierra en 5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!showToast) return null;

  return (
    <MessageToast
      variation="success"
      title="¡Reserva confirmada!"
      onCloseClick={() => setShowToast(false)}
    >
      <MessageToast.Text>
        Tu reserva ha sido procesada exitosamente.
      </MessageToast.Text>
    </MessageToast>
  );
};
```

## Sistema de notificaciones toast

```jsx
import React, { useState } from 'react';
import MessageToast from '@eva/components/MessageToast';

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
    
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <MessageToast
          key={toast.id}
          variation={toast.variation}
          title={toast.title}
          onCloseClick={() => removeToast(toast.id)}
        >
          <MessageToast.Text>{toast.message}</MessageToast.Text>
        </MessageToast>
      ))}
    </div>
  );
};

// Uso:
// addToast({ variation: 'success', title: '¡Listo!', message: 'Cambios guardados' });
```

## Con loading y transición

```jsx
const [isLoading, setIsLoading] = useState(true);
const [variation, setVariation] = useState('info');

useEffect(() => {
  // Simula una operación async
  setTimeout(() => {
    setIsLoading(false);
    setVariation('success');
  }, 3000);
}, []);

<MessageToast
  variation={variation}
  title={isLoading ? 'Procesando...' : '¡Completado!'}
  loading={isLoading}
>
  <MessageToast.Text>
    {isLoading ? 'Espera un momento...' : 'Todo listo.'}
  </MessageToast.Text>
</MessageToast>
```

## PropTypes

```jsx
MessageToast.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  onCloseClick: PropTypes.func,
  title: PropTypes.string,
  variation: PropTypes.oneOf([
    'info', 'info-secondary',
    'warning', 'warning-secondary',
    'success', 'success-secondary',
    'error', 'error-secondary'
  ]).isRequired,
  noContent: PropTypes.bool,
  noTitle: PropTypes.bool,
  withButton: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([
      instanceOfFunctional(MessageToast.Text),
      instanceOfFunctional(MessageToast.Link),
      instanceOfFunctional(MessageToast.Action)
    ])),
    instanceOfFunctional(MessageToast.Text),
    instanceOfFunctional(MessageToast.Link),
    instanceOfFunctional(MessageToast.Action),
  ]),
};
```

## Implementación interna

MessageToast extiende Message:

```jsx
const MessageToast = ({
  className = '',
  loading = false,
  noContent = false,
  noTitle = false,
  children = [<Message.Text key={0}>Texto...</Message.Text>],
  withButton = false,
  ...rest
}) => {
  const classes = classResolver({
    '-loading': loading,
    '-no-content': noContent,
    '-with-button': withButton,
  });

  return (
    <Message
      {...rest}
      className={`eva-3-message--toast ${classes} ${className}`}
      noTitle={noTitle}
      noContent={noContent}
      shadow="static"
    >
      {!noContent ? children : null}
    </Message>
  );
};
```

## HOC: withUtilities
Envuelto con `withUtilities`.

## Dependencias
- Message (componente base)
- Shadow
- Iconos: close, cross, checkmark-circle

## Diferencias con Message

| Feature | Message | MessageToast |
|---------|---------|--------------|
| Max width | Ilimitado | 350px fijo |
| Auto-cierre | ❌ | ✅ Recomendado |
| Loading bar | ❌ | ✅ |
| Botón cerrar | ❌ | ✅ |
| Collapsible | ✅ | ❌ |
| Shadow | Opcional | Static siempre |

## Buenas prácticas

### ✅ Hacer
- Auto-cerrar después de 3-5 segundos
- Usar `onCloseClick` para permitir cierre manual
- Posicionar en esquina superior derecha o inferior
- Limitar a 3 toasts visibles simultáneos
- Usar loading para operaciones async

### ❌ Evitar
- Toasts que no se cierran automáticamente
- Más de 3 toasts apilados
- Contenido muy largo (usa Message en su lugar)
- Toasts críticos sin botón de cerrar

## Posicionamiento recomendado

```css
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

## Notas
- Max width: 350px (no modificable)
- Shadow estático siempre aplicado
- Duración recomendada: 5 segundos
- Loading bar: animación de 5 segundos
