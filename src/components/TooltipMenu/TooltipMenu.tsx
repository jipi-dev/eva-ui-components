import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './tooltip-menu.scss';

export interface TooltipMenuSectionProps {
  separator?: boolean;
  children?: React.ReactNode;
  type?: any;
  className?: string;
}

const Section: React.FC<TooltipMenuSectionProps> = ({ separator = false, children, className = '' }) => (
  <ul className={`tooltip-menu-section ${separator ? '-separator' : ''} ${className}`}>
    {children}
  </ul>
);

export interface TooltipMenuOptionItemProps {
  multiline?: boolean;
  children?: React.ReactNode;
  type?: any;
}

const OptionItem: React.FC<TooltipMenuOptionItemProps> = ({ multiline = false, children }) => (
  <li className={`option-item ${multiline ? '-multiline' : ''}`}>
    {children}
  </li>
);

export interface TooltipMenuSectionTitleProps {
  icon?: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<TooltipMenuSectionTitleProps> = ({ children }) => (
  <li className="section-title">{children}</li>
);

export interface TooltipMenuTitleProps { children?: React.ReactNode; }
const Title: React.FC<TooltipMenuTitleProps> = ({ children }) => (
  <span className="option-title">{children}</span>
);

export interface TooltipMenuSubTitleProps { subarrow?: boolean; children?: React.ReactNode; }
const SubTitle: React.FC<TooltipMenuSubTitleProps> = ({ children, subarrow = false }) => (
  <span className={`option-subtitle ${subarrow ? '-subarrow' : ''}`}>{children}</span>
);

export interface TooltipMenuStatusProps { success?: boolean; error?: boolean; children?: React.ReactNode; }
const Status: React.FC<TooltipMenuStatusProps> = ({ success, error, children }) => (
  <span className={`option-status ${success ? '-success' : ''} ${error ? '-error' : ''}`}>{children}</span>
);

export interface TooltipMenuSubmenuProps { children?: React.ReactNode; }
const Submenu: React.FC<TooltipMenuSubmenuProps> = ({ children }) => (
  <ul className="option-submenu">{children}</ul>
);

export interface TooltipMenuSubmenuItemProps { children?: React.ReactNode; }
const SubmenuItem: React.FC<TooltipMenuSubmenuItemProps> = ({ children }) => (
  <li className="submenu-item">{children}</li>
);

export interface TooltipMenuInfoItemProps { loading?: boolean; children?: React.ReactNode; }
const InfoItem: React.FC<TooltipMenuInfoItemProps> = ({ children }) => (
  <li className="info-item">{children}</li>
);

export interface TooltipMenuProps extends UtilitiesProps {
  /** Scroll vertical */
  scrollY?: boolean;
  /** Posición del puntero */
  pointerPosition?: 'left' | 'right';
  /** Mostrar puntero */
  pointer?: boolean;
  /** Mostrar el tooltip */
  showTooltip?: boolean;
  /** Texto del trigger */
  text?: string;
  children?: React.ReactNode;
}

const TooltipMenu = withUtilities((props: TooltipMenuProps) => {
  const {
    className = '',
    scrollY = false,
    pointer = false,
    children,
    showTooltip = false,
  } = props;

  const classes = classResolver({ '-scroll-y': scrollY });

  if (!showTooltip) return null;

  return (
    <div className={`${PREFIX}-3-tooltip--menu ${classes} ${className}`}>
      {children}
    </div>
  );
});

(TooltipMenu as any).Section = Section;
(TooltipMenu as any).SectionTitle = SectionTitle;
(TooltipMenu as any).OptionItem = OptionItem;
(TooltipMenu as any).Title = Title;
(TooltipMenu as any).SubTitle = SubTitle;
(TooltipMenu as any).Status = Status;
(TooltipMenu as any).Submenu = Submenu;
(TooltipMenu as any).SubmenuItem = SubmenuItem;
(TooltipMenu as any).InfoItem = InfoItem;

export default TooltipMenu;
