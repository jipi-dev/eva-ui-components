import React, { forwardRef } from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import DottedArea from '../DottedArea/DottedArea';
import './uploader.scss';

export interface UploaderProps extends UtilitiesProps {
  /** Formatos aceptados */
  acceptedFormats?: string[];
  /** Handler de archivos seleccionados */
  setFiles?: React.ChangeEventHandler<HTMLInputElement>;
  /** Estado de arrastre */
  dragging?: boolean;
  /** Texto del área punteada */
  text?: React.ReactNode;
  /** Ref del uploader interno */
  uploaderRef?: React.Ref<HTMLInputElement>;
  onDragEnter?: React.DragEventHandler<HTMLLabelElement>;
  onDragLeave?: React.DragEventHandler<HTMLLabelElement>;
  onDragOver?: React.DragEventHandler<HTMLLabelElement>;
  onDrop?: React.DragEventHandler<HTMLLabelElement>;
  /** ID del input interno */
  inputId?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const Uploader = withUtilities(
  forwardRef<HTMLInputElement, UploaderProps>((props, ref) => {
    const {
      className = '',
      acceptedFormats = ['bmp', 'pdf', 'jpeg', 'jpg', 'png'],
      setFiles = () => {},
      children = <></>,
      dragging = false,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
      text = 'Cargá los documentos o arrastralos a esta sección. Hasta 5 MB y en formato pdf, bmp, jpeg, jpg o png.',
      uploaderRef,
      ...rest
    } = props;

    return (
      <div className={`${PREFIX}-3-uploader ${className}`}>
        <div className="uploader-dotted-area-container">
          <DottedArea
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            acceptedFormats={acceptedFormats}
            dottedRef={uploaderRef || ref}
            onChange={setFiles}
            dragging={dragging}
            {...rest}
          >
            {text}
          </DottedArea>
        </div>
        <div className="uploader-items-container">{children}</div>
      </div>
    );
  })
);

export default Uploader;
