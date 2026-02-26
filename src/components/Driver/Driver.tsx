import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './driver.scss';

export interface DriverIconProps {
  icon?: string;
  className?: string;
}

export interface DriverTextProps {
  children?: string;
  className?: string;
}

export interface DriverProps extends UtilitiesProps {
  /** Variante del driver */
  variant?: '' | 'secondary' | 'benefits' | 'urgent' | 'default-lighten' | 'new' | 'new-lighten' | 'information' | 'success' | 'warning' | 'error' | 'loyalty' | 'unbeatable' | 'mintur';
  /** Jerarquía */
  hierarchy?: string;
  children?: React.ReactNode;
}

const DriverIcon: React.FC<DriverIconProps> = ({ icon = 'star-filled', className = '' }) => (
  <Icon icon={icon} className={`driver-icon ${className}`} />
);

const Text: React.FC<DriverTextProps> = ({ children = 'Driver text', className = '' }) => (
  <span className={`driver-text ${className}`}>{children}</span>
);

const Driver = withUtilities((props: DriverProps) => {
  const { variant = '', hierarchy, children, className = '' } = props;

  const finalVariant = variant ? `-${variant}` : '';
  const finalHierarchy = hierarchy ? `-${hierarchy}` : '';

  return (
    <span className={`${PREFIX}-3-driver ${finalVariant} ${finalHierarchy} ${className}`}>
      {children || <Text>Driver</Text>}
    </span>
  );
});

(Driver as any).Icon = DriverIcon;
(Driver as any).Text = Text;

export default Driver;
