import React from 'react';
import withUtilities from '../../utilitiesHOC';
import ButtonBase from '../ButtonBase/ButtonBase';
import type { ButtonSize, ButtonGhostVariant, UtilitiesProps } from '../../types';
import type { IconName } from '../Icon/Icon';
import './button-ghost.scss';

export interface ButtonGhostProps extends UtilitiesProps {
  /** Button size - controls the visual size of the button */
  size: ButtonSize;
  /** Button variant - controls the visual style specific to ghost buttons */
  variant: ButtonGhostVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Button content - text or React nodes */
  children: React.ReactNode;
  /** URL for anchor behavior (renders as <a> tag) */
  href?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Whether to show next arrow icon */
  next?: boolean;
  /** Icon to display - can be icon name string or boolean to show default */
  icon?: IconName | boolean;
  /** Whether to show only icon (circular button) */
  iconOnly?: boolean;
  /** Input ID for accessibility when used with form inputs */
  inputId?: string;
}

/**
 * Ghost Button Component
 * 
 * @description Our design system includes buttons with differences in color usage, size, and shape.
 * Ghost buttons are transparent with borders, used for secondary actions or when you need
 * a lighter visual impact.
 * 
 * @example
 * ```tsx
 * // Basic ghost button
 * <ButtonGhost size="lg" variant="">
 *   Secondary Action
 * </ButtonGhost>
 * 
 * // Ghost button with darken variant
 * <ButtonGhost size="md" variant="darken" icon="info">
 *   Learn More
 * </ButtonGhost>
 * 
 * // Ghost button as link
 * <ButtonGhost size="lg" variant="lighten" href="/help">
 *   Help Center
 * </ButtonGhost>
 * ```
 */
const ButtonGhost: React.FC<ButtonGhostProps> = ({
  size = 'lg',
  variant = '',
  disabled = false,
  loading = false,
  children = 'Ver Detalle',
  className = '',
  iconOnly = false,
  onClick,
  icon = false,
  next = false,
  href,
  inputId,
  ...rest
}) => {
  return (
    <ButtonBase
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      loading={loading}
      href={href}
      next={next}
      onClick={onClick}
      iconOnly={iconOnly}
      icon={icon}
      btnType="ghost"
      id={inputId}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

export default withUtilities(ButtonGhost);