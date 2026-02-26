import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './nav-dots.scss';

// ── Dot sub-component ─────────────────────────────────────────────────────────

export interface DotProps {
  className?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const Dot: React.FC<DotProps> = ({ className = '', active = false, onClick }) => (
  <li
    role="presentation"
    className={`nav-dot ${className} ${active ? '-active' : ''}`.replace(/ +/g, ' ').trim()}
    onClick={onClick}
  />
);
Dot.displayName = 'NavDotsDot';

// ── NavDots component ─────────────────────────────────────────────────────────

export interface NavDotsProps extends UtilitiesProps {
  /** Dot position alignment */
  position?: '' | 'left' | 'center' | 'right';
  /** Color variant */
  variant?: '' | 'lighten';
  /** Size variant */
  size?: '' | 'sm' | 'lg';
  /** Enable carousel distance-based active classes */
  carousel?: boolean;
  /** Dot elements */
  children?: React.ReactElement<DotProps>[];
}

function getDotClass(dotIndex: number, activeIndex: number): string {
  const d = Math.abs(dotIndex - activeIndex);
  if (d === 0) return '-active';
  if (d === 1) return '-nearest';
  if (d === 2) return '-near';
  return '-far';
}

const NavDotsBase: React.FC<NavDotsProps> = ({
  position = '',
  variant = '',
  size = '',
  carousel = false,
  className = '',
  children = [],
}) => {
  const classes = classResolver({
    [`-${position}`]: !!position,
    [`-${size}`]: !!size,
    [`-${variant}`]: !!variant,
    '-carousel': carousel,
  });

  const dots = React.Children.toArray(children) as React.ReactElement<DotProps>[];

  const renderDots = () => {
    if (carousel) {
      const activeDotIndex = dots.findIndex((el) => el.props.active);
      return dots.map((el, i) =>
        React.cloneElement(el, {
          key: i,
          className: `${el.props.className ?? ''} ${getDotClass(i, activeDotIndex)}`.trim(),
        }),
      );
    }
    return dots.map((child, i) => React.cloneElement(child, { key: i }));
  };

  return (
    <ul className={`${PREFIX}-3-nav-dots ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      {renderDots()}
    </ul>
  );
};

const NavDots = withUtilities(NavDotsBase) as ReturnType<typeof withUtilities<NavDotsProps>> & {
  Dot: typeof Dot;
};

(NavDots as any).Dot = Dot;

export { Dot };
export default NavDots;
