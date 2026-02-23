# Luggage

## Descripción
Molécula que muestra información de equipaje de un vuelo. Incluye tipos de equipaje con iconos, títulos y descripciones.

## Tipo de componente
- **Tipo**: Molécula
- **Categoría**: Clusters
- **Tags**: equipaje, maletas, mochila

## Estructura HTML

```html
<div class="eva-3-luggage">
  <ul class="luggage-list">
    <li class="luggage-item -included">
      <i class="eva-3-icon -backpack luggage-item-icon"></i>
      <div class="luggage-item-content">
        <div class="luggage-item-title">Incluye una mochila o cartera</div>
        <div class="luggage-item-description">
          <p>Medidas máximas: 45 x 35 x 20 cm.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
```

## Variantes

### Básico (sin bordes)
```html
<div class="eva-3-luggage">
  <ul class="luggage-list">
    <li class="luggage-item -included">...</li>
    <li class="luggage-item">...</li>
  </ul>
</div>
```

### Con bordes
```html
<div class="eva-3-luggage -border">
  <ul class="luggage-list">
    <li class="luggage-item -included">...</li>
  </ul>
</div>
```

### Con título
```html
<div class="eva-3-luggage">
  <div class="luggage-title">Equipaje</div>
  <ul class="luggage-list">...</ul>
</div>
```

### Layout en columnas
```html
<div class="eva-3-luggage -column-layout">
  <div class="luggage-title">Equipaje</div>
  <ul class="luggage-list">...</ul>
</div>
```

## Tipos de equipaje

### Backpack (Mochila/Cartera)
```html
<li class="luggage-item -included">
  <i class="eva-3-icon -backpack luggage-item-icon"></i>
  <div class="luggage-item-content">
    <div class="luggage-item-title">Incluye una mochila o cartera</div>
    <div class="luggage-item-description">
      <p>Debe caber bajo el asiento delantero.</p>
    </div>
  </div>
</li>
```

### Carryon (Equipaje de mano)
```html
<li class="luggage-item -included">
  <i class="eva-3-icon -handbag luggage-item-icon"></i>
  <div class="luggage-item-content">
    <div class="luggage-item-title">Incluye equipaje de mano</div>
    <div class="luggage-item-description">
      <p>1 valija de hasta 8 kilos.</p>
      <p>Medidas máximas: 55 x 35 x 25 cm.</p>
    </div>
  </div>
</li>
```

### Baggage (Equipaje despachado)
```html
<li class="luggage-item">
  <i class="eva-3-icon -suitecase luggage-item-icon"></i>
  <div class="luggage-item-content">
    <div class="luggage-item-title">No incluye equipaje para despachar</div>
    <div class="luggage-item-description">
      <p>Podrás comprar valijas por un precio exclusivo online.</p>
    </div>
  </div>
</li>
```

## Estados

### Incluido
Agrega la clase `-included` para indicar que el equipaje está incluido (estilo success):
```html
<li class="luggage-item -included">...</li>
```

### No incluido
Sin la clase `-included`:
```html
<li class="luggage-item">...</li>
```

## Estilos CSS

### Clases principales
- `.eva-3-luggage`: Contenedor principal
- `.-border`: Agrega bordes entre items
- `.-column-layout`: Layout en dos columnas

### Clases de items
- `.luggage-item`: Item de equipaje
- `.-included`: Estado incluido (verde)
- `.luggage-item-icon`: Icono del tipo de equipaje
- `.luggage-item-title`: Título del item
- `.luggage-item-description`: Descripción del item

### Variables CSS
```css
.luggage-title {
  color: var(--color-neutral-600);
  margin-bottom: var(--spacing-3);
}

.luggage-item-icon {
  color: var(--color-neutral-300);
}

.luggage-item.-included .luggage-item-icon,
.luggage-item.-included .luggage-item-title {
  color: var(--color-success-500);
}
```

## Accesibilidad
- Usar listas semánticas (`<ul>`, `<li>`)
- Iconos con clases descriptivas
- Textos claros y concisos

## Dependencias

### Componentes
- Heading
- Text

### Iconos
- backpack
- handbag
- suitecase
- single

## Uso en Tooltip

```html
<div class="eva-3-tooltip">
  <div class="eva-3-luggage -border">
    <ul class="luggage-list">...</ul>
  </div>
</div>
```

## Notas adicionales
- Los items de equipaje tienen padding top/bottom para espaciado
- Con `-border`, se agrega una línea divisoria entre items (excepto el primero)
- En `-column-layout`, el título va en una columna y el listado en otra
