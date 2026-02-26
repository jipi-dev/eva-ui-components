import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './nav-view-more.scss';

export interface NavViewMoreProps extends UtilitiesProps {
  /** Tipo de variante */
  variant?: 'elements' | 'images';
  /** Texto debajo del ícono */
  label?: string;
  /** Handler de clic */
  onClick?: () => void;
}

const NavViewMore = withUtilities((props: NavViewMoreProps) => {
  const {
    variant = 'elements',
    label = 'Ver más',
    className = '',
    onClick = () => {},
  } = props;

  const classes = classResolver({
    [`-${PREFIX}-3-tc-blue-3`]: variant === 'elements',
    [`-${PREFIX}-3-tc-white`]: variant !== 'elements',
  });

  return (
    <div
      role="presentation"
      className={`${PREFIX}-3-nav-view-more ${className} ${classes}`}
      onClick={onClick}
    >
      {variant === 'elements' ? (
        <div className={`view-more-circle -${PREFIX}-3-shadow-static-hover`}>
          <Icon icon="arrow-bold-right" size="md" className="view-more-icon" />
        </div>
      ) : (
        <Icon icon="picture" size="xxlg" className="view-more-icon" />
      )}
      <span className="view-more-label">{label}</span>
    </div>
  );
});

export default NavViewMore;
