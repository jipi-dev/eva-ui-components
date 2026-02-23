# Textarea - React

## Importación
```jsx
import Textarea from '@despegar/eva-ui/Textarea';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'lg' \| 'md'` | `'lg'` | Tamaño del campo. |
| `noBorder` | bool | `false` | Sin borde. |
| `disabled` | bool | `false` | Deshabilita textarea. |
| `invalid` | bool | `false` | Estado de error. |
| `id` | string (req) | — | ID para asociar label. |
| `rows` | number | `3` | Alto inicial (líneas). |
| `label` | string | `''` | Texto opcional arriba. |
| `message` | string | `''` | Texto de ayuda/validación bajo el campo. |
| `placeholder` | string | `''` | Placeholder nativo. |
| `className` | string | `''` | Clases extra. |
| `...rest` | — | — | Props nativos de `<textarea>` (value, onChange, onBlur, etc.). |

## Uso Controlado
```jsx
const [text, setText] = useState('');

<Textarea
  id="comment"
  rows={4}
  value={text}
  onChange={({ target: { value } }) => setText(value)}
  message={`${200 - text.length} caracteres`}
/>;
```

## Estado Inválido con Label
```jsx
<Textarea
  id="feedback"
  label="Feedback"
  invalid
  placeholder="Contanos más"
/>;
```

## Notas
- Usa `LabelForm` internamente cuando `label` está presente.
- Combiná `noBorder` y `invalid` según el estado; `disabled` aplica estilos neutros.