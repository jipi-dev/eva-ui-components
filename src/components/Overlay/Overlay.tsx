import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './overlay.scss';

export interface OverlayProps extends UtilitiesProps {
  /** Whether the overlay is visible */
  show?: boolean;
  /** Use white (light) overlay instead of dark */
  white?: boolean;
  children?: React.ReactNode;
}

/**
 * Overlay Component
 *
 * @description Fondo oscuro/claro que se muestra sobre el contenido.
 */
const Overlay: React.FC<OverlayProps> = ({
  show = false,
  white = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = classResolver({
    '-show-overlay': show,
    '-white': white,
  });

  return (
    <div className={`${PREFIX}-3-overlay ${classes} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default withUtilities(Overlay);
