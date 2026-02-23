# Switch - React

## Importación
```jsx
import Switch from '@despegar/eva-ui/Switch';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'' \| 'md'` | `''` | Tamaño del switch. |
| `disabled` | bool | `false` | Deshabilita el input. |
| `loyalty` | bool | `false` | Paleta loyalty. |
| `lighten` | bool | `false` | Variante clara para fondos primarios. |
| `id` | string (req) | — | ID del input. |
| `className` | string | `''` | Clases extra. |
| `...rest` | — | — | Props del `<input type="checkbox">` (checked, defaultChecked, onChange, etc.). |

## Uso Controlado
```jsx
const [active, setActive] = useState(false);

<Switch
  id="notifications"
  checked={active}
  onChange={({ target: { checked } }) => setActive(checked)}
/>;
```

## Variante Loyalty y Medium
```jsx
<Switch id="loyalty-switch" size="md" loyalty defaultChecked />
```

## Notas
- Si necesitás usarlo sobre fondo brand, agrega `lighten` para contraste.
- El resto de atributos (aria, name, value) se pasan directamente al input.