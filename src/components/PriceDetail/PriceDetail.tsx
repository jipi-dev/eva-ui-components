import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './price-detail.scss';

export interface PriceDetailItemProps {
  children?: React.ReactNode;
  borderTop?: boolean;
  className?: string;
}

const Item: React.FC<PriceDetailItemProps> = ({
  children = 'Some content',
  borderTop = false,
  className = '',
}) => {
  const classes = classResolver({ '-border-top': borderTop });
  return <div className={`-price-detail-item ${classes} ${className}`}>{children}</div>;
};

export interface PriceDetailDoubleProps {
  title?: string;
  description?: string;
  borderTop?: boolean;
  className?: string;
}

const Double: React.FC<PriceDetailDoubleProps> = ({
  title = '',
  description = '',
  borderTop = false,
  className = '',
}) => {
  const classes = classResolver({ '-border-top': borderTop });
  return (
    <div className={`-price-detail-item -price-detail-double ${classes} ${className}`}>
      <span className="price-detail-double-title">{title}</span>
      <span className="price-detail-double-description">{description}</span>
    </div>
  );
};

export interface PriceDetailProps extends UtilitiesProps {
  /** Título principal */
  title?: string;
  /** Descipción bajo el título */
  description?: string;
  /** Título de precio principal */
  mainTitle?: string;
  /** Moneda */
  mainCurrency?: string;
  /** Precio principal */
  mainAmmount?: string;
  /** Padding interno */
  innerPadding?: boolean;
  children?: React.ReactNode;
}

const PriceDetail = withUtilities((props: PriceDetailProps) => {
  const {
    title = 'Desglose de precio',
    description = 'Viaje a Cancún',
    mainTitle = 'Precio por persona',
    mainCurrency = '$',
    mainAmmount = '20.000',
    children,
    innerPadding = false,
    className = '',
  } = props;

  const classes = classResolver({ '-inner-padding': innerPadding });

  const defaultChildren = [
    <Double key="1" title="Precio por persona" description="$ 999.999" />,
    <Double key="2" borderTop title="2 personas" description="$ 2.400" />,
    <Double key="3" title="Impuestos" description="$ 240" />,
    <Item key="4" borderTop className={`${PREFIX}-3-p`}>¡Pagá hasta 12 cuotas!</Item>,
  ];

  return (
    <div className={`${PREFIX}-3-price-detail ${className} ${classes}`}>
      <div className={`-price-detail-item ${PREFIX}-3-h4`}>{title}</div>
      {description && <div className="-price-detail-item body-1">{description}</div>}
      <div className="-price-detail-item -price-main-title">{mainTitle}</div>
      <div className="-price-detail-item -price-main">
        <em>{mainCurrency}</em>
        <span>{mainAmmount}</span>
      </div>
      {children || defaultChildren}
    </div>
  );
});

(PriceDetail as any).Item = Item;
(PriceDetail as any).Double = Double;

export default PriceDetail;
