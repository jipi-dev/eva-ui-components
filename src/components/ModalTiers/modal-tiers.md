# Modal Tiers

## Descripción
Variante de modal para procesos de onboarding de Loyalty (tiers). Basado en ModalCoachmark, tamaño grande, con contenido rico (timeline, breakdown, cards) y estilo loyalty.

**Tipo:** Molécula  
**Categoría:** Modals  
**Status:** toBeDeprecated (según metadata)  
**Tags:** popup, emergente, ventana, window, overlay, pasaporte

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura General
Usa `ModalCoachmark` internamente con `size="lg"`, `steps={false}`, `noColor`, `tiers`, `className="... -show-sticky-footer -tier-header"`.

```html
<div class="eva-3-modal--tiers -show-modal -show-sticky-footer -tier-header">
  <!-- Contenido compuesto por subcomponentes -->
</div>
```

## Subcomponentes Exportados (markup sugerido)
- `ModalTiers.Title`: Título principal (usa `ModalCoachmark.Title` + clases de color según `type`).
- `ModalTiers.Description`: Contenedor principal con timeline.
- `Timeline`: Lista de eventos.
- `TimelineItem`: Ítems del timeline.
  - `TimelineItem.Title` / `ItemTitle`: contiene `Image` + `Message`.
  - `TimelineItem.Detail` / `Detail`: tarjetas de detalle (usa `Card`).
    - `Detail.Row` (DetailRow): filas de resumen.
    - `Detail.Breakdown` (Breakdown): lista de conceptos/valores.
      - `Breakdown.Cell` (Cell): fila simple (concepto/valor).
- `Message`: texto de evento.
- `Image`: ilustración (por default URLs estáticas de loyalty).

## Props Clave
- `show`: muestra/oculta.
- `toggleModal`: callback de cierre.
- `type`: 'traveler' | 'global' | 'explorer' (define esquema de color/ilustraciones).
- `children`: permite inyectar Title/Description personalizados.
- `className`: clases extra.

## Ejemplo Simple
```html
<div class="eva-3-modal--tiers -show-modal">
  <!-- Title -->
  <div class="modal-coachmark-title">Pasaporte Viajero</div>
  <!-- Description con Timeline -->
  <ul class="modal-tiers-timeline">
    <li class="modal-tiers-timeline-item">
      <div class="modal-tiers-timeline-title">
        <img src=".../ly-modal-passport.svg" alt="" />
        <p>Compró un alojamiento por USD 1.000</p>
      </div>
      <div class="modal-tiers-timeline-detail">
        <!-- Breakdown -->
      </div>
    </li>
  </ul>
</div>
```

## Uso Sugerido (semántico)
- `Title`: texto principal + subtítulo + descripción de programa.
- `Description`: contiene un `Timeline` con `TimelineItem`s.
- Cada `TimelineItem` puede tener `ItemTitle` (Image + Message) y `Detail` (tarjeta con Breakdown/Rows).
- `Breakdown`: lista de conceptos/valores (Cell).
- `DetailRow`: filas adicionales (totales, multiplicadores, puntos, etc.).

## Cuándo Usar
- Onboarding de programa de fidelidad / niveles.
- Explicar cómo se calculan puntos/beneficios.
- Mostrar timeline de eventos de Loyalty.

## Mejores Prácticas
- Mantener la narrativa en pocas etapas (timeline resumido).
- Usar imágenes provistas para coherencia visual de loyalty.
- Resaltar totales y multiplicadores con estilos de fondo indicados en ejemplo.
- Aunque marcado como "toBeDeprecated", usar solo si no hay reemplazo directo.

## Dependencias
- `modal-coachmark`
- `heading`
- `separator`
- `card`
- `redemption-switch`
- `colours-variables-loyalty`
- `positioning`
- `loyalty-tier`

## Iconos
- No usa íconos propios; se apoya en ilustraciones/sprites de loyalty.

## Sprites
- `ly-background-dashline.svg`
- `ly_modal_explorador.svg`
- `ly_modal_global.svg`
- `ly_modal_viajero.svg`
