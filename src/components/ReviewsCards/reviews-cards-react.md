# ReviewsCards - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import ReviewsCards from '@despegar/eva-ui/ReviewsCards';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | `''` | Clases extra. |
| `avatarType` | `'image' \| 'icon' \| 'letter'` | `'image'` | Tipo de avatar. |
| `avatarImg` | string | `'https://bit.ly/33f5I7M'` | Imagen para avatar tipo image. |
| `avatarLetter` | string | `'L'` | Letra para avatar tipo letter. |
| `avatarIcon` | string | `'user'` | Ícono para avatar tipo icon. |
| `title` | string | `'Gabriela Ferreira'` | Título del review. |
| `subtitle` | string | `'Viajó en pareja - Jun 2018'` | Subtítulo. |
| `useViewMore` | bool | `false` | Activa ViewMore para texto largo. |
| `children` | string | lorem | Texto del review. |

## Uso Básico
```jsx
<ReviewsCards
  title="Luis"
  subtitle="Viajó solo - Ene 2024"
  avatarType="letter"
  avatarLetter="L"
>
  Excelente ubicación y atención.
</ReviewsCards>
```

## Con ViewMore
```jsx
<ReviewsCards useViewMore>
  Texto largo del comentario...
</ReviewsCards>
```

## Notas
- Cuando `useViewMore` es true, controla estado interno `expanded` para mostrar/ocultar el texto.
- `children` es requerido y debe ser string.