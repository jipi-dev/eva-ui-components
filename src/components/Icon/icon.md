# Icon

## Descripción

Ícono de la familia EVA 3. Se renderiza como un elemento `<i>` al que se le agrega la clase con el prefijo `eva-3-icon-` seguido del nombre del ícono. El tamaño se controla con clases de utilidad `-eva-3-icon-{size}`.

**Tipo:** Átomo  
**Categoría:** Display / Icons  
**Tags:** icon, iconography, visual, size, eva-3-icon

## Estructura HTML

```html
<i class="eva-3-icon-{nombre} [-eva-3-icon-{size}]"></i>
```

## Cuándo Usar
- Mostrar íconos decorativos o funcionales en botones, menús, tarjetas, etc.
- Agregar indicadores visuales (ej. ubicación, éxito, error, información).
- Complementar texto para mejorar la comprensión visual.

## Mejores Prácticas
- Usa el tamaño apropiado según el contexto (`md` para contenido general, `lg` para destacar).
- Combina con texto descriptivo cuando el significado del ícono no sea obvio.
- Para íconos informativos, asegurá que haya alternativa textual para accesibilidad.
- Mantené la consistencia usando el mismo tamaño en contextos similares.

---

## Tamaños Disponibles

| Clase | Dimensión |
|-------|-----------|
| `-eva-3-icon-xsm` | 16px |
| `-eva-3-icon-sm` | 20px |
| `-eva-3-icon-md` | 24px |
| `-eva-3-icon-lg` | 32px |
| `-eva-3-icon-xlg` | 48px |
| `-eva-3-icon-xxlg` | 64px |

> Si no se aplica ninguna clase de tamaño, el ícono hereda el `font-size` del elemento padre.

---

## Ejemplos

### Icon básico

```html
<i class="eva-3-icon-town"></i>
```

### Icon con tamaño

```html
<i class="eva-3-icon-town -eva-3-icon-md"></i>
```

### Icon con diferentes tamaños

```html
<i class="eva-3-icon-info-circle -eva-3-icon-xsm"></i>
<i class="eva-3-icon-info-circle -eva-3-icon-sm"></i>
<i class="eva-3-icon-info-circle -eva-3-icon-md"></i>
<i class="eva-3-icon-info-circle -eva-3-icon-lg"></i>
<i class="eva-3-icon-info-circle -eva-3-icon-xlg"></i>
<i class="eva-3-icon-info-circle -eva-3-icon-xxlg"></i>
```

### Icon con color

El color se hereda del texto del elemento padre o se puede aplicar con utilidades de color:

```html
<i class="eva-3-icon-checkmark-circle-filled -eva-3-icon-lg -eva-3-tc-success"></i>
<i class="eva-3-icon-error-circle-filled -eva-3-icon-lg -eva-3-tc-error"></i>
<i class="eva-3-icon-warning-filled -eva-3-icon-lg -eva-3-tc-warning"></i>
<i class="eva-3-icon-info-circle-filled -eva-3-icon-lg -eva-3-tc-info"></i>
```

### Icon junto a texto

```html
<div>
  <i class="eva-3-icon-location -eva-3-icon-md"></i>
  <span>Buenos Aires, Argentina</span>
</div>
```

### Icon en un botón

```html
<button class="eva-3-button -primary -md">
  <i class="eva-3-icon-search -eva-3-icon-md"></i>
  Buscar
</button>
```

---

## Iconos Disponibles

A continuación se listan todos los iconos disponibles en la fuente EVA 3:

### A
`adapter-plug`, `adult`, `adults-only`, `air-conditioner`, `airplane-going`, `airplane-return`, `alarm-clock`, `all-inclusive`, `american-kitchen`, `armchair`, `arrow-bold-down`, `arrow-bold-left`, `arrow-bold-right`, `arrow-bold-up`, `assistances`, `atm`, `atm-transmission`, `audioguide`, `audit`

### B
`baby`, `baby-belt`, `baby-car`, `baby-chair`, `baby-changing`, `baby-monitor`, `baby-tub`, `backpack`, `backpack-filled`, `bag`, `balcony`, `bar-chart`, `bath`, `bathrobe`, `bathroom`, `bathroom-accessories`, `beach`, `beach-umbrella`, `bed`, `billing-error`, `blackout`, `boarding-group`, `boat`, `book`, `booking`, `bookmark`, `bookmark-filled`, `breakfast`, `budget`, `budget-circle`, `buses`, `business`

### C
`calendar`, `calendar-flex`, `calendar-no-available`, `callcenter`, `camera`, `camp-fire`, `carpet-floor`, `casino`, `card`, `cars`, `cars-insurance`, `cash`, `catv`, `ceiling-fan`, `cell-phone`, `chat`, `check-in`, `check-out`, `checkmark`, `checkmark-circle`, `checkmark-circle-filled`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `children-games`, `cigarette`, `cigarette-not-allowed`, `circuits`, `city`, `cleaning-service`, `clip`, `clothes-hanger`, `clothes-line`, `cross`, `cloudy`, `cocktail`, `coffee`, `connected-rooms`, `copy`, `coupon`, `coupon-points`, `cradle`, `cruises`, `crypto`, `cultural`

### D
`dashboard`, `departure`, `desk`, `despegar-icbc`, `dining-room`, `disability`, `disney`, `dishwasher`, `document`, `dollar-cash`, `dolphin`, `door`, `door-bell`, `door-man`, `double-bed`, `download`, `dressing-room`, `drinks`, `dry-cleaner`, `dryer`, `dvd`

### E
`earth`, `edit`, `elevator`, `electric-drive`, `entertainment`, `error-circle`, `error-circle-filled`, `ethernet`, `extinguisher`, `eye`, `eye-closed`

