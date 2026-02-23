# Button Social

## Descripción

Botón para acciones sociales (login/share) con variantes por marca (Google, Facebook, Twitter/X). Usa clases `eva-3-btn` con modificadores.

**Tipo:** Átomo  
**Categoría:** Actions / Buttons  
**Tags:** social, oauth, login, share, google, facebook, twitter, x, loading, disabled

## Cuándo Usar
- Autenticación con redes (OAuth/login) o acciones de compartir.
- Cuando se necesite branding específico por proveedor.

## Mejores Prácticas
- Mantén copy claro (“Ingresá con Google”).
- Respeta colores oficiales por marca y contraste adecuado.
- Deshabilita (`-disable` + `disabled`) mientras esperas respuesta del proveedor.

## Dependencias
- Clase base `eva-3-btn`; modificadores de marca `-google`, `-facebook`, `-twitter`/`-x`, tamaños `-md|-lg`, estados `-disable|-loading`.
- Íconos sociales EVA (`social-facebook`, `social-google`, `social-twitter`/`social-x`).

## Estructura HTML

```html
<button class="eva-3-btn -lg -google">
  <i class="eva-3-icon-social-google btn-icon"></i>
  <em class="btn-text">Ingresa con Google</em>
</button>
```

- `-lg` o `-md` para tamaño.
- `-google`, `-facebook`, `-twitter`/`-x` para variante.
- `-disable` para deshabilitado (también usar atributo `disabled`).
- `-loading` para estado de carga (oculta texto y muestra `btn-status`).

## Variantes (marca)

```html
<button class="eva-3-btn -lg -facebook">
  <i class="eva-3-icon-social-facebook btn-icon"></i>
  <em class="btn-text">Ingresa con Facebook</em>
</button>

<button class="eva-3-btn -lg -twitter">
  <i class="eva-3-icon-social-twitter btn-icon"></i>
  <em class="btn-text">Ingresa con Twitter</em>
</button>

<button class="eva-3-btn -lg -google">
  <i class="eva-3-icon-social-google btn-icon"></i>
  <em class="btn-text">Ingresa con Google</em>
</button>
```

> Íconos: `eva-3-icon-social-facebook`, `...-google`, `...-twitter`.

## Tamaños

- `-lg` (grande)
- `-md` (mediano)

```html
<button class="eva-3-btn -lg -google">
  <em class="btn-text">Botón Large</em>
</button>

<button class="eva-3-btn -md -google">
  <em class="btn-text">Botón Medium</em>
</button>
```

## Estados

- **Loading**: `-loading` (texto oculto, `btn-status` visible si se incluye).
- **Disabled**: `-disable` + `disabled`.

```html
<button class="eva-3-btn -lg -google -loading" disabled>
  <span class="btn-status">Cargando</span>
</button>

<button class="eva-3-btn -lg -google -disable" disabled>
  <em class="btn-text">Botón Medium</em>
</button>
```

## Notas de estilo (referencia SCSS)

- Base social (`-facebook`, `-gmail/-google`, `-twitter/-x`):
  - Borde 1px `var(--color-neutral-800)`, fondo transparente, texto `var(--color-neutral-800)`.
  - Hover/active: fondo `var(--color-neutral-100)`.
  - Loading/disable: borde `var(--color-neutral-400)`, ícono/texto `var(--color-neutral-400)`.
- Íconos por marca:
  - Facebook: `#337FFF`.
  - Google: `#E94335`.
  - Twitter/X: `var(--color-neutral-800)`.

## Accesibilidad

- Usa `aria-disabled` cuando corresponda, y `aria-label`/`title` si el texto no es suficientemente descriptivo.
- Mantén contraste adecuado para variantes disabled/loading.

## Dependencias

- Clase base: `eva-3-btn` (mismas reglas del botón común de EVA UI).
- Íconos sociales: `social-facebook`, `social-google`, `social-twitter`/`social-x`.
- Categoría: buttons (type: atoms).