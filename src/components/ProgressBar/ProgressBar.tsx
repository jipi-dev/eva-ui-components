import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './progress-bar.scss';

export interface ProgressBarProps extends UtilitiesProps {
  /** Current progress value */
  progressValue?: number;
  /** Maximum value */
  maxValue?: number;
  /** Minimum value */
  minValue?: number;
  /** Additional CSS class for the bar fill (e.g. color utilities) */
  colorClass?: string;
}

/**
 * ProgressBar Component
 *
 * @description Barra de progreso accesible con soporte para valores mínimos y máximos.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  progressValue = 50,
  maxValue = 100,
  minValue = 0,
  colorClass = '',
  className = '',
  ...rest
}) => (
  <div className={`${PREFIX}-3-progress-bar ${className}`.trim()}>
    <div
      className={`progress-bar-content ${colorClass}`.trim()}
      role="progressbar"
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuenow={progressValue}
      {...rest}
      style={{ width: `${((progressValue - minValue) * 100) / (maxValue - minValue)}%` }}
    />
  </div>
);

export default withUtilities(ProgressBar);
