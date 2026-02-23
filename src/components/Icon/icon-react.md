# Icon (React)

## Descripción

Componente React para mostrar iconos de la familia EVA 3 con soporte de diferentes tamaños. Los iconos se renderizan como elementos `<i>` con clases CSS que aplican los glifos de la fuente de iconos EVA.

**Tipo:** Átomo  
**Categoría:** Display / Icons  
**Tags:** react, icon, svg, iconography, visual, size, eva-3-icon

## Cuándo Usar
- Mostrar iconos decorativos o funcionales en botones, menús, tarjetas, etc.
- Agregar indicadores visuales (ej. ubicación, éxito, error, información).
- Complementar texto para mejorar la comprensión visual.

## Mejores Prácticas
- Usa el tamaño apropiado según el contexto (md para contenido general, lg para destacar).
- Combina con texto descriptivo cuando el significado del ícono no sea obvio.
- Para íconos informativos importantes, asegura que haya alternativa textual para accesibilidad.
- Mantén la consistencia visual usando el mismo tamaño de ícono en contextos similares.

## Dependencias
- Fuente de iconos EVA 3 (`eva-3-icon` font family).
- Clases de utilidades de tamaño: `-eva-3-icon-{size}`.

**Import sugerido:**

```jsx
import { Icon } from "@despegar/eva-react-components";
```

---

## Estructura del componente

```jsx
<Icon
  icon="town"
  size="md"
  className=""
/>
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `string` | `'info'` | Nombre del ícono a mostrar. Ver lista completa en la sección Iconos Disponibles. |
| `size` | `null \| '' \| 'xsm' \| 'sm' \| 'md' \| 'lg' \| 'xlg' \| 'xxlg'` | `null` | Tamaño del ícono. |
| `className` | `string` | `''` | Clases CSS adicionales. |

### Tamaños Disponibles

| Size | Dimensión |
|------|-----------|
| `xsm` | 16px |
| `sm` | 20px |
| `md` | 24px |
| `lg` | 32px |
| `xlg` | 48px |
| `xxlg` | 64px |

---

## Ejemplos

### Icon básico

```jsx
<Icon icon="town" size="md" />
```

---

### Icon con diferentes tamaños

```jsx
<Icon icon="info-circle" size="xsm" />
<Icon icon="info-circle" size="sm" />
<Icon icon="info-circle" size="md" />
<Icon icon="info-circle" size="lg" />
<Icon icon="info-circle" size="xlg" />
<Icon icon="info-circle" size="xxlg" />
```

---

### Icon en botones

```jsx
<Button>
  <Icon icon="search" size="md" />
  Buscar
</Button>
```

---

### Icon con ubicación

```jsx
<div>
  <Icon icon="location" size="md" />
  <span>Buenos Aires, Argentina</span>
</div>
```

---

### Icon de estado

```jsx
<Icon icon="checkmark-circle-filled" size="lg" className="-eva-3-tc-success" />
<Icon icon="error-circle-filled" size="lg" className="-eva-3-tc-error" />
<Icon icon="warning-filled" size="lg" className="-eva-3-tc-warning" />
<Icon icon="info-circle-filled" size="lg" className="-eva-3-tc-info" />
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
`packages`, `packages-ui`, `package-complete-ui`, `package-complete`, `paid-wifi`, `parking`, `parking-not-available`, `partly-cloudy`, `passengers`, `pause`, `pay-later`, `pet`, `pets-not-allowed`, `phone`, `pickup-point`, `picture`, `pig-offer`, `pig-offer-filled`, `pillow`, `pix`, `play`, `plug`, `plug-cap`, `plus`, `pm-debit`, `pm-deposit`, `pm-internet-banking`, `pm-pad`, `pm-parcel-ticket`, `pm-pad`, `pm-qr`, `poi`, `pregnant`, `printer`, `privacy`, `private-entrance`, `private-property`, `promotion`, `purchases`

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

## Uso en HTML Puro

Si necesitas usar los iconos directamente en HTML sin React:

```html
<!-- Icon básico -->
<i class="eva-3-icon-town"></i>

<!-- Icon con tamaño -->
<i class="eva-3-icon-town -eva-3-icon-md"></i>

<!-- Icon con tamaño y color -->
<i class="eva-3-icon-checkmark-circle-filled -eva-3-icon-lg -eva-3-tc-success"></i>
```

---

## Notas Técnicas

- Los iconos se renderizan como elementos `<i>` vacíos.
- El glifo del ícono se aplica mediante la fuente `eva-3-icon` con pseudo-elemento CSS `::before`.
- La clase base es `eva-3-icon-{iconName}`.
- La clase de tamaño es `-eva-3-icon-{size}`.
- El color se hereda del color de texto del elemento o se puede sobrescribir con utilidades de color.
- El componente acepta todas las props HTML estándar para elementos `<i>` mediante el spread operator `{...rest}`.
