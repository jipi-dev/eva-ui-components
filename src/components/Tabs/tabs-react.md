# Tabs - React

## Instalación CSS

> Los CSS de EVA UI **no están incluidos** en el paquete de componentes React — son assets estáticos separados que deben incluirse en el `<head>` del HTML del proyecto:

```html
<link rel="stylesheet" href="/eva/eva-core.min.css" />
<link rel="stylesheet" href="/eva/eva.min.css" />
```

> Los archivos se obtienen desde el paquete `@despegar/eva-ui` (o la CDN interna del Design System). Sin ellos, los componentes no tendrán estilos.

## Importación
```jsx
import Tabs from '@despegar/eva-ui/Tabs';
```

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `titles` | `(string \| {title:string, subtitle?:string, disabled?:boolean})[]` | — | Títulos y subtítulos de cada tab (requerido). |
| `children` | `Tabs.Content[]` | — | Contenido por tab (orden correlativo). |
| `className` | string | `''` | Clases extra. |
| `bgWhite` | bool | `false` | Variante borde para fondo blanco (deprecated). |
| `useNavigation` | bool | `false` | Agrega flechas de navegación (NavSlider) y degradaos laterales. |
| `centered` | bool | `false` | Centra tabs (deprecated). |
| `onTabClick` | func | `() => {}` | Callback `(event, index, title)` al seleccionar. |
| `activeTab` | number | `0` | Índice inicial activo. |
| `noStroke` | bool | `false` | Sin borde/radius del contenedor. |

### `Tabs.Content`
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `active` | bool | `false` | Se maneja internamente. |
| `className` | string | `''` | Clases extra para el panel. |
| `children` | node | — | Contenido del panel. |

## Uso Básico
```jsx
<Tabs titles={["Tab 1", "Tab 2", { title: "Tab 3", subtitle: "Desc" }]}> 
  <Tabs.Content>Contenido 1</Tabs.Content>
  <Tabs.Content>Contenido 2</Tabs.Content>
  <Tabs.Content>Contenido 3</Tabs.Content>
</Tabs>
```

## Sin borde y con tab deshabilitado
```jsx
<Tabs
  noStroke
  titles={[
    'Activa',
    { title: 'Inactiva', disabled: true },
    'Otra'
  ]}
>
  <Tabs.Content>Tab 1</Tabs.Content>
  <Tabs.Content>Tab 2</Tabs.Content>
  <Tabs.Content>Tab 3</Tabs.Content>
</Tabs>
```

## Navegación con flechas
```jsx
<Tabs useNavigation titles={["Uno","Dos","Tres","Cuatro"]}>
  {['Uno','Dos','Tres','Cuatro'].map((t) => (
    <Tabs.Content key={t}>{t}</Tabs.Content>
  ))}
</Tabs>
```

## Notas
- Para swipe horizontal en mobile, el contenedor permite scroll; si usás `useNavigation`, las flechas alternan entre extremos.
- Los títulos con `subtitle` añaden segunda línea y clase `-subtitle`.