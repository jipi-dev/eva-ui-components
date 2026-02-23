# Loader - React

## Descripción

Componente React para indicador de carga animado (spinner circular). Muestra estado de carga mientras se procesan recursos. Soporta tamaños (medium, large), color blanco para fondos oscuros, texto opcional, y control de animación.

**Tipo:** Átomo  
**Categoría:** Feedback / Loading  
**Tags:** react, loader, spinner, loading, white, label, stop

## Cuándo Usar
- Mientras esperas respuesta de red o procesamiento y no hay contenido aún.
- Dentro de contenedores/overlays con fondo claro u oscuro (`white`).

## Mejores Prácticas
- Usa el tamaño por defecto para la mayoría de casos; `lg` para layouts amplios.
- Si hay copy, mantén el label breve (“Cargando…”).
- Evita usar `stop` salvo en casos de optimización/pausa visible.

## Dependencias
- Clases `eva-3-loader` y modificadores de tamaño/color provistos por EVA.

## Instalación

```jsx
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `size` | `''` \| `'sm'` \| `'lg'` | No | `''` | Tamaño del loader (vacío: medium 34px, 'lg': large 42px, 'sm': deprecado) |
| `white` | `boolean` | No | `false` | Si `true`, color blanco (para fondos oscuros) |
| `stop` | `boolean` | No | `false` | Si `true`, pausa la animación (optimización performance) |
| `label` | `string` | No | `''` | Texto debajo del loader (ej: "Cargando...") |
| `className` | `string` | No | `''` | Clases adicionales para el wrapper |

**Nota**: `size='sm'` está **deprecado**, usar `size=''` (medium) o `size='lg'` (large).

## Uso básico

### Loader default (medium)

```jsx
<Loader />
```

- **Tamaño**: 34px x 34px.
- **Color**: azul (`--brand-primary-3`).

### Loader large

```jsx
<Loader size="lg" />
```

- **Tamaño**: 42px x 42px.
- **Border-width**: 4px (vs 3px en medium).

## Variantes

### Color blanco

```jsx
<Loader white />
```

**Uso**: Fondos oscuros (modals con overlay, backgrounds oscuros).

```jsx
<div style={{ background: '#333', padding: '50px', textAlign: 'center' }}>
  <Loader white />
</div>
```

### Con texto (label)

```jsx
<Loader label="Cargando..." />
```

**Label**:
- Texto debajo del spinner.
- Color: azul (`--brand-primary-3`) o blanco (si `white={true}`).
- Font-size: `subtitle-s` (medium) o `h6` (large).

### Large + white + label

```jsx
<Loader size="lg" white label="Procesando pago..." />
```

### Animación pausada

```jsx
<Loader stop />
```

**Uso**: **Optimizar performance** cuando el loader no está visible:
- Tabs ocultos.
- Modals cerrados.
- Elementos fuera del viewport.

**Importante**: Quitar `stop={true}` cuando el loader vuelva a ser visible.

## Ejemplos

### Loader centrado en página

```jsx
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function LoadingPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Loader size="lg" label="Cargando contenido..." />
    </div>
  );
}
```

### Loader en modal (fondo oscuro)

```jsx
import React, { useState } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function PaymentModal() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simular pago
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handlePayment}>Pagar</button>
      
      {isProcessing && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <Loader size="lg" white label="Procesando pago..." />
        </div>
      )}
    </div>
  );
}
```

### Loader en botón (inline)

```jsx
import React, { useState } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simular envío
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      className="eva-3-button -lg -primary"
      onClick={handleSubmit}
      disabled={isLoading}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {isLoading && <Loader style={{ display: 'inline-block' }} />}
      {isLoading ? 'Enviando...' : 'Enviar'}
    </button>
  );
}
```

### Loader con control de animación

```jsx
import React, { useState, useEffect } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function TabPanel({ isActive }) {
  return (
    <div>
      {/* Pausar animación cuando tab no está activo */}
      <Loader stop={!isActive} label="Cargando datos..." />
    </div>
  );
}

function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <button onClick={() => setActiveTab(0)}>Tab 1</button>
      <button onClick={() => setActiveTab(1)}>Tab 2</button>
      
      {activeTab === 0 && <TabPanel isActive={true} />}
      {activeTab === 1 && <TabPanel isActive={false} />}
    </div>
  );
}
```

### Loader condicional (fetch data)

```jsx
import React, { useState, useEffect } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Loader size="lg" label="Cargando datos..." />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Datos cargados:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### Loader con utilities (margin, padding)

```jsx
<Loader
  size="lg"
  label="Cargando..."
  marginTop="lg"
  marginBottom="md"
  className="custom-loader"
/>
```

**Utilities disponibles** (vía HOC `withUtilities`):
- `marginTop`, `marginBottom`, `marginLeft`, `marginRight`
- `paddingTop`, `paddingBottom`, etc.

## PropTypes

```jsx
Loader.propTypes = {
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  white: PropTypes.bool,
  stop: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
};
```

## Estructura renderizada

