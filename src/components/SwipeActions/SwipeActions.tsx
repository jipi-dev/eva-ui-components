import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './swipe-actions.scss';

export interface SwipeActionsProps extends UtilitiesProps {
  /** Muestra variante de acción principal */
  primaryAction?: boolean;
  /** Muestra variante de acción secundaria */
  secondaryAction?: boolean;
  /** Handler de clic */
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const SwipeActions = withUtilities((props: SwipeActionsProps) => {
  const {
    primaryAction = false,
    secondaryAction = false,
    onClick,
  } = props;

  const classes = classResolver({
    '-primary-action': primaryAction,
    '-secondary-action': secondaryAction,
  });

  return (
    <ul className={`${PREFIX}-3-swipe-actions ${classes}`}>
      <li
        className="swipe-actions-button -delete"
        role="menuitem"
        onClick={onClick}
        onKeyPress={onClick as any}
      >
        <Icon className="swipe-actions-icon" icon="trash" size="xsm" />
        Eliminar
      </li>
      <li
        className="swipe-actions-button"
        role="menuitem"
        onClick={onClick}
        onKeyPress={onClick as any}
      >
        <Icon className="swipe-actions-icon" icon="more" size="xsm" />
        Más
      </li>
    </ul>
  );
});

export default SwipeActions;
