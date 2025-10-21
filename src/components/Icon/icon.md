# Eva Icon System

El sistema de iconos Eva proporciona una colección completa de iconos vectoriales para aplicaciones web y móviles. Los iconos están disponibles tanto para React/TypeScript como para HTML puro.

## Instalación y Configuración

### CSS Required
```html
<!-- Incluir en el <head> de tu HTML -->
<link rel="stylesheet" href="./eva/eva-core.min.css">
```

### Para React/TypeScript
```tsx
import { Icon } from './components/Icon/Icon';
```

## Ejemplos de Uso

### React/TypeScript

#### Uso Básico
```tsx
import React from 'react';
import { Icon } from './components/Icon/Icon';

function MyComponent() {
  return (
    <div>
      {/* Icono básico */}
      <Icon icon="info" />
      
      {/* Icono con tamaño */}
      <Icon icon="checkmark" size="lg" />
      
      {/* Icono con clase personalizada */}
      <Icon icon="warning" className="text-error" />
    </div>
  );
}
```

#### Iconos en Botones
```tsx
import React from 'react';
import { Icon } from './components/Icon/Icon';

function ButtonExamples() {
  return (
    <div>
      {/* Botón con icono a la izquierda */}
      <button className="eva-button">
        <Icon icon="download" size="sm" />
        Descargar
      </button>
      
      {/* Botón solo con icono */}
      <button className="eva-button eva-button-icon">
        <Icon icon="search" />
      </button>
      
      {/* Botón con icono a la derecha */}
      <button className="eva-button">
        Continuar
        <Icon icon="chevron-right" size="sm" />
      </button>
    </div>
  );
}
```

#### Iconos en Listas
```tsx
import React from 'react';
import { Icon } from './components/Icon/Icon';
import { Button } from './components/Button/Button';

function FeatureList() {
  const features = [
    { icon: 'checkmark-circle', text: 'Confirmación instantánea' },
    { icon: 'wifi', text: 'WiFi gratuito' },
    { icon: 'parking', text: 'Estacionamiento incluido' },
    { icon: 'swimming-pool', text: 'Piscina disponible' }
  ];

  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <Icon icon={feature.icon} size="md" />
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  );
}
```

### HTML Puro

#### Uso Básico
```html
<!-- Icono básico -->
<i class="eva-3-icon-info" aria-hidden="true"></i>

<!-- Icono con tamaño -->
<i class="eva-3-icon-checkmark -eva-3-icon-lg" aria-hidden="true"></i>

<!-- Icono con clase personalizada -->
<i class="eva-3-icon-warning text-error" aria-hidden="true"></i>
```

#### Iconos en Botones
```html
<!-- Botón con icono a la izquierda -->
<button class="eva-3-btn -lg -primary">
  <i class="eva-3-icon-download btn-icon" aria-hidden="true"></i>
  <span class="btn-text">Descargar</span>
</button>

<!-- Botón solo con icono -->
<button class="eva-3-btn -md -secondary -circle">
  <i class="eva-3-icon-search btn-icon" aria-hidden="true"></i>
</button>

<!-- Botón con icono a la derecha -->
<button class="eva-3-btn -lg -primary">
  <span class="btn-text">Continuar</span>
  <i class="eva-3-icon-chevron-right btn-icon" aria-hidden="true"></i>
</button>
```

#### Iconos en Listas
```html
<ul class="feature-list">
  <li class="feature-item">
    <i class="eva-3-icon-checkmark-circle -eva-3-icon-md" aria-hidden="true"></i>
    <span>Confirmación instantánea</span>
  </li>
  <li class="feature-item">
    <i class="eva-3-icon-wifi -eva-3-icon-md" aria-hidden="true"></i>
    <span>WiFi gratuito</span>
  </li>
  <li class="feature-item">
    <i class="eva-3-icon-parking -eva-3-icon-md" aria-hidden="true"></i>
    <span>Estacionamiento incluido</span>
  </li>
  <li class="feature-item">
    <i class="eva-3-icon-swimming-pool -eva-3-icon-md" aria-hidden="true"></i>
    <span>Piscina disponible</span>
  </li>
</ul>
```

