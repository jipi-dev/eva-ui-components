import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './separator.scss';

export interface SeparatorProps extends UtilitiesProps {}

/**
 * Separator Component
 *
 * @description Línea divisora horizontal.
 */
const Separator: React.FC<SeparatorProps> = ({ className = '' }) => (
  <div className={`${PREFIX}-3-separator ${className}`.trim()} />
);

export default withUtilities(Separator);
