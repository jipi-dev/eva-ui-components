# NPS Smileys

## Descripción
Molécula de calificación con cinco caritas (mad, sad, neutral, happy, very-happy) + opción "No aplica". Pensado para estandarizar calificación en PV.

**Tipo:** Molécula  
**Categoría:** Reviews  
**Tags:** net promoter score, feedback, review, calificacion, opinion, qualification, sonrisas, triste

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-nps-smileys">
  <p class="nps-label">La confianza que te brindamos</p>
  <div class="nps-scores">
    <div class="smileys-container">
      <label class="smile-score" title="Muy Satisfecho">
        <input type="radio" name="nps-score" data-value="very-happy" />
        <i class="smile-icon -smiley-very-happy"></i>
        <span class="smile-value">Muy Satisfecho</span>
      </label>
      <!-- más smileys -->
    </div>
    <label class="nps-not-apply">
      <input type="checkbox" value="no-aplica" />
      <span>No aplica</span>
    </label>
  </div>
</div>
```

## Escala por defecto
- `mad`: Nada Satisfecho
- `sad`: Poco Satisfecho
- `neutral`: Indiferente
- `happy`: Satisfecho
- `very-happy`: Muy Satisfecho

## Comportamiento
- Selección por radio (un valor a la vez) + checkbox "No aplica".
- Íconos: `smiley-{score}` con tamaño `xlg`.
- Texto debajo de cada ícono muestra la etiqueta.

## Cuándo Usar
- Calificación rápida de satisfacción (5 puntos) en lugar de escala 0-10.
- Formularios de feedback cortos.

## Mejores Prácticas
- No mezclar con NPS 0-10 en el mismo formulario; elegir uno u otro.
- Mantener etiquetas cortas y claras.
- Si se usa "No aplica", limpiar selección previa para evitar ambigüedad.

## Dependencias
- `checkbox`
- `label-form`
- `heading`
- `positioning`
- `text`

## Iconos
- `smiley-very-happy`, `smiley-happy`, `smiley-neutral`, `smiley-sad`, `smiley-mad`
