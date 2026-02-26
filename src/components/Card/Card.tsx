import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './card.scss';

export interface CardProps extends UtilitiesProps {
  children?: React.ReactNode;
  /** tabIndex override */
  tabIndex?: number;
}

/**
 * Card Component
 *
 * @description Presentación de información modularizada.
 * Combinar con clases de sombra EVA: -eva-3-shadow-1, -eva-3-shadow-static, etc.
 */
const Card: React.FC<CardProps> = ({ className = '', children, tabIndex = 0 }) => (
  <div className={`${PREFIX}-3-card ${className}`.trim()} tabIndex={tabIndex}>
    {children}
  </div>
);

export default withUtilities(Card);
