# Mosaic Gallery - React

## Importación
```jsx
import MosaicGallery from '@despegar/eva-ui/MosaicGallery';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `showButton` | bool | true | Muestra botón "Ver galería" |
| `buttonOnLeft` | bool | false | Variante leal/izquierda (`-loyalty`) |
| `onButtonClick` | func | () => {} | Callback al click del botón |
| `className` | string | '' | Clases extra |
| `children` | `MosaicGallery.Image[]` | 4 demo | Imágenes a renderizar |

### Subcomponente
- `MosaicGallery.Image` con props `src`, `alt`.

## Uso Básico
```jsx
<MosaicGallery>
  <MosaicGallery.Image src="/img1.jpg" alt="Principal" />
  <MosaicGallery.Image src="/img2.jpg" alt="Secundaria 1" />
  <MosaicGallery.Image src="/img3.jpg" alt="Secundaria 2" />
  <MosaicGallery.Image src="/img4.jpg" alt="Secundaria 3" />
</MosaicGallery>
```

## Botón a la izquierda (loyalty)
```jsx
<MosaicGallery
  buttonOnLeft
  onButtonClick={() => openLightbox()}
>
  {images.map((src, i) => (
    <MosaicGallery.Image key={i} src={src} alt={`Foto ${i+1}`} />
  ))}
</MosaicGallery>
```

## Sin botón
```jsx
<MosaicGallery showButton={false}>
  {/* imágenes */}
</MosaicGallery>
```

## Notas
- Máximo 4 imágenes (el layout asigna spans según índice). Si se pasa Fragment, se leen sus children.
- Usa Grid interno sin gutter; no requiere NavDots.
- El botón dispara `onButtonClick`; sin esa prop no hace nada.
