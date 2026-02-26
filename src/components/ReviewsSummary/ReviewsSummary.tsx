import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './reviews-summary.scss';

export interface ReviewBar {
  item: string;
  scoreNumber: number;
  scoreDesc: 'good' | 'regular' | 'bad';
}

export interface AvatarEntry {
  type: 'image' | 'letter';
  content: string;
}

export interface ReviewsSummaryProps extends UtilitiesProps {
  /** Puntaje numérico */
  ratingNumber?: number;
  /** Score semántico */
  ratingScore?: 'good' | 'regular' | 'bad';
  /** Título de calificación */
  ratingTitle?: string;
  /** Subtítulo */
  ratingSubtitle?: string;
  /** Array de barras de review */
  reviewBarsArray?: ReviewBar[];
  /** Número de comentarios */
  commentsNumber?: number;
  /** URL del enlace */
  linkHref?: string;
  /** Avatars a mostrar */
  avatarsArray?: AvatarEntry[];
  /** Mostrar más detalles */
  showMore?: boolean;
  /** Handler de clic */
  onClick?: () => void;
}

const defaultReviewBars: ReviewBar[] = [
  { item: 'Servicios', scoreNumber: 8.1, scoreDesc: 'good' },
  { item: 'Atención del personal', scoreNumber: 6, scoreDesc: 'regular' },
  { item: 'Acceso', scoreNumber: 8.7, scoreDesc: 'good' },
  { item: 'Experiencia', scoreNumber: 8.8, scoreDesc: 'good' },
];

const ReviewsSummary = withUtilities((props: ReviewsSummaryProps) => {
  const {
    ratingNumber = 7.5,
    ratingScore = 'good',
    ratingTitle = 'Muy bueno',
    ratingSubtitle = 'Excelente ubicación',
    reviewBarsArray = defaultReviewBars,
    commentsNumber = 95,
    linkHref = '#',
    className = '',
    showMore = false,
    onClick,
  } = props;

  const [show, setShow] = useState(false);

  const colorClass = (score: string) =>
    classResolver({
      [`-${PREFIX}-3-tc-green-3`]: score === 'good',
      [`-${PREFIX}-3-tc-orange-3`]: score === 'regular',
      [`-${PREFIX}-3-tc-red-3`]: score === 'bad',
    });

  const colorClassBg = (score: string) =>
    classResolver({
      [`-${PREFIX}-3-bc-green-3`]: score === 'good',
      [`-${PREFIX}-3-bc-orange-3`]: score === 'regular',
      [`-${PREFIX}-3-bc-red-3`]: score === 'bad',
    });

  return (
    <div className={`${PREFIX}-3-reviews-summary ${className}`}>
      <div className="reviews-summary-header">
        <div className="summary-rating-container">
          <div className={`${PREFIX}-3-rating -lg -${ratingScore}`}>
            {ratingNumber}
          </div>
          <div className="summary-text-container">
            <div className="summary-title">{ratingTitle}</div>
            <div className={`summary-subtitle ${colorClass(ratingScore)}`}>
              {ratingSubtitle}
            </div>
          </div>
        </div>
        <a href={linkHref} className="summary-comments-link">
          Ver los {commentsNumber} comentarios
        </a>
      </div>
      <div className="reviews-summary-bars">
        {reviewBarsArray.map((bar) => (
          <div key={bar.item} className="summary-bar-row">
            <span className="summary-bar-label">{bar.item}</span>
            <div className="summary-bar-container">
              <div
                className={`summary-bar ${colorClassBg(bar.scoreDesc)}`}
                style={{ width: `${(bar.scoreNumber / 10) * 100}%` }}
              />
            </div>
            <span className={`summary-bar-score ${colorClass(bar.scoreDesc)}`}>
              {bar.scoreNumber}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ReviewsSummary;
