import React from 'react';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';
import './illustrations.scss';

type IllustrationScene =
  | 'destination-adventure' | 'destination-beach' | 'destination-mountain'
  | 'destination-city' | 'feedback-success' | 'feedback-error' | 'feedback-done'
  | 'feedback-empty-state' | 'feedback-empty-state-2' | 'planning-group'
  | 'planning-dates' | 'planning-next-trip' | string;

export interface IllustrationsProps extends UtilitiesProps {
  /** Nombre de la escena */
  scene?: IllustrationScene;
  /** Nombre del ícono */
  icon?: string;
  /** Nombre de la composición */
  composition?: string;
  /** Marca/brand */
  brand?: string;
  /** Versión */
  version?: string;
  /** Host de resources */
  host?: string;
  alt?: string;
  [key: string]: any;
}

const Illustrations = withUtilities((props: IllustrationsProps) => {
  const {
    scene,
    icon,
    composition,
    brand = 'despegar',
    version = '0.0.8',
    className = '',
    host = 'staticontent',
    ...rest
  } = props;

  const category = scene ? 'scenes' : icon ? 'icons' : 'compositions';
  const name = scene || icon || composition;

  return (
    <img
      src={`https://www.${host}.com/eva-core/assets/illustrations/${brand}/${category}/${version}/${name}.svg`}
      className={className}
      alt={`${category}-${name}`}
      {...rest}
    />
  );
});

export default Illustrations;
