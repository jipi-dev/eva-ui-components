# Mealplans - Componente React

## Importación
```jsx
import Mealplans from '@eva/components/Mealplans';
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `illustration` | `string` | `'all-inclusive'` | **Requerido**. Tipo de plan de comida |
| `children` | `string` | `'label text'` | **Requerido**. Texto del label |
| `localResourcesPath` | `string` | `'/ui/dist/resources/sprites'` | **Requerido**. Ruta a sprites |
| `className` | `string` | `''` | Clases adicionales |

### Valores permitidos para `illustration`:
- `'all-inclusive'`
- `'breakfast'`
- `'american-breakfast'`
- `'continental-breakfast'`
- `'buffet-breakfast'`
- `'full-board'`
- `'half-board'`
- `'magic'`

## Uso básico

```jsx
<Mealplans illustration=\"all-inclusive\">
  All inclusive
</Mealplans>
```

## Variantes

### All Inclusive
```jsx
<Mealplans illustration=\"all-inclusive\">All inclusive</Mealplans>
```

### Breakfast
```jsx
<Mealplans illustration=\"breakfast\">Breakfast</Mealplans>
```

### American Breakfast
```jsx
<Mealplans illustration=\"american-breakfast\">American breakfast</Mealplans>
```

### Continental Breakfast
```jsx
<Mealplans illustration=\"continental-breakfast\">Continental breakfast</Mealplans>
```

### Buffet Breakfast
```jsx
<Mealplans illustration=\"buffet-breakfast\">Buffet breakfast</Mealplans>
```

### Full Board
```jsx
<Mealplans illustration=\"full-board\">Full board</Mealplans>
```

### Half Board
```jsx
<Mealplans illustration=\"half-board\">Half board</Mealplans>
```

### Magic
```jsx
<Mealplans illustration=\"magic\">Magic plan</Mealplans>
```

## Ruta personalizada

```jsx
<Mealplans 
  illustration=\"all-inclusive\"
  localResourcesPath=\"/custom/sprites\"
>
  All inclusive
</Mealplans>
```

## Ejemplo con lista

```jsx
const mealPlans = [
  { id: 'ai', type: 'all-inclusive', label: 'All inclusive' },
  { id: 'fb', type: 'full-board', label: 'Full board' },
  { id: 'hb', type: 'half-board', label: 'Half board' },
];

<div className=\"meal-plans-list\">
  {mealPlans.map(plan => (
    <Mealplans key={plan.id} illustration={plan.type}>
      {plan.label}
    </Mealplans>
  ))}
</div>
```

## PropTypes

```jsx
Mealplans.propTypes = {
  children: PropTypes.string.isRequired,
  illustration: PropTypes.oneOf([
    'all-inclusive',
    'breakfast',
    'american-breakfast',
    'continental-breakfast',
    'buffet-breakfast',
    'full-board',
    'half-board',
    'magic'
  ]).isRequired,
  className: PropTypes.string,
  localResourcesPath: PropTypes.string.isRequired,
};
```

## Implementación interna

```jsx
const Mealplans = ({
  children = 'label text',
  illustration = 'all-inclusive',
  localResourcesPath = '/ui/dist/resources/sprites',
  className = '',
}) => {
  return (
    <div className={`eva-3-mealplans ${className}`}>
      <img 
        className=\"mealplans-img\" 
        src={`${localResourcesPath}/ic-${illustration}.svg`}
        alt={children}
      />
      {children}
    </div>
  );
};
```

**Nota:** El prefijo `ic-` se agrega automáticamente.

## Accesibilidad

El atributo `alt` usa el valor de `children`:

```jsx
<Mealplans illustration=\"breakfast\">Desayuno</Mealplans>
// Renderiza: <img alt=\"Desayuno\" ... />
```

## HOC: withUtilities
Envuelto con `withUtilities`.

## Dependencias
- **Sprites**: 8 archivos SVG (ic-*.svg)

## Notas
- Tamaño default de ilustración: 32x32px
- Formato SVG (escalable)
- Incluye borde y padding por defecto
