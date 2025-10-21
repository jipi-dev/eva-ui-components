# Eva UI Components - Figma Code Connect Example

Este es un proyecto de ejemplo para probar **Figma Code Connect** con componentes del sistema de diseño Eva. El proyecto incluye implementaciones completas de botones e iconos con documentación detallada para integración con Figma.

## 🎯 Propósito

Este proyecto sirve como ejemplo de cómo conectar componentes React/TypeScript con Figma usando Code Connect, proporcionando:

- ✅ Componentes Eva UI completamente tipados
- ✅ Documentación completa con ejemplos React y HTML
- ✅ Sistema de iconos Eva integrado (192+ iconos)
- ✅ Configuración SCSS con sistema de variables Eva
- ✅ Listo para usar como Code Components en Figma

## 🛠 Stack Tecnológico

- **React 18** + **TypeScript** para componentes tipados
- **Vite 7** para build rápido y desarrollo
- **SCSS/Sass** para sistema de estilos Eva
- **Eva Design System** para componentes y iconos

## 📦 Componentes Incluidos

### Button (`src/components/Button/`)
- **Variantes**: primary, secondary, link, white, dark
- **Tamaños**: md (36px), lg (48px)
- **Estados**: normal, disabled, loading, iconOnly
- **Props tipadas** con autocompletado completo
- **[Documentación completa](src/components/Button/button.md)**

### ButtonGhost (`src/components/ButtonGhost/`)
- **Variantes**: default, darken, lighten, white-loyalty
- **Tamaños**: md (36px), lg (48px)
- **Funcionalidad**: botón o enlace (`href` prop)
- **Estados**: normal, disabled, loading, iconOnly
- **[Documentación completa](src/components/ButtonGhost/button-ghost.md)**

### Icon (`src/components/Icon/`)
- **192+ iconos** del sistema Eva
- **Tamaños**: xsm, sm, md, lg, xlg, xxlg
- **Tipado estricto** con autocompletado de nombres
- **[Documentación completa](src/components/Icon/icon.md)**

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📖 Uso en Figma Code Connect

Cada componente incluye documentación completa con:
- Ejemplos React/TypeScript
- Ejemplos HTML puro
- Props y tipos disponibles
- Casos de uso reales
- Clases CSS del sistema Eva

### Ejemplo de uso:
```tsx
import { Button, ButtonGhost, Icon } from './components';

// Botón primario con icono
<Button size="lg" variant="primary" icon="download">
  Descargar archivo
</Button>

// Botón ghost como enlace
<ButtonGhost size="md" variant="lighten" href="/help">
  Centro de ayuda
</ButtonGhost>

// Icono independiente
<Icon icon="checkmark-circle" size="lg" />
```

## 🎨 Sistema Eva CSS

Las clases CSS siguen la nomenclatura Eva v3:
```html
<!-- Botón -->
<button class="eva-3-btn -lg -primary">
  <span class="btn-text">Texto</span>
</button>

<!-- Botón Ghost -->
<button class="eva-3-btn-ghost -md -darken">
  <span class="btn-text">Texto</span>
</button>

<!-- Icono -->
<i class="eva-3-icon-star -eva-3-icon-lg" aria-hidden="true"></i>
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── button.scss
│   │   └── button.md          # Documentación
│   ├── ButtonGhost/
│   │   ├── ButtonGhost.tsx
│   │   ├── button-ghost.scss
│   │   └── button-ghost.md    # Documentación
│   ├── Icon/
│   │   ├── Icon.tsx
│   │   └── icon.md            # Documentación
│   └── ButtonBase/            # Componente base interno
├── scss/
│   ├── _eva-core.scss         # Variables y mixins Eva
│   └── variables/             # Variables del sistema
├── types/
│   └── index.ts               # Tipos TypeScript
└── utils/
    └── utils.ts               # Utilidades
```

## 🔧 Configuración

### CSS Eva Core
Los estilos Eva se cargan desde:
```html
<!-- En public/index.html -->
<link rel="stylesheet" href="./eva/eva-core.min.css">
```

### SCSS Compilation
El proyecto está configurado para compilar SCSS con:
- Variables Eva (`$version: "3"`)
- Mixins de breakpoints y utilidades
- Sistema de colores y spacing Eva

### TypeScript
Configuración estricta con:
- Props tipadas para todos los componentes
- Autocompletado de nombres de iconos
- Validación de variantes y tamaños

## 🎯 Para Desarrolladores

### Agregar nuevos iconos
1. Añadir el nombre al tipo `IconName` en `src/components/Icon/Icon.tsx`
2. Actualizar la documentación en `src/components/Icon/icon.md`

### Extender componentes
Los componentes usan `withUtilities` HOC y extienden `UtilitiesProps` para consistencia.

### Debugging
```bash
# Ver warnings detallados de Sass
npm run build -- --verbose

# Servidor de desarrollo con HMR
npm run dev
```

## 📝 Notas Técnicas

- **Node.js**: Requiere v20.19+ o v22.12+ para Vite 7 óptimo
- **Sass**: Warnings de deprecación por @import (no críticos)
- **TypeScript**: Modo estricto habilitado
- **Build**: Optimizado para producción con tree-shaking

---

**Creado para demostrar la integración entre Figma Code Connect y componentes React del sistema Eva UI.**