#### Iconos en Formularios
```html
<!-- Input con icono -->
<div class="input-group">
  <i class="eva-3-icon-search eva-3-icon-sm" aria-hidden="true"></i>
  <input type="text" placeholder="Buscar destino...">
</div>

<!-- Mensaje de estado -->
<div class="status-message success">
  <i class="eva-3-icon-checkmark-circle-filled eva-3-icon-sm" aria-hidden="true"></i>
  <span>Reserva confirmada exitosamente</span>
</div>

<div class="status-message error">
  <i class="eva-3-icon-error-circle-filled eva-3-icon-sm" aria-hidden="true"></i>
  <span>Error en el procesamiento</span>
</div>
```

## Tamaños Disponibles

Los iconos soportan los siguientes tamaños:

- `xsm` - Extra pequeño
- `sm` - Pequeño  
- `md` - Mediano (por defecto)
- `lg` - Grande
- `xlg` - Extra grande
- `xxlg` - Extra extra grande

### React/TypeScript
```tsx
<Icon icon="star" size="xsm" />
<Icon icon="star" size="sm" />
<Icon icon="star" size="md" />
<Icon icon="star" size="lg" />
<Icon icon="star" size="xlg" />
<Icon icon="star" size="xxlg" />
```

### HTML
```html
<i class="eva-3-icon-star -eva-3-icon-xsm" aria-hidden="true"></i>
<i class="eva-3-icon-star -eva-3-icon-sm" aria-hidden="true"></i>
<i class="eva-3-icon-star -eva-3-icon-md" aria-hidden="true"></i>
<i class="eva-3-icon-star -eva-3-icon-lg" aria-hidden="true"></i>
<i class="eva-3-icon-star -eva-3-icon-xlg" aria-hidden="true"></i>
<i class="eva-3-icon-star -eva-3-icon-xxlg" aria-hidden="true"></i>
```

## Listado Completo de Iconos

### A
- `adapter-plug`
- `adult`
- `adults-only`
- `air-conditioner`
- `airplane-going`
- `airplane-return`
- `alarm-clock`
- `all-inclusive`
- `american-kitchen`
- `armchair`
- `arrow-bold-down`
- `arrow-bold-left`
- `arrow-bold-right`
- `arrow-bold-up`
- `artificial-intelligence`
- `assistances`
- `assistances-ui`
- `atm`
- `atm-transmission`
- `audioguide`
- `audit`

### B
- `baby`
- `baby-belt`
- `baby-car`
- `baby-chair`
- `baby-changing`
- `baby-monitor`
- `baby-tub`
- `backpack`
- `backpack-filled`
- `bag`
- `balcony`
- `bar-chart`
- `bath`
- `bathrobe`
- `bathroom`
- `bathroom-accessories`
- `beach`
- `beach-umbrella`
- `beer`
- `bed`
- `billing-error`
- `blackout`
- `boarding-group`
- `boat`
- `book`
- `booking`
- `bookmark`
- `bookmark-filled`
- `breakfast`
- `budget`
- `budget-circle`
- `buses`
- `buses-ui`
- `business`

### C
- `calendar`
- `calendar-flex`
- `calendar-no-available`
- `callcenter`
- `camera`
- `camp-fire`
- `carpet-floor`
- `casino`
- `card`
- `cars`
- `cars-ui`
- `cars-insurance`
- `cars-insurance-ui`
- `cash`
- `catv`
- `ceiling-fan`
- `cell-phone`
- `change`
- `change-ui`
- `chat`
- `check-in`
- `check-out`
- `checkmark`
- `checkmark-circle`
- `checkmark-circle-filled`
- `chevron-down`
- `chevron-left`
- `chevron-right`
- `chevron-up`
- `children-games`
- `cigarette`
- `cigarette-not-allowed`
- `ciga-not-allowed`
- `circuits`
- `circuits-ui`
- `city`
- `cleaning-service`
- `click-to-pay`
- `clip`
- `clothes-hanger`
- `clothes-line`
- `cloudy`
- `cocktail`
- `coffee`
- `connected-rooms`
- `copy`
- `coupon`
- `coupon-points`
- `cradle`
- `cross`
- `cruises`
- `cruises-ui`
- `crypto`
- `cultural`

