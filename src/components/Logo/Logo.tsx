import React from 'react';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';
import './logo.scss';

type LogoName =
  | 'isologo_despegar_horizontal_primary'
  | 'isologo_despegar_horizontal_white'
  | 'isologo_despegar_horizontal_tagline_primary'
  | 'isologo_despegar_horizontal_tagline_white'
  | 'isologo_despegar_vertical_primary'
  | 'isologo_despegar_vertical_white'
  | 'isologo_decolar_horizontal_primary'
  | 'isologo_decolar_horizontal_white'
  | 'isologo_decolar_horizontal_tagline_primary'
  | 'isologo_decolar_horizontal_tagline_white'
  | 'isologo_decolar_vertical_primary'
  | 'isologo_decolar_vertical_white'
  | 'symbol_primary'
  | 'symbol_white';

export interface LogoProps extends UtilitiesProps {
  name?: LogoName;
}

const Logo = (props: LogoProps) => {
  const {
    name = 'isologo_despegar_horizontal_primary',
    className = '',
  } = props;

  return (
    <img src={`https://www.staticontent.com/eva-core/assets/logos/0.0.1/${name}.svg`} className={className} alt={name} />
  );
};

export default withUtilities(Logo);
