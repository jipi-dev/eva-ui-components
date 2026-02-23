# LoyaltyIllustrations

## Descripción
Átomo que contiene las ilustraciones definidas para Loyalty / Pasaporte Despegar. Las ilustraciones son imágenes SVG organizadas por categorías temáticas.

## Tipo de componente
- **Tipo**: Átomo
- **Categoría**: Loyalty
- **Status**: Loyalty
- **Tags**: ilustraciones, pasaporte

## Estructura HTML

```html
<img 
  src="/ui/dist/resources/sprites/ly-benefits-pay-with-points.svg" 
  alt="benefits-pay-with-points"
  class="loyalty-illustration" 
/>
```

## Variantes

### Benefits (Beneficios)

#### Benefits Calendar
```html
<img src="/ui/dist/resources/sprites/ly-benefits-calendar.svg" alt="benefits-calendar" />
```

#### Benefits Discounts
```html
<img src="/ui/dist/resources/sprites/ly-benefits-discounts.svg" alt="benefits-discounts" />
```

#### Benefits Pay with Points
```html
<img src="/ui/dist/resources/sprites/ly-benefits-pay-with-points.svg" alt="benefits-pay-with-points" />
```

#### Benefits Plane
```html
<img src="/ui/dist/resources/sprites/ly-benefits-plane.svg" alt="benefits-plane" />
```

#### Benefits Validity
```html
<img src="/ui/dist/resources/sprites/ly-benefits-validity.svg" alt="benefits-validity" />
```

### Mechanics (Mecánicas)

#### Mechanics Arrow
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-arrow.svg" alt="mechanics-arrow" />
```

#### Mechanics Check
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-check.svg" alt="mechanics-check" />
```

#### Mechanics Passport
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-passport.svg" alt="mechanics-passport" />
```

#### Mechanics Pay with Points
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-pay-with-points.svg" alt="mechanics-pay-with-points" />
```

#### Mechanics Pending
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-pending.svg" alt="mechanics-pending" />
```

#### Mechanics Travel
```html
<img src="/ui/dist/resources/sprites/ly-mechanics-travel.svg" alt="mechanics-travel" />
```

### Modal

#### Modal Check
```html
<img src="/ui/dist/resources/sprites/ly-modal-check.svg" alt="modal-check" />
```

#### Modal Map
```html
<img src="/ui/dist/resources/sprites/ly-modal-map.svg" alt="modal-map" />
```

#### Modal Passport
```html
<img src="/ui/dist/resources/sprites/ly-modal-passport.svg" alt="modal-passport" />
```

#### Modal Pending
```html
<img src="/ui/dist/resources/sprites/ly-modal-pending.svg" alt="modal-pending" />
```

### Feedback

#### Feedback Error
```html
<img src="/ui/dist/resources/sprites/ly-feedback-error.svg" alt="feedback-error" />
```

#### Feedback On Hold
```html
<img src="/ui/dist/resources/sprites/ly-feedback-on-hold.svg" alt="feedback-on-hold" />
```

#### Feedback Success
```html
<img src="/ui/dist/resources/sprites/ly-feedback-success.svg" alt="feedback-success" />
```

## Ruta personalizada

```html
<img src="/custom/path/sprites/ly-benefits-calendar.svg" alt="benefits-calendar" />
```

## Estados
No aplica. Las ilustraciones son imágenes estáticas.

## Estilos CSS
Sin estilos propios. Controlar desde CSS:

```css
.loyalty-illustration {
  width: 64px;
  height: 64px;
}
```

## Accesibilidad
- **Alt text**: Describir el contenido de la ilustración
- **Role**: Usar `role="img"` para ilustraciones decorativas
- **aria-hidden**: Considerar para ilustraciones puramente decorativas

```html
<img 
  src="/ui/dist/resources/sprites/ly-benefits-plane.svg" 
  alt="Ilustración de avión representando beneficios de viaje"
  role="img"
/>
```

## Dependencias

### Sprites (18 archivos SVG)

**Benefits:**
- ly-benefits-calendar.svg
- ly-benefits-discounts.svg
- ly-benefits-pay-with-points.svg
- ly-benefits-plane.svg
- ly-benefits-validity.svg

**Mechanics:**
- ly-mechanics-arrow.svg
- ly-mechanics-check.svg
- ly-mechanics-passport.svg
- ly-mechanics-pay-with-points.svg
- ly-mechanics-pending.svg
- ly-mechanics-travel.svg

**Modal:**
- ly-modal-check.svg
- ly-modal-map.svg
- ly-modal-passport.svg
- ly-modal-pending.svg

**Feedback:**
- ly-feedback-error.svg
- ly-feedback-on-hold.svg
- ly-feedback-success.svg

## Guía de uso

### Contextos de uso

**Benefits:** Mostrar beneficios del programa Pasaporte Despegar
- Calendar: Beneficios temporales
- Discounts: Descuentos especiales
- Pay with Points: Pago con puntos
- Plane: Viajes y vuelos
- Validity: Vigencia de beneficios

**Mechanics:** Explicar mecánicas del programa
- Arrow: Navegación o progreso
- Check: Confirmación
- Passport: Identidad del programa
- Pay with Points: Proceso de pago
- Pending: Estado pendiente
- Travel: Acción de viajar

**Modal:** Ilustraciones para modales
- Check: Éxito
- Map: Ubicación
- Passport: Programa loyalty
- Pending: Espera

**Feedback:** Estados de feedback
- Error: Error o problema
- On Hold: En espera
- Success: Éxito

## Tamaños recomendados
- **Small**: 32x32px
- **Medium**: 64x64px
- **Large**: 128x128px

## Notas adicionales
- Formato: **SVG** (escalable)
- Prefijo: **ly-** (loyalty)
- Ubicación default: `/ui/dist/resources/sprites/`
- Todas las ilustraciones tienen el mismo tamaño base
