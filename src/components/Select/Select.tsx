import React, { memo } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './select.scss';

// ── Option sub-component ──────────────────────────────────────────────────────

export interface OptionProps {
  value: string | number;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Option: React.FC<OptionProps> = ({ value, disabled = false, children }) => (
  <option className="select-option" value={value} disabled={disabled}>
    {children ?? value}
  </option>
);
Option.displayName = 'SelectOption';

// ── Select component ──────────────────────────────────────────────────────────

export interface SelectProps extends UtilitiesProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select size */
  size?: 'lg' | 'md';
  /** ID of the select element */
  id?: string;
  /** Remove border styling */
  noBorder?: boolean;
  /** Invalid / error state */
  invalid?: boolean;
  /** Show gradient for long text */
  gradient?: boolean;
  /** Show a disabled default "Seleccione una opción" option */
  defaultOption?: boolean;
  /** Optional label text */
  label?: React.ReactNode;
  /** Render the label with label-form class */
  labelForm?: boolean;
  /** Additional classes for the label */
  labelClasses?: string;
  children?: React.ReactNode;
}

/**
 * Select Component
 *
 * @description Control de selección con soporte para label, validación y gradiente.
 */
const SelectBase: React.FC<SelectProps> = ({
  size = 'lg',
  id = 'eva-select',
  noBorder = false,
  disabled = false,
  invalid = false,
  gradient = false,
  className = '',
  label = '',
  labelForm = false,
  labelClasses = '',
  children,
  defaultOption = true,
  ...rest
}) => {
  const classes = classResolver({
    '-no-border': noBorder,
    '-invalid': invalid,
  });

  return (
    <>
      {label && (
        <label
          className={`${labelForm ? `${PREFIX}-3-label-form` : ''} -${PREFIX}-3-mb-sm ${labelClasses}`.trim()}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={`${PREFIX}-3-select -${size} ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
        <div className="select-container">
          <select className="select-tag" id={id} disabled={disabled} {...rest}>
            {defaultOption && (
              <Option disabled value="false">Seleccione una opción</Option>
            )}
            {children}
          </select>
          {gradient && <span className="select-gradient" />}
        </div>
      </div>
    </>
  );
};

const Select = memo(withUtilities(SelectBase)) as React.MemoExoticComponent<typeof SelectBase> & {
  Option: typeof Option;
};

(Select as any).Option = Option;

export { Option };
export default Select;
