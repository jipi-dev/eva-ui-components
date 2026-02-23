# Validation Inline

## Descripción
Mensaje de validación pequeño que se muestra junto a un campo (debajo o alineado a la derecha). Incluye ícono de estado y texto breve.

**Tipo:** Átomo  
**Categoría:** Forms / Feedback  
**Tags:** validation, inline, error, success, warning, helper

## Estructura HTML
```html
<div class="eva-3-validation-inline -error [clases-adicionales]" role="alert">
  <i class="eva-3-icon-warning"></i>
  <span>Ingresá un correo válido.</span>
</div>
```

- Clase base: `eva-3-validation-inline`.
- Modificadores: `-success`, `-error`, `-warning`, `-info` (colores e ícono).
- Incluye ícono (opcional) y texto.
- Usar `role="alert"` para mensajes de error; `aria-live="polite"` si se actualiza dinámicamente.

## Variantes / Estados
- **Success (`-success`):** Ícono check, texto en verde (ej. “Campo validado”).
- **Error (`-error`):** Ícono warning, texto en rojo (por defecto).
- **Warning (`-warning`):** Ícono info/warning, texto en amarillo.
- **Info (`-info`):** Mensaje informativo en neutral/azul suave.

## Cuándo Usar
- Mostrar validaciones inline debajo de inputs/fields.
- Dar feedback inmediato sin bloquear el flujo.
- Complementar estados de campo (bordes rojos/verdosos) con texto claro.

## Mejores Prácticas
- Sé breve y concreto (“Ingresá un correo válido”).
- Alineá con el campo asociado y mantené suficiente contraste.
- No relies solo en color; el ícono ayuda a la percepción.
- Usa `role="alert"` solo en errores para evitar ruido en info/success.

## Dependencias
- Iconos: `check` (success), `warning`/`alert` (error/warning), `info` (info).
- Utilidades de color/typo: `text`, `colours`.