import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './radio.scss';

export interface RadioButtonProps extends UtilitiesProps {
  /** Input name attribute for form grouping */
  name: string;
  /** Input ID for label association */
  id: string;
  /** Size variant */
  size?: '' | 'md';
  /** Whether disabled */
  disabled?: boolean;
  /** Lighten color scheme (for dark backgrounds) */
  lighten?: boolean;
  /** Whether checked (controlled) */
  checked?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * RadioButton Component
 *
 * @description Accessible radio button for single-selection form groups.
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  size = 'md',
  disabled = false,
  className = '',
  lighten = false,
  name = 'eva-radio',
  id = 'eva-radio',
  ...rest
}) => {
  const classes = classResolver({
    [`-${size}`]: size === 'md',
    '-lighten': lighten,
  });

  return (
    <span className={`${PREFIX}-3-radio ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      <label className="radio-label-container" htmlFor={id}>
        <input className="radio-tag" id={id} type="radio" name={name} disabled={disabled} {...rest} />
        <i className="radio-circle" />
      </label>
    </span>
  );
};

export default withUtilities(RadioButton);
