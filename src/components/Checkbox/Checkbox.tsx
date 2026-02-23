import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import Icon from '../Icon/Icon';
import type { UtilitiesProps } from '../../types';
import './checkbox.scss';

export interface CheckboxProps extends UtilitiesProps {
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Use label-form styling for the label */
  labelForm?: boolean;
  /** Input ID used for accessibility */
  id: string;
  /** Checkbox size */
  size?: 'lg' | 'md';
  /** Whether the checkbox is in invalid state */
  invalid?: boolean;
  /** Whether the checkbox is in partial/indeterminate state */
  partial?: boolean;
  /** Use lighten color scheme */
  lighten?: boolean;
  /** Indeterminate state (shows minus icon instead of checkmark) */
  indeterminate?: boolean;
  /** Whether disabled */
  disabled?: boolean;
  /** Whether checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Blur handler */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  /** Mouse down handler */
  onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
}

/**
 * Checkbox Component
 *
 * @description Accessible checkbox with support for partial/indeterminate states.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label = '',
  labelForm = false,
  id,
  size = 'md',
  invalid = false,
  partial = false,
  lighten = false,
  indeterminate,
  className = '',
  ...rest
}) => {
  const classes = classResolver({
    [`-${size}`]: !!size,
    '-invalid': invalid,
    '-lighten': lighten,
  });

  return (
    <span className={`${PREFIX}-3-checkbox ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      <label className={`checkbox-label ${labelForm ? `${PREFIX}-3-label-form` : ''}`} htmlFor={id}>
        <input
          id={id}
          className="checkbox-tag"
          type="checkbox"
          {...rest}
        />
        <Icon icon={(partial || indeterminate) ? 'minus' : 'checkmark'} className="checkbox-check" />
        {label}
      </label>
    </span>
  );
};

export default withUtilities(Checkbox);
