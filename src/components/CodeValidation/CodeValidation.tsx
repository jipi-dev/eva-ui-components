import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Input from '../Input/Input';
import ValidationInline from '../ValidationInline/ValidationInline';
import './code-validation.scss';

export interface CodeValidationCellProps {
  inputId: string;
  placeholder?: string;
  disabled?: boolean;
  size?: 'lg' | 'md';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}

const Cell = ({ size, disabled = false, placeholder, inputId, ...rest }: CodeValidationCellProps) => (
  <div className="code-validation-cell">
    <Input
      maxLength={1}
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      label=""
      id={inputId}
      {...rest}
    />
  </div>
);

export interface CodeValidationProps extends UtilitiesProps {
  /** Tamaño propagado a cada Input interno */
  size?: 'lg' | 'md';
  /** Muestra estado de error */
  invalid?: boolean;
  /** Deshabilita todos los inputs */
  disabled?: boolean;
  /** Texto a mostrar en ValidationInline */
  errorText?: string;
  /** Exactamente 6 elementos CodeValidation.Cell */
  children?: React.ReactElement<CodeValidationCellProps>[];
}

const defaultChildren = [
  <Cell key={0} inputId="0" />,
  <Cell key={1} inputId="1" />,
  <Cell key={2} inputId="2" />,
  <Cell key={3} inputId="3" />,
  <Cell key={4} inputId="4" />,
  <Cell key={5} inputId="5" />,
];

const CodeValidation = withUtilities((props: CodeValidationProps) => {
  const {
    className = '',
    invalid = false,
    errorText = 'Descripcion del error',
    children = defaultChildren,
    size = 'lg',
    disabled = false,
  } = props;

  const classes = classResolver({ '-invalid': invalid });
  const placeHolders = ['A', 'B', 'C', '1', '2', '3'];

  return (
    <div className={`${PREFIX}-3-code-validation ${className} ${classes}`}>
      <ValidationInline invalid={invalid} message={errorText}>
        <div className="code-validation-input">
          {(children as React.ReactElement<CodeValidationCellProps>[]).map((child, i) =>
            React.cloneElement(child, {
              ...child.props,
              size,
              disabled,
              key: placeHolders[i],
              placeholder: child.props.placeholder || placeHolders[i],
            })
          )}
        </div>
      </ValidationInline>
    </div>
  );
});

(CodeValidation as any).Cell = Cell;

export default CodeValidation;
