# Wizard

## Descripción
Encabezado de pasos para flujos guiados. Muestra pasos numerados o con check, conexión entre ellos y estado actual/completado.

**Tipo:** Molécula  
**Categoría:** Navigation / Progress  
**Tags:** wizard, steps, progreso, checkout, onboarding

## Estructura HTML
```html
<ol class="eva-3-wizard [ -compact ] [clases-adicionales]" role="list">
  <li class="wizard-step -completed">
    <div class="wizard-bullet">
      <i class="eva-3-icon-check"></i>
    </div>
    <div class="wizard-text">
      <span class="wizard-title">Datos personales</span>
      <span class="wizard-subtitle">Completado</span>
    </div>
  </li>

  <li class="wizard-connector"></li>

  <li class="wizard-step -active" aria-current="step">
    <div class="wizard-bullet">2</div>
    <div class="wizard-text">
      <span class="wizard-title">Documentos</span>
      <span class="wizard-subtitle">En progreso</span>
    </div>
  </li>

  <li class="wizard-connector"></li>

  <li class="wizard-step -disabled">
    <div class="wizard-bullet">3</div>
    <div class="wizard-text">
      <span class="wizard-title">Confirmación</span>
    </div>
  </li>
</ol>
```

- Clase base: `eva-3-wizard` (usa `<ol>` o `<ul>`).
- `wizard-step`: item de paso; modificadores `-completed`, `-active`, `-disabled`.
- `wizard-bullet`: círculo con número o ícono check.
- `wizard-text`: contenedor para título y subtítulo opcional.
- `wizard-connector`: línea entre pasos (puede usar pseudo-elementos en SCSS en lugar de nodos).

## Variantes / Estados
- **Active (`-active`):** resalta bullet y texto, marca `aria-current="step"`.
- **Completed (`-completed`):** bullet con check, color de éxito.
- **Disabled (`-disabled`):** estilos atenuados, sin interacción.
- **Compact (`-compact`):** reduce paddings y oculta subtítulos para mobile.

## Cuándo Usar
- Procesos en múltiples pasos (checkout, onboarding, formularios largos).
- Mostrar progreso y contexto de ubicación dentro del flujo.

## Mejores Prácticas
- Mantén títulos cortos (1-3 palabras) y consistentes.
- Usa subtítulo breve para estado (“Completado”, “En progreso”).
- Marca el paso actual con `aria-current="step"` para accesibilidad.
- En mobile, usa variante `-compact` o permitir scroll horizontal.

## Dependencias
- Colores/typo (`text`, `colours`).
- Íconos: `check` para pasos completados.