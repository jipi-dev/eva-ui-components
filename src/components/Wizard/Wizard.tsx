import React, { useState, useRef, useEffect } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import NavSlider from '../NavSlider/NavSlider';
import './wizard.scss';

export interface WizardStepProps {
  /** Nombre mostrado en el wizard */
  name?: string;
  /** Paso activo (0-indexed) */
  activeStep?: number;
  /** Estado completado */
  completed?: boolean;
  /** Estado editado */
  edited?: boolean;
  /** El paso está habilitado / clickeable */
  enabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: any;
}

const Step: React.FC<WizardStepProps> = ({
  name = '',
  completed = false,
  edited = false,
  enabled = false,
  onClick,
}) => (
  <button
    type="button"
    className={classResolver({
      'wizard-step': true,
      '-completed': completed,
      '-edited': edited,
      '-enabled': enabled,
    })}
    onClick={onClick}
    disabled={!enabled && !completed}
  >
    <span className="step-text">{name}</span>
    <span className="step-indicator" />
  </button>
);

export interface WizardProps extends UtilitiesProps {
  /** Paso activo (0-indexed) */
  activeStep?: number;
  /** Mostrar flechas de navegación */
  navArrows?: boolean;
  /** Pasos editables */
  editable?: boolean;
  /** Mostrar borde inferior */
  borderBox?: boolean;
  children?: React.ReactNode;
}

const Wizard = withUtilities((props: WizardProps) => {
  const {
    className = '',
    activeStep = 0,
    navArrows = true,
    editable = false,
    borderBox = false,
    children,
  } = props;

  const [stepInitialData, setStepInitialData] = useState(0);
  const [stepTranslate, setStepTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = React.Children.toArray(children) as React.ReactElement<WizardStepProps>[];
  const stepCount = steps.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleResize = () => {
      const el = container.querySelector('.wizard-steps-container') as HTMLElement;
      if (el) {
        setStepTranslate(el.offsetWidth);
        setStepInitialData(el.scrollLeft);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.wizard-step.-enabled, .wizard-step.-completed') as HTMLElement;
    if (activeEl) activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeStep]);

  const classes = classResolver({
    '-nav-arrows': navArrows,
    '-editable': editable,
    '-border-box': borderBox,
  });

  return (
    <div className={`${PREFIX}-3-wizard ${classes} ${className}`} ref={containerRef}>
      {navArrows ? (
        <NavSlider>
          <div className="wizard-steps-container">
            {steps.map((step, i) =>
              React.cloneElement(step as React.ReactElement<WizardStepProps>, {
                key: i,
                completed: editable ? i < activeStep : i <= activeStep,
                enabled: i === activeStep,
                edited: editable && i < activeStep,
              })
            )}
          </div>
        </NavSlider>
      ) : (
        <div className="wizard-steps-container">
          {steps.map((step, i) =>
            React.cloneElement(step as React.ReactElement<WizardStepProps>, {
              key: i,
              completed: editable ? i < activeStep : i <= activeStep,
              enabled: i === activeStep,
              edited: editable && i < activeStep,
            })
          )}
        </div>
      )}
    </div>
  );
});

(Wizard as any).Step = Step;

export default Wizard;
