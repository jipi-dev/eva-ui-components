import React from 'react';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';
import './shadow.scss';

export interface ShadowProps extends UtilitiesProps {
  children?: React.ReactNode;
}

/**
 * Shadow Component
 *
 * @description Wrapper que aplica una variante de sombra EVA vía className.
 * Usar con las clases utilitarias de sombra: -eva-3-shadow-1, -eva-3-shadow-2,
 * -eva-3-shadow-static, -eva-3-shadow-line, etc.
 */
const Shadow: React.FC<ShadowProps> = ({ className = '', children }) => (
  <div className={className}>
    {children}
  </div>
);

export default withUtilities(Shadow);
