import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './pricebox-cluster.scss';

export interface PriceboxClusterProps extends UtilitiesProps {
  /** Responsive layout */
  responsive?: boolean;
  /** Versión loyalty acumulación */
  loyaltyAccumulation?: boolean;
  /** Versión loyalty redención */
  loyaltyRedemption?: boolean;
  /** Texto pequeño superior */
  smallText?: string;
  /** Precio principal */
  bigText?: number | string;
  /** Centavos */
  cents?: string;
  /** Descripción debajo del precio */
  description?: string;
  /** Handler del botón */
  onClick?: () => void;
  /** Nuevos puntos loyalty */
  loyaltyNewPoints?: number;
  /** Puntos a usar */
  usingPoints?: number;
  /** Precio usando puntos */
  usingPrice?: number;
  /** Texto tachado */
  strikethroughText?: string;
  /** Símbolo de moneda */
  currency?: string;
}

const PriceboxCluster = withUtilities((props: PriceboxClusterProps) => {
  const {
    className = '',
    responsive = false,
    loyaltyAccumulation = false,
    loyaltyRedemption = false,
    smallText = 'Precio por adulto desde',
    bigText = 222539,
    cents = '00',
    description = 'Total por 10 días $20.000',
    onClick = () => {},
    loyaltyNewPoints = 300,
    usingPoints = 4058,
    usingPrice = 4000,
    strikethroughText = '',
    currency = '$',
  } = props;

  const classes = classResolver({
    '-responsive': responsive,
    '-loyalty': loyaltyAccumulation || loyaltyRedemption,
  });

  return (
    <div className={`${PREFIX}-3-pricebox-cluster ${classes} ${className}`}>
      <div className="pricebox-top-container">
        <div className="pricebox-value-container">
          <div className="pricebox-small-text">{smallText}</div>
          <div className="pricebox-value">
            {strikethroughText && (
              <div className="pricebox-strikethrough-text">{strikethroughText}</div>
            )}
            <span className="pricebox-info-icon">
              <Icon icon="info" />
            </span>
            <span className="pricebox-currency">{currency}</span>
            <span className="pricebox-big-text">{bigText}</span>
            <span className="pricebox-cents">{cents}</span>
          </div>
          <div className="pricebox-small-text -description">{description}</div>
          {loyaltyRedemption && (
            <div className={`pricebox-small-text -loyalty-description -${PREFIX}-3-tc-bubblegum-1`}>
              Usando {usingPoints} puntos (${usingPrice})
            </div>
          )}
        </div>
        <div className="pricebox-action">
          <button
            type="button"
            className={`${PREFIX}-3-btn -primary -md -full-width`}
            onClick={onClick}
          >
            Comprar
          </button>
        </div>
      </div>
      {loyaltyAccumulation && !loyaltyRedemption && (
        <div className="pricebox-loyalty-container">
          Sumás <span className={`-${PREFIX}-3-bold`}>{loyaltyNewPoints} puntos</span>
        </div>
      )}
      <div className="pricebox-bottom-container">cuotas</div>
    </div>
  );
});

export default PriceboxCluster;
