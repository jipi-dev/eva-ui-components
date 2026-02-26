import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './marker.scss';

export interface MarkerProps extends UtilitiesProps {
  /** Variante del marker */
  variant?: '' | 'secondary';
  /** Marker POI */
  poi?: boolean;
  /** Marker de ubicación */
  location?: boolean;
  /** Precio a mostrar */
  price?: string;
  /** Imagen del marker */
  image?: string;
  /** Ícono del marker */
  icon?: string;
  /** Estado activo */
  active?: boolean;
  /** Estado visitado */
  visited?: boolean;
  /** Minimarcador */
  minimarker?: boolean;
  /** Expandido */
  expand?: boolean;
}

const Marker = withUtilities((props: MarkerProps) => {
  const {
    variant = '',
    poi = false,
    location = false,
    price = '',
    icon = 'rentals-ui',
    image = '',
    className = '',
    active = false,
    visited = false,
    minimarker = false,
    expand = false,
  } = props;

  const classes = classResolver({
    [`-${variant}`]: !!variant,
    '-poi-marker': poi,
    '-location-marker': location,
    '-active': active,
    '-visited': visited,
    '-minimarker': minimarker,
    '-expand': expand,
  });

  return (
    <div className={`${PREFIX}-3-marker ${!location ? `-${PREFIX}-3-shadow-1` : ''} ${classes} ${className}`}>
      <div className="marker-container">
        {poi && !location && <Icon icon="poi" />}
        {!poi && !location && icon && !image && <Icon icon={icon} />}
        {!poi && !location && image && <img src={image} alt="map marker" />}
        {!poi && !location && price && !minimarker && <span className="marker-text">{price}</span>}
        {!poi && !location && price && minimarker && expand && <span className="marker-text">{price}</span>}
        {!poi && !location && <span className="marker-tip" />}
      </div>
    </div>
  );
});

export default Marker;
