import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import './pagination.scss';

export interface PaginationItemProps {
  icon?: '' | 'left' | 'right';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
  children: string | number;
}

const Item = ({
  icon = '',
  href,
  onClick,
  active,
  children,
}: PaginationItemProps) => (
  <li className={`pagination-item-container ${icon ? (icon === 'left' ? 'page-prev' : 'page-next') : ''}`}>
    <Heading
      tag="a"
      variant="link"
      href={href}
      onClick={onClick}
      className={`${!icon ? 'pagination-item' : ''} ${active ? '-active' : ''}`}
    >
      {icon ? (
        <>
          {icon === 'left' && <Icon icon="arrow-left" className="pagination-icon" />}
          <em className="pagination-icon-text">{children}</em>
          {icon === 'right' && <Icon icon="arrow-right" className="pagination-icon" />}
        </>
      ) : children}
    </Heading>
  </li>
);

export interface PaginationProps extends UtilitiesProps {
  active: number;
  children?: React.ReactElement<PaginationItemProps> | React.ReactElement<PaginationItemProps>[];
  onNextClick?: () => void;
  onPreviousClick?: () => void;
  previousText?: string;
  nextText?: string;
}

const Pagination = withUtilities((props: PaginationProps) => {
  const {
    className = '',
    active = 2,
    children,
    onNextClick = () => {},
    onPreviousClick = () => {},
    previousText = 'Anterior',
    nextText = 'Siguiente',
  } = props;

  const childArray = children
    ? ((children as any).type === React.Fragment
      ? (children as any).props.children
      : React.Children.toArray(children))
    : [];

  return (
    <div className={`${PREFIX}-3-pagination ${className}`}>
      <ul className="pagination-container">
        {active > 1 && (
          <Item icon="left" onClick={onPreviousClick}>
            {previousText}
          </Item>
        )}
        {childArray.map((child: React.ReactElement<PaginationItemProps>, i: number) =>
          React.cloneElement(child, {
            active: i + 1 === active,
            key: child.props.children as string,
          })
        )}
        {active < childArray.length && (
          <Item icon="right" onClick={onNextClick}>{nextText}</Item>
        )}
      </ul>
    </div>
  );
});

(Pagination as any).Item = Item;

export default Pagination;
