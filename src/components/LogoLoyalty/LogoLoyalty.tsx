import React from 'react';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';
import './logoloyalty.scss';

type LogoLoyaltyName =
  | 'loyalty-logo'
  | 'loyalty-logo-white'
  | 'loyalty-isologotipo'
  | 'loyalty-isologotipo-white'
  | 'loyalty-isologotipo-decolar'
  | 'loyalty-isologotipo-decolar-white';

export interface LogoLoyaltyProps extends UtilitiesProps {
  name?: LogoLoyaltyName;
  localResourcesPath?: string;
}

const LogoLoyalty = (props: LogoLoyaltyProps) => {
  const {
    name = 'loyalty-logo',
    className = '',
    localResourcesPath = '/ui/dist/resources/images',
  } = props;

  return (
    <img src={`${localResourcesPath}/${name}.svg`} className={className} alt={name} />
  );
};

export default withUtilities(LogoLoyalty);
