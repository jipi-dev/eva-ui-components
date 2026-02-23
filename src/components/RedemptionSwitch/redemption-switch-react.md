# RedemptionSwitch - React

## Importación
```jsx
import RedemptionSwitch from '@despegar/eva-ui/RedemptionSwitch';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `desktop` | bool | `false` | Variante desktop. |
| `onClick` | func | `() => {}` | Handler cuando no hay switch visible (card/arrow). |
| `switchId` | string | `'example-switch-redemption-switch'` | ID para el input del switch. |
| `title` | string | `'Empezá a sumar puntos'` | Título. |
| `subtitle` | string | `'Registrate'` | Subtítulo. |
| `variant` | enum | `''` | Cambia layout/comportamiento. |
| `...rest` | — | — | Props cascada al `Switch` cuando corresponde. |

### Variantes (`variant`)
- `''` (default): Logo + switch md.
- `horizontal`: Layout horizontal con icono loyalty.
- `pill`: Chip compacto con icono loyalty.
- `reSearch`: Switch destacado.
- `collapsedReSearch`: Switch colapsado (ReSearch).
- `unregisteredUser`: Card sin switch, clickable (setea `card`).
- `reSearchUnregisteredUser`: Card destacada con arrow.
- `reSearchCollapsedUnregisteredUser`: Card colapsada.

## Uso Básico
```jsx
<RedemptionSwitch switchId="loyalty-switch" onClick={onToggle} />
```

## Variante Pill
```jsx
<RedemptionSwitch variant="pill" subtitle="Ver beneficios" />
```

## Card para usuario no registrado
```jsx
<RedemptionSwitch
  variant="unregisteredUser"
  title="Unite y sumá"
  subtitle="Crear cuenta"
  onClick={openSignup}
/> 
```

## Notas
- Cuando la variante incluye switch, lo renderiza y pasa `...rest` al `Switch` (ej. `checked`, `onChange`).
- Card variants no renderizan switch; usan `onClick` para navegar o abrir modal.