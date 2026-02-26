import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './selectfield.scss';

export interface SelectFieldOptionProps {
  value: string | number;
  disabled?: boolean;
  children?: string | number;
  selected?: boolean;
  [key: string]: any;
}

const Option = ({ value, disabled = false, children, ...rest }: SelectFieldOptionProps) => (
  <option className="select-option" value={value} disabled={disabled} {...rest}>
    {children ?? value}
  </option>
);

export interface SelectFieldProps extends UtilitiesProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  icon?: string;
  disabled?: boolean;
  invalid?: boolean;
  id?: string;
  label: string | React.ReactNode;
  children: React.ReactNode;
  defaultOption?: boolean;
}

const SelectField = withUtilities((props: SelectFieldProps) => {
  const {
    icon = '',
    disabled = false,
    invalid = false,
    id = '',
    className = '',
    label = 'País',
    children,
    defaultOption = true,
    ...rest
  } = props;

  const classes = classResolver({
    '-invalid': !!invalid,
    '-icon': !!icon,
  });

  return (
    <div className={`${PREFIX}-3-select-field ${className} ${classes}`}>
      <div className="select-container">
        <select
          className="select-tag"
          id={id}
          disabled={disabled}
          {...rest}
        >
          {defaultOption && <Option disabled key={0} value="" />}
          {children}
        </select>
        <label className="select-label" htmlFor={id}>{label}</label>
        {icon && <Icon icon={icon} className="select-icon" size="sm" />}
      </div>
    </div>
  );
});

(SelectField as any).Option = Option;

export default SelectField;
