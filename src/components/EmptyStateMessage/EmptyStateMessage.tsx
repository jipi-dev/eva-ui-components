import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './empty-state-message.scss';

export interface EmptyStateMessageProps extends UtilitiesProps {
  /** Variante de imagen de fondo */
  backgroundImage?: 'default' | 'error-state';
  /** Título principal */
  title?: string;
  /** Descripción */
  description?: string;
  /** Texto del botón principal */
  buttonText?: string;
  /** Texto del botón secundario */
  buttonSecondaryText?: string;
  /** Handler del botón principal */
  onClick?: () => void;
  /** Handler del botón secundario */
  onClickSecondary?: () => void;
  /** Layout en caja */
  boxLayout?: boolean;
  /** Sin botón */
  noButton?: boolean;
  /** Layout vertical */
  verticalLayout?: boolean;
  /** Usar ícono en vez de ilustración */
  icon?: boolean;
  /** URL del ícono */
  iconSrc?: string;
}

const EmptyStateMessage = withUtilities((props: EmptyStateMessageProps) => {
  const {
    backgroundImage = 'default',
    title = 'Titulo primario',
    description = 'Descripción',
    buttonText = 'Volver al inicio',
    buttonSecondaryText,
    onClick,
    onClickSecondary,
    boxLayout,
    className = '',
    noButton = false,
    verticalLayout = false,
    icon = false,
    iconSrc = 'https://www.staticontent.com/eva-core/assets/illustrations/despegar/icons/0.0.9/people.svg',
  } = props;

  const classes = classResolver({
    '-error-state': backgroundImage === 'error-state',
    '-box-layout': !!boxLayout,
    '-vertical': verticalLayout,
    '-icon': icon,
    '-secondary-button': !!buttonSecondaryText,
  });

  return (
    <div className={`${PREFIX}-3-empty-state-message ${className} ${classes}`}>
      <div className="empty-state-message-container">
        <div className="empty-state-message-image">
          {icon && boxLayout && backgroundImage !== 'error-state' && (
            <img src={iconSrc} alt="" />
          )}
        </div>
        <div className="empty-state-message-content">
          <div className="empty-state-message-title">{title}</div>
          {description && (
            <p className="empty-state-message-description">{description}</p>
          )}
          {!noButton && (
            <div className="empty-state-message-button">
              <button type="button" className={`${PREFIX}-3-btn -primary -lg`} onClick={onClick}>
                {buttonText}
              </button>
              {buttonSecondaryText && backgroundImage !== 'error-state' && (
                <button type="button" className={`${PREFIX}-3-btn -link -lg`} onClick={onClickSecondary}>
                  {buttonSecondaryText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default EmptyStateMessage;
