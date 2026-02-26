# Illustrations

## Descripción

Almacena rutas de ilustraciones e iconos ilustrados de Despegar en variables de CSS. Soporta escenas, íconos, y composiciones desde staticontent. Permite cambio automático de ilustraciones para M&A's (brands) mediante sobrescritura de variables CSS.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Uso como variable CSS (recomendado)

Las ilustraciones se definen como variables CSS y pueden usarse como `background-image` en estilos. Esta es la forma recomendada porque soporta M&A's automáticamente.

### Sintaxis

```css
.ilustracion-de-ejemplo {
    background-image: var(--eva-illustration-[nombre]);
    background-repeat: no-repeat;
    background-position: center;
}
```

### Ejemplos

```css
/* Escena: empty state */
.empty-state {
    background-image: var(--eva-illustration-feedback-empty-state);
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 200px;
}

/* Ícono ilustrado: airplane */
.flight-icon {
    background-image: var(--eva-illustration-airplane);
    background-size: contain;
    width: 72px;
    height: 72px;
}

/* Composición: hotels */
.hotel-composition {
    background-image: var(--eva-illustration-hotels);
}
```

## Uso como `<img>` (alternativa)

Si necesitas la ilustración como elemento `<img>` (por ejemplo, para `alt` text), usa directamente la URL de staticontent:

```html
<img src="https://www.staticontent.com/eva-core/assets/illustrations/despegar/scenes/0.0.5/feedback-empty-state.svg" 
     alt="ilustracion de ejemplo" />
```

## Variables CSS disponibles

### Escenas (31 variantes)

Variables con prefijo `--eva-illustration-` + nombre de escena:

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

**Numeradas (legacy):**
- `13`, `14`, `15`, `18`, `23`, `24` (usar nombres descriptivos cuando sea posible)

### Íconos ilustrados (200+ variantes)

Variables con prefijo `--eva-illustration-` + nombre de ícono. Ejemplos representativos:

**Viajes:**
- `airplane`, `airplane-branded`, `airplane-landing`, `airplane-take-off`, `car`, `bus`, `train`, `cruise`, `bike`, `motorbike`, `van`, `tuk-tuk`, `trolley-car`, `subway`

**Alojamiento:**
- `hotel-1`, `hotel-2`, `hotel-3`, `hotel-deals`, `house`, `vacation-rental`, `swimming-pool`, `bedroom`, `bathroom`, `kitchen`

**Equipaje:**
- `suitcase`, `suitcase-disabled`, `carry-on`, `carry-on-2`, `carry-on-disabled`, `carry-on-2-disabled`, `backpack`, `bag-coin`, `bag-like`, `bag-ok`

**Calendario:**
- `calendar-add`, `calendar-booking`, `calendar-change`, `calendar-check`, `calendar-discount`, `calendar-secondary`, `calendar-setting`, `calendar-tertiary`

**Pago:**
- `credit-card`, `add-credit-card-front`, `add-credit-card-back`, `card-security-code`, `coin`, `dollar`, `wallet`, `payment`, `coupon`, `coupon-active`

**Usuario:**
- `people`, `user-add`, `user-question`, `baby`, `wheelchair`, `pet`

**Emociones:**
- `happy`, `very-happy`, `sad`, `mad`, `indiferent`

**Comida:**
- `hamburger`, `pizza`, `toast`, `croissant`, `bacon`, `egg`, `cereal`, `coffee`, `beer`, `beers`, `cocktail`, `plate`, `cup-plate-clock`

**Destinos:**
- `landmark-argentina`, `landmark-brasil`, `landmark-caribbean`, `landmark-europe`, `landmark-mexico-1`, `landmark-mexico-2`, `landmark-usa`, `landmark-world`, `city`, `mountain`, `field`, `nature`

**Otros:**
- `ticket`, `gift`, `heart`, `camera`, `passport`, `shield`, `marker`, `trophy`, `medal`, `legos`, `disney`, `graduation-cap`, `halloween`, `romantic`, `cultural`, `entertainment`, `adventure`

