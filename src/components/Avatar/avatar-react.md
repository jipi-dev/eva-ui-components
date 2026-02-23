# Avatar (React)

## Descripción

Componente React para mostrar avatar como imagen, inicial o ícono. Usa las clases EVA UI (`eva-3-avatar`) y se puede combinar con utilidades a través de `className`.

**Tipo:** Átomo  
**Categoría:** Identity / Media  
**Tags:** react, avatar, image, letter, icon, user, profile

## Cuándo Usar
- Representar usuarios/personas con foto, inicial o ícono.
- Listas, headers de sesión, tarjetas de perfil.

## Mejores Prácticas
- Siempre incluir `alt` descriptivo en imágenes para accesibilidad.
- Usa `type="letter"` como fallback cuando no hay foto.
- Mantén consistencia de tamaño (`base`/`md`) según densidad del layout.

## Dependencias
- Clases `eva-3-avatar` y modificadores (`-image`, `-letter`, `-icon`, `-md`) provistos por EVA.
- Componente `Icon` interno para `type="icon"`.

**Import típico:**
```jsx
import { Avatar } from "@despegar/eva-react-components";
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `type` | `'image' \| 'letter' \| 'icon'` | `'icon'` | Variante visual. |
| `size` | `'' \| 'md'` | `''` | Tamaño del avatar. `''` (base) o `md`. |
| `className` | `string` | `''` | Clases adicionales para el contenedor. |
| `imageSrc` | `string` | `undefined` | URL de la imagen (solo para `type="image"`). |
| `letter` | `string` | `'L'` | Texto a mostrar en `type="letter"`. |
| `icon` | `string` | `'user'` | Ícono a mostrar en `type="icon"`. |

## Estructura renderizada

```jsx
<div className={`eva-3-avatar -${type} -${size} ${className}`}>
  {type === 'image' ? (
    <img className="avatar-image" src={imageSrc} alt="Avatar Usuario" />
  ) : (
    <span className={`avatar-${type}`}>
      {type === 'icon' ? <Icon icon={icon} /> : letter}
    </span>
  )}
</div>
```

## Ejemplos

### Avatar con foto
```jsx
<Avatar type="image" imageSrc="/ui/inc/images/demo/ada-avatar.jpg" />
```

### Avatar con letra
```jsx
<Avatar type="letter" letter="J" />
```

### Avatar con ícono (preview tamaño -md)
```jsx
<Avatar type="icon" icon="edit" size="md" />
```

## Notas

- La clase base es `eva-3-avatar`; los modificadores se aplican como `-image`, `-letter`, `-icon` y el tamaño `-md`.
- Para `type="image"`, se espera `imageSrc`. Si no está presente, el `<img>` quedará sin fuente.
- Para `type="letter"`, usa `letter` como contenido.
- Para `type="icon"`, se renderiza `Icon` con el nombre provisto en `icon` (por defecto `user`).
- Dimensiones aproximadas: base 42x42px (font-size 24px), `-md` 30x30px (font-size 16px). `-icon` y `-letter` usan fondo `var(--brand-primary-3)`; el ícono se colorea con `var(--brand-primary-1)` y la letra con `var(--color-white)`.