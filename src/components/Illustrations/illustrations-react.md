# Illustrations - React

## Descripción

Componente React que renderiza ilustraciones e iconos ilustrados desde staticontent como `<img>`. Soporta escenas, íconos, y composiciones con versionado y soporte para brands (M&A's).

**Tipo:** Activo visual  
**Categoría:** Media / Illustrations  
**Tags:** react, illustrations, scene, icon, composition, staticontent, brand, version

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Mostrar escenas o íconos ilustrados en estados vacíos, onboarding o mensajes destacados.
- Necesidad de activos de marca versionados desde CDN.

## Mejores Prácticas
- Define `alt` significativo; no dejes vacío a menos que sea puramente decorativo.
- Usa una sola de `scene`/`icon`/`composition` por render.
- Controla el peso cargando solo lo necesario (versionado correcto) y evita escalar en exceso.

## Dependencias
- Assets en CDN `staticontent`/`despegar` (`eva-core/assets/illustrations/...`).
- No requiere otros componentes; renderiza `<img>` con la ruta construida.

## Props

| Prop          | Tipo                                   | Requerido | Default          | Descripción                                                                                     |
| ------------- | -------------------------------------- | --------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| `scene`       | `string` (oneOf 31 escenas)            | No        | `undefined`      | Nombre del archivo de escena (ej: `'feedback-success'`, `'planning-dates'`). Ver listado abajo |
| `icon`        | `string` (oneOf 200+ íconos)           | No        | `undefined`      | Nombre del ícono ilustrado (ej: `'airplane'`, `'hotel-1'`, `'people'`). Ver listado abajo      |
| `composition` | `string` (oneOf 11 composiciones)      | No        | `undefined`      | Nombre de composición (ej: `'hotels'`, `'passport-alert'`). Ver listado abajo                  |
| `brand`       | `'despegar'` \| `'brands'`             | Sí        | -                | Marca: `'despegar'` para ilustraciones Despegar, `'brands'` para M&A's                         |
| `version`     | `string`                               | No        | `'0.0.8'`        | Versión de las ilustraciones en staticontent                                                    |
| `host`        | `'staticontent'` \| `'despegar'`       | No        | `'staticontent'` | Host del CDN                                                                                    |
| `className`   | `string`                               | No        | `''`             | Clases CSS adicionales                                                                          |

**Nota**: Exactamente UNA de las props `scene`, `icon`, o `composition` debe ser proporcionada.

## Importación

```jsx
import { Illustrations } from '@despegar/react-eva';
```

## Estructura

```jsx
<img 
  src="https://www.{host}.com/eva-core/assets/illustrations/{brand}/{category}/{version}/{name}.svg" 
  className={className} 
  alt="{category}-{name}" 
  {...rest} 
/>
```

- `{category}`: `scenes`, `icons`, o `compositions` (inferido de la prop usada)
- `{name}`: valor de `scene`, `icon`, o `composition`

## Ejemplos de uso

### Escenas

```jsx
import { Illustrations } from '@despegar/react-eva';

function EmptyState() {
  return (
    <Illustrations 
      scene="feedback-empty-state" 
      brand="despegar" 
      className="empty-illustration"
      alt="No hay resultados"
    />
  );
}
```

```jsx
<Illustrations 
  scene="feedback-success" 
  brand="despegar" 
  width={200} 
  height={200} 
/>
```

```jsx
<Illustrations 
  scene="security-airplane-covid" 
  brand="despegar" 
  version="0.0.5"
/>
```

### Íconos ilustrados

```jsx
<Illustrations 
  icon="airplane" 
  brand="despegar" 
  width={72} 
  height={72}
/>
```

```jsx
<Illustrations 
  icon="people" 
  brand="despegar" 
  className="user-icon"
  alt="Usuario"
/>
```

```jsx
<Illustrations 
  icon="hotel-1" 
  brand="despegar" 
/>
```

### Composiciones

```jsx
<Illustrations 
  composition="hotels" 
  brand="despegar" 
  width={150} 
  height={100}
/>
```

```jsx
<Illustrations 
  composition="passport-alert" 
  brand="despegar" 
/>
```

### M&A's (Brands)

```jsx
{/* Ilustración de Bestday/Viajes Falabella */}
<Illustrations 
  scene="feedback-success" 
  brand="brands" 
  version="0.0.8"
/>
```

```jsx
{/* Ícono de M&A */}
<Illustrations 
  icon="airplane" 
  brand="brands" 
/>
```

### Props HTML estándar

El componente pasa `{...rest}` props al `<img>`, soportando atributos HTML estándar:

```jsx
<Illustrations 
  scene="planning-group" 
  brand="despegar" 
  alt="Planificación en grupo"
  title="Planifica tu viaje con amigos"
  loading="lazy"
  style={{ objectFit: 'contain' }}
/>
```

## Escenas disponibles (31)

**Destinos:**
- `destination-adventure`, `destination-beach`, `destination-mountain`, `destination-exploration`, `destination-exploration-2`, `destination-city`

**Eventos:**
- `event-christmas`

**Feedback:**
- `feedback-success`, `feedback-error`, `feedback-done`, `feedback-empty-state`, `feedback-empty-state-2`

**Ayuda:**
- `help-airport`, `help-app`, `help-laptop`, `help-cellphone`

**Navegación:**
- `navigation-coffee-bar`, `navigation-home`, `navigation-home-2`, `navigation-office`, `navigation-searching`

**Ofertas:**
- `offers-destination`, `offers-app`

**Planificación:**
- `planning-group`, `planning-dates`, `planning-exploration`, `planning-next-trip`, `planning-chat`

**Seguridad:**
- `security-airplane`, `security-airplane-covid`, `security-covid`

## Íconos ilustrados disponibles (200+)

Lista parcial representativa. Ver código fuente para listado completo de 200+ íconos.

**Viajes:** airplane, airplane-branded, airplane-landing, airplane-take-off, car, bus, train, cruise, bike, motorbike, van, tuk-tuk, trolley-car, subway

**Alojamiento:** hotel-1, hotel-2, hotel-3, hotel-deals, house, vacation-rental, swimming-pool, bedroom, bathroom, kitchen

**Equipaje:** suitcase, suitcase-disabled, carry-on, carry-on-2, carry-on-disabled, carry-on-2-disabled, backpack, bag-coin, bag-like, bag-ok

**Calendario:** calendar-add, calendar-booking, calendar-change, calendar-check, calendar-discount, calendar-secondary, calendar-setting, calendar-tertiary, calendar-change-ok, calendar-change-question, calendar-change-up-down

**Pago:** credit-card, add-credit-card-front, add-credit-card-back, card-security-code, coin, dollar, wallet, payment, coupon, coupon-active, two-cards

**Usuario:** people, user-add, user-question, baby, wheelchair, pet

**Emociones:** happy, very-happy, sad, mad, indiferent

**Comida:** hamburger, toast, croissant, bacon, egg, cereal, coffee, coffee-home, beer, beers, cocktail, plate, cup-plate-clock

**Destinos geográficos:** landmark-argentina, landmark-brasil, landmark-caribbean, landmark-europe, landmark-mexico-1, landmark-mexico-2, landmark-usa, landmark-world, city, mountain, field, nature, romantic, cultural, entertainment, adventure

**Tickets:** ticket, ticket-activity, ticket-benefit, ticket-change, ticket-change-cancel-disabled, ticket-change-clock, ticket-change-question, ticket-change-refresh, ticket-change-setup, ticket-change-setup-disabled, ticket-discount

**Otros:** gift, heart, camera, passport, pasaporte, pasaporte-exchange-points, shield, marker, marker-road, trophy, medal, legos, disney, graduation-cap, halloween, voucher, voucher-disabled, voucher-download, safety-mask, syringe, search, search-metrics, authentication, reminder, notice-setting, light-bulb, etc.

## Composiciones disponibles (11)

- `airplane-refresh`, `airplane-up-cost`
- `bag-bring`, `bag-clock-marker`, `bag-like-marker`
- `car-toll`
- `hotels`
- `passport-alert`
- `roundtrip-tickets-combinations`
- `suitcase-ok`
- `trip-guide-backpack`

## PropTypes

```javascript
import PropTypes from 'prop-types';

Illustrations.propTypes = {
  className: PropTypes.string,
  scene: PropTypes.oneOf([/* 31 escenas */]),
  icon: PropTypes.oneOf([/* 200+ íconos */]),
  composition: PropTypes.oneOf([/* 11 composiciones */]),
  version: PropTypes.string,
  brand: PropTypes.oneOf(['despegar', 'brands']).isRequired,
  host: PropTypes.oneOf(['staticontent', 'despegar']),
};

Illustrations.defaultProps = {
  version: '0.0.8',
  host: 'staticontent',
};
```

## Accesibilidad

- **Siempre incluir `alt`**: El componente genera `alt` automático como `"{category}-{name}"` (ej: `"scenes-feedback-success"`). Para mejor accesibilidad, sobrescribir con texto descriptivo:

```jsx
{/* Default (no ideal) */}
<Illustrations icon="airplane" brand="despegar" />
{/* alt generado: "icons-airplane" */}

{/* Recomendado */}
<Illustrations icon="airplane" brand="despegar" alt="Vuelo" />
<Illustrations scene="feedback-error" brand="despegar" alt="Error: no se pudo procesar la solicitud" />
```

- **Ilustraciones decorativas**: Si la ilustración es puramente decorativa (información redundante con texto cercano), usar `alt=""`:

```jsx
<div>
  <Illustrations icon="success" brand="despegar" alt="" />
  <h3>¡Reserva exitosa!</h3>
</div>
```

- **Dimensiones explícitas**: Para evitar layout shift, especificar `width` y `height`:

```jsx
<Illustrations 
  scene="feedback-empty-state" 
  brand="despegar" 
  width={200} 
  height={200} 
  alt="No hay resultados"
/>
```

## Dependencias

- HOC: `withUtilities` para clases de utilidad.
- SCSS: `illustrations.scss` (variables CSS para background images).
- Categoría: `illustrations` (type: atoms).
- Última versión: `0.0.8` (verificar servicio de snapshots para M&A's).

## Notas

- El componente infiere la categoría (`scenes`, `icons`, `compositions`) de la prop proporcionada.
- Solo una de `scene`, `icon`, o `composition` debe ser usada (mutuamente exclusivas).
- Para uso como background image (en lugar de `<img>`), usar las variables CSS documentadas en `illustrations.md`.
- Prop `host='despegar'` es útil para entornos de prueba internos. Usar `'staticontent'` (default) en producción.

## Ejemplo completo

```jsx
import { Illustrations } from '@despegar/react-eva';

function TravelConfirmation() {
  return (
    <div className="confirmation">
      <Illustrations 
        scene="feedback-success" 
        brand="despegar" 
        width={200} 
        height={200}
        alt="Reserva confirmada"
        loading="lazy"
      />
      
      <div className="details">
        <Illustrations 
          icon="airplane" 
          brand="despegar" 
          width={48} 
          height={48}
          alt=""
          aria-hidden="true"
        />
        <span>Vuelo a Buenos Aires</span>
      </div>
      
      <Illustrations 
        icon="hotel-1" 
        brand="despegar" 
        width={48} 
        height={48}
        alt=""
        aria-hidden="true"
      />
      <span>Hotel Sheraton</span>
    </div>
  );
}
```