Ver listado completo de 200+ íconos en el código fuente del componente.

### Composiciones (11 variantes)

Variables con prefijo `--eva-illustration-` + nombre de composición:

- `airplane-refresh`, `airplane-up-cost`
- `bag-bring`, `bag-clock-marker`, `bag-like-marker`
- `car-toll`
- `hotels`
- `passport-alert`
- `roundtrip-tickets-combinations`
- `suitcase-ok`
- `trip-guide-backpack`

## Rutas a Staticontent

### Despegar

**Escenas:**
```
https://www.staticontent.com/eva-core/assets/illustrations/despegar/scenes/{version}/[nombre].svg
```

**Íconos:**
```
https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/{version}/[nombre].svg
```

**Composiciones:**
```
https://www.staticontent.com/eva-core/assets/illustrations/despegar/compositions/{version}/[nombre].svg
```

### Brands (M&A's)

Misma estructura pero cambiar `/despegar/` por `/brands/`:

```
https://www.staticontent.com/eva-core/assets/illustrations/brands/scenes/{version}/[nombre].svg
https://www.staticontent.com/eva-core/assets/illustrations/brands/icons/{version}/[nombre].svg
https://www.staticontent.com/eva-core/assets/illustrations/brands/compositions/{version}/[nombre].svg
```

**Versión más reciente:** `0.0.8` (usar servicio de snapshots para M&A's, ver [documentación](https://eva.despegar.design/eva/docs/ui/m-a))

## Soporte M&A's

Las variables de CSS permiten que las ilustraciones se reemplacen automáticamente al incluir el CSS de M&A's (Bestday, Viajes Falabella, etc.). El valor de las variables se sobrescribe desde `/brands/` en lugar de `/despegar/`.

**Ejemplo:**
```css
/* Despegar: */
--eva-illustration-feedback-success: url("...despegar/scenes/0.0.5/feedback-success.svg");

/* Bestday (automático): */
--eva-illustration-feedback-success: url("...brands/scenes/0.0.5/feedback-success.svg");
```

## Notas de estilo (SCSS)

- Variables definidas en `:root` para acceso global.
- Versión de escenas: `$illustrationsScenesVersion` (SCSS variable del eva-core).
- Versión de íconos: `$illustrationsIconsVersion`.
- Versión de composiciones: `$illustrationsCompositionsVersion`.
- Algunas escenas numeradas (01-12, 16-17, 19-22) están comentadas en el SCSS (no usadas activamente).

## Accesibilidad

- **Background images**: Son decorativas por naturaleza. No tienen texto alternativo.
- **Si la ilustración transmite información crítica**: Usar `<img>` con `alt` descriptivo en lugar de background:

```html
<img src="https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg" 
     alt="Usuario" />
```

- **Considerar `role="img"` y `aria-label`** si usas background image con información:

```html
<div role="img" 
     aria-label="Ilustración de éxito" 
     style="background-image: var(--eva-illustration-feedback-success);">
</div>
```

## Dependencias

- Variables SCSS: `$illustrationsScenesVersion`, `$illustrationsIconsVersion`, `$illustrationsCompositionsVersion`.
- Clase base: ninguna (solo variables CSS).
- Categoría: `illustrations` (type: atoms).

## Ejemplo completo

```html
<style>
.empty-state-illustration {
    background-image: var(--eva-illustration-feedback-empty-state);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200px;
    width: 100%;
    height: 200px;
}

.flight-icon {
    background-image: var(--eva-illustration-airplane);
    background-size: contain;
    background-repeat: no-repeat;
    width: 72px;
    height: 72px;
}
</style>

<div class="empty-state-illustration" role="img" aria-label="No hay resultados"></div>
<div class="flight-icon"></div>

<!-- O como <img> para accesibilidad explícita -->
<img src="https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/airplane.svg" 
     alt="Vuelo" 
     width="72" 
     height="72" />
```
