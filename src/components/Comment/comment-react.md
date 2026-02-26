# Comment (React)

## Descripción

Molécula para presentar comentarios de usuarios con calificación (Rating), nacionalidad (Flags), textos positivo/negativo expandibles ("Ver más/menos") y botón de traducción opcional. Soporta estado de carga con overlay y loader.

**Import típico:**
```jsx
import { Comment } from "@despegar/eva-react-components";
```

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | `string` | `''` | Clases adicionales para el contenedor `eva-3-comment`. |
| `country` | `string` | `'ar'` | Código de país para el componente `Flags` (ej. `'ar'`, `'la'`, `'br'`). |
| `name` | `string` | `'Nombre del Usuario'` | Nombre del usuario que comenta. |
| `travelCategory` | `string` | `'Viajo en Familia'` | Categoría del viaje (ej. "Viajo con amigos", "Viajo solo"). |
| `date` | `string` | `'Febrero 2020'` | Fecha del comentario. |
| `ratingPoints` | `string \| number` | `'9,3'` | Puntaje numérico a mostrar en el `Rating`. |
| `ratingScore` | `'good' \| 'regular' \| 'bad'` | `'good'` | Score semántico para el `Rating` (color/estilo). |
| `commentGood` | `string` | `'Lorem ipsum...'` | Texto del comentario positivo. |
| `commentBad` | `string` | `'Nada'` | Texto del comentario negativo. |
| `translateBtn` | `bool` | `false` | Muestra el botón "Traducir Comentario". |
| `onClickTranslate` | `func` | `() => {}` | Handler al hacer clic en el botón de traducir. |
| `loading` | `bool` | `false` | Activa overlay con loader sobre los comentarios. |

## Estado interno (React)

- `viewMoreGood`: boolean, controla expansión del comentario positivo.
- `viewMoreBad`: boolean, controla expansión del comentario negativo.

## Estructura renderizada

```jsx
<div className={`eva-3-comment ${className} ${classes}`}>
  <div className="comment-header">
    <div className="comment-flag-container">
      <Flags className="comment-flag" country={country || ''} />
    </div>
    <div className="comment-header-text">
      <span className="comment-name">{name}</span>
      <span className="comment-info">
        <span className="comment-filter">{travelCategory}</span>
        <span className="comment-date">{` - ${date}`}</span>
      </span>
    </div>
    <div className="comment-rating">
      <span className="comment-rating-number">
        <Rating score={ratingScore} size="md">{ratingPoints}</Rating>
      </span>
      <span className="comment-rating-text">Huésped verificado por Despegar.com</span>
    </div>
  </div>
  <div className="comment-items">
    <div className={`comment-item -pos ${viewMoreGood ? '-read-more' : ''}`}>
      <Icon icon="checkmark" className="comment-icon" />
      <div className="comment-text-container">
        <div className="comment-text-subcontainer">
          <p className="comment-text">
            {commentGood}
            <span role="presentation" className="comment-text-less" onClick={() => setViewMoreGood(false)}>Ver menos</span>
          </p>
        </div>
        <span className="comment-text-more-dots">
          ...
          <span role="presentation" className="comment-text-more" onClick={() => setViewMoreGood(true)}>Ver mas</span>
        </span>
      </div>
    </div>
    <div className={`comment-item -neg ${viewMoreBad ? '-read-more' : ''}`}>
      <Icon icon="cross" className="comment-icon" />
      <div className="comment-text-container">
        <div className="comment-text-subcontainer">
          <p className="comment-text">
            {commentBad}
            <span role="presentation" className="comment-text-less" onClick={() => setViewMoreBad(false)}>Ver menos</span>
          </p>
        </div>
        <span className="comment-text-more-dots">
          ...
          <span role="presentation" className="comment-text-more" onClick={() => setViewMoreBad(true)}>Ver más</span>
        </span>
      </div>
    </div>
    <div className={`comment-items-overlay -eva-3-bc-light`}>
      <Loader size="" className="comment-items-loader" stop={!loading} />
    </div>
  </div>
  {translateBtn && (
    <div className="comment-btn">
      <ButtonGhost variant="darken" size="md" onClick={onClickTranslate}>
        Traducir Comentario
      </ButtonGhost>
    </div>
  )}
</div>
```

- `classes` agrega `-loading` cuando `loading=true`.
- `viewMoreGood` / `viewMoreBad` controlan clase `-read-more` en cada `comment-item`.
- Overlay con `Loader` visible solo cuando `loading=true`.

## Ejemplos

### Básico
```jsx
<Comment
  country="ar"
  name="Roberto Souviron"
  travelCategory="Viajo con amigos"
  date="29/09/2020"
  ratingPoints="9.8"
  ratingScore="good"
  commentGood="Excelente ubicación y servicio."
  commentBad="Nada"
/>
```

### Con comentario largo (expansión automática)
```jsx
<Comment
  country="la"
  name="Roberto Souviron"
  travelCategory="Viajo con amigos"
  date="29/09/2020"
  ratingPoints="9.8"
  ratingScore="good"
  commentGood="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt..."
  commentBad="Nada"
/>
```

### Con botón de traducción
```jsx
<Comment
  country="br"
  name="Roberto Souviron"
  travelCategory="Viajo con amigos"
  date="29/09/2020"
  ratingPoints="9.8"
  ratingScore="good"
  commentGood="Ótima localização."
  commentBad="Nada"
  translateBtn
  onClickTranslate={() => console.log('Traducir')}
/>
```

### En estado de carga
```jsx
<Comment
  country="ar"
  name="Roberto Souviron"
  travelCategory="Viajo con amigos"
  date="29/09/2020"
  ratingPoints="9.8"
  ratingScore="good"
  commentGood="Cargando traducción..."
  commentBad="Nada"
  loading
  translateBtn
/>
```

## Accesibilidad

- `comment-text-more` / `comment-text-less` usan `role="presentation"` y `onClick`; idealmente deberían ser botones `<button>` para navegación por teclado y lectores de pantalla (mejora futura).
- `Rating` interno usa prop `score` semántico (`good`, `regular`, `bad`) con colores/estilos accesibles.
- `Flags` usa código `country` para renderizar bandera correspondiente.
- Overlay de carga usa `Loader` con prop `stop` para controlar animación.

## Dependencias

- Componentes: `Rating`, `Loader`, `ButtonGhost`, `Flags`, `Icon`.
- HOC/utilidades: `withUtilities`, `classResolver`, `PREFIX`.
- Íconos: `checkmark` (positivo), `cross` (negativo), `error` (metadata).
- Clase base: `eva-3-comment`.
- Categoría: `reviews` (type: molecules).
