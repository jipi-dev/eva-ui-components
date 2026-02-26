import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './upload-item.scss';

export interface UploadItemProps extends UtilitiesProps {
  /** Estado del ítem */
  status?: 'info' | 'success' | 'error' | 'loading';
  /** Nombre del archivo */
  name?: string;
  /** Función para eliminar el archivo */
  removeFile?: () => void;
  /** Progreso (0-100) */
  progress?: number;
  /** Descripción */
  description?: string;
  /** Ocultar botón eliminar */
  hideClose?: boolean;
  children?: React.ReactNode;
}

const UploadItem = withUtilities((props: UploadItemProps) => {
  const {
    className = '',
    status = 'info',
    name = 'Nombre_del_archivo_subido.jpg',
    removeFile,
    progress = 30,
    description = 'Estamos subiendo tu archivo...',
    children = <></>,
    hideClose = false,
  } = props;

  const iconMap: Record<string, string> = {
    info: 'document',
    success: 'document',
    error: 'error-circle',
    loading: 'time',
  };

  return (
    <div className={`${PREFIX}-3-upload-item ${className} -${status}`}>
      {!hideClose && (
        <Icon
          icon="cross"
          className="upload-item-cancel"
          onClick={removeFile}
          role="button"
          onKeyPress={(e: any) => e.keyCode === 27 && removeFile && removeFile()}
          tabIndex={0}
          aria-label="Remove file"
        />
      )}
      <span className="item-status-container">
        <Icon state={status} icon={iconMap[status]} size="sm" />
      </span>
      <span className="item-data-container">
        <div className={`upload-item-title -${PREFIX}-3-ellipsis -${PREFIX}-3-mb-sm`}>{name}</div>
        <div className="upload-item-description">{description}</div>
      </span>
      {status === 'loading' ? (
        <div className="upload-item-message-container">
          <div
            className="upload-item-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
      ) : (
        children && React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<any>, { className: 'upload-item-message-container' })
          : typeof children === 'string'
            ? <div className={`upload-item-message-container -${status}`}>{children}</div>
            : null
      )}
    </div>
  );
});

export default UploadItem;
