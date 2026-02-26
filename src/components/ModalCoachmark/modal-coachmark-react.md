# Modal Coachmark - React

## Importación
```jsx
import ModalCoachmark from '@despegar/eva-ui/ModalCoachmark';
```

## Descripción
Variante de modal para onboarding paso a paso, con soporte de imágenes, dots de navegación y fondo coloreado opcional.

**Tipo:** Organismo  
**Categoría:** Overlays / Coachmarks  
**Tags:** react, modal, coachmark, onboarding, steps, overlay

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Presentar nuevas funcionalidades en un flujo guiado de 1 a 5 pasos.
- Mostrar tips contextuales al iniciar una experiencia sin cambiar de página.

## Mejores Prácticas
- Usa `steps` + `withNavDots` para indicar progreso; limita la cantidad de pasos para evitar fatiga.
- Define `onEndModal` para tracking y cierre limpio; controla `show`/`toggleModal` externamente.
- Mantén imágenes livianas y textos cortos; usa `size="sm"` (único recomendado) para focus.

## Dependencias
- Hereda overlay y comportamiento base de Modal (`eva-3-modal--coachmark`).
- Subcomponentes (`Step`, `ImgContainer`, `Title`, `Description`) incluidos por la librería.

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | bool | false | Muestra el modal |
| `toggleModal` | func | () => {} | **Requerido.** Cierra el modal |
| `size` | 'sm' \| 'lg' | 'sm' | Tamaño del coachmark |
| `color` | bool | false | Fondo coloreado |
| `noColor` | bool | false | Fuerza fondo sin color aun con `color` |
| `steps` | bool | false | Activa modo pasos (prev/next) |
| `withNavDots` | bool | false | Muestra indicadores de pasos |
| `step` | number | 0 | Paso inicial (0-index) |
| `prevStepText` | string | 'Anterior' | Texto botón previo |
| `nextStepText` | string | 'Siguiente' | Texto botón siguiente |
| `finishStepText` | string | 'Entendido' | Texto botón final |
| `onEndModal` | func | () => {} | Callback al finalizar (último paso) |
| `closeOnClickOutside` | bool | true | Cierra al clickear overlay |
| `tiers` | bool | false | Ajustes de color para loyalty |
| `className` | string | '' | Clases adicionales |
| `children` | nodes | pasos/elementos | Pasos o contenido custom |

### Subcomponentes exportados
- `ModalCoachmark.Step`
- `ModalCoachmark.ImgContainer`
- `ModalCoachmark.Title`
- `ModalCoachmark.Description`

## Uso Básico (un paso)
```jsx
const [show, setShow] = useState(false);

<ModalCoachmark
  show={show}
  toggleModal={() => setShow(false)}
>
  <ModalCoachmark.Step active>
    <ModalCoachmark.ImgContainer src="/demo.svg" alt="Onboarding" />
    <ModalCoachmark.Title>
      <h4>Nueva funcionalidad</h4>
    </ModalCoachmark.Title>
    <ModalCoachmark.Description>
      <p>Te mostramos cómo usarla.</p>
    </ModalCoachmark.Description>
  </ModalCoachmark.Step>
</ModalCoachmark>
```

## Múltiples Pasos con NavDots
```jsx
const steps = [
  {
    img: '/s1.svg',
    title: 'Paso 1',
    desc: 'Intro',
  },
  {
    img: '/s2.svg',
    title: 'Paso 2',
    desc: 'Acción',
  },
  {
    img: '/s3.svg',
    title: 'Paso 3',
    desc: 'Listo',
  }
];

const [show, setShow] = useState(false);
const [tab, setTab] = useState(0);

<ModalCoachmark
  show={show}
  toggleModal={() => setShow(false)}
  steps
  withNavDots
  step={0}
  prevStepText="Atrás"
  nextStepText="Siguiente"
  finishStepText="Entendido"
  onEndModal={() => console.log('Fin')}
>
  {steps.map((s, i) => (
    <ModalCoachmark.Step key={i} active={tab === i}>
      <ModalCoachmark.ImgContainer src={s.img} alt={s.title} />
      <ModalCoachmark.Title>
        <h4>{s.title}</h4>
      </ModalCoachmark.Title>
      <ModalCoachmark.Description>
        <p>{s.desc}</p>
      </ModalCoachmark.Description>
    </ModalCoachmark.Step>
  ))}
</ModalCoachmark>
```

## Variante con Color de Fondo
```jsx
<ModalCoachmark
  show={show}
  toggleModal={() => setShow(false)}
  color
  steps
  withNavDots
>
  <ModalCoachmark.Step active>
    <ModalCoachmark.Title>
      <h4>Título</h4>
    </ModalCoachmark.Title>
    <ModalCoachmark.Description>
      <p>Descripción</p>
    </ModalCoachmark.Description>
  </ModalCoachmark.Step>
</ModalCoachmark>
```

## Manejo de Finalización
El componente internamente llama `onEndModal()` y luego `toggleModal()` cuando se presiona el botón final en el último paso.

```jsx
const handleEnd = () => {
  track('coachmark_finished');
};

<ModalCoachmark
  show={show}
  toggleModal={() => setShow(false)}
  steps
  onEndModal={handleEnd}
/>
```

## Consejos
- Máximo 3-5 pasos para no fatigar al usuario.
- Mantener textos breves y con acción clara.
- Usar imágenes/ilustraciones livianas.
- Permitir cierre rápido (overlay / ESC heredado del modal base).
