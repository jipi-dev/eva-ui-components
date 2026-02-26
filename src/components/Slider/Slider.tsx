import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './slider.scss';

export interface SliderProps extends UtilitiesProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** ID attribute */
  id?: string;
}

/**
 * Slider Component
 *
 * @description Deslizador de rango (input type="range") con estilos EVA.
 */
const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 10,
  step = 1,
  id = 'slider',
  className = '',
  ...rest
}) => (
  <div className={`${PREFIX}-3-slider ${className}`.trim()}>
    <div className="slider-input-container">
      <div className="slider-input-content">
        <input
          className="slider-input"
          type="range"
          min={min}
          max={max}
          step={step}
          id={id}
          {...rest}
        />
      </div>
    </div>
  </div>
);

export default withUtilities(Slider);
