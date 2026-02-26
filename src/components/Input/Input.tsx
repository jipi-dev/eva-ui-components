import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import Icon from '../Icon/Icon';
import type { UtilitiesProps } from '../../types';
import './input.scss';

export type InputSize = 'lg' | 'md';
export type InputType =
  | 'text'
  | 'number'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'image'
  | 'month'
  | 'password'
  | 'search'
  | 'tel'
  | 'url';

export interface InputProps extends UtilitiesProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Input size */
  size?: InputSize;
  /** Icon position relative to the input */
  iconPosition?: '' | 'right' | 'left';
  /** Icon name to display */
  icon?: string;
  /** Input type */
  type?: InputType;
  /** Remove border styling */
  noBorder?: boolean;
  /** Invalid / error state */
  invalid?: boolean;
  /** Show gradient at the end of the field */
  gradient?: boolean;
  /** Additional classes for the inner <input> element */
  inputClasses?: string;
  /** Optional label text */
  label?: React.ReactNode;
  /** Render the label with label-form class */
  labelForm?: boolean;
  /** maxLength override (-1 = unlimited) */
  maxLength?: number;
}

/**
 * Input Component
 *
 * @description Campo de texto con soporte para íconos, label, validación e internacionalización.
 */
const Input: React.FC<InputProps> = ({
  size = 'md',
  iconPosition = '',
  icon,
  noBorder = false,
  disabled = false,
  invalid = false,
  id = 'eva-input',
  gradient = false,
  placeholder = '',
  className = '',
  maxLength,
  type = 'text',
  inputClasses = '',
  label = '',
  labelForm = false,
  ...rest
}) => {
  const iconPositionClass = iconPosition ? `-icon-${iconPosition}` : '';

  const classes = classResolver({
    [`-${size}`]: !!size,
    '-no-border': noBorder,
    '-invalid': !!invalid,
  });

  return (
    <>
      {label && (
        <label
          className={`${labelForm ? `${PREFIX}-3-label-form` : ''} -${PREFIX}-3-mb-sm`.trim()}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={`${PREFIX}-3-input ${iconPositionClass} ${className} ${classes}`.replace(/ +/g, ' ').trim()}>
        <div className="input-container">
          <input
            id={id}
            className={`input-tag ${inputClasses}`.trim()}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...(maxLength !== undefined && maxLength >= 0 ? { maxLength } : {})}
            {...rest}
          />
          {iconPosition && <Icon icon={icon ?? ''} className="input-icon" />}
          {gradient && <span className="input-gradient" />}
        </div>
      </div>
    </>
  );
};

export default withUtilities(Input);
