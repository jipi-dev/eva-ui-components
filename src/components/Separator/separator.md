# Separator

## Descripción
Línea divisoria para separar bloques de contenido en listas, formularios o layout. No aporta jerarquía visual fuerte y debe usarse para separar secciones relacionadas.

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML
```html
<div class="eva-3-separator"></div>
```

## Características
- Separador horizontal a lo ancho de su contenedor.
- Se puede combinar con clases utilitarias de espaciado (`-eva-3-mt-*`, `-eva-3-mb-*`).
- Admite clases extra para modificar color o grosor mediante utilidades de borders.

## Cuándo usar
- Para dividir filas de información o tarjetas en listados.
- Entre secciones de formularios extensos.

## Mejores prácticas
- Evitá usar múltiples separadores consecutivos; preferí espaciado vertical.
- Usalo a 100% de ancho dentro de contenedores fluidos.

## Dependencias
- Sin dependencias de íconos. Usa variables de color del tema EVA.

## Iconos
- No aplica.