import React from 'react';
import withUtilities from '../../utilitiesHOC';
import ButtonBase from '../ButtonBase/ButtonBase';
import { capitalize } from '../../utils/utils';
import type { ButtonSize, UtilitiesProps } from '../../types';
import type { IconName } from '../Icon/Icon';
import './button-social.scss';

export type ButtonSocialVariant = 'google' | 'facebook' | 'x' | 'twitter';

export interface ButtonSocialProps extends UtilitiesProps {
  /** Button size */
  size: ButtonSize;
  /** Social network variant */
  variant: ButtonSocialVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Button content - defaults to "Ingresa con {variant}" */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * ButtonSocial Component
 *
 * @description Social network login buttons. Used for signing in with Google, Facebook, X, or Twitter.
 */
const ButtonSocial: React.FC<ButtonSocialProps> = ({
  size = 'lg',
  variant = 'google',
  disabled = false,
  loading = false,
  className = '',
  children,
  onClick,
  ...rest
}) => {
  const finalIcon: IconName = variant === 'facebook' ? 'social-facebook-filled' : `social-${variant}` as IconName;

  return (
    <ButtonBase
      className={`${className} ${disabled ? '-disable' : ''}`.trim()}
      size={size}
      variant={variant}
      disabled={disabled}
      loading={loading}
      next={false}
      onClick={onClick}
      iconOnly={false}
      icon={finalIcon}
      btnType="social"
      {...rest}
    >
      {children || `Ingresa con ${capitalize(variant)}`}
    </ButtonBase>
  );
};

export default withUtilities(ButtonSocial);
