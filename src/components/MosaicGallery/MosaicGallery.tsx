import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './mosaic-gallery.scss';

export interface MosaicGalleryImageProps {
  alt?: string;
  src?: string;
  [key: string]: any;
}

const Image: React.FC<MosaicGalleryImageProps> = ({
  alt = 'Imagen Descriptiva del Producto',
  src = '',
  ...props
}) => <img alt={alt} className="mosaic-gallery-image" src={src} {...props} />;

export interface MosaicGalleryProps extends UtilitiesProps {
  /** Mostrar botón "Ver galería" */
  showButton?: boolean;
  /** Botón a la izquierda */
  buttonOnLeft?: boolean;
  /** Callback del botón */
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const MosaicGallery = withUtilities((props: MosaicGalleryProps) => {
  const {
    showButton = true,
    onButtonClick = () => {},
    className = '',
    buttonOnLeft = false,
    children,
  } = props;

  const classes = classResolver({ '-loyalty': buttonOnLeft });

  const defaultImages = [
    <Image src="https://media.staticontent.com/media/pictures/9e906a58-0164-402d-91fe-162717d47c42/1000x600" alt="image 1" key={1} />,
    <Image src="https://media.staticontent.com/media/pictures/00146a96-82dc-4299-91ea-f7a645ea2b77/465x264" alt="image 2" key={2} />,
    <Image src="https://media.staticontent.com/media/pictures/eb8a5c6d-6894-4eed-af71-46542fc6cb90/235x143" alt="image 3" key={3} />,
    <Image src="https://media.staticontent.com/media/pictures/791146c8-93f6-45f0-a293-5ed82dbbf8d9/235x143" alt="image 4" key={4} />,
  ];

  const imagesArr = children
    ? React.Children.toArray(children)
    : defaultImages;

  const classesArr = [
    imagesArr.length > 1 ? '-lg-8 -md-6' : '-md-12',
    '-lg-4 -md-6',
    imagesArr.length === 3 ? '-lg-4 -md-6' : '-lg-2 -md-3',
    '-lg-2 -md-3',
  ];

  return (
    <div className={`${PREFIX}-3-mosaic-gallery ${className} ${classes}`}>
      {showButton && (
        <div className="mosaic-gallery-actions-container">
          <button
            type="button"
            onClick={onButtonClick}
            onKeyPress={onButtonClick}
            className="mosaic-gallery-button"
          >
            Ver galería
          </button>
        </div>
      )}
      <ul className="mosaic-gallery-list">
        {imagesArr.map((image, i) => (
          <li key={i} className={`mosaic-gallery-item ${classesArr[i] || ''}`}>
            {image}
          </li>
        ))}
      </ul>
    </div>
  );
});

(MosaicGallery as any).Image = Image;

export default MosaicGallery;
