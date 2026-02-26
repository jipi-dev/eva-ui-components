import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './rating.scss';

export type RatingSize = 'sm' | 'md' | 'lg';
export type RatingScore = 'good' | 'regular';

export interface RatingProps extends UtilitiesProps {
  /** Display size */
  size?: RatingSize;
  /** Score category — auto-calculated from children if omitted */
  score?: RatingScore;
  /** The numeric rating value to display */
  children?: React.ReactNode;
}

function autoScore(value: number): RatingScore {
  return value > 7 ? 'good' : 'regular';
}

/**
 * Rating Component
 *
 * @description Puntaje numérico de valoración con variante de color automática.
 */
const Rating: React.FC<RatingProps> = ({
  size = 'lg',
  children = '8',
  score,
  className = '',
}) => {
  const resolvedScore = score ?? autoScore(parseInt(String(children), 10));

  return (
    <div className={`${PREFIX}-3-rating -${resolvedScore} -${size} ${className}`.trim()}>
      <span className="rating-text">{children}</span>
    </div>
  );
};

export default withUtilities(Rating);
