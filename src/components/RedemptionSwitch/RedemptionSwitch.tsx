import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Switch from '../Switch/Switch';
import Icon from '../Icon/Icon';
import './redemption-switch.scss';

type RedemptionVariant =
  | '' | 'horizontal' | 'pill' | 'reSearch' | 'collapsedReSearch'
  | 'unregisteredUser' | 'reSearchUnregisteredUser' | 'reSearchCollapsedUnregisteredUser';

export interface RedemptionSwitchProps extends UtilitiesProps {
  /** Versión desktop */
  desktop?: boolean;
  /** Handler de clic */
  onClick?: (e: React.MouseEvent) => void;
  /** ID del switch */
  switchId?: string;
  /** Título */
  title?: string;
  /** Subtítulo */
  subtitle?: string;
  /** Variante */
  variant?: RedemptionVariant;
  [key: string]: any;
}

const RedemptionSwitch = withUtilities((props: RedemptionSwitchProps) => {
  const {
    className = '',
    desktop = false,
    onClick = () => {},
    switchId = 'example-switch-redemption-switch',
    title = 'Empezá a sumar puntos',
    subtitle = 'Registrate',
    variant = '',
    ...rest
  } = props;

  const variantTable: Record<string, Record<string, boolean | string>> = {
    '': { switch: true, size: 'md' },
    horizontal: { horizontal: true, switch: true },
    pill: { pill: true, switch: true },
    reSearch: { switch: true, highlighted: true },
    collapsedReSearch: { switch: true, collapsed: true },
    unregisteredUser: { card: true },
    reSearchUnregisteredUser: { card: true, highlighted: true },
    reSearchCollapsedUnregisteredUser: { card: true, collapsed: true },
  };

  const variantProps = variantTable[variant] || variantTable[''];
  const isSwitch = !!variantProps.switch;
  const horizontal = !!variantProps.horizontal;
  const highlighted = !!variantProps.highlighted;
  const collapsed = !!variantProps.collapsed;
  const card = !!variantProps.card;
  const pill = !!variantProps.pill;

  const classes = classResolver({
    '-loyalty': true,
    '-horizontal': horizontal,
    '-collapsed': collapsed,
    '-highlighted': highlighted,
    '-card': card,
    '-desktop': desktop,
    '-pill': pill,
  });

  return (
    <div
      className={`${PREFIX}-3-redemption-switch ${classes} ${className}`}
      onClick={(e) => !isSwitch && onClick(e)}
      role="presentation"
    >
      {!(horizontal || pill) && (
        <img
          alt="redemption logo"
          className="redemption-logo"
          src={`https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-${highlighted ? 'isologotipo' : 'logo'}.svg`}
        />
      )}
      {(horizontal || pill) && (
        <Icon icon="loyalty-filled" size="xsm" className={`-${PREFIX}-3-tc-bubblegum-1`} />
      )}
      <div className="redemption-content">
        {!pill && (
          <div className={`redemption-title -${PREFIX}-3-bold ${card ? `-${PREFIX}-3-tc-bubblegum-1` : ''}`}>
            {title}
          </div>
        )}
        <div className={`redemption-subtitle ${card ? `-${PREFIX}-3-tc-bubblegum-1` : ''}`}>
          {subtitle}
          {card && <Icon icon="chevron-right" size="xsm" />}
        </div>
        {isSwitch && (
          <Switch
            id={switchId}
            className="redemption-switch-toggle"
            {...rest}
          />
        )}
      </div>
    </div>
  );
});

export default RedemptionSwitch;