```jsx
<div className={`eva-3-loader ${classes} ${className}`}>
  <div className="loader-container">
    <div className="loader-spinner">
      <div className="spinner-container spinner-left">
        <div className="spinner-circle" />
      </div>
      <div className="spinner-container spinner-right">
        <div className="spinner-circle" />
      </div>
    </div>
  </div>
  <span className={`loader-label -${size}`}>{label}</span>
</div>
```

**Clases dinámicas** (via `classResolver`):
- `-lg`: si `size='lg'`
- `-white`: si `white={true}`
- `-stop`: si `stop={true}`

## Accesibilidad

### Texto alternativo (label)

Si el loader tiene `label`, es suficiente para screen readers. Si **NO** tiene label, agregar `aria-label`:

```jsx
<Loader aria-label="Cargando contenido" />
```

### Role y aria-live

Para anunciar cambios de estado:

```jsx
<div role="status" aria-live="polite">
  <Loader label="Cargando..." />
</div>
```

- `role="status"`: Indica región de estado.
- `aria-live="polite"`: Anuncia cambios cuando el screen reader esté libre.

### Prefers-reduced-motion

Usuarios con `prefers-reduced-motion` pueden experimentar mareos con animaciones continuas. El CSS debería pausar animaciones:

```css
@media (prefers-reduced-motion: reduce) {
  .eva-3-loader,
  .eva-3-loader * {
    animation: none !important;
  }
}
```

**Alternativa en React**:

```jsx
import React, { useEffect, useState } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function AccessibleLoader() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return <Loader stop={prefersReducedMotion} label="Cargando..." />;
}
```

## Dependencias

### HOC
- `withUtilities` (agrega props de margin, padding, etc.)

### Utilities
- `classResolver` (genera clases condicionales basadas en props)

### Categoría
- **Type**: atoms
- **Category**: state
- **Primary class**: `eva-3-loader`
- **Tags**: loading, cargando, estado de carga

## Notas adicionales

- **Animaciones**: Combinación de 3 keyframes (`eva-loader-rotate`, `loader-mask`, `left-spin`/`right-spin`) para efecto fluido.
- **Performance**: Usar `stop={true}` cuando el loader no está visible para pausar animaciones (reduce CPU/GPU usage).
- **Label size**: La clase de tamaño (`-lg`) se aplica automáticamente al `loader-label` para mantener proporciones.
- **ClassResolver**: Utility function que convierte objeto de props booleanas en clases CSS (ej: `{'-lg': true, '-white': true}` → `"-lg -white"`).

## Comparación de tamaños

| Size | Container | Border Width | Label Font |
|------|-----------|--------------|------------|
| `''` (medium) | 34px x 34px | 3px | subtitle-s |
| `'sm'` (deprecado) | 20px x 20px | 2px | p |
| `'lg'` | 42px x 42px | 4px | h6 |

**Recomendación**: Usar `size=''` (medium) por defecto, `size='lg'` para casos prominentes.

## Ejemplo completo (formulario con validación)

```jsx
import React, { useState } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';
import Input from 'eva-main/client/src/components/Input/Input.jsx';
import LabelForm from 'eva-main/client/src/components/LabelForm/LabelForm.jsx';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>¡Registro exitoso!</h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="-eva-3-mb-md">
        <LabelForm htmlFor="reg-name" marginBottom="sm">
          Nombre
        </LabelForm>
        <Input
          size="lg"
          id="reg-name"
          value={formData.name}
          onChange={handleChange('name')}
          disabled={isSubmitting}
        />
      </div>

      <div className="-eva-3-mb-md">
        <LabelForm htmlFor="reg-email" marginBottom="sm">
          Email
        </LabelForm>
        <Input
          size="lg"
          type="email"
          id="reg-email"
          value={formData.email}
          onChange={handleChange('email')}
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className="eva-3-button -lg -primary"
        disabled={isSubmitting}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
      >
        {isSubmitting && <Loader style={{ display: 'inline-block' }} />}
        {isSubmitting ? 'Registrando...' : 'Registrarse'}
      </button>

      {isSubmitting && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Loader size="lg" label="Procesando registro..." />
        </div>
      )}
    </form>
  );
}
```

## Ejemplo avanzado (múltiples estados de carga)

```jsx
import React, { useState } from 'react';
import Loader from 'eva-main/client/src/components/Loader/Loader.jsx';

function MultiStepLoader() {
  const [step, setStep] = useState(0);
  const steps = [
    'Validando datos...',
    'Procesando pago...',
    'Enviando confirmación...',
    'Finalizando...',
  ];

  const handleStart = () => {
    setStep(1);
    const interval = setInterval(() => {
      setStep(prevStep => {
        if (prevStep >= steps.length) {
          clearInterval(interval);
          return 0; // Reset
        }
        return prevStep + 1;
      });
    }, 2000);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {step === 0 ? (
        <button onClick={handleStart} className="eva-3-button -lg -primary">
          Iniciar proceso
        </button>
      ) : step <= steps.length ? (
        <Loader size="lg" label={steps[step - 1]} />
      ) : (
        <h2>¡Proceso completado!</h2>
      )}
    </div>
  );
}
```
