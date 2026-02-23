# Wizard - React

## Importación
```jsx
import Wizard from '@despegar/eva-ui/Wizard';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `steps` | array<{ id: string, title: string, subtitle?: string, status?: 'completed' \| 'active' \| 'disabled' \| 'pending' }> | `[]` | Pasos a renderizar. |
| `activeStep` | string | `''` | `id` del paso activo (modo controlado). |
| `defaultActiveStep` | string | primer paso | Paso activo inicial (no controlado). |
| `compact` | bool | `false` | Variante compacta (mobile). |
| `onChange` | func(id: string) | `undefined` | Se dispara al clickear un paso (si no está disabled). |
| `className` | string | `''` | Clases extra. |

## Uso Básico
```jsx
const steps = [
  { id: 'data', title: 'Datos', status: 'completed' },
  { id: 'docs', title: 'Documentos', subtitle: 'En progreso', status: 'active' },
  { id: 'confirm', title: 'Confirmación', status: 'pending' },
];

<Wizard steps={steps} />
```

## Modo Controlado
```jsx
function WizardFlow() {
  const [active, setActive] = useState('data');

  const steps = [
    { id: 'data', title: 'Datos', status: active === 'data' ? 'active' : 'completed' },
    { id: 'docs', title: 'Documentos', status: active === 'docs' ? 'active' : active === 'confirm' ? 'completed' : 'pending' },
    { id: 'confirm', title: 'Confirmación', status: active === 'confirm' ? 'active' : 'pending' },
  ];

  return <Wizard steps={steps} activeStep={active} onChange={setActive} />;
}
```

## Notas
- Usa `status` para controlar colores y bullet (check para `completed`, número para el resto).
- `pending` se renderiza como estado neutro (igual a default). `disabled` bloquea interacción.
- Si se usa en mobile, `compact` reduce subtítulos y espaciado; puede colocarse dentro de un contenedor scroll.
- Incluye `aria-current="step"` en el paso activo automáticamente.