import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import './tooltip.scss';

export interface TooltipProps extends UtilitiesProps {
  size?: '' | 'sm';
  text?: React.ReactNode;
  title?: string | boolean;
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left-inline-top' | 'left-inline' | 'left-inline-bottom' | 'right-inline-top' | 'right-inline' | 'right-inline-bottom';
  positionTablet?: '' | 'left' | 'center' | 'right';
  positionMobile?: '' | 'left' | 'center' | 'right';
  white?: boolean;
  smFull?: boolean;
  closeIcon?: boolean;
  showTooltip?: boolean;
  toggleTooltip?: () => void;
  notHover?: '' | 'all' | 'small' | 'medium' | 'large';
  marker?: boolean;
  steps?: boolean;
  coachmark?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const {
    size = '',
    text = 'Hover me!',
    children,
    title = '',
    position = 'top-left',
    positionTablet = '',
    positionMobile = '',
    white = false,
    smFull = false,
    closeIcon = false,
    showTooltip = false,
    toggleTooltip = () => {},
    className = '',
    notHover = '',
    marker = true,
    steps = false,
    coachmark = false,
    tag: Tag = 'span',
    ...other
  } = props;

  const positionSplit = position.includes('inline') ? `-${position}` : `-${position.split('-').join(' -')}`;

  const classes = classResolver({
    [`-${size}`]: !!size,
    [`-medium-${positionTablet}`]: !!positionTablet,
    [`-small-${positionMobile}`]: !!positionMobile,
    '-white': !!white,
    '-sm-full': !!smFull,
    '-close': !!closeIcon,
    '-show-tooltip': !!showTooltip,
    [`-not-hover${notHover === 'all' ? '' : `-${notHover}`}`]: !!notHover,
  });

  return (
    <Tag className={`${PREFIX}-3-tooltip ${classes} ${positionSplit} ${className}`} {...other}>
      {text && <span>{text}</span>}
      <span className={`tooltip-container -${PREFIX}-3-shadow-static ${coachmark ? (steps ? '--steps' : '') : ''}`}>
        {marker && <i className="tooltip-marker" />}
        {closeIcon && (
          <Icon
            icon="cross"
            className="tooltip-close"
            tabIndex={0}
            role="button"
            aria-label="Close"
            onKeyDown={toggleTooltip}
            onClick={toggleTooltip}
          />
        )}
        {coachmark ? children : (
          <span className="tooltip-content">
            {title && <Heading tag="h5" variant="h5" className="tooltip-title">{title}</Heading>}
            <span className="tooltip-text">{children}</span>
          </span>
        )}
      </span>
    </Tag>
  );
};

export default withUtilities(Tooltip);
