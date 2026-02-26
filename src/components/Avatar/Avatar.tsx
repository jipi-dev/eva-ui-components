import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import Icon from '../Icon/Icon';
import type { UtilitiesProps } from '../../types';
import './avatar.scss';

export type AvatarType = 'image' | 'letter' | 'icon';
export type AvatarSize = '' | 'md';

export interface AvatarProps extends UtilitiesProps {
  /** Visual variant */
  type?: AvatarType;
  /** Size modifier */
  size?: AvatarSize;
  /** Image URL — used when type is "image" */
  imageSrc?: string;
  /** Letter to display — used when type is "letter" */
  letter?: string;
  /** Icon name — used when type is "icon" */
  icon?: string;
  /** Alt text for image avatars */
  alt?: string;
}

/**
 * Avatar Component
 *
 * @description Avatar de usuario en tres variantes: imagen, letra o ícono.
 */
const Avatar: React.FC<AvatarProps> = ({
  type = 'icon',
  size = '',
  imageSrc,
  letter = 'L',
  icon = 'user',
  alt = 'Avatar',
  className = '',
}) => {
  const sizeClass = size ? `-${size}` : '';

  if (type === 'image') {
    return (
      <div className={`${PREFIX}-3-avatar -${type} ${sizeClass} ${className}`.trim()}>
        <img className="avatar-image" src={imageSrc} alt={alt} />
      </div>
    );
  }

  return (
    <div className={`${PREFIX}-3-avatar -${type} ${sizeClass} ${className}`.trim()}>
      <span className={`avatar-${type}`}>
        {type === 'icon' ? <Icon icon={icon} /> : letter}
      </span>
    </div>
  );
};

export default withUtilities(Avatar);
