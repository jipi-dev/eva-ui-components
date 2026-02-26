import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './modalbottomsheet.scss';

export interface ModalBottomSheetProps extends UtilitiesProps {
  show?: boolean;
  expanded?: boolean;
  title?: string;
  showStickyFooter?: boolean;
  footer?: React.ReactNode;
  closeOnClickOutside?: boolean;
  onClose?: (event: React.MouseEvent, source: string) => void;
  children?: React.ReactNode;
}

const ModalBottomSheet = (props: ModalBottomSheetProps) => {
  const {
    className = '',
    children,
    title = '',
    show = false,
    showStickyFooter = false,
    footer = '',
    expanded = false,
    closeOnClickOutside = false,
    onClose = () => {},
  } = props;

  const classes = classResolver({
    '-show-modal-bottom-sheet': !!show,
    '-expanded': !!expanded,
  });

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnClickOutside) {
      onClose(event, 'overlay');
    }
  };

  return (
    <div
      className={`${PREFIX}-3-modal-bottom-sheet ${className} ${classes}`}
      role="presentation"
      onClick={handleOverlayClick}
    >
      <div className="sheet-container" onClick={(e) => e.stopPropagation()} role="presentation">
        {title && <h4 className="sheet-title">{title}</h4>}
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

export default withUtilities(ModalBottomSheet);
