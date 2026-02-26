import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import LabelForm from '../LabelForm/LabelForm';
import type { UtilitiesProps } from '../../types';
import './textarea.scss';

export interface TextareaProps extends UtilitiesProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Textarea size */
  size?: 'lg' | 'md';
  /** Remove border styling */
  noBorder?: boolean;
  /** Invalid / error state */
  invalid?: boolean;
  /** ID for the textarea element */
  id?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Number of visible rows */
  rows?: number;
  /** Optional label above the textarea */
  label?: string;
  /** Optional helper/error message below the textarea */
  message?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

/**
 * Textarea Component
 *
 * @description Área de texto multi-línea con soporte para label, validación y mensaje.
 */
const Textarea: React.FC<TextareaProps> = ({
  size = 'lg',
  noBorder = false,
  disabled = false,
  invalid = false,
  id = 'eva-textarea',
  placeholder = '',
  className = '',
  onChange,
  rows = 3,
  label = '',
  message = '',
  ...rest
}) => {
  const classes = classResolver({
    [`-${size}`]: !!size,
    '-no-border': noBorder,
    '-invalid': invalid,
  });

  return (
    <div className={`${PREFIX}-3-textarea ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      {label && <LabelForm htmlFor={id}>{label}</LabelForm>}
      <div className="textarea-container">
        <textarea
          className="textarea-tag"
          placeholder={placeholder}
          id={id}
          rows={rows}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />
      </div>
      {message && <span className="textarea-message">{message}</span>}
    </div>
  );
};

export default withUtilities(Textarea);
