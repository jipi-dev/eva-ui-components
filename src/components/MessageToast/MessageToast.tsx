import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Message from '../Message/Message';
import './messagetoast.scss';

export interface MessageToastProps extends UtilitiesProps {
  variation: 'info' | 'info-secondary' | 'warning' | 'warning-secondary' | 'success' | 'success-secondary' | 'error' | 'error-secondary';
  loading?: boolean;
  noContent?: boolean;
  noTitle?: boolean;
  withButton?: boolean;
  onCloseClick?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const MessageToast = withUtilities((props: MessageToastProps) => {
  const {
    className = '',
    loading = false,
    noContent = false,
    noTitle = false,
    children,
    withButton = false,
    ...rest
  } = props;

  const classes = classResolver({
    '-loading': !!loading,
    '-no-content': !!noContent,
    '-with-button': !!withButton,
  });

  return (
    <Message
      {...rest}
      className={`${PREFIX}-3-message--toast ${classes} ${className}`}
      noTitle={noTitle}
      noContent={noContent}
      shadow="static"
    >
      {!noContent ? children : null}
    </Message>
  );
});

(MessageToast as any).Text = (Message as any).Text;
(MessageToast as any).Link = (Message as any).Link;
(MessageToast as any).Action = (Message as any).Action;

export default MessageToast;
