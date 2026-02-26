import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './reviews-cards.scss';

export interface ReviewsCardsProps extends UtilitiesProps {
  /** Tipo de avatar */
  avatarType?: 'image' | 'icon' | 'letter';
  /** URL de la imagen del avatar */
  avatarImg?: string;
  /** Letra del avatar */
  avatarLetter?: string;
  /** Ícono del avatar */
  avatarIcon?: string;
  /** Subtítulo */
  subtitle?: string;
  /** Título (nombre) */
  title?: string;
  /** Texto de la reseña */
  children?: string;
  /** Usar View More */
  useViewMore?: boolean;
}

const ReviewsCards = withUtilities((props: ReviewsCardsProps) => {
  const {
    avatarType = 'image',
    avatarImg = 'https://bit.ly/33f5I7M',
    avatarLetter = 'L',
    avatarIcon = 'user',
    subtitle = 'Viajó en pareja - Jun 2018',
    title = 'Gabriela Ferreira',
    children = 'Cama muy cómoda. Ubicado en el centro de Santiago, muchos comercios.',
    className = '',
    useViewMore = false,
  } = props;

  const [expanded, setExpanded] = useState(false);

  const avatarContent =
    avatarType === 'image' ? (
      <img src={avatarImg} alt={title} className="avatar-image" />
    ) : avatarType === 'letter' ? (
      <span className="avatar-letter">{avatarLetter}</span>
    ) : (
      <span className="avatar-icon">{avatarIcon}</span>
    );

  return (
    <div className={`${PREFIX}-3-reviews-cards ${className}`}>
      <div className={`${PREFIX}-3-card -shadow-line -padding-lg`}>
        <div className="reviews-cards-profile">
          <div className={`${PREFIX}-3-avatar -${avatarType}`}>{avatarContent}</div>
          <div className="reviews-cards-text-container">
            <span className="reviews-cards-name">{title}</span>
            <span className="reviews-cards-date">{subtitle}</span>
          </div>
        </div>
        <div className={`reviews-cards-review ${expanded ? '-expanded' : ''}`}>
          <p className="reviews-cards-text">{children}</p>
        </div>
        {useViewMore && (
          <button
            type="button"
            className="reviews-more-button"
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>
    </div>
  );
});

export default ReviewsCards;
