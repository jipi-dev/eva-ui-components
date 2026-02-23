# PriceboxCluster - React

## Importación
```jsx
import PriceboxCluster from '@despegar/eva-ui/PriceboxCluster';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `responsive` | bool | `false` | Layout adaptable (`-responsive`). |
| `loyaltyAccumulation` | bool | `false` | Muestra bloque de acumulación de puntos. |
| `loyaltyRedemption` | bool | `false` | Muestra bloque de canje (puntos usados). |
| `smallText` | string | `'Precio por adulto desde'` | Texto pequeño superior. |
| `bigText` | number \| string | `222.539` | Parte entera del precio. |
| `cents` | number \| string | `'00'` | Centavos. |
| `description` | string | `'Total por 10 días $20.000'` | Texto bajo el precio. |
| `currency` | string | `'$'` | Símbolo de moneda. |
| `strikethroughText` | string | `''` | Precio tachado anterior. |
| `loyaltyNewPoints` | number | `300` | Puntos a acumular. |
| `usingPoints` | number | `4058` | Puntos a canjear (redemption). |
| `usingPrice` | number | `4000` | Equivalente monetario del canje. |
| `onClick` | func | `() => {}` | Handler del botón “Comprar”. |

## Uso Básico
```jsx
<PriceboxCluster onClick={goCheckout} />
```

## Con Acumulación de Puntos
```jsx
<PriceboxCluster loyaltyAccumulation loyaltyNewPoints={450} description="Total por noche" />
```

## Con Canje (Redemption)
```jsx
<PriceboxCluster
  loyaltyRedemption
  usingPoints={8000}
  usingPrice={7600}
  strikethroughText="$ 250.000"
  onClick={goCheckout}
/> 
```

## Notas
- `-loyalty` se activa si `loyaltyAccumulation` o `loyaltyRedemption` es true.
- Precio principal se arma con `currency`, `bigText` y `cents`; se puede tachar con `strikethroughText`.
- Envuelve el contenido en `Container` dentro de la implementación.