import React, { useState, useEffect, memo } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './modal-coachmark.scss';

export interface ModalCoachmarkStepProps {
  color?: boolean;
  tiers?: boolean;
  active?: boolean;
  children?: React.ReactNode;
}

const Step: React.FC<ModalCoachmarkStepProps> = ({ active = false, children }) => (
  <li className={`modal-coachmark-step ${active ? '-active' : ''}`}>{children}</li>
);

export interface ModalCoachmarkProps extends UtilitiesProps {
  /** Mostrar el modal */
  show?: boolean;
  /** Color de fondo */
  color?: boolean;
  /** Usar pasos */
  steps?: boolean;
  /** Paso actual (0-indexed) */
  step?: number;
  /** Cerrar al hacer clic fuera */
  closeOnClickOutside?: boolean;
  /** Función para cerrar el modal */
  toggleModal?: () => void;
  /** Sin color */
  noColor?: boolean;
  /** Tamaño del modal */
  size?: 'sm' | 'lg';
  /** Mostrar NavDots */
  withNavDots?: boolean;
  /** Variante tiers */
  tiers?: boolean;
  /** Texto botón anterior */
  prevStepText?: string;
  /** Texto botón siguiente */
  nextStepText?: string;
  /** Texto botón finalizar */
  finishStepText?: string;
  /** Handler al finalizar */
  onEndModal?: () => void;
  children?: React.ReactNode;
}

const ModalCoachmark = memo(withUtilities((props: ModalCoachmarkProps) => {
  const {
    className = '',
    show = false,
    color = false,
    steps = false,
    step = 0,
    children,
    toggleModal = () => {},
    noColor = false,
    size = 'sm',
    withNavDots = false,
    tiers = false,
    prevStepText = 'Anterior',
    nextStepText = 'Siguiente',
    finishStepText = 'Entendido',
    onEndModal = () => {},
    closeOnClickOutside = true,
  } = props;

  const [tab, setTab] = useState(0);

  const classes = classResolver({
    '-info': color && !noColor,
    [`-${size}`]: !!size,
    '-show-modal': show,
  });

  const childrenArray = React.Children.toArray(children);
  const totalSteps = childrenArray.length;

  useEffect(() => {
    if (show) {
      const actualStep = step >= 0 && step <= totalSteps - 1 ? step : 0;
      setTab(actualStep);
    }
  }, [show]);

  const handleEnd = () => {
    onEndModal && onEndModal();
    toggleModal();
  };

  if (!show) return null;

  return (
    <div
      className={`${PREFIX}-3-modal--coachmark ${className} ${classes}`}
      role="dialog"
      aria-modal="true"
    >
      {closeOnClickOutside && (
        <div className="modal-overlay" role="presentation" onClick={toggleModal} />
      )}
      <div className="modal-container">
        {steps ? (
          <ul className="modal-coachmark-steps-container">
            {childrenArray.map((child, i) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<ModalCoachmarkStepProps>, { color, tiers, active: tab === i })
                : child
            )}
          </ul>
        ) : (
          Array.isArray(children)
            ? childrenArray.map((child, i) =>
                React.isValidElement(child)
                  ? React.cloneElement(child as React.ReactElement<ModalCoachmarkStepProps>, { color, tiers, active: tab === i })
                  : child
              )
            : children
        )}
        <div className="modal-coachmark-actions">
          <div className="modal-coachmark-actions-container">
            {steps && tab > 0 && (
              <button
                type="button"
                className={`${PREFIX}-3-btn -${color ? 'lighten' : 'link'} -md -eva-3-mr-md`}
                onClick={() => setTab((t) => t - 1)}
              >
                {prevStepText}
              </button>
            )}
            <button
              type="button"
              className={`${PREFIX}-3-btn -primary -md`}
              onClick={tab < totalSteps - 1 ? () => setTab((t) => t + 1) : handleEnd}
            >
              {tab < totalSteps - 1 ? nextStepText : finishStepText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}));

(ModalCoachmark as any).Step = Step;

export default ModalCoachmark;
