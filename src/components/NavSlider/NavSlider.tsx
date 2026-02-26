import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './nav-slider.scss';

export interface NavSliderProps extends UtilitiesProps {
  /** Tamaño del nav slider */
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  /** Variante de color */
  variant?: 'white' | 'negative' | '';
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Ocultar flecha izquierda */
  hideLeft?: boolean;
  /** Ocultar flecha derecha */
  hideRight?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onLeftClick?: React.MouseEventHandler<HTMLDivElement>;
  onRightClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NavSlider = withUtilities((props: NavSliderProps) => {
  const {
    size = 'md',
    variant = 'white',
    disabled = false,
    className = '',
    hideLeft = false,
    hideRight = false,
    onClick,
    onLeftClick = onClick,
    onRightClick = onClick,
  } = props;

  const classes = classResolver({
    [`-${size}`]: !!size,
    '-disabled': disabled,
    [`-${PREFIX}-3-shadow-line-hover`]: variant === 'white',
  });

  return (
    <div>
      {!hideLeft && (
        <div
          role="button"
          className={`${PREFIX}-3-nav-slider ${classes} -${variant} ${className} ${!hideLeft && !hideRight ? '-left' : ''}`}
          onClick={(e) => !disabled && onLeftClick && onLeftClick(e)}
          onKeyPress={(e: any) => e.keyCode === 37 && !disabled && onLeftClick && onLeftClick(e)}
          tabIndex={0}
        >
          <Icon icon="chevron-left" className="nav-slider-icon" />
        </div>
      )}
      {!hideRight && (
        <div
          role="button"
          className={`${PREFIX}-3-nav-slider ${classes} -${variant} ${className} ${!hideLeft && !hideRight ? '-right' : ''}`}
          onClick={(e) => !disabled && onRightClick && onRightClick(e)}
          onKeyPress={(e: any) => e.keyCode === 39 && !disabled && onRightClick && onRightClick(e)}
          tabIndex={0}
        >
          <Icon icon="chevron-right" className="nav-slider-icon" />
        </div>
      )}
    </div>
  );
});

export default NavSlider;
