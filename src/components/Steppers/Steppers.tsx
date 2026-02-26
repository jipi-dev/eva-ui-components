import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './steppers.scss';

export interface SteppersProps extends UtilitiesProps {
  /** Display size */
  size?: 'md' | 'lg';
  /** Invalid / error state */
  invalid?: boolean;
  /** Controlled value */
  value: number;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Remove border */
  noBorder?: boolean;
  /** ID for the inner input element */
  id?: string;
  /** Called when the plus button is clicked */
  onClickPlus: () => void;
  /** Called when the minus button is clicked */
  onClickMinus: () => void;
}

/**
 * Steppers Component
 *
 * @description Control numérico incremental con botones + y −.
 */
const Steppers: React.FC<SteppersProps> = ({
  size = 'md',
  invalid = false,
  disabled = false,
  noBorder = false,
  className = '',
  value = 0,
  onClickPlus,
  onClickMinus,
  min = 0,
  max = 10,
  id,
}) => {
  const [stepUp, setStepUp] = useState(false);
  const [stepDown, setStepDown] = useState(false);

  const classes = classResolver({
    [`-${size}`]: !!size,
    '-invalid': invalid,
    '-no-border': noBorder,
  });

  const animClass = stepUp ? '-step-up' : stepDown ? '-step-down' : '';

  const handleClickPlus = () => {
    onClickPlus();
    setStepUp(true);
    setTimeout(() => setStepUp(false), 500);
  };

  const handleClickMinus = () => {
    onClickMinus();
    setStepDown(true);
    setTimeout(() => setStepDown(false), 500);
  };

  return (
    <div className={`${PREFIX}-3-steppers ${classes} ${className} ${animClass}`.replace(/ +/g, ' ').trim()}>
      <input
        className="steppers-tag"
        readOnly
        id={id}
        tabIndex={-1}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
      />
      <button
        type="button"
        aria-label="Boton Menos"
        className={`steppers-icon-left ${PREFIX}-3-icon-minus`}
        disabled={disabled || value <= min}
        onClick={handleClickMinus}
      />
      <button
        type="button"
        aria-label="Boton Mas"
        className={`steppers-icon-right ${PREFIX}-3-icon-plus`}
        disabled={disabled || value >= max}
        onClick={handleClickPlus}
      />
    </div>
  );
};

export default withUtilities(Steppers);
