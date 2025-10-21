# Eva UI Components

Componentes React + TypeScript optimizados para integración con Figma.

## 🚀 Descripción

Este proyecto contiene una biblioteca de componentes UI desarrollados en React con TypeScript, especialmente diseñados para trabajar con Figma y facilitar la conexión entre diseño y código.

### Componentes Incluidos

- **Button**: Componente de botón principal con múltiples variantes y estados
- **ButtonGhost**: Variante de botón con estilo "fantasma" (transparente con borde)
- **ButtonBase**: Componente base que comparten todos los botones
- **Icon**: Componente de iconos (placeholder - reemplazar con tu implementación)

## 🛠 Tecnologías

- React 18
- TypeScript
- Vite (build tool)
- CSS3

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar tests
npm run test
```

## 🎨 Componentes

### Button

Componente principal de botón con soporte para múltiples variantes, tamaños y estados.

```tsx
import { Button } from './components';

// Botón básico
<Button size="lg" variant="primary">
  Hacer clic
</Button>

// Botón con icono
<Button size="md" variant="secondary" icon="star">
  Favorito
</Button>

// Botón solo icono
<Button size="md" variant="primary" iconOnly icon="edit" />

// Botón con estado loading
<Button size="lg" variant="primary" loading>
  Cargando...
</Button>
```

#### Props

| Prop | Tipo | Descripción | Requerido |
|------|------|-------------|-----------|
| `size` | `'md' \| 'lg'` | Tamaño del botón | ✅ |
| `variant` | `'primary' \| 'secondary' \| 'link' \| 'white' \| 'dark'` | Variante visual | ✅ |
| `disabled` | `boolean` | Estado deshabilitado | ❌ |
| `loading` | `boolean` | Estado de carga | ❌ |
| `icon` | `string \| boolean` | Icono a mostrar | ❌ |
| `iconOnly` | `boolean` | Solo mostrar icono (botón circular) | ❌ |
| `next` | `boolean` | Mostrar flecha siguiente | ❌ |
| `onClick` | `function` | Manejador de click | ❌ |

### ButtonGhost

Variante de botón con estilo transparente y borde.

```tsx
import { ButtonGhost } from './components';

// Botón ghost básico
<ButtonGhost size="lg" variant="">
  Acción secundaria
</ButtonGhost>

// Botón ghost con variante
<ButtonGhost size="md" variant="darken" icon="info">
  Más información
</ButtonGhost>

// Como enlace
<ButtonGhost size="lg" variant="lighten" href="/ayuda">
  Centro de ayuda
</ButtonGhost>
```

#### Props

Similar al componente Button, pero con variantes específicas:

| Prop | Tipo | Descripción | Requerido |
|------|------|-------------|-----------|
| `variant` | `'' \| 'darken' \| 'lighten' \| 'white-loyalty'` | Variante visual ghost | ✅ |
| `href` | `string` | URL para comportamiento de enlace | ❌ |

## 🎯 Integración con Figma

Este proyecto está preparado para integrarse con Figma usando herramientas como:

- **Figma to Code**: Para generar código desde diseños
- **Storybook**: Para documentar componentes
- **Design Tokens**: Para sincronizar estilos

### Estructura de Archivos

```
src/
├── components/
│   ├── Button/
│   │   └── Button.tsx
│   ├── ButtonBase/
│   │   └── ButtonBase.tsx
│   ├── ButtonGhost/
│   │   └── ButtonGhost.tsx
│   ├── Icon/
│   │   └── Icon.tsx
│   └── index.ts
├── types/
│   └── index.ts
├── utils/
│   └── utils.ts
└── utilitiesHOC/
    └── index.ts
```

## 🔧 Personalización

### Modificar Estilos

Los estilos están definidos en `src/App.css`. Puedes:

1. Cambiar las variables CSS para colores y espaciado
2. Agregar nuevas variantes de botón
3. Modificar los breakpoints responsivos

### Agregar Nuevos Componentes

1. Crear la carpeta del componente en `src/components/`
2. Implementar el componente en TypeScript
3. Agregar tipos en `src/types/index.ts`
4. Exportar desde `src/components/index.ts`

### Configurar Iconos

Reemplaza el componente `Icon` placeholder con tu biblioteca de iconos preferida:

- React Icons
- Heroicons
- Font Awesome
- Iconos personalizados SVG

## 🚀 Próximos Pasos

1. **Storybook**: Configurar para documentación interactiva
2. **Design Tokens**: Implementar sistema de tokens de diseño
3. **Testing**: Agregar tests unitarios y de integración
4. **Figma Plugin**: Desarrollar plugin para sincronización automática

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

Desarrollado para facilitar la conexión entre diseño y código con Figma 🎨 ➡️ ⚛️