### D
- `dashboard`
- `departure`
- `desk`
- `despegar-icbc`
- `dining-room`
- `disability`
- `discount`
- `dishwasher`
- `disney`
- `disney-ui`
- `document`
- `dollar-cash`
- `dolphin`
- `door`
- `door-bell`
- `door-man`
- `double-bed`
- `download`
- `dressing-room`
- `drinks`
- `dry-cleaner`
- `dryer`
- `dvd`

### E
- `earth`
- `edit`
- `electric-drive`
- `elevator`
- `entertainment`
- `error-circle`
- `error-circle-filled`
- `ethernet`
- `extinguisher`
- `eye`
- `eye-closed`

### F
- `family`
- `fan`
- `favorite`
- `favorite-filled`
- `fence`
- `filter`
- `fire-place`
- `first-aid-kit`
- `flash-light`
- `flag`
- `flight-change`
- `flight-check-in`
- `flight-reschedule`
- `flights`
- `flights-ui`
- `food`
- `fpl`
- `freezer`
- `fridge`

### G
- `gallery`
- `games`
- `garden`
- `gastronomy`
- `geolocation`
- `get-invoice`
- `getaways`
- `getaways-ui`
- `gift`
- `golf`
- `grid`
- `grill`
- `gym`

### H
- `hailing`
- `hair-dryer`
- `hairdresser`
- `hamburger-menu`
- `handbag`
- `handbag-filled`
- `heating`
- `hob`
- `hot`
- `hot-water`
- `hotel-bell`
- `hotel-pickup`
- `hotel-resort`
- `hotel-resort-ui`
- `hotels`
- `hotels-ui`
- `house`
- `house-hold`
- `hybrid-drive`

### I
- `ice-machine`
- `imbatible`
- `imbatible-ui`
- `info`
- `info-circle`
- `info-circle-filled`
- `inspiration`
- `inspiration-ui`
- `interlocutor`
- `international-installments`
- `ipad`
- `ipod-base`
- `iron`
- `ironing-board`

### J
- `jacuzzi`
- `jav`

### K
- `kid`
- `kid-bathrobe`
- `kid-book`
- `kid-dishes`
- `kid-play`
- `kid-slippers`
- `kindergarten`
- `kitchen`
- `kitchen-island`
- `kitchen-kit`
- `kitchen-sink`
- `kms`
- `kms-limited`
- `kms-unlimited`

### L
- `laptop`
- `latch`
- `light-bulb`
- `list`
- `living`
- `location`
- `lock`
- `locker`
- `logo-ai`
- `logo-despegar`
- `lower-floor`
- `loyalty`
- `loyalty-filled`

### M
- `magic-band`
- `magnetic-key`
- `mail`
- `manual-transmission`
- `marble-floor`
- `mask`
- `massage`
- `maximize`
- `message`
- `microphone`
- `microwave`
- `miles`
- `miles-limited`
- `miles-unlimited`
- `minibar`
- `minimize`
- `minus`
- `mirror`
- `mixer`
- `moon`
- `more`
- `more-outline`
- `more-vertical`
- `mosquito-net`
- `multi-product`
- `my-trips-ui`

### N
- `new-window`
- `notification`
- `notification-filled`

### O
- `offers`
- `offers-ui`
- `offline`
- `order`
- `outdoor`
- `oven`

### P
- `packages`
- `packages-ui`
- `package-complete`
- `package-complete-ui`
- `paid-wifi`
- `parking`
- `parking-en`
- `parking-not-available`
- `parking-not-available-en`
- `partly-cloudy`
- `pause`
- `pay-later`
- `pearl`
- `pet`
- `pets-not-allowed`
- `phone`
- `pickup-point`
- `picture`
- `pig-offer`
- `pig-offer-filled`
- `pillow`
- `pix`
- `planning-calendar`
- `play`
- `plug`
- `plug-cap`
- `plus`
- `pm-debit`
- `pm-deposit`
- `pm-internet-banking`
- `pm-pad`
- `poi`
- `points`
- `pregnant`
- `privacy`
- `private-entrance`
- `private-property`
- `promotion`
- `purchases`

