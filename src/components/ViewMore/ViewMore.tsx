import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './viewmore.scss';

export interface ViewMoreProps extends UtilitiesProps {
  size?: '' | 'sm';
  viewMoreText?: string;
  viewLessText?: string;
  variant?: '' | 'collapsible-bottom' | 'collapsible-top';
  header?: React.ReactNode;
  controlClassName?: string;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  contentClassName?: string;
  double?: boolean;
  show?: boolean;
  children?: React.ReactNode;
}

const ViewMore = (props: ViewMoreProps) => {
  const {
    size = 'sm',
    viewMoreText = 'Ver más',
    viewLessText = 'Ver menos',
    variant = '',
    className = '',
    header,
    controlClassName,
    onClick,
    contentClassName = '',
    double,
    show = false,
    children,
  } = props;

  const [showMore, setShowMore] = useState(false);

  const classes = classResolver({
    [`-${size}`]: !!size,
    [`-${variant}`]: !!variant,
    '-show-more': show || showMore,
  });

  const ViewMoreControl = ({ className: ctrlClass }: { className?: string }) => (
    <div
      className={`view-more-btn ${ctrlClass || ''}`}
      role="presentation"
      onClick={(e) => (onClick ? onClick(e) : setShowMore((s) => !s))}
      onKeyDown={(e) => (onClick ? onClick(e) : setShowMore((s) => !s))}
    >
      <span className="view-more-btn-text">{!(show || showMore) ? viewMoreText : viewLessText}</span>
      <Icon icon="chevron-down" className="view-more-btn-icon" />
    </div>
  );

  return (
    <div className={`${PREFIX}-3-view-more ${classes} ${className}`}>
      {header}
      {variant === 'collapsible-top' && <ViewMoreControl className={controlClassName} />}
      <div className={`view-more-content ${contentClassName} `}>
        {children}
      </div>
      {(double || ((variant === '' && !(show || showMore)) || variant === 'collapsible-bottom')) && (
        <ViewMoreControl className={controlClassName} />
      )}
    </div>
  );
};

export default withUtilities(ViewMore);
