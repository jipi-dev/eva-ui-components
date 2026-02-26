import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Icon from '../Icon/Icon';
import './label.scss';

export interface LabelContent {
  primary: string;
  secondary?: string;
}

export interface LabelProps extends UtilitiesProps {
  size: 'sm' | 'md';
  variant: 'green' | 'loyalty' | 'purple' | 'compound' | 'secret-deals' | 'member-deals' | 'member-deals-logged';
  ribbonPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  content?: LabelContent;
}

const Label = (props: LabelProps) => {
  const {
    size = 'md',
    variant = 'green',
    ribbonPosition = 'top-left',
    content = { primary: '-30%', secondary: '%' },
    className = '',
  } = props;

  const isCompound = variant === 'compound' || variant === 'member-deals' || variant === 'member-deals-logged';
  const ribbonPositionIsLeft = ribbonPosition === 'top-left' || ribbonPosition === 'bottom-left';

  const compoundLabelContainerMarkup = (
    <span className={`label-container ${variant === 'compound' ? `-${PREFIX}-3-bc-white` : `-${PREFIX}-3-bc-bubblegum-1`}`}>
      {variant === 'compound' && <Icon icon="gift" className={`label-icon -${PREFIX}-3-tc-red-3`} />}
      {(variant === 'member-deals' || variant === 'member-deals-logged') && (
        <Icon icon="loyalty-filled" className="label-icon" />
      )}
      <span className={`-${PREFIX}-3-bold label-text ${variant === 'compound' ? `-${PREFIX}-3-tc-gray-1` : ''}`}>
        {content.secondary}
      </span>
    </span>
  );

  return (
    <div className={`${PREFIX}-3-label -${size} -${ribbonPosition} ${className} -${isCompound ? 'compound' : variant}`}>
      {isCompound && !ribbonPositionIsLeft && compoundLabelContainerMarkup}
      <span className="label-container">
        {variant === 'secret-deals' && <Icon icon="gift" className={`label-icon -${PREFIX}-3-tc-red-3`} />}
        {variant === 'purple' && <Icon icon="pig-offer" className="label-icon" />}
        {variant === 'loyalty' && <Icon icon="loyalty-filled" className="label-icon" />}
        <span className={`-${PREFIX}-3-bold label-text ${variant === 'member-deals-logged' ? '-linethrough' : ''}`}>
          {content.primary}
        </span>
      </span>
      {isCompound && ribbonPositionIsLeft && compoundLabelContainerMarkup}
    </div>
  );
};

export default withUtilities(Label);
