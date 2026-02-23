# PricingPoints - React

## Importación
```jsx
import PricingPoints from '@despegar/eva-ui/PricingPoints';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | string \| node | `'Podrías sumar xxx puntos'` | Texto junto al logo (requerido). |
| `className` | any | `''` | Clases extra. |

## Uso Básico
```jsx
<PricingPoints>
  Sumás <span className="-eva-3-bold">300 puntos</span>
</PricingPoints>
```

## Como Beneficio en Pricebox
```jsx
<PriceboxCluster loyaltyAccumulation>
  {/* ... */}
  <PricingPoints className="pricebox-loyalty-container">
    Podrías sumar <span className="-eva-3-bold">450 puntos</span>
  </PricingPoints>
</PriceboxCluster>
```

## Notas
- Renderiza el logo de Loyalty a la izquierda y el `children` a la derecha.
- Se usa en acumulación/canje; texto puede ser JSX.