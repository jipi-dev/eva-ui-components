import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import NavSlider from '../NavSlider/NavSlider';
import Icon from '../Icon/Icon';
import './sub-nav.scss';

// ── SubNav.Item ──────────────────────────────────────────────────────────────

export interface SubNavItemProps {
  /** Icon name from the EVA icon library. Adds `-icon` modifier. */
  icon?: string;
  /** Secondary label rendered below the main label. Adds `-subtitle` modifier. */
  subtitle?: string;
  /** Marks the item as the currently active tab. */
  active?: boolean;
  /** Prevents interaction. */
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  children: React.ReactNode;
}

const Item: React.FC<SubNavItemProps> = ({
  className = '',
  icon,
  subtitle,
  children,
  active = false,
  disabled = false,
  onClick,
}) => {
  const classes = classResolver({
    '-icon': !!icon,
    '-subtitle': !!subtitle,
    '-active': active,
    '-disabled': disabled,
  });

  return (
    <li
      role="menuitem"
      className={`sub-nav-item ${classes} ${className}`.trim()}
      onClick={!disabled ? onClick : undefined}
      onKeyPress={!disabled ? (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(e as any); } : undefined}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-current={active ? 'page' : undefined}
    >
      {icon && <Icon icon={icon} className="sub-nav-icon" />}
      <span className="sub-nav-label">{children}</span>
      {subtitle && <span className="sub-nav-label">{subtitle}</span>}
    </li>
  );
};

// ── SubNav ───────────────────────────────────────────────────────────────────

export interface SubNavProps extends UtilitiesProps {
  /**
   * Enables scroll-arrow navigation buttons.
   * - `'right'` → shows right arrow (at start of list)
   * - `'left'`  → shows left arrow (scrolled to end)
   * - `'both'`  → shows both
   * - `''`      → no arrows (default)
   */
  scrollTo?: '' | 'left' | 'right' | 'both';
  /** Extra classes for the inner `sub-nav-container` div. */
  containerClassName?: string;
  /** Adds a border stroke around the component. */
  stroke?: boolean;
  /** Adds border-radius to the component. */
  rounded?: boolean;
  /** Color theme. Defaults to `'default'` (white background). */
  theme?: 'default' | 'dark' | 'gray';
  children: React.ReactNode;
}

const SubNavBase = withUtilities((props: SubNavProps) => {
  const {
    className = '',
    children,
    theme = 'default',
    scrollTo = '',
    containerClassName = '',
    stroke = false,
    rounded = false,
  } = props;

  const classes = classResolver({
    '-first': scrollTo === 'right',
    '-last': scrollTo === 'left',
    '-first -last': scrollTo === 'both',
    '-stroke': stroke,
    '-rounded': rounded,
    [`-${theme}`]: theme !== 'default',
  });

  const showLeft  = scrollTo === 'both' || scrollTo === 'left';
  const showRight = scrollTo === 'both' || scrollTo === 'right';

  return (
    <nav className={`${PREFIX}-3-sub-nav ${classes} ${className}`.trim()} role="menubar">
      <div className="sub-nav-corners-container">
        {showLeft && (
          <NavSlider
            size="sm"
            variant="white"
            className="sub-nav-arrow-first"
            hideRight
          />
        )}
        {showRight && (
          <NavSlider
            size="sm"
            variant="white"
            className="sub-nav-arrow-last"
            hideLeft
          />
        )}
        <div className={`sub-nav-container ${containerClassName}`.trim()}>
          <ul className="sub-nav-items-container">
            {React.Children.map(children, (child) => child ?? null)}
          </ul>
        </div>
      </div>
    </nav>
  );
});

// Attach Item as static member so callers can write <SubNav.Item>
const SubNav = SubNavBase as typeof SubNavBase & { Item: typeof Item };
SubNav.Item = Item;

export { Item as SubNavItem };
export default SubNav;
