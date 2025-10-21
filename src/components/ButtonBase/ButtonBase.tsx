import React from 'react';
import { classResolver, PREFIX } from '../../utils/utils';
import Icon from '../Icon/Icon';
import type { ButtonSize, ButtonVariant, ButtonGhostVariant, ButtonType, CommonProps } from '../../types';
import type { IconName } from '../Icon/Icon';

export interface ButtonBaseProps extends CommonProps {
  size?: ButtonSize;
  variant?: ButtonVariant | ButtonGhostVariant;
  disabled?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  iconOnly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconName | boolean;
  next?: boolean;
  btnType?: ButtonType;
  href?: string;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * ButtonBase component - Core button implementation used by all button variants
 * 
 * @description Base component that is used by Button, ButtonGhost, and social buttons.
 * Handles both anchor and button elements based on the presence of href prop.
 */
const ButtonBase: React.FC<ButtonBaseProps> = ({
  size = 'lg',
  variant = 'primary',
  disabled = false,
  children = 'Ver detalle',
  loading = false,
  className = '',
  iconOnly = false,
  onClick,
  icon = false,
  next = false,
  btnType = 'default',
  href,
  loadingText = 'Cargando',
  type = 'button',
  ...rest
}) => {
  // Button content based on iconOnly prop
  const buttonContent = iconOnly ? (
    <Icon icon={typeof icon === 'string' ? icon as IconName : 'edit'} className="btn-icon" />
  ) : (
    <>
      {icon && typeof icon === 'string' && (
        <Icon icon={icon as IconName} className="btn-icon" />
      )}
      <em className="btn-text">{children}</em>
      {next && <Icon icon="chevron-right" className="btn-icon" />}
      {loading && <span className="btn-status">{loadingText}</span>}
    </>
  );

  // Generate CSS classes
  const propsClasses = classResolver({
    [`-${size}`]: !!size,
    [`-${variant}`]: !!variant,
    '-disable': disabled,
    '-loading': loading,
    '-circle': iconOnly,
  });

  const baseClass = `${PREFIX}-3-btn${
    btnType && btnType !== 'default' ? `-${btnType}` : ''
  }`;
  
  const classes = `${baseClass} ${className} ${propsClasses}`
    .replace(/ +/g, ' ')
    .trim();

  // Common props for both button and anchor
  const commonProps = {
    className: classes,
    ...rest,
  };

  // Render as anchor if href is provided and no onClick handler
  if (href && !onClick) {
    return (
      <a
        href={href}
        {...commonProps}
        {...(disabled && { 'aria-disabled': true })}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      {buttonContent}
    </button>
  );
};

export default ButtonBase;