import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './modal.scss';

export interface ModalProps extends UtilitiesProps {
  show?: boolean;
  toggleModal?: () => void;
  title?: string;
  titleLg?: boolean;
  noPadding?: boolean;
  showStickyFooter?: boolean;
  variant?: '' | 'close-on-left' | 'close-on-left-with-title';
  borderBottom?: boolean;
  hideHeader?: boolean;
  smoothScroll?: boolean;
  size?: '' | 'sm';
  noHeader?: boolean;
  tiers?: boolean;
  color?: boolean | string;
  closeOnClickOutside?: boolean;
  footer?: React.ReactNode;
  noCloseIcon?: boolean;
  headerImage?: React.ReactNode;
  closeIconColor?: '' | 'white';
  children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const {
    show = false,
    toggleModal = () => {},
    title = 'Titulo del modal',
    children,
    titleLg = false,
    noPadding = false,
    showStickyFooter = false,
    variant = '',
    borderBottom = false,
    hideHeader = false,
    smoothScroll = false,
    size = '',
    noHeader = false,
    className = '',
    tiers = false,
    color = false,
    closeOnClickOutside = true,
    footer = <></>,
    noCloseIcon = false,
    headerImage = '',
    closeIconColor = '',
  } = props;

  const classes = classResolver({
    '-show-modal': !!show,
    '-title-lg': !!titleLg,
    '-no-padding': !!noPadding,
    '-image-header': !!headerImage,
    '-show-sticky-footer': !!showStickyFooter,
    [`-${size}`]: !!size,
    '-close-on-left': !!variant,
    '-border-bottom': !!borderBottom,
    '-hide-header': !!hideHeader,
    '-smooth-scroll': !!smoothScroll,
    '-close-icon-white': closeIconColor === 'white' && !!headerImage,
  });

  return (
    <div
      role="presentation"
      className={`${PREFIX}-3-modal ${className} ${classes}`}
      onClick={() => closeOnClickOutside && toggleModal()}
    >
      {!noHeader && (
        (!headerImage && (
          <div className="modal-header" role="presentation" onClick={(e) => e.stopPropagation()}>
            {!noCloseIcon && (
              <>
                <Icon
                  role="button"
                  icon="cross"
                  marginRight="md"
                  className={`modal-close ${tiers && color ? `-${PREFIX}-3-tc-white` : ''}`}
                  onClick={toggleModal}
                  onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
                  tabIndex={0}
                  aria-label="Close modal"
                  {...(variant !== '' ? { hideContent: 'small' } : {})}
                />
                {variant !== '' && (
                  <Icon
                    role="button"
                    icon={variant !== '' ? 'arrow-bold-left' : 'cross'}
                    marginRight="md"
                    className={`modal-close ${tiers && color ? `-${PREFIX}-3-tc-white` : ''}`}
                    onClick={toggleModal}
                    onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
                    tabIndex={0}
                    aria-label="Close modal"
                    hideContent="mediumUp"
                  />
                )}
              </>
            )}
            {variant !== 'close-on-left' && (
              <div className="modal-title-container">
                <h4 className="modal-title">{title}</h4>
              </div>
            )}
          </div>
        )) || (!!headerImage && (
          <div className="modal-header" role="presentation" onClick={(e) => e.stopPropagation()}>
            {headerImage}
            <Icon
              role="button"
              icon="cross"
              className={`modal-close ${color ? `-${PREFIX}-3-tc-white` : ''}`}
              onClick={toggleModal}
              onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
              tabIndex={0}
              aria-label="Close modal"
            />
          </div>
        ))
      )}
      <div className="modal-content" role="presentation" onClick={(e) => e.stopPropagation()}>
        {variant === 'close-on-left' && (
          <h4 className="modal-title">{title}</h4>
        )}
        {!noCloseIcon && noHeader && (
          <Icon
            role="button"
            icon="cross"
            marginRight="md"
            className={`modal-close ${color ? `-${PREFIX}-3-tc-white` : ''}`}
            onClick={toggleModal}
            onKeyPress={(e: React.KeyboardEvent) => ((e as any).keyCode === 27 ? toggleModal() : null)}
            tabIndex={0}
            aria-label="Close modal"
          />
        )}
        {children}
      </div>
      {showStickyFooter && (
        <div className="modal-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default withUtilities(Modal);
