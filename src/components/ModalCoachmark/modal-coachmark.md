# Modal Coachmark

## Descripción
Versión de modal enfocada en onboarding/presentación de nuevas funcionalidades. Usa tamaño small por defecto, sin título propio y con pasos navegables.

**Tipo:** Molécula  
**Categoría:** Modals  
**Status:** new  
**Tags:** popup, emergente, ventana, window, overlay

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura Base
```html
<div class="eva-3-modal--coachmark -sm -show-modal">
  <ul class="modal-coachmark-steps-container">
    <li class="modal-coachmark-step-content -active">
      <div class="modal-coachmark-img-container">
        <img src="imagen.svg" alt="Ilustración" />
      </div>
      <div class="modal-coachmark-title"><h4>Paso 1</h4></div>
      <div class="modal-coachmark-description"><p>Descripción</p></div>
    </li>
    <!-- más pasos -->
  </ul>

  <div class="modal-coachmark-nav-dots">
    <!-- NavDots indicadores de paso -->
  </div>

  <div class="modal-coachmark-actions">
    <div class="modal-coachmark-actions-container">
      <button>Anterior</button>
      <button>Siguiente</button>
    </div>
  </div>
</div>
```

## Variantes y Estados
- `-sm` (default) o `-lg` para tamaño grande.
- `-info` aplica fondo de color (cuando `color` es true y `noColor` es false).
- Con pasos (`steps=true`): renderiza lista de pasos y botones anterior/siguiente.
- Con nav dots (`withNavDots`): muestra indicadores de progreso, dentro o fuera según tamaño.

## Subcomponentes (markup sugerido)
- **Step** (`modal-coachmark-step-content`): bloque de un paso, recibe `-active`.
- **ImgContainer**: imagen ilustrativa.
- **Title**: título del paso (usa `Heading` h3/h4).
- **Description**: texto descriptivo (puede incluir headings/body).
- **NavDots**: indicadores de paso (`eva-3-nav-dots`).
- **Actions**: contenedor de botones (Anterior/Siguiente/Finalizar).

## Props Clave (comportamiento esperado)
- `show`: muestra/oculta el modal (añade `-show-modal`).
- `toggleModal`: callback de cierre.
- `size`: 'sm' | 'lg'.
- `color`: habilita fondo coloreado; `noColor` lo desactiva.
- `steps`: modo pasos (agrega botones prev/next y nav dots opcional).
- `withNavDots`: muestra nav dots (en sm dentro del bloque central; en lg junto a acciones).
- `step`: índice inicial activo.
- `prevStepText` / `nextStepText` / `finishStepText`: textos de botones.
- `onEndModal`: callback al finalizar (último paso).
- `closeOnClickOutside`: permite cierre por overlay.
- `tiers`: ajusta colores para loyalty tiers.
- `children`: pasos (Step/ImgContainer/Title/Description).

## Flujo de Pasos (recomendado)
1. Definir array de pasos como `children`.
2. Controlar estado de paso activo (prop `step` inicial, interno maneja `tab`).
3. Botones: "Anterior" disponible desde paso > 0. "Siguiente" avanza; en último paso muestra `finishStepText` y ejecuta `onEndModal` + `toggleModal`.
4. NavDots reflejan el paso activo.

## Cuándo Usar
- Onboarding de nuevas features.
- Tutoriales guiados cortos (3-5 pasos recomendados).
- Destacar cambios en UI con contexto visual (imagen + texto).

## Mejores Prácticas
- Mantener los pasos breves y visuales.
- Usar imágenes/ilustraciones claras.
- Proveer botón de finalización claro ("Entendido").
- Permitir cierre en cualquier momento (ESC/overlay si corresponde).
- Si hay color de fondo, cuidar contraste de textos e íconos.

## Accesibilidad
- Mantener focus en botones de navegación.
- Proveer `aria-label` en botones de cierre heredados del modal base.
- Evitar textos solo en imágenes; incluir `alt` descriptivo.

## Dependencias
- `modal` (base)
- `heading`
- `button` / `button-base`
- `nav-dots`

## Iconos
- Usa los íconos de cierre del modal base (cross/close) según plataforma.
