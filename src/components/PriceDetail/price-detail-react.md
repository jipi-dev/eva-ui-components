# PriceDetail - React

## Importación
```jsx
import PriceDetail from '@despegar/eva-ui/PriceDetail';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | `'Desglose de precio'` | Encabezado principal. |
| `description` | string | `'Viaje a Cancún'` | Subtítulo opcional. |
| `mainTitle` | string | `'Precio por persona'` | Título del bloque principal. |
| `mainCurrency` | string | `'$'` | Moneda del precio principal. |
| `mainAmmount` | string | `'20.000'` | Monto principal. |
| `children` | `PriceDetail.Item[]` \| `PriceDetail.Double[]` | demo | Lista de ítems debajo del encabezado. |
| `innerPadding` | bool | `false` | Agrega padding interno (`-inner-padding`). |
| `className` | string | `''` | Clases extra. |

### Subcomponentes
**`PriceDetail.Item`**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `borderTop` | bool | `false` | Muestra borde superior. |
| `className` | string | `''` | Clases extra. |
| `children` | string \| node | `'Some content'` | Contenido libre. |

**`PriceDetail.Double`**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | `'Title'` | Texto columna izquierda. |
| `description` | string | `'Description'` | Texto columna derecha. |
| `borderTop` | bool | `false` | Borde superior. |
| `className` | string | `''` | Clases extra (útil para color). |

## Uso Básico
```jsx
<PriceDetail
  title="Detalle de precio"
  description="Hotel en Cancún"
  mainTitle="Precio por noche"
  mainCurrency="$"
  mainAmmount="120.000"
>
  <PriceDetail.Double title="Tarifa base" description="$ 100.000" />
  <PriceDetail.Double title="Impuestos" description="$ 20.000" borderTop />
  <PriceDetail.Item className="-eva-3-tc-gray-2" borderTop>
    Tasas sujetas a cambios al check-in.
  </PriceDetail.Item>
</PriceDetail>
```

## Con Puntos de Loyalty
```jsx
<PriceDetail mainAmmount="240.000">
  <PriceDetail.Double title="Tarifa" description="$ 220.000" />
  <PriceDetail.Item borderTop>
    <PricingPoints>Sumás <span className="-eva-3-bold">300 puntos</span></PricingPoints>
  </PriceDetail.Item>
</PriceDetail>
```

## Notas
- Aplica clases utilitarias para resaltar ítems (ej. `-eva-3-tc-green-3` para descuentos).
- `innerPadding` agrega espacio alrededor del bloque.
- `children` acepta mezcla de `Item` y `Double` para flexibilidad.