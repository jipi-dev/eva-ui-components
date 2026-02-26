import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './re-search.scss';

export interface ReSearchItemProps {
  showTooltip?: boolean;
  action?: boolean;
  tooltipText?: string;
  tooltip?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<ReSearchItemProps> = ({
  action = false,
  children,
}) => (
  <li className={`re-search-item ${action ? 're-search-action' : ''}`}>
    <span className="item-container">{children}</span>
  </li>
);

export interface ReSearchProps extends UtilitiesProps {
  /** Sticky type */
  sticky?: string;
  /** Múltiples columnas */
  multipleColumns?: boolean;
  /** Variante púrpura */
  purple?: boolean;
  /** Con inputs */
  withInputs?: boolean;
  /** Mostrar el componente */
  show?: boolean;
  /** Switch activo */
  switchActive?: boolean;
  /** Handler del switch de redención */
  redemptionOnClick?: () => void;
  children?: React.ReactNode;
}

const ReSearch = withUtilities((props: ReSearchProps) => {
  const {
    className = '',
    sticky,
    multipleColumns = false,
    purple = false,
    withInputs = false,
    children,
    switchActive = false,
    redemptionOnClick = () => {},
    show = true,
  } = props;

  const [showContent, setShowContent] = useState(false);

  const classes = classResolver({
    '-show-content': showContent,
    '-with-inputs': withInputs,
    '-multiple-columns': multipleColumns,
    '-purple': purple,
    [`-${sticky}`]: !!sticky,
    '-show': show,
    '-hide': !show,
  });

  return (
    <div className={`${PREFIX}-3-re-search -${PREFIX}-3-shadow-static-hover ${className} ${classes}`}>
      <ul
        role="presentation"
        className="re-search-container"
        onClick={() => setShowContent((s) => !s)}
      >
        {children}
      </ul>
      <div
        role="presentation"
        className={`re-search-content -${PREFIX}-3-shadow-bottom`}
        onClick={() => setShowContent((s) => !s)}
      >
        <div className={`${PREFIX}-3-transition`}><span>searchbox!</span></div>
      </div>
    </div>
  );
});

(ReSearch as any).Item = Item;

export default ReSearch;
