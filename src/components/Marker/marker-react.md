# Marker - Componente React

## Importación
```jsx
import Marker from '@eva/components/Marker';
```

## Descripción
Marcador para mapas/listados con variantes (secondary), estados (active/visited), versiones POI/location, mini y opción de precio o ícono/imágen.

**Tipo:** Átomo  
**Categoría:** Maps / Indicators  
**Tags:** react, marker, map, poi, location, price, active, visited, minimarker

## Cuándo Usar
- Señalar ubicaciones o puntos de interés en mapas/mini mapas.
- Mostrar precios o estado (activo/visitado) en resultados geolocalizados.

## Mejores Prácticas
- Usa `location` para diferenciar el marcador del usuario/ubicación actual.
- `price` debe ser corto; evita sobrecargar el marcador.
- Minimarker para densidad alta; `expand` para hover en desktop.

## Dependencias
- Íconos EVA (`Icon`) o imágenes externas via `image`.
- Clases `marker` provistas por la librería (`poi`, `location`, `-active`, `-visited`, `-secondary`, `-minimarker`).

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `string` | `''` | `''` o `'secondary'` |
| `poi` | `boolean` | `false` | Formato POI (circular) |
| `location` | `boolean` | `false` | Marker de ubicación |
| `active` | `boolean` | `false` | Estado activo |
| `visited` | `boolean` | `false` | Estado visitado |
| `minimarker` | `boolean` | `false` | Versión mini |
| `expand` | `boolean` | `false` | Minimarker expandible en hover |
| `price` | `string` | `false` | Precio a mostrar |
| `icon` | `string` | `'rentals-ui'` | Icono a usar |
| `image` | `string` | `''` | URL de imagen/logo |
| `className` | `string` | `''` | Clases adicionales |

## Uso básico

```jsx
<Marker icon="rentals-ui" />
```

## Variantes

### Marker común
```jsx
<Marker icon="rentals-ui" />
```

### Marker activo
```jsx
<Marker icon="rentals-ui" active />
```

### Marker visitado
```jsx
<Marker icon="rentals-ui" visited />
```

### Marker secundario (background)
```jsx
<Marker icon="rentals-ui" variant="secondary" />
```

### Con precio
```jsx
<Marker icon="rentals-ui" price="$100.000" />
```

### Minimarker
```jsx
<Marker minimarker />
```

### Minimarker expandible
```jsx
<Marker minimarker expand price="$100" />
```

### POI Marker
```jsx
<Marker poi />
```

### Location Marker
```jsx
<Marker location />
```

### Con logo (34x30)
```jsx
<Marker image="/ui/inc/images/demo/marker-logo.png" />
```

### Con imagen y precio (64x30)
```jsx
<Marker
  image="/ui/inc/images/demo/marker-image.png"
  price="$100.000"
/>
```

## Ejemplo completo en mapa

```jsx
import Marker from '@eva/components/Marker';

const MapWithMarkers = ({ properties }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <GoogleMap>
      {properties.map(property => (
        <div key={property.id} className="marker-wrapper">
          <Marker
            icon="rentals-ui"
            price={property.price}
            active={selectedId === property.id}
            onClick={() => setSelectedId(property.id)}
          />
        </div>
      ))}
    </GoogleMap>
  );
};
```

## PropTypes

```jsx
Marker.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['', 'secondary']),
  poi: PropTypes.bool,
  location: PropTypes.bool,
  active: PropTypes.bool,
  visited: PropTypes.bool,
  price: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  minimarker: PropTypes.bool,
  expand: PropTypes.bool,
};
```

## Estados interactivos

```jsx
const [isActive, setIsActive] = useState(false);

<Marker
  icon="rentals-ui"
  price="$500"
  active={isActive}
  onClick={() => setIsActive(!isActive)}
/>
```

## Ejemplo con hover controlado

```jsx
<Marker
  icon="rentals-ui"
  className={isHovered ? '-hover' : ''}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>
```

## HOC: withUtilities
Envuelto con `withUtilities`.

## Dependencias
- Shadow, Positioning, Icon
- Iconos: pig-offer, gift, poi, rentals-ui

## Notas importantes
- **Usar dentro de contenedor** para evitar conflictos con Google Maps
- **Minimarker expandible**: El cambio de tamaño puede afectar la posición en el mapa
- Location marker no tiene shadow
- POI marker es circular
