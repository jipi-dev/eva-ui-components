# Checkbox

## Descripción

Casilla de selección binaria con soporte para estado inválido, deshabilitado, variante clara (`-lighten`) y estado parcial/indeterminado. Integra opcionalmente un `label-form` de EVA.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<span class="eva-3-checkbox [-lg|-md] [-invalid] [-lighten] [-no-border] [clases-adicionales]">
  <label class="checkbox-label [eva-3-label-form]" for="checkbox-id">
    <input
      id="checkbox-id"
      class="checkbox-tag"
      type="checkbox"
      disabled
      aria-checked="false"  <!-- true / mixed -->
    />
    <i class="checkbox-check"></i>
    Texto del label
  </label>
</span>
```

- Clase base: `eva-3-checkbox`.
- Modificadores: `-md` (default), `-lg`, `-invalid`, `-lighten`, `-no-border` (skin sin borde).
- `checkbox-tag` es el `<input type="checkbox">` oculto visualmente (opacity 0) pero accesible.
- `checkbox-check` pinta el contenedor del ícono de marca.
- Para usar `label-form`, agrega `eva-3-label-form` al `label`.

## Tamaños

- Default: `-md` (si no se especifica `size`).
- Opción: `-lg`.

```html
<span class="eva-3-checkbox -md">
  <label class="checkbox-label" for="cb-md">
    <input id="cb-md" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Mediano (default)
  </label>
</span>

<span class="eva-3-checkbox -lg">
  <label class="checkbox-label" for="cb-lg">
    <input id="cb-lg" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Grande
  </label>
</span>
```

## Estados

- **Default**: sin modificadores.
- **Disabled**: atributo `disabled` en el `input`.
- **Invalid**: clase `-invalid` en el contenedor.
- **Lighten**: clase `-lighten` para fondos brand primary (borde y foco claros).
- **Parcial / Indeterminado**: aplicar propiedad `indeterminate=true` al `input` vía JS y usar ícono "minus".

```html
<!-- Disabled -->
<span class="eva-3-checkbox">
  <label class="checkbox-label" for="cb-disabled">
    <input id="cb-disabled" class="checkbox-tag" type="checkbox" disabled />
    <i class="checkbox-check"></i>
    Deshabilitado
  </label>
</span>

<!-- Invalid -->
<span class="eva-3-checkbox -invalid">
  <label class="checkbox-label" for="cb-invalid">
    <input id="cb-invalid" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Inválido
  </label>
</span>

<!-- Lighten -->
<span class="eva-3-checkbox -lighten">
  <label class="checkbox-label" for="cb-lighten">
    <input id="cb-lighten" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Lighten
  </label>
</span>

<!-- Parcial / indeterminate -->
<span class="eva-3-checkbox">
  <label class="checkbox-label" for="cb-partial">
    <input id="cb-partial" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Parcial
  </label>
</span>
<script>
  const cb = document.getElementById('cb-partial');
  cb.indeterminate = true; // estado parcial
</script>
```

## Uso con Label Form

Para integrar un `label-form` de EVA, agrega la clase `eva-3-label-form` al `label` y mantén el atributo `for` apuntando al `id` del input.

```html
<span class="eva-3-checkbox">
  <label class="checkbox-label eva-3-label-form" for="cb-label-form">
    <input id="cb-label-form" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Checkbox con label form
  </label>
</span>
```

## Notas de estilo (SCSS)

- `checkbox-check`: borde `1px` neutral, fondo blanco; ícono cambia a brand primary en `:checked`.
- `:focus-visible` aplica mixin `eva-focus` en el contenedor del check.
- `-lighten`: bordes transparentes y foco claro; en `checked` usa fondo blanco e ícono brand.
- `-invalid`: borde/error color; en `-lighten.-invalid` mantiene fondo blanco.
- `-no-border`: elimina borde del `checkbox-check`.
- `-md`: reduce tamaño del check a `16px` y tipografía a `10px`.

## Accesibilidad

- Usa `id` en el `input` y `for` en el `label` (asociación clic/lectores de pantalla).
- `tabindex` lo gestiona el propio `input`; `:focus-visible` muestra outline accesible.
- Para estado parcial, establece `input.indeterminate = true` y `aria-checked="mixed"`.

## Dependencias

- Clase base: `eva-3-checkbox`.
- Íconos: `checkmark` (estado check) y `minus` (parcial/indeterminate).
- Utilidades/mixins: `eva-focus` (outline), variables de color de brand/neutral.

## Ejemplo rápido

```html
<span class="eva-3-checkbox -lg -lighten">
  <label class="checkbox-label" for="cb-ejemplo">
    <input id="cb-ejemplo" class="checkbox-tag" type="checkbox" />
    <i class="checkbox-check"></i>
    Acepto términos
  </label>
</span>
```
