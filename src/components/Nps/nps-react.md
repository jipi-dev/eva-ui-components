# NPS - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Nps from '@despegar/eva-ui/Nps';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `setScore` | func | — (req) | Callback al seleccionar un valor (recibe número/string) |
| `title` | string | "¿Qué tan probable..." | Título mostrado (Heading h5) |
| `npsScale` | shape {0-10:string} | mapa por defecto | Texto por score |
| `currentScore` | number \| string | 0 | Valor actual (-1 para N/A) |
| `className` | string | '' | Clases extra |

## Uso Básico
```jsx
const [score, setScore] = useState(0);

<Nps
  currentScore={score}
  setScore={(value) => setScore(Number(value))}
  title="¿Qué tan probable es que recomiendes...?"
/>
```

## Con escala custom
```jsx
const scale = {
  0: 'Nada probable',
  1: 'Nada probable',
  2: 'Poco probable',
  3: 'Poco probable',
  4: 'Neutral',
  5: 'Neutral',
  6: 'Probable',
  7: 'Probable',
  8: 'Muy probable',
  9: 'Muy probable',
  10: 'Extremadamente probable',
};

<Nps
  npsScale={scale}
  setScore={handleScore}
  currentScore={score}
/>
```

## Notas
- `setScore` se dispara al click en un valor o al mover el slider.
- Los tooltips de las opciones muestran el número; el texto interno muestra la etiqueta.
- Incluye opción "N/A" (visible sólo en mobile mediante clases hide-content). Usa valor -1.
- La clase `-selected-{score}` se aplica según `currentScore` para estilos.
