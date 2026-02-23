# Modal Tiers - React

## Importación
```jsx
import ModalTiers from '@despegar/eva-ui/ModalTiers';
```

## Descripción
Variante loyalty basada en coachmark para mostrar niveles/timeline de acumulación con estilos según tipo de viajero.

**Tipo:** Organismo  
**Categoría:** Overlays / Loyalty  
**Tags:** react, modal, tiers, loyalty, coachmark, timeline

## Cuándo Usar
- Comunicar niveles de loyalty, beneficios o breakdown de puntos en un flujo destacado.
- Onboarding específico de tiers cuando se necesita foco modal.

## Mejores Prácticas
- Controla `show`/`toggleModal`; selecciona `type` (`traveler`, `global`, `explorer`) para aplicar paleta e ilustraciones.
- Mantén la historia corta y visual; usa subcomponentes (`Timeline`, `Detail`) para consistencia.
- Considera plan de deprecación: úsalo solo si no existe reemplazo en tu flujo.

## Dependencias
- Hereda comportamiento de `ModalCoachmark` (overlay, cierre, layout sm/coachmark).
- Subcomponentes de timeline y detalle incluidos por la librería.

## Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `show` | bool | false | Muestra el modal |
| `toggleModal` | func | — (req) | Callback de cierre |
| `type` | 'traveler' \| 'global' \| 'explorer' | 'traveler' | Tipo de viajero (colores/ilustraciones) |
| `className` | string | '' | Clases extra |
| `children` | nodes | Title + Description por defecto | Contenido personalizado |

> Internamente: `size="lg"`, `steps={false}`, `noColor`, `tiers`, `closeOnClickOutside` propagado.

## Subcomponentes
- `ModalTiers.Title`
- `ModalTiers.Description`
- `ModalTiers.Timeline`
- `ModalTiers.Timeline.Item` (alias TimelineItem)
- `ModalTiers.ItemTitle` (Title del item)
- `ModalTiers.ItemTitle.Image`
- `ModalTiers.ItemTitle.Message`
- `ModalTiers.Detail`
  - `Detail.Row`
  - `Detail.Breakdown`
    - `Breakdown.Cell`
- `ModalTiers.Message`
- `ModalTiers.Image`

## Uso Básico
```jsx
const [open, setOpen] = useState(false);

<ModalTiers
  show={open}
  toggleModal={() => setOpen(false)}
  type="traveler"
>
  <ModalTiers.Title>
    <Heading variant="overline-1">Pasaporte</Heading>
    <Heading variant="h3">Viajero</Heading>
    <Heading variant="body-1">Registrate y sumá puntos.</Heading>
  </ModalTiers.Title>

  <ModalTiers.Description>
    <ModalTiers.Timeline>
      <ModalTiers.Timeline.Item>
        <ModalTiers.ItemTitle>
          <ModalTiers.Image src="https://.../ly-modal-passport.svg" />
          <ModalTiers.Message>Compró un alojamiento por USD 1.000</ModalTiers.Message>
        </ModalTiers.ItemTitle>
        <ModalTiers.Detail shadow>
          <ModalTiers.Detail.Breakdown>
            <ModalTiers.Detail.Breakdown.Cell>
              <span>Hotel</span><span>USD 800</span>
            </ModalTiers.Detail.Breakdown.Cell>
            <ModalTiers.Detail.Breakdown.Cell>
              <span>Impuestos</span><span>USD 200</span>
            </ModalTiers.Detail.Breakdown.Cell>
          </ModalTiers.Detail.Breakdown>
          <ModalTiers.Detail.Row separator>
            <Heading variant="p">TOTAL</Heading>
            <span><Heading variant="caption">USD</Heading><Heading variant="h4">1000</Heading></span>
          </ModalTiers.Detail.Row>
        </ModalTiers.Detail>
      </ModalTiers.Timeline.Item>
    </ModalTiers.Timeline>
  </ModalTiers.Description>
</ModalTiers>
```

## Tipos (type)
- `traveler` | `global` | `explorer`: ajusta colores y sprites de loyalty.

## Notas
- Marcado como `toBeDeprecated`; usar solo si no hay reemplazo.
- Basado en `ModalCoachmark`, hereda cierre por overlay si se pasa `closeOnClickOutside`.
- Footer sticky proviene de clases `-show-sticky-footer` en className base.
