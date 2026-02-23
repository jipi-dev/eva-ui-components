# Luggage - Componente React

## Importación
```jsx
import Luggage from '@eva/components/Luggage';
```

## Props del componente Luggage

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `border` | `boolean` | `false` | Agrega líneas separadoras entre items |
| `columnLayout` | `boolean` | `false` | Layout en columnas |
| `title` | `string` | `''` | Título sobre los items |
| `className` | `string` | `''` | Clases adicionales |
| `children` | `array` | - | Array de `Luggage.Item` |

## Props de Luggage.Item

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `type` | `string` | - | **Requerido**. `'backpack'`, `'carryon'` o `'baggage'` |
| `included` | `boolean` | `false` | Si está incluido (estilo success) |
| `title` | `string` | `''` | Título del item |
| `children` | `node` | - | Descripción del equipaje |

## Uso básico

```jsx
<Luggage border>
  <Luggage.Item type="backpack" included title="Incluye una mochila">
    <p>Medidas máximas: 45 x 35 x 20 cm.</p>
  </Luggage.Item>
  <Luggage.Item type="carryon" title="Incluye equipaje de mano">
    <p>1 valija de hasta 8 kilos.</p>
  </Luggage.Item>
  <Luggage.Item type="baggage" title="No incluye equipaje para despachar">
    <p>Podrás comprar valijas por un precio exclusivo.</p>
  </Luggage.Item>
</Luggage>
```

## Variantes

### Con título y column layout
```jsx
<Luggage columnLayout title="Equipaje">
  <Luggage.Item type="backpack" included title="Mochila incluida">
    <p>Debe caber bajo el asiento.</p>
  </Luggage.Item>
</Luggage>
```

### Dentro de Tooltip
```jsx
<Tooltip title="Equipaje" position="top-center" white>
  <Luggage border>
    <Luggage.Item type="backpack" included title="Mochila">
      <p>45 x 35 x 20 cm</p>
    </Luggage.Item>
  </Luggage>
</Tooltip>
```

## Ejemplo completo

```jsx
import Luggage from '@eva/components/Luggage';

const FlightLuggage = ({ luggageData }) => {
  return (
    <Luggage border title="Información de equipaje">
      {luggageData.map((item, index) => (
        <Luggage.Item
          key={index}
          type={item.type}
          included={item.included}
          title={item.title}
        >
          {item.details.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
        </Luggage.Item>
      ))}
    </Luggage>
  );
};
```

## Mapeo de tipos a iconos

```javascript
const luggageToIcon = {
  backpack: 'backpack',
  carryon: 'handbag',
  baggage: 'suitecase',
};
```

## PropTypes

```jsx
Luggage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.bool,
  columnLayout: PropTypes.bool,
  children: PropTypes.arrayOf(instanceOfFunctional(Luggage.Item)),
};

Luggage.Item.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.oneOf(['backpack', 'carryon', 'baggage']).isRequired,
  included: PropTypes.bool,
};
```

## HOC: withUtilities
Envuelto con `withUtilities`.

## Dependencias
- Heading, Text, Icon
- Iconos: backpack, handbag, suitecase

## Notas
- `Luggage.Item` es un subcomponente de `Luggage`
- Por default se muestran 3 items de ejemplo si no se pasan children
