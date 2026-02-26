import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './dropdown.scss';

export interface DropdownItemProps {
  children: React.ReactNode;
  viewMore?: boolean;
  [key: string]: any;
}

const Item = ({ children, viewMore = false, ...rest }: DropdownItemProps) => (
  <li className={`dropdown-subitem ${viewMore ? 'view-more-content' : ''}`} {...rest}>
    <span className="dropdown-item-container" tabIndex={0}>
      {children}
    </span>
  </li>
);

export interface DropdownProps extends UtilitiesProps {
  title: string;
  titleClassName?: string;
  initialStateOpen?: boolean;
  onToggle?: (state: { isOpen: boolean }) => void;
  children: React.ReactNode;
}

const Dropdown = withUtilities((props: DropdownProps) => {
  const {
    className = '',
    title = 'Título dropdown',
    titleClassName = '',
    children,
    initialStateOpen = false,
    onToggle,
  } = props;

  const [open, setOpen] = useState(initialStateOpen);

  const classes = classResolver({
    '-active': open,
  });

  const onToggleHandler = () => {
    setOpen((o) => !o);
    if (onToggle) onToggle({ isOpen: !open });
  };

  return (
    <ul className={`${PREFIX}-3-dropdown ${className}`}>
      <li className={`dropdown-item ${classes}`}>
        <span role="presentation" className="dropdown-item-container" onClick={onToggleHandler} tabIndex={0}>
          <span className={`item-label ${titleClassName}`}>{title}</span>
          <Icon icon="chevron-down" className="dropdown-icon" />
        </span>
        <ul className="dropdown-subcontent">
          {children}
        </ul>
      </li>
    </ul>
  );
});

(Dropdown as any).Item = Item;

export default Dropdown;
