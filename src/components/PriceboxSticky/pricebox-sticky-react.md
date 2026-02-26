# PriceboxSticky - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import PriceboxSticky from '@despegar/eva-ui/PriceboxSticky';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `message` | string | `'San Pedro, una escapada con energía rural'` | Mensaje principal. |
| `typeDiscount` | `'green' \| 'purple' \| 'desktop-white'` | `'green'` | Variante de color de descuento/label. |
| `loyaltyVersion` | `'' \| 'accumulation' \| 'redemption'` | `'accumulation'` | Controla bloque Loyalty. |
| `discount` | bool | `false` | Muestra label de descuento. |
| `infoIcon` | bool | `false` | Muestra ícono info junto al precio. |
| `largePrice` | bool | `false` | Adapta layout para precios largos. |
| `disneyDriver` | bool | `false` | Muestra `Driver` promocional (Disney). |
| `driverText` | string | `'6 días al precio de 4'` | Texto del driver. |
| `onClick` | func | `() => {}` | Handler del botón “Comprar”. |

## Uso Básico
```jsx
<PriceboxSticky onClick={goCheckout} />
```

## Con Descuento e Info
```jsx
<PriceboxSticky
  discount
  infoIcon
  typeDiscount="purple"
  message="Aprovechá 20% OFF"
  onClick={goCheckout}
/> 
```

## Con Loyalty Redención
```jsx
<PriceboxSticky
  loyaltyVersion="redemption"
  message="Usá tus puntos para ahorrar"
  largePrice
/>
```

## Notas
- `typeDiscount="desktop-white"` setea `Label` en estilo púrpura sobre fondos claros.
- `loyaltyVersion=''` oculta bloques Loyalty.
- `disneyDriver` posiciona un `Driver` en la esquina superior.