### Q
- `qr`
- `question`
- `question-circle`
- `question-circle-filled`

### R
- `radio`
- `rainy`
- `read`
- `reception`
- `reels`
- `refresh`
- `refund`
- `rentals`
- `rentals-ui`
- `room`
- `room-service`

### S
- `safe-box`
- `safe-box-money`
- `safe-door`
- `safeguard`
- `sauna`
- `search`
- `seat`
- `seat-sideways`
- `security-alarm`
- `self-transfer`
- `send`
- `settings`
- `shampoo`
- `share`
- `share-ios`
- `sheet`
- `shower`
- `slider`
- `slippers`
- `smart-tv`
- `smiley-happy`
- `smiley-mad`
- `smiley-neutral`
- `smiley-sad`
- `smiley-very-happy`
- `smoke-sensor`
- `snowing`
- `soap`
- `social-behance`
- `social-dribbble`
- `social-facebook`
- `social-facebook-filled`
- `social-google`
- `social-google-plus`
- `social-instagram`
- `social-medium`
- `social-pinterest`
- `social-twitter`
- `social-whatsapp`
- `social-whatsapp-filled`
- `social-x`
- `social-youtube`
- `soundproof-window`
- `spa`
- `special-requests`
- `special-transfer`
- `spice`
- `square-meter`
- `stairs`
- `star-circle`
- `star-filled`
- `store`
- `stormy`
- `subarrow-bold-right`
- `suitcase`
- `suitcase-filled`
- `sunny`
- `swap-arrows`
- `swimming-pool`

### T
- `table`
- `tablet`
- `tea-set`
- `tennis`
- `terrace`
- `thumbs-down`
- `thumbs-down-filled`
- `thumbs-up`
- `thumbs-up-filled`
- `ticket`
- `tickets`
- `tickets-ui`
- `time`
- `toaster`
- `toilet-paper`
- `top-floor`
- `towels`
- `town`
- `train`
- `trained-staff`
- `translate`
- `transmission`
- `trash`
- `traslate`
- `traslate-ui`
- `travel-kit`
- `trend-down`
- `trend-up`
- `trip-cradle`
- `trolley`
- `trophy`
- `tv`
- `tv-streaming`
- `two-cards`
- `two-hearts`

### U
- `underground-floor`
- `universal`
- `universal-ui`
- `unlock`
- `usb-charger`
- `user`
- `users`

### V
- `vaccines`
- `video`
- `videogames`
- `view-360`
- `visa`
- `visa-vaccines`
- `voucher-bus`
- `voucher-rentals`

### W
- `waffles`
- `walking`
- `wardrobe`
- `warning`
- `warning-filled`
- `wash-machine`
- `whirlpool`
- `widget`
- `wifi`
- `wood-floor`

## Buenas Prácticas

### Accesibilidad
- Siempre incluye `aria-hidden="true"` en iconos decorativos
- Para iconos con significado semántico, considera usar `aria-label`
- Proporciona texto alternativo cuando sea necesario

### Semántica
- Usa iconos que tengan relación directa con la acción o contenido
- Mantén consistencia en el uso de iconos similares
- Considera el contexto cultural de los iconos

### Performance
- Los iconos Eva usan fuentes web optimizadas
- Se cargan una sola vez y se cachean automáticamente
- Prefiere iconos del sistema sobre imágenes cuando sea posible

## Integración con Figma

Este sistema de iconos está diseñado para integrarse perfectamente con Figma Code Components, permitiendo:

1. **Autocompletado**: TypeScript proporciona autocompletado de todos los nombres de iconos
2. **Validación**: Los tipos evitan errores de nombres de iconos incorrectos
3. **Consistencia**: Mismo sistema de iconos en diseño y código
4. **Sincronización**: Cambios en Figma se reflejan automáticamente en el código

### Uso en Figma Code Component
```tsx
// El componente puede usarse directamente en Figma
<Icon icon="checkmark" size="md" />
```