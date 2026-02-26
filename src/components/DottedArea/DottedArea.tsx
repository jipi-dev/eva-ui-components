import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './dotted-area.scss';

export interface DottedAreaProps extends UtilitiesProps {
  /** Formatos de archivo aceptados */
  acceptedFormats?: string[];
  /** Ref para el input */
  dottedRef?: React.Ref<HTMLInputElement>;
  /** Handler de cambio de archivo */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Estado de arrastre (DEPRECATED) */
  dragging?: boolean;
  /** Contenido del área */
  children?: React.ReactNode;
  onDragEnter?: React.DragEventHandler<HTMLLabelElement>;
  onDragLeave?: React.DragEventHandler<HTMLLabelElement>;
  onDragOver?: React.DragEventHandler<HTMLLabelElement>;
  onDrop?: React.DragEventHandler<HTMLLabelElement>;
  /** ID del input */
  inputId?: string;
  [key: string]: any;
}

const DottedArea = withUtilities((props: DottedAreaProps) => {
  const {
    className = '',
    acceptedFormats = ['bmp', 'pdf', 'jpeg', 'jpg', 'png'],
    dottedRef,
    onChange = () => {},
    dragging = false,
    children,
    onDragEnter = (e: React.DragEvent) => e.preventDefault(),
    onDragLeave = (e: React.DragEvent) => e.preventDefault(),
    onDragOver = (e: React.DragEvent) => e.preventDefault(),
    onDrop = (e: React.DragEvent) => e.preventDefault(),
    inputId = 'uploader-input',
    ...rest
  } = props;

  return (
    <label
      className={`${PREFIX}-3-dotted-area ${className}`}
      htmlFor={inputId}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      {...rest}
    >
      <div className="message">
        <div className="message-icon">
          <Icon icon="upload" size="md" />
        </div>
        {children || (
          <p>
            <span>Cargá los documentos</span>{' '}o arrastralos a esta sección.
          </p>
        )}
      </div>
      <input
        className={`-${PREFIX}-3-hide`}
        type="file"
        id={inputId}
        ref={dottedRef as React.Ref<HTMLInputElement>}
        onChange={onChange}
        accept={acceptedFormats.join(',')}
      />
    </label>
  );
});

export default DottedArea;
