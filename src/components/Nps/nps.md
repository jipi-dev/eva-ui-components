# NPS

## Descripción
Módulo para capturar Net Promoter Score (0-10) con labels, slider y tooltip para cada valor.

**Tipo:** Molécula  
**Categoría:** Reviews  
**Tags:** net promoter score, feedback, review, calificacion, opinion, qualification

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-nps -selected-7">
  <div class="nps-title">¿Qué tan probable...?</div>
  <p class="nps-status">7: Probable</p>
  <div class="nps-container">
    <ul class="nps-options">
      <span class="nps-option -eva-3-hide-large -eva-3-hide-medium">N/A</span>
      <li class="nps-option" data-value="0">Nada Probable</li>
      ...
      <li class="nps-option -active" data-value="7">Probable</li>
    </ul>
    <div class="nps-input-container">
      <input type="range" min="-1" max="10" class="nps-input" />
      <span class="nps-input-help-caption -eva-3-fl">Poco probable</span>
      <span class="nps-input-help-caption -eva-3-fr">Muy probable</span>
    </div>
  </div>
</div>
```

## Comportamiento
- Muestra título (heading h5).
- Estado seleccionado refleja en clase `-selected-{score}` y texto de estado.
- Lista de opciones 0-10 con tooltip (en React).
- Slider range -1 a 10 (incluye N/A via -1 o click en N/A en mobile).

## Cuándo Usar
- Formularios de satisfacción/NPS clásicos (0-10).
- Landing o secciones de feedback post-acción.

## Mejores Prácticas
- Colocar cerca del contexto evaluado.
- Proveer texto claro en `title`.
- Sincronizar valor entre slider y opciones.
- Usar `setScore` para persistir y enviar métricas.

## Dependencias
- `tooltip`
- `heading`
- `hide-content` (para ocultar N/A en desktop)

## Iconos
- No usa iconos.
