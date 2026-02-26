import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './heading.scss';

export type HeadingVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle-s' | 'body-1' | 'body-2' | 'button' | 'caption'
  | 'overline-1' | 'overline-2' | 'p' | 'link' | 'link-underline';

export interface HeadingProps extends UtilitiesProps {
  /** Visual/semantic variant of the text element */
  variant: HeadingVariant;
  /** Content to render */
  children: React.ReactNode;
  /** Override the HTML tag used to render the element */
  tag?: string;
  /** URL for link variants */
  href?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Heading Component
 *
 * @description Typography component covering headings, paragraphs, captions, overlines, and links.
 * Renders the appropriate HTML tag based on the variant, with support for a custom tag override.
 */
const Heading: React.FC<HeadingProps> = ({
  className = '',
  variant = 'p',
  children,
  tag: CustomTag,
  href,
  onClick,
  ...rest
}) => {
  const getTagFromVariant = (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'p');
  const FinalTag = (CustomTag || ((variant === 'link' || variant === 'link-underline') ? 'a' : getTagFromVariant)) as React.ElementType;

  return (
    <FinalTag className={`${PREFIX}-3-${variant} ${className}`.trim()} href={href} onClick={onClick} {...rest}>
      {children}
    </FinalTag>
  );
};

export default withUtilities(Heading);
