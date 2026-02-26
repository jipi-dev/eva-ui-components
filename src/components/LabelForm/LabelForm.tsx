import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './label-form.scss';

export interface LabelFormProps extends UtilitiesProps {
  /** Label text or node */
  children: React.ReactNode;
  /** The id of the associated form field */
  htmlFor?: string;
}

/**
 * LabelForm Component
 *
 * @description Etiqueta para campos de formulario con tipografía EVA.
 */
const LabelForm: React.FC<LabelFormProps> = ({
  children,
  htmlFor,
  className = '',
}) => (
  <label className={`${PREFIX}-3-label-form ${className}`.trim()} htmlFor={htmlFor}>
    {children}
  </label>
);

export default withUtilities(LabelForm);
