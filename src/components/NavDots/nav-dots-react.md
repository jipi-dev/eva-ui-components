# Nav Dots - React

## Importación
```jsx
import NavDots from '@despegar/eva-ui/NavDots';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | '' \| 'lighten' | '' | Variante de color |
| `position` | '' \| 'left' \| 'center' \| 'right' | '' | Alineación |
| `size` | '' \| 'sm' \| 'lg' | '' | Tamaño (requerido en PropTypes) |
| `carousel` | bool | false | Asigna clases según distancia al activo |
| `className` | string | '' | Clases extra |
| `children` | `NavDots.Dot[]` | demo | Dots a renderizar |

### Subcomponente Dot
Props: `className`, `active`, `onClick`.

## Uso Básico
```jsx
<NavDots size="sm" position="center">
  <NavDots.Dot active />
  <NavDots.Dot />
  <NavDots.Dot />
</NavDots>
```

## Modo Carousel (clases de proximidad)
```jsx
<NavDots size="sm" carousel>
  <NavDots.Dot active />
  <NavDots.Dot />
  <NavDots.Dot />
  <NavDots.Dot />
</NavDots>
```
Las clases aplicadas por distancia al activo: `-active`, `-nearest`, `-near`, `-far`.

## Con Handler de Click
```jsx
const [index, setIndex] = useState(0);

<NavDots size="lg" position="right">
  {[0,1,2].map(i => (
    <NavDots.Dot
      key={i}
      active={i === index}
      onClick={() => setIndex(i)}
    />
  ))}
</NavDots>
```

## Notas
- El componente clona los children para asignar `key` y clases; pasar `active` en el Dot que corresponda.
- En modo `carousel`, solo un dot debe tener `active` para que el cálculo de proximidad funcione.
