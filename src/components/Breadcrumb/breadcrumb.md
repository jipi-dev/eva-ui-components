# Breadcrumb

## Descripción

Sistema de navegación auxiliar que muestra el camino recorrido. Incluye atributos de SEO (`itemscope`, `itemtype`, `itemprop`) recomendados para buscadores.

**Tipo:** Molécula  
**Categoría:** Navigation  
**Tags:** breadcrumb, navegación, SEO, schema.org, camino

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Cuándo Usar
- Indicar al usuario su ubicación dentro de una jerarquía y permitir saltos a niveles anteriores.
- Mejorar SEO con marcadores de esquema de ruta (`BreadcrumbList`).

## Mejores Prácticas
- Marca todos los niveles con `itemprop="position"` creciente y usa `eva-3-link` solo en ítems no finales.
- Mantén la última ruta como texto plano; evita rutas demasiado profundas o con textos largos.
- Asegura contraste y legibilidad; en mobile, oculta niveles poco relevantes si el espacio es limitado.

## Dependencias
- Requiere los estilos de breadcrumb (`eva-3-breadcrumb`, `breadcrumb-container`, `breadcrumb-item`, `breadcrumb-text`).
- Ícono separador proviene del font `eva-font` vía pseudoelemento CSS.

## Estructura HTML

```html
<div class="eva-3-breadcrumb">
  <ul class="breadcrumb-container" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <a class="breadcrumb-text eva-3-link" href="/" itemprop="item">
        <span itemprop="name">Despegar.com</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <a class="breadcrumb-text eva-3-link" href="/vuelos" itemprop="item">
        <span itemprop="name">Vuelos</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <span class="breadcrumb-text" itemprop="name">Vuelos en oferta</span>
      <meta itemprop="position" content="3" />
    </li>
  </ul>
</div>
```

### Notas SEO

- `itemscope` + `itemtype="http://schema.org/BreadcrumbList"` en `<ul>`.
- Cada `<li>` usa `itemprop="itemListElement"`, `itemscope`, `itemtype="http://schema.org/ListItem"`.
- El enlace usa `itemprop="item"` y el texto `itemprop="name"`.
- Incluir `<meta itemprop="position" content="N" />` en cada `<li>`.

## Variantes

El último ítem no es enlace; los anteriores sí (con clase `eva-3-link`).

## Ejemplos

**Breadcrumb simple (3 niveles)**
```html
<div class="eva-3-breadcrumb">
  <ul class="breadcrumb-container" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <a class="breadcrumb-text eva-3-link" href="/" itemprop="item">
        <span itemprop="name">Despegar</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <a class="breadcrumb-text eva-3-link" href="/vuelos" itemprop="item">
        <span itemprop="name">Vuelos</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li class="breadcrumb-item" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
      <span class="breadcrumb-text" itemprop="name">Miami</span>
      <meta itemprop="position" content="3" />
    </li>
  </ul>
</div>
```

**Notas de estilo (referencia)**
- Clase base: `eva-3-breadcrumb`.
- Contenedor de lista: `breadcrumb-container`.
- Ítems: `breadcrumb-item`.
- Texto/enlace: `breadcrumb-text` (usa `eva-3-link` cuando es enlace).
- Separadores visuales: pseudoelemento `:before` en cada `breadcrumb-item` (excepto el primero) con ícono fuente `eva-font` (chevron), margen-right 8px; color de ítems con enlace `var(--brand-primary-3)`. El último ítem usa color `var(--color-neutral-800)`.
- Espaciado/typo del contenedor: padding vertical 8px, font-size 14px, line-height 20px.