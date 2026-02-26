import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './order.scss';

export interface OrderItemProps {
  onClick?: () => void;
  icon?: string;
  feedback?: number;
  children?: React.ReactNode;
}

const Item: React.FC<OrderItemProps> = ({
  onClick = () => {},
  icon = 'filter',
  feedback = 0,
  children = 'Filtros',
}) => (
  <li role="presentation" className="order-item" onClick={onClick}>
    <span className="order-link">
      {feedback ? (
        <span className="order-item-badge">{feedback}</span>
      ) : (
        <Icon icon={icon} className="order-item-icon" />
      )}
      <span className="order-text">{children}</span>
    </span>
  </li>
);

export interface OrderProps extends UtilitiesProps {
  children?: React.ReactNode;
}

const Order = withUtilities((props: OrderProps) => {
  const { className = '', children } = props;

  const defaultChildren = [
    <Item key={0} icon="notification" onClick={() => {}}>Alerta</Item>,
    <Item key={1} icon="filter" onClick={() => {}}>Filtros</Item>,
    <Item key={2} feedback={8} onClick={() => {}}>Item Activo</Item>,
  ];

  return (
    <div className={`${PREFIX}-3-order -${PREFIX}-3-shadow-static ${className}`}>
      <ul className="order-container">
        {children || defaultChildren}
      </ul>
    </div>
  );
});

(Order as any).Item = Item;

export default Order;
