import React, { useState } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import './message.scss';

export interface MessageProps extends UtilitiesProps {
  variation: 'info' | 'info-secondary' | 'warning' | 'warning-secondary' | 'success' | 'success-secondary' | 'error' | 'error-secondary';
  title?: string;
  icon?: string;
  noTitle?: boolean;
  collapsible?: boolean;
  noContent?: boolean;
  onCloseClick?: () => void;
  children?: React.ReactNode;
}

const Message = withUtilities((props: MessageProps) => {
  const {
    className = '',
    variation = 'info',
    noTitle = false,
    title = 'Título del mensaje',
    collapsible = false,
    children,
    noContent = false,
    onCloseClick = () => {},
    icon = null,
  } = props;

  const [active, setActive] = useState(false);

  const classes = classResolver({
    [`-${variation}`]: !!variation,
    '-active': active,
    '-collapsible': !!collapsible,
    '-no-title': !!noTitle,
  });

  const variationToIcon: Record<string, string> = {
    info: 'info-circle-filled',
    'info-secondary': 'info-circle-filled',
    warning: 'warning-filled',
    'warning-secondary': 'warning-filled',
    success: 'checkmark-circle-filled',
    'success-secondary': 'checkmark-circle-filled',
    error: 'error-circle-filled',
    'error-secondary': 'error-circle-filled',
  };

  const isToast = className.includes(`${PREFIX}-3-message--toast`);

  return (
    <div
      role="presentation"
      className={`${PREFIX}-3-message ${className} ${classes}`}
      onClick={() => collapsible && !active && setActive(true)}
    >
      {isToast && <Icon icon="cross" className="message-close" role="presentation" tabIndex={0} onClick={onCloseClick} />}
      <div className="message-icon-container">
        <Icon icon={icon || variationToIcon[variation]} className="message-icon" />
      </div>
      {!noTitle && (
        <div className="message-header">
          <Heading className="message-title" variant="h5" tag="h5">
            {title}
          </Heading>
        </div>
      )}
      {!(isToast && noContent) && (
        <div className="message-body">
          {children}
        </div>
      )}
      {isToast
        ? <span className="message-loader" />
        : (collapsible && (
          <Heading className="message-collapsible" variant="link">
            <div role="presentation" className="collapsible-false" onClick={() => setActive(true)}>
              <span className="collapsible-text">Ver más</span>
              <Icon icon="chevron-down" className="collapsible-icon" />
            </div>
            <div role="presentation" className="collapsible-true" onClick={() => setActive(false)}>
              <span className="collapsible-text">Ver menos</span>
              <Icon icon="chevron-down" className="collapsible-icon" />
            </div>
          </Heading>
        ))}
    </div>
  );
});

export interface MessageTextProps {
  tag?: string;
  children?: React.ReactNode;
}

const Text = ({ tag = 'div', children = '' }: MessageTextProps) => (
  <Heading tag={tag} variant="body-2" className="message-text">
    {children}
  </Heading>
);

export interface MessageLinkProps {
  underline?: boolean;
  href?: string;
  target?: string;
  children?: string;
}

const Link = ({
  underline = false,
  href = '#',
  target = '',
  children = '',
}: MessageLinkProps) => (
  <Heading variant={`link${underline ? '-underline' : ''}`} className="message-link" href={href} target={target}>
    {children}
  </Heading>
);

export interface MessageActionProps {
  children?: React.ReactNode;
}

const Action = ({ children }: MessageActionProps) => (
  <div className="message-action">
    {children}
  </div>
);

(Message as any).Text = Text;
(Message as any).Link = Link;
(Message as any).Action = Action;

export default Message;
