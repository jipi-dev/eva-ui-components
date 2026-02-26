import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Heading from '../Heading/Heading';
import './breadcrumb.scss';

export interface BreadcrumbItemProps {
  last?: boolean;
  itemProp?: string;
  itemScope?: string;
  itemType?: string;
  children?: string;
  href?: string;
  index?: number;
}

const Item = ({
  last,
  itemProp,
  itemScope,
  itemType,
  children = 'Despegar',
  href = '#',
  index,
}: BreadcrumbItemProps) => {
  const innerProps: any = {
    ...(!last && { variant: 'link', href }),
    className: 'breadcrumb-text',
    itemProp,
  };

  const InnerTag = last ? 'span' : Heading;

  return (
    <li
      className="breadcrumb-item"
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      <InnerTag {...innerProps}>{children}</InnerTag>
      <meta itemProp="position" content={String(index)} />
    </li>
  );
};

export interface BreadcrumbProps extends UtilitiesProps {
  children: React.ReactElement<BreadcrumbItemProps> | React.ReactElement<BreadcrumbItemProps>[];
  itemScope?: string;
}

const Breadcrumb = withUtilities((props: BreadcrumbProps) => {
  const {
    className = '',
    children,
    itemScope = 'itemscope',
  } = props;

  const childrens = React.Children.toArray(children);

  return (
    <div className={`${PREFIX}-3-breadcrumb ${className}`}>
      <ul className="breadcrumb-container" itemScope={itemScope} itemType="http://schema.org/BreadcrumbList">
        {childrens.map((child, i) =>
          React.cloneElement(child as React.ReactElement<BreadcrumbItemProps>, {
            last: i === childrens.length - 1,
            index: i,
            itemScope,
          })
        )}
      </ul>
    </div>
  );
});

(Breadcrumb as any).Item = Item;

export default Breadcrumb;
