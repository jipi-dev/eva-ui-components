import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './pricebox-sticky.scss';

export interface PriceboxStickyProps extends UtilitiesProps {
  /** Tipo de descuento */
  typeDiscount?: 'green' | 'purple' | 'desktop-white' | string;
  /** Versión loyalty */
  loyaltyVersion?: 'accumulation' | 'redemption' | '';
  /** Mostrar descuento */
  discount?: boolean;
  /** Mostrar ícono de información */
  infoIcon?: boolean;
  /** Precio largo */
  largePrice?: boolean;
  /** Driver de Disney */
  disneyDriver?: boolean;
  /** Mensaje */
  message?: string;
  /** Handler del botón */
  onClick?: () => void;
  /** Texto del driver */
  driverText?: string;
  /** Precio */
  price?: string;
  /** Moneda */
  currency?: string;
}

const PriceboxSticky = withUtilities((props: PriceboxStickyProps) => {
  const {
    className = '',
    typeDiscount = 'green',
    loyaltyVersion = 'accumulation',
    discount = false,
    infoIcon = false,
    largePrice = false,
    disneyDriver = false,
    message = 'San Pedro, una escapada con energía rural',
    onClick = () => {},
    driverText = '6 días al precio de 4',
    price = '20.000',
    currency = '$',
  } = props;

  const classes = classResolver({
    '-with-info': infoIcon,
    '-with-label': discount || disneyDriver,
    '-loyalty': loyaltyVersion === 'accumulation' || loyaltyVersion === 'redemption',
    [`-${typeDiscount}`]: !!typeDiscount,
  });

  return (
    <div className={`${PREFIX}-3-pricebox-sticky ${PREFIX}-3-shadow ${className} ${classes}`}>
      <div className="pricebox-content-container">
        <div className="pricebox-sticky-more-info">
          <span className="pricebox-sticky-message">{message}</span>
          {loyaltyVersion === 'accumulation' && (
            <div className="pricebox-sticky-loyalty-container">
              Podrías sumar <span className={`-${PREFIX}-3-bold`}>300 puntos</span>
            </div>
          )}
          {loyaltyVersion === 'redemption' && (
            <p className={`pricebox-sticky-loyalty-container -${PREFIX}-3-tc-bubblegum-1`}>
              Usando 4.038 puntos ($ 4.000)
            </p>
          )}
          <div className="pricebox-sticky-info-container">
            <div className={`-${PREFIX}-3-tc-gray-0 pricebox-sticky-price ${largePrice ? '-long' : ''}`}>
              <span className="pricebox-sticky-currency">{currency}</span>
              <span className="pricebox-sticky-amount">{price}</span>
            </div>
          </div>
        </div>
        <div className="pricebox-sticky-action">
          <button
            type="button"
            className={`${PREFIX}-3-btn -primary -md`}
            onClick={onClick}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
});

export default PriceboxSticky;
