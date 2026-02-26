# Textarea

## Descripción
Campo de texto multilínea para inputs extensos. Incluye label y mensaje opcional.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-textarea -md">
  <label class="textarea-label" for="bio">Biografía</label>
  <div class="textarea-container">
    <textarea class="textarea-tag" id="bio" rows="4" placeholder="Escribe aquí..."></textarea>
  </div>
  <span class="textarea-message">Quedan 120 caracteres</span>
</div>
```

## Variantes
- Tamaños: `-md`, `-lg`.
- `-no-border`: sin borde exterior.
- `-invalid`: estado de error.
- Estados nativos: `disabled`, `placeholder`.

## Cuándo usar
- Comentarios, descripciones, feedback con más de una línea.

## Mejores prácticas
- Define `rows` adecuados según el contexto.
- Usa `label` asociado por `for`/`id` para accesibilidad.
- Mostrar mensajes de ayuda/validación en `textarea-message`.

## Dependencias
- Requiere `label` opcional de `LabelForm` en React; sin íconos.