### F
`family`, `fan`, `favorite`, `favorite-filled`, `fence`, `filter`, `fire-place`, `first-aid-kit`, `flag`, `flight-change`, `flight-check-in`, `flight-reschedule`, `flights`, `flash-light`, `food`, `fpl`, `freezer`, `fridge`

### G
`gallery`, `games`, `garden`, `gastronomy`, `geolocation`, `get-invoice`, `getaways`, `gift`, `golf`, `grid`, `grill`, `gym`

### H
`hailing`, `hair-dryer`, `hairdresser`, `hamburger-menu`, `handbag`, `handbag-filled`, `heating`, `hob`, `hot`, `hot-water`, `hotel-bell`, `hotel-pickup`, `hotel-resort`, `hotels`, `house`, `house-hold`, `hybrid-drive`

### I
`ice-machine`, `imbatible`, `info`, `info-circle`, `info-circle-filled`, `inspiration`, `interlocutor`, `international-installments`, `ipad`, `ipod-base`, `iron`, `ironing-board`

### J-K
`jacuzzi`, `jav`, `kid`, `kid-bathrobe`, `kid-book`, `kid-dishes`, `kid-play`, `kid-slippers`, `kindergarten`, `kitchen`, `kitchen-island`, `kitchen-kit`, `kitchen-sink`, `kms`, `kms-limited`, `kms-unlimited`

### L
`laptop`, `latch`, `light-bulb`, `list`, `living`, `location`, `lock`, `locker`, `lower-floor`, `loyalty`, `loyalty-filled`

### M
`magic-band`, `magnetic-key`, `mail`, `manual-transmision`, `manual-transmission`, `marble-floor`, `mask`, `massage`, `maximize`, `message`, `microphone`, `microwave`, `miles`, `miles-limited`, `miles-unlimited`, `minibar`, `minimize`, `minus`, `mirror`, `mixer`, `moon`, `more`, `more-outline`, `more-vertical`, `mosquito-net`, `multi-product`, `my-trips-ui`

### N-O
`new-window`, `night`, `no-calendar`, `notification`, `offers`, `offline`, `order`, `outdoor`, `oven`

### P
`packages`, `packages-ui`, `package-complete-ui`, `package-complete`, `paid-wifi`, `parking`, `parking-not-available`, `partly-cloudy`, `passengers`, `pause`, `pay-later`, `pet`, `pets-not-allowed`, `phone`, `pickup-point`, `picture`, `pig-offer`, `pig-offer-filled`, `pillow`, `pix`, `play`, `plug`, `plug-cap`, `plus`, `pm-debit`, `pm-deposit`, `pm-internet-banking`, `pm-pad`, `pm-parcel-ticket`, `pm-qr`, `poi`, `pregnant`, `printer`, `privacy`, `private-entrance`, `private-property`, `promotion`, `purchases`

### Q-R
`question`, `question-circle`, `question-circle-filled`, `question-circle-outline`, `qr`, `radio`, `rainy`, `read`, `reception`, `reels`, `refresh`, `rentals`, `room`, `room-service`

### S
`safe-box`, `safe-box-money`, `safe-door`, `safeguard`, `sauna`, `search`, `seat`, `seat-sideways`, `security-alarm`, `self-transfer`, `send`, `settings`, `shampoo`, `share`, `sheet`, `shower`, `single-filled`, `slider`, `slippers`, `smiley-happy`, `smiley-mad`, `smiley-neutral`, `smiley-sad`, `smiley-very-happy`, `smart-tv`, `smoke-sensor`, `snowing`, `soap`, `social-behance`, `social-dribbble`, `social-facebook`, `social-facebook-filled`, `social-google`, `social-google-plus`, `social-instagram`, `social-medium`, `social-pinterest`, `social-twitter`, `social-whatsapp`, `social-whatsapp-filled`, `social-youtube`, `social-x`, `soundproof-window`, `spa`, `special-requests`, `special-transfer`, `spice`, `square-meter`, `stairs`, `star`, `star-circle`, `star-filled`, `store`, `stormy`, `subarrow-bold-right`, `suitcase`, `suitcase-filled`, `sunny`, `swap-arrows`, `swimming-pool`

### T
`table`, `tablet`, `tea-set`, `teddy-bear`, `tennis`, `terrace`, `thumbs-down`, `thumbs-down-filled`, `thumbs-up`, `thumbs-up-filled`, `ticket`, `tickets`, `time`, `toaster`, `toilet-paper`, `top-floor`, `towels`, `town`, `train`, `trained-staff`, `translate`, `transmission`, `trash`, `traslate`, `travel-kit`, `trend-down`, `trend-up`, `trip-cradle`, `trolley`, `tv`, `tv-streaming`, `two-cards`, `two-hearts`

### U-V
`underground-floor`, `universal`, `universal-ui`, `unlock`, `usb-charger`, `user`, `users`, `vaccines`, `video`, `videogames`, `view-360`, `visa`, `visa-vaccines`, `voucher-bus`, `voucher-rentals`

### W
`waffles`, `walking`, `wardrobe`, `warning`, `warning-filled`, `wash-machine`, `whirlpool`, `widget`, `wifi`, `wood-floor`

---

## Notas Técnicas

- Los iconos se renderizan como elementos `<i>` vacíos; el glifo se aplica via fuente `eva-3-icon` con pseudo-elemento `::before`.
- La clase base es `eva-3-icon-{nombreIcono}`.
- La clase de tamaño es `-eva-3-icon-{size}` (con guión inicial).
- El color se hereda del `color` del elemento padre o se puede sobreescribir con utilidades de color EVA.
