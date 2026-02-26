import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './luggage.scss';

export interface LuggageItemProps {
  included?: boolean;
  children?: React.ReactNode;
  title?: string;
  type: 'backpack' | 'carryon' | 'baggage';
}

const luggageToIcon: Record<string, string> = {
  backpack: 'backpack',
  carryon: 'handbag',
  baggage: 'suitecase',
};

const Item: React.FC<LuggageItemProps> = ({
  included = false,
  children = 'Debe caber bajo el asiento delantero.',
  title = '',
  type,
}) => (
  <li className={`luggage-item ${included ? '-included' : ''}`}>
    <Icon icon={luggageToIcon[type]} size="md" className="luggage-item-icon" />
    <div className="luggage-item-content">
      <div className="luggage-item-title">{title}</div>
      <div className="luggage-item-description">{children}</div>
    </div>
  </li>
);

export interface LuggageProps extends UtilitiesProps {
  /** Título sobre la lista */
  title?: string;
  /** Separadores entre ítems */
  border?: boolean;
  /** Diseño en columnas */
  columnLayout?: boolean;
  children?: React.ReactNode;
}

const Luggage = withUtilities((props: LuggageProps) => {
  const {
    children,
    border = false,
    title = '',
    columnLayout = false,
    className = '',
  } = props;

  const classes = classResolver({
    '-border': border,
    '-column-layout': columnLayout,
  });

  const defaultChildren = [
    <Item key={0} type="backpack" included title=" Incluye una mochila o cartera ">
      <p>Debe caber bajo el asiento delantero.</p>
    </Item>,
    <Item key={1} type="carryon" included title=" Incluye equipaje de mano ">
      <p>Debe caber en el compartimiento superior del avión.</p>
    </Item>,
    <Item key={2} type="baggage" included={false} title=" No incluye equipaje para despachar ">
      <p>Podrás comprar valijas por un precio exclusivo online.</p>
    </Item>,
  ];

  return (
    <div className={`${PREFIX}-3-luggage ${classes} ${className}`}>
      {title && <div className="luggage-title">{title}</div>}
      <ul className="luggage-list">
        {children || defaultChildren}
      </ul>
    </div>
  );
});

(Luggage as any).Item = Item;

export default Luggage;
