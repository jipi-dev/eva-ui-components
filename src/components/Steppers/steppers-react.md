# Steppers - React

## Importación
```jsx
import Steppers from '@despegar/eva-ui/Steppers';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | `'md'` | Tamaño del control. |
| `invalid` | bool | `false` | Estilo de error (`-invalid`). |
| `noBorder` | bool | `false` | Quita borde externo (`-no-border`). |
| `disabled` | bool | `false` | Deshabilita input y botones. |
| `value` | number (req) | — | Valor controlado mostrado en el input. |
| `id` | string | `''` | ID del input. |
| `min` | number | `0` | Límite inferior; deshabilita botón “menos” al alcanzarlo. |
| `max` | number | `10` | Límite superior; deshabilita botón “más” al alcanzarlo. |
| `className` | string | `''` | Clases extra. |
| `onClickPlus` | func (req) | — | Handler para incrementar. |
| `onClickMinus` | func (req) | — | Handler para decrementar. |
| `...rest` | — | — | Props nativos para el contenedor. |

## Uso Controlado
```jsx
const [value, setValue] = useState(1);

<Steppers
  value={value}
  min={0}
  max={5}
  onClickPlus={() => setValue((v) => Math.min(v + 1, 5))}
  onClickMinus={() => setValue((v) => Math.max(v - 1, 0))}
/>
```

## Tamaño Grande
```jsx
<Steppers
  size="lg"
  value={10}
  max={20}
  onClickPlus={() => {}}
  onClickMinus={() => {}}
/>
```

## Notas
- El input es de solo lectura; el valor se controla externamente.
- Combina con utilidades EVA para márgenes/padding (`-eva-3-mt-md`, etc.).