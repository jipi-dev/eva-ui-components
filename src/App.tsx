import { useState } from 'react'
import { Button, ButtonGhost } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Eva UI Components</h1>
        <p>Componentes React + TypeScript listos para Figma</p>
      </header>

      <main className="component-showcase">
        <section className="button-section">
          <h2>Button Components</h2>
          
          <div className="button-group">
            <h3>Primary Buttons</h3>
            <Button size="lg" variant="primary">
              Primary Large
            </Button>
            <Button size="md" variant="primary">
              Primary Medium
            </Button>
            <Button size="lg" variant="primary" icon="favorite">
              With Icon
            </Button>
            <Button size="md" variant="primary" iconOnly icon="edit" />
          </div>

          <div className="button-group">
            <h3>Secondary & Other Variants</h3>
            <Button size="lg" variant="secondary">
              Secondary
            </Button>
            <Button size="lg" variant="link">
              Link Style
            </Button>
            <Button size="lg" variant="white">
              White
            </Button>
            <Button size="lg" variant="dark">
              Dark
            </Button>
          </div>

          <div className="button-group">
            <h3>Button States</h3>
            <Button size="lg" variant="primary" loading>
              Loading State
            </Button>
            <Button size="lg" variant="primary" disabled>
              Disabled
            </Button>
            <Button size="lg" variant="primary" next>
              With Next Arrow
            </Button>
          </div>

          <div className="button-group">
            <h3>Ghost Buttons</h3>
            <ButtonGhost size="lg" variant="">
              Ghost Default
            </ButtonGhost>
            <ButtonGhost size="lg" variant="darken">
              Ghost Darken
            </ButtonGhost>
            <ButtonGhost size="lg" variant="lighten">
              Ghost Lighten
            </ButtonGhost>
            <ButtonGhost size="md" variant="" icon="info">
              Ghost with Icon
            </ButtonGhost>
          </div>

          <div className="button-group">
            <h3>Interactive Example</h3>
            <Button 
              size="lg" 
              variant="primary" 
              onClick={() => setCount(count + 1)}
            >
              Clicked {count} times
            </Button>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Componentes creados con React + TypeScript, listos para conectar con Figma
        </p>
      </footer>
    </div>
  )
}

export default App
