import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import Icon from '../Icon/Icon';
import type { UtilitiesProps } from '../../types';
import './tag.scss';

// ── Sub-components ────────────────────────────────────────────────────────────

export interface TagTextProps {
  children?: React.ReactNode;
}

const TagText: React.FC<TagTextProps> = ({ children = 'tag' }) => (
  <span className="tag-text">{children}</span>
);
TagText.displayName = 'TagText';

export interface TagIconProps {
  icon?: string;
}

const TagIcon: React.FC<TagIconProps> = ({ icon = 'info' }) => (
  <Icon icon={icon} className="tag-icon-product" />
);
TagIcon.displayName = 'TagIcon';

// ── Tag component ─────────────────────────────────────────────────────────────

export interface TagProps extends UtilitiesProps {
  /** Active state */
  active?: boolean;
  /** Lighten variant for dark backgrounds */
  lighten?: boolean;
  /** Tag with select/dropdown behaviour */
  select?: boolean;
  /** Click handler — called when close icon is clicked */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  children?: React.ReactNode;
}

/**
 * Tag Component
 *
 * @description Etiqueta interactiva con soporte para íconos y estado activo.
 * Usar Tag.Text para el texto y Tag.Icon para un ícono de producto.
 */
const TagBase: React.FC<TagProps> = ({
  active = false,
  children,
  className = '',
  onClick = () => {},
  lighten = false,
  select = false,
}) => {
  const childrenArray = React.Children.toArray(children);

  const hasIcon = childrenArray.some(
    (child) => React.isValidElement(child) && (child.type as React.ComponentType)?.displayName === 'TagIcon',
  );

  const classes = classResolver({
    '-icon': hasIcon,
    '-active': active,
    '-lighten': lighten,
    '-select': select,
  });

  return (
    <span
      className={`${PREFIX}-3-tag ${classes} ${className}`.replace(/ +/g, ' ').trim()}
      role="presentation"
      onClick={(e) => (!active || hasIcon) && onClick(e)}
      tabIndex={0}
    >
      {children}
      <Icon
        icon="cross"
        className="tag-icon"
        onClick={(e) => {
          e.stopPropagation();
          onClick(e);
        }}
      />
      {select && (
        <Icon
          icon="chevron-down"
          className="tag-icon -select"
          onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
        />
      )}
    </span>
  );
};

const Tag = withUtilities(TagBase) as ReturnType<typeof withUtilities<TagProps>> & {
  Text: typeof TagText;
  Icon: typeof TagIcon;
};

(Tag as any).Text = TagText;
(Tag as any).Icon = TagIcon;

export { TagText, TagIcon };
export default Tag;
