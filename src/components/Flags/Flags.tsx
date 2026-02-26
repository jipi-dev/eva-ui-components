import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './flags.scss';

export interface FlagsProps extends UtilitiesProps {
  /** ISO 3166-1 alpha-2 country code (lowercase) */
  country: string;
  /** Accessible label for the flag */
  'aria-label'?: string;
}

/**
 * Flags Component
 *
 * @description Banderas de todos los países usando el sprite EVA.
 */
const Flags: React.FC<FlagsProps> = ({
  country = 'ar',
  className = '',
  'aria-label': ariaLabel,
}) => (
  <span
    className={`-${country} ${PREFIX}-3-flag ${className}`.trim()}
    aria-label={ariaLabel}
    role={ariaLabel ? 'img' : undefined}
  />
);

export default withUtilities(Flags);
