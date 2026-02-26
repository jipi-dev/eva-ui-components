import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './segmentedcontrol.scss';

export interface SegmentedControlItemProps {
  active?: boolean;
  icon?: string;
  children?: React.ReactNode;
  id?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}

const Item = ({
  active = false,
  icon = '',
  children,
  id = '',
  onClick,
  ...rest
}: SegmentedControlItemProps) => (
  <li className="segmented-item">
    <button
      className={`segmented-button ${active ? '-active' : ''}`}
      type="button"
      id={id}
      onClick={onClick}
      {...rest}
    >
      {icon && <Icon icon={icon} className="segmented-button-icon" size="sm" />}
      {children && <span className="segmented-button-text">{children}</span>}
    </button>
  </li>
);

export interface SegmentedControlProps extends UtilitiesProps {
  children?: React.ReactNode;
  darken?: boolean;
}

const SegmentedControl = withUtilities((props: SegmentedControlProps) => {
  const {
    children,
    className = '',
    darken = false,
    ...rest
  } = props;

  const validChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as React.ReactElement).type === Item,
  );

  const itemsCount = validChildren.length;
  const segmentsClass = `-segments-${Math.min(Math.max(itemsCount, 2), 4)}`;
  const darkenClass = darken ? '-darken' : '';

  return (
    <ul className={`${PREFIX}-3-segmented-control ${segmentsClass} ${darkenClass} ${className}`} {...rest}>
      {validChildren}
    </ul>
  );
});

(SegmentedControl as any).Item = Item;

export default SegmentedControl;
