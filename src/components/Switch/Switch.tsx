import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './switch.scss';

export interface SwitchProps extends UtilitiesProps {
  /** Input ID for label association */
  id: string;
  /** Size variant */
  size?: '' | 'md';
  /** Whether disabled */
  disabled?: boolean;
  /** Use loyalty color scheme */
  loyalty?: boolean;
  /** Lighten color scheme (for dark backgrounds) */
  lighten?: boolean;
  /** Whether checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Switch Component
 *
 * @description Toggle switch for enabling/disabling options. Usable as a controlled or uncontrolled input.
 */
const Switch: React.FC<SwitchProps> = ({
  size = '',
  disabled = false,
  loyalty = false,
  lighten = false,
  className = '',
  id,
  ...rest
}) => {
  const classes = classResolver({
    [`-${size}`]: !!size,
    '-loyalty': loyalty,
    '-lighten': lighten,
  });

  return (
    <span className={`${PREFIX}-3-switch ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      <label className="switch-label" htmlFor={id}>
        <input className="switch-input" type="checkbox" id={id} disabled={disabled} {...rest} />
        <span className="switch-container">
          <span className="switch-circle" />
        </span>
      </label>
    </span>
  );
};

export default withUtilities(Switch);
