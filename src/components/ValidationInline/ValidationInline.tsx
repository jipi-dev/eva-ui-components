import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './validation-inline.scss';

export interface ValidationInlineProps extends UtilitiesProps {
  /** Activar estado de error */
  invalid?: boolean;
  /** Mensaje de error */
  message?: string;
  children?: React.ReactNode;
}

const ValidationInline = withUtilities((props: ValidationInlineProps) => {
  const {
    className = '',
    invalid = false,
    message = 'Ingrese una contraseña correcta',
    children,
  } = props;

  const classes = classResolver({ '-invalid': invalid });

  return (
    <div className={`${PREFIX}-3-validation-inline ${className} ${classes}`}>
      {React.Children.toArray(children).map((child) => {
        if (!React.isValidElement(child)) return child;
        const { type } = child as React.ReactElement<any>;
        const name = typeof type === 'string' ? type : (type as any).displayName || (type as any).name || 'div';
        const isCustom = name.charAt(0) === name.charAt(0).toUpperCase() && name.charAt(0) !== name.charAt(0).toLowerCase();
        return React.cloneElement(child as React.ReactElement<any>, isCustom ? { invalid } : {});
      })}
      <div className="validation-msg">
        <Icon icon="warning" />
        {message}
      </div>
    </div>
  );
});

export default ValidationInline;
