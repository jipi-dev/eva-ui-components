# Tag

## Descripción
Etiqueta clicable para resaltar palabras clave o seleccionar filtros. Soporta ícono, estado activo y variante select con caret.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<span class="eva-3-tag -icon -active">
  <span class="tag-text">Vuelo</span>
  <i class="tag-icon-product eva-3-icon-flights-ui"></i>
  <i class="tag-icon eva-3-icon-cross"></i>
</span>
```

## Variantes
- `-icon`: cuando contiene ícono inicial.
- `-active`: estilo seleccionado.
- `-lighten`: para fondos oscuros.
- `-select`: agrega caret de despliegue.

## Cuándo usar
- Mostrar categorías/labels seleccionables.
- Chips de filtros con cierre.

## Mejores prácticas
- El icono de cierre debe disparar la misma acción de onClick (remover/seleccionar).
- Para selects, asegurá foco y activación por teclado.

## Dependencias
- Íconos: `cross`, `chevron-down`, y los de contenido (ej. `flights-ui`).