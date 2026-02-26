# Flags

## Descripción

Banderas de todos los países representadas mediante sprite. Cada bandera se implementa con un `<span>` que utiliza la clase base `eva-3-flag` más un modificador de código de país (ISO 3166-1 alpha-2).

## Instalación CSS

> Para que los estilos del componente se rendericen correctamente, el proyecto debe incluir los CSS de EVA UI. Agregá estas dos hojas de estilo en el `<head>` del HTML:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen instalando el paquete `@despegar/eva-ui` (o desde la CDN interna del Design System).

## Estructura HTML

```html
<span class="eva-3-flag -[codigo-pais]"></span>
```

- Clase base: `eva-3-flag`.
- Modificador: `-[codigo-pais]` (código ISO de dos letras, por ejemplo `-ar` para Argentina, `-us` para Estados Unidos).

## Variantes (Países disponibles)

El componente soporta 237 códigos de país. Algunos ejemplos comunes:

### América

```html
<!-- Argentina -->
<span class="eva-3-flag -ar"></span>

<!-- Brasil -->
<span class="eva-3-flag -br"></span>

<!-- Chile -->
<span class="eva-3-flag -cl"></span>

<!-- Colombia -->
<span class="eva-3-flag -co"></span>

<!-- Estados Unidos -->
<span class="eva-3-flag -us"></span>

<!-- México -->
<span class="eva-3-flag -mx"></span>

<!-- Perú -->
<span class="eva-3-flag -pe"></span>

<!-- Uruguay -->
<span class="eva-3-flag -uy"></span>
```

### Europa

```html
<!-- España -->
<span class="eva-3-flag -es"></span>

<!-- Francia -->
<span class="eva-3-flag -fr"></span>

<!-- Italia -->
<span class="eva-3-flag -it"></span>

<!-- Reino Unido -->
<span class="eva-3-flag -gb"></span>

<!-- Alemania -->
<span class="eva-3-flag -de"></span>

<!-- Portugal -->
<span class="eva-3-flag -pt"></span>
```

### Otros

```html
<!-- China -->
<span class="eva-3-flag -cn"></span>

<!-- Japón -->
<span class="eva-3-flag -jp"></span>

<!-- Australia -->
<span class="eva-3-flag -au"></span>
```

Para ver todos los códigos disponibles, consultar el listado completo en el código fuente (237 países soportados desde `-ab` hasta `-zw`).

## Notas de estilo (SCSS)

- Dimensiones: `32px × 32px` (cuadrado).
- `border-radius: $border-radius-half` (redondeado completo).
- `display: inline-block` con `box-sizing: content-box`.
- Implementación: sprite `flags.png` con `background-position` específico para cada país (incrementos de `-32px` vertical).
- Fondo blanco por defecto para soporte de transparencia.
- `background-size: 100%` para ajuste perfecto.

## Accesibilidad

- **Crítico**: Este componente NO incluye texto alternativo por defecto.
- **Obligatorio**: Agregar `aria-label` o `title` con el nombre del país:

```html
<span class="eva-3-flag -ar" aria-label="Argentina"></span>
<span class="eva-3-flag -us" title="Estados Unidos"></span>
```

- **Contexto decorativo**: Si la bandera es meramente decorativa (el nombre del país está visible cerca), usar `aria-hidden="true"`:

```html
<span class="eva-3-flag -ar" aria-hidden="true"></span>
<span>Argentina</span>
```

## Dependencias

- Sprites: `flags.png` (sprite único con todas las banderas).
- Clase base: `eva-3-flag`.
- Categoría: `reviews` (type: atoms).

## Ejemplo completo con accesibilidad

```html
<!-- Bandera con aria-label -->
<span class="eva-3-flag -ar" aria-label="Argentina"></span>

<!-- Bandera con title (tooltip nativo) -->
<span class="eva-3-flag -br" title="Brasil"></span>

<!-- Bandera decorativa (texto del país visible) -->
<div>
  <span class="eva-3-flag -cl" aria-hidden="true"></span>
  <span>Chile</span>
</div>
```

## Listado completo de códigos

ab, ad, ae, af, ag, ai, al, am, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, ef, eg, eh, en, er, es, et, fi, fj, fk, fm, fo, fr, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kr, kt, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nt, nu, nz, om, ot, pa, pe, pf, pg, ph, pk, pl, pn, pr, ps, pt, pw, py, qa, re, rn, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tr, tt, tv, tw, ua, ug, us, uy, uz, va, vc, ve, vg, vi, vn, vu, wa, wf, ws, xk, ye, yt, za, zm, zw.
