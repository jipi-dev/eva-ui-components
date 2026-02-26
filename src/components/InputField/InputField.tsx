import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './inputfield.scss';

export interface InputFieldProps extends UtilitiesProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  icon?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  iconLeft?: boolean;
  id?: string;
  inputClasses?: string;
  label: string | React.ReactNode;
  placeholder?: string;
}

const InputField = (props: InputFieldProps) => {
  const {
    icon = '',
    disabled = false,
    invalid = false,
    readOnly = false,
    iconLeft = false,
    id = '',
    className = '',
    inputClasses = '',
    label = '',
    placeholder = '',
    ...rest
  } = props;

  const classes = classResolver({
    '-invalid': !!invalid,
    '-icon': !!icon,
    '-left': !!iconLeft,
    '-readonly': !!readOnly,
  });

  const labelFinal = label || placeholder;

  return (
    <div className={`${PREFIX}-3-input-field ${className} ${classes}`}>
      <div className="input-container">
        <input
          id={id}
          placeholder=""
          className={`input-tag ${inputClasses}`}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
        <label className="input-label" htmlFor={id}>{labelFinal}</label>
        {icon && <Icon icon={icon} className="input-icon" size="sm" />}
      </div>
    </div>
  );
};

export default withUtilities(InputField);
