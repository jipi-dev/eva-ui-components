# Flags - React

## Descripción

Componente React para renderizar banderas de países mediante sprite. Acepta un código de país ISO y opcionalmente clases adicionales.

**Tipo:** Átomo  
**Categoría:** Identity / Utility  
**Tags:** react, flag, country, iso-3166, sprite, locale, nationality

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Cuándo Usar
- Mostrar procedencia/localización (ej. país de usuario, divisas, resultados por país).
- Acompañar texto con indicador visual de país.

## Mejores Prácticas
- Provee `aria-label` con el nombre del país para accesibilidad.
- Usa códigos ISO 3166-1 alpha-2 en minúsculas.
- Evita tamaños extremos; respeta proporción del sprite.

## Dependencias
- Sprite de banderas EVA (`eva-3-flag`) y modificador `-[country]` generado por la librería.

## Props

| Prop        | Tipo                          | Requerido | Default | Descripción                                                                                     |
| ----------- | ----------------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------- |
| `country`   | `string` (oneOf 237 códigos)  | Sí        | -       | Código ISO 3166-1 alpha-2 del país (ej: `'ar'`, `'us'`, `'br'`). Ver listado completo abajo.  |
| `className` | `string`                      | No        | `''`    | Clases CSS adicionales                                                                          |

## Importación

```jsx
import { Flags } from '@despegar/react-eva';
```

## Estructura

```jsx
<span className="-[country] eva-3-flag [className]" />
```

## Ejemplos de uso

### Básico

```jsx
import { Flags } from '@despegar/react-eva';

function UserProfile() {
  return <Flags country="ar" />;
}
```

### Con aria-label para accesibilidad

```jsx
<Flags 
  country="br" 
  className="user-flag"
  aria-label="Brasil"
/>
```

### Múltiples banderas

```jsx
function CountryList() {
  const countries = ['ar', 'br', 'cl', 'co', 'mx', 'pe', 'uy'];
  
  return (
    <div className="country-flags">
      {countries.map(code => (
        <Flags 
          key={code} 
          country={code}
          aria-label={getCountryName(code)}
        />
      ))}
    </div>
  );
}
```

### Con wrapper y texto

```jsx
function Nationality({ countryCode, countryName }) {
  return (
    <div className="nationality">
      <Flags country={countryCode} aria-hidden="true" />
      <span>{countryName}</span>
    </div>
  );
}

// Uso
<Nationality countryCode="ar" countryName="Argentina" />
```

### Integrado en comentario de usuario

```jsx
import { Flags } from '@despegar/react-eva';
import { Comment } from '@despegar/react-eva';

function ReviewCard({ userName, userCountry, rating, text }) {
  return (
    <Comment>
      <Comment.Header>
        <Flags country={userCountry} aria-label={userCountry.toUpperCase()} />
        <span>{userName}</span>
        {/* ... rating, date, etc */}
      </Comment.Header>
      {/* ... resto del comentario */}
    </Comment>
  );
}
```

## PropTypes

```javascript
import PropTypes from 'prop-types';

const countriesArr = [
  'ab', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba',
  'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw',
  'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw',
  'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'ef', 'eg', 'eh', 'en', 'er', 'es', 'et',
  'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp',
  'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in',
  'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kh', 'ki', 'km', 'kr', 'kt', 'kw', 'ky', 'kz',
  'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh',
  'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc',
  'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nt', 'nu', 'nz', 'om', 'ot', 'pa', 'pe', 'pf', 'pg', 'ph',
  'pk', 'pl', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'rn', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc',
  'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz',
  'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'ua', 'ug', 'us',
  'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wa', 'wf', 'ws', 'xk', 'ye', 'yt', 'za', 'zm', 'zw'
];

Flags.propTypes = {
  className: PropTypes.string,
  country: PropTypes.oneOf(countriesArr).isRequired,
};
```

## Accesibilidad

- **Obligatorio**: Incluir `aria-label` o `title` con el nombre del país en el idioma del usuario:

```jsx
<Flags country="ar" aria-label="Argentina" />
<Flags country="us" title="Estados Unidos" />
```

- **Decorativo**: Si la bandera acompaña texto visible del país, usar `aria-hidden="true"`:

```jsx
<div>
  <Flags country="cl" aria-hidden="true" />
  <span>Chile</span>
</div>
```

- **Lectores de pantalla**: Sin `aria-label` o `title`, los lectores de pantalla no anunciarán información útil.

## Dependencias

- HOC: `withUtilities` para clases de utilidad.
- Sprites: `flags.png` (sprite con todas las banderas).
- Categoría: `reviews` (type: atoms).

## Códigos de país soportados (237 países)

ab, ad, ae, af, ag, ai, al, am, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, ef, eg, eh, en, er, es, et, fi, fj, fk, fm, fo, fr, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kh, ki, km, kr, kt, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nt, nu, nz, om, ot, pa, pe, pf, pg, ph, pk, pl, pn, pr, ps, pt, pw, py, qa, re, rn, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tr, tt, tv, tw, ua, ug, us, uy, uz, va, vc, ve, vg, vi, vn, vu, wa, wf, ws, xk, ye, yt, za, zm, zw.

## Notas

- El componente es puramente presentacional (stateless).
- Asegurarse de que el sprite `flags.png` esté correctamente servido desde `/ui/dist/resources/sprites/flags.png`.
- Para listados grandes de banderas, considerar virtualización o lazy loading del sprite.
