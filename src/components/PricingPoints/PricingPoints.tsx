import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './pricing-points.scss';

export interface PricingPointsProps extends UtilitiesProps {
  /** Contenido al lado del logo */
  children?: React.ReactNode;
}

const PricingPoints = withUtilities((props: PricingPointsProps) => {
  const { children, className = '' } = props;

  const defaultChildren = [
    'Podrías sumar ',
    <span key={1} className={`-${PREFIX}-3-bold`}>xxx puntos</span>,
  ];

  return (
    <div className={`${PREFIX}-3-pricing-points ${className}`}>
      <img
        className="pricing-points-logo"
        src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
        alt="Logo del programa de Loyalty"
      />
      <span>{children || defaultChildren}</span>
    </div>
  );
});

export default PricingPoints;
