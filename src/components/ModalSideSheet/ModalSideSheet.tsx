import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './modalsidesheet.scss';

export interface ModalSideSheetProps extends UtilitiesProps {
  show?: boolean;
  toggleModal: () => void;
  white?: boolean;
  fixedHeader?: boolean;
  noPadding?: boolean;
  noTitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  position?: 'right' | 'left';
  title?: string;
  showStickyFooter?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const ModalSideSheet = (props: ModalSideSheetProps) => {
  const {
    className = '',
    children,
    show = false,
    toggleModal = () => {},
    white = false,
    fixedHeader = false,
    noPadding = false,
    noTitle = false,
    size = 'sm',
    position = 'right',
    title = 'Titulo, este es un titulo muy largo por eso lleva ellipsis',
    showStickyFooter = false,
    footer = '',
  } = props;

  const classes = classResolver({
    '-show-modal-side-sheet': !!show,
    '-white': !!white,
    '-fixed-header': !!fixedHeader,
    '-no-padding': !!noPadding,
    '-no-title': !!noTitle,
    [`-${size}`]: !!size,
    [`-${position}`]: !!position,
  });

  return (
    <div className={`${PREFIX}-3-modal-side-sheet ${className} ${classes}`}>
      <div className="sheet-container">
        <div className="sheet-header">
          {!noTitle && <h4 className="sheet-title">{title}</h4>}
          <Icon
            className="modal-close"
            icon="cross"
            onClick={toggleModal}
            role="button"
            onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
            tabIndex={0}
            aria-label="Close modal"
          />
        </div>
        <div className="sheet-content">
          {children}
        </div>
        {showStickyFooter && (
          <div className="sheet-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default withUtilities(ModalSideSheet);
