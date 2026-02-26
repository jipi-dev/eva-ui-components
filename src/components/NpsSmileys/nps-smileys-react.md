# NPS Smileys - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import NpsSmileys from '@despegar/eva-ui/NpsSmileys';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `setScore` | func | — (req) | Callback al seleccionar valor (string) |
| `npsSmileysScale` | shape | mapa por defecto | Etiquetas por smiley key |
| `currentScore` | number \| string | '' | Valor actual ('mad'...'very-happy' o 'no-aplica') |
| `title` | string | 'La confianza que te brindamos' | Texto superior |
| `className` | string | '' | Clases extra |

## Uso Básico
```jsx
const [score, setScore] = useState('');

<NpsSmileys
  currentScore={score}
  setScore={setScore}
/>
```

## Con etiquetas personalizadas
```jsx
const scale = {
  mad: 'Muy disconforme',
  sad: 'Disconforme',
  neutral: 'Neutral',
  happy: 'Conforme',
  'very-happy': 'Muy conforme',
};

<NpsSmileys
  npsSmileysScale={scale}
  currentScore={score}
  setScore={setScore}
  title="¿Cómo te sentiste con el servicio?"
/>
```

## Manejo de "No aplica"
```jsx
<NpsSmileys
  currentScore={score}
  setScore={(val) => setScore(val)}
/>
```
Seleccionar el checkbox "No aplica" envía `"no-aplica"`. Gestiona en tu estado para limpiar radios si corresponde.

## Notas
- Cada smiley es un `input radio` con `data-value` y `checked` según `currentScore`.
- Ícono: `smiley-{score}` (size `xlg`).
- El checkbox "No aplica" usa `Checkbox` EVA y comparte el mismo `setScore`.
