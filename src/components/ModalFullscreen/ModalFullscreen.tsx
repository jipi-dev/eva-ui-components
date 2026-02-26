import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './modalfullscreen.scss';

export interface ModalFullscreenProps extends UtilitiesProps {
  show?: boolean;
  noPadding?: boolean;
  closeOnLeftMobile?: boolean;
  Breadcrumb?: React.ReactNode;
  toggleModal: () => void;
  title?: string;
  noTitle?: boolean;
  children?: React.ReactNode;
}

const ModalFullscreen = (props: ModalFullscreenProps) => {
  const {
    className = '',
    noPadding = false,
    show = false,
    closeOnLeftMobile = false,
    Breadcrumb: BreadcrumbInternal,
    children,
    toggleModal,
    title = 'Tus productos',
    noTitle = false,
  } = props;

  const classes = classResolver({
    '-show-modal': !!show,
    '-no-padding': !!noPadding,
    '-close-on-left': !!closeOnLeftMobile,
  });

  return (
    <div className={`${PREFIX}-3-modal-fullscreen ${className} ${classes}`}>
      <div className="modal-fullscreen-header">
        <Icon
          icon="cross"
          role="button"
          className="modal-fullscreen-close"
          onClick={toggleModal}
          onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
          tabIndex={0}
          aria-label="Close modal"
        />
        <div className="modal-fullscreen-header-container">
          {BreadcrumbInternal && <>{BreadcrumbInternal}</>}
          {!noTitle && (
            <h4 className="modal-fullscreen-title">{title}</h4>
          )}
        </div>
      </div>
      <div className="modal-fullscreen-content">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default withUtilities(ModalFullscreen);
