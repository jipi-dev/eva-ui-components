import React from 'react';
import withUtilities from '../../utilitiesHOC';
import ButtonBase from '../ButtonBase/ButtonBase';
import type { ButtonSize, ButtonVariant, UtilitiesProps } from '../../types';
import type { IconName } from '../Icon/Icon';
import './button.scss';

export interface ButtonProps extends UtilitiesProps {
  /** Button size - controls the visual size of the button */
  size: ButtonSize;
  /** Button variant - controls the visual style and color scheme */
  variant: ButtonVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether to show next arrow icon */
  next?: boolean;
  /** Button content - text or React nodes */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon to display - can be icon name string or boolean to show default */
  icon?: IconName | boolean;
  /** Whether to show only icon (circular button) */
  iconOnly?: boolean;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary Button Component
 * 
 * @description Our design system includes buttons with differences in color usage, size, and shape.
 * Each has a particular use case. This is the main button component for primary actions.
 * 
 * @example
 * ```tsx
 * // Basic primary button
 * <Button size="lg" variant="primary">
 *   Click me
 * </Button>
 * 
 * // Button with icon
 * <Button size="md" variant="secondary" icon="star">
 *   Favorite
 * </Button>
 * 
 * // Icon-only button
 * <Button size="md" variant="primary" iconOnly icon="edit" />
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  disabled = false,
  loading = false,
  children = 'Ver Detalle',
  className = '',
  iconOnly = false,
  onClick,
  icon = false,
  next = false,
  type = 'button',
  ...rest
}) => {
  return (
    <ButtonBase
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      loading={loading}
      next={next}
      onClick={onClick}
      iconOnly={iconOnly}
      icon={icon}
      btnType="default"
      type={type}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

export default withUtilities(Button);