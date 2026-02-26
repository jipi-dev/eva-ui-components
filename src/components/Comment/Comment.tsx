import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Rating from '../Rating/Rating';
import Loader from '../Loader/Loader';
import ButtonGhost from '../ButtonGhost/ButtonGhost';
import Flags from '../Flags/Flags';
import Icon from '../Icon/Icon';
import './comment.scss';

export interface CommentProps extends UtilitiesProps {
  /** Código de país para Flags */
  country?: string;
  /** Nombre del usuario */
  name?: string;
  /** Categoría del viaje */
  travelCategory?: string;
  /** Fecha del comentario */
  date?: string;
  /** Puntaje numérico */
  ratingPoints?: string | number;
  /** Score semántico para el Rating */
  ratingScore?: 'good' | 'regular' | 'bad';
  /** Texto del comentario positivo */
  commentGood?: string;
  /** Texto del comentario negativo */
  commentBad?: string;
  /** Muestra el botón de traducir */
  translateBtn?: boolean;
  /** Handler al hacer clic en traducir */
  onClickTranslate?: () => void;
  /** Estado de carga */
  loading?: boolean;
}

const Comment: React.FC<CommentProps> = ({
  country = 'ar',
  name = 'Nombre del Usuario',
  travelCategory = 'Viajo en Familia',
  date = 'Febrero 2020',
  ratingPoints = '9,3',
  ratingScore = 'good',
  commentGood = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  commentBad = 'Nada',
  translateBtn = false,
  className = '',
  loading = false,
  onClickTranslate = () => {},
}) => {
  const [viewMoreGood, setViewMoreGood] = useState(false);
  const [viewMoreBad, setViewMoreBad] = useState(false);

  const classes = classResolver({ '-loading': loading });

  return (
    <div className={`${PREFIX}-3-comment ${className} ${classes}`}>
      <div className="comment-header">
        <div className="comment-flag-container">
          <Flags className="comment-flag" country={country || ''} />
        </div>
        <div className="comment-header-text">
          <span className="comment-name">{name}</span>
          <span className="comment-info">
            <span className="comment-filter">{travelCategory}</span>
            <span className="comment-date">{` - ${date}`}</span>
          </span>
        </div>
        <div className="comment-rating">
          <span className="comment-rating-number">
            <Rating score={ratingScore} size="md">
              {ratingPoints}
            </Rating>
          </span>
          <span className="comment-rating-text">Huésped verificado por Despegar.com</span>
        </div>
      </div>
      <div className="comment-items">
        <div className={`comment-item -pos ${viewMoreGood ? '-read-more' : ''}`}>
          <Icon icon="checkmark" className="comment-icon" />
          <div className="comment-text-container">
            <div className="comment-text-subcontainer">
              <p className="comment-text">
                {commentGood}
                <span role="presentation" className="comment-text-less" onClick={() => setViewMoreGood(false)}>Ver menos</span>
              </p>
            </div>
            <span className="comment-text-more-dots">
              ...
              <span role="presentation" className="comment-text-more" onClick={() => setViewMoreGood(true)}>Ver mas</span>
            </span>
          </div>
        </div>
        <div className={`comment-item -neg ${viewMoreBad ? '-read-more' : ''}`}>
          <Icon icon="cross" className="comment-icon" />
          <div className="comment-text-container">
            <div className="comment-text-subcontainer">
              <p className="comment-text">
                {commentBad}
                <span role="presentation" className="comment-text-less" onClick={() => setViewMoreBad(false)}>Ver menos</span>
              </p>
            </div>
            <span className="comment-text-more-dots">
              ...
              <span role="presentation" className="comment-text-more" onClick={() => setViewMoreBad(true)}>Ver más</span>
            </span>
          </div>
        </div>
        <div className={`comment-items-overlay -${PREFIX}-3-bc-light`}>
          <Loader size="" className="comment-items-loader" stop={!loading} />
        </div>
      </div>
      {translateBtn && (
        <div className="comment-btn">
          <ButtonGhost variant="darken" size="md" onClick={onClickTranslate}>
            Traducir Comentario
          </ButtonGhost>
        </div>
      )}
    </div>
  );
};

export default withUtilities(Comment);
