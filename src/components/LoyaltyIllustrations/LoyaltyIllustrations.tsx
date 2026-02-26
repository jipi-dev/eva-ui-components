import React from 'react';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';

type LoyaltyIllustrationName =
  | 'benefits-calendar' | 'benefits-discounts' | 'benefits-pay-with-points'
  | 'benefits-plane' | 'benefits-validity' | 'mechanics-arrow' | 'mechanics-check'
  | 'mechanics-passport' | 'mechanics-pay-with-points' | 'mechanics-pending'
  | 'mechanics-travel' | 'modal-check' | 'modal-map' | 'modal-passport'
  | 'modal-pending' | 'feedback-error' | 'feedback-on-hold' | 'feedback-success';

export interface LoyaltyIllustrationsProps extends UtilitiesProps {
  /** Nombre de la ilustración Loyalty */
  name: LoyaltyIllustrationName;
  /** Ruta local a los recursos */
  localResourcesPath?: string;
}

const LoyaltyIllustrations = withUtilities((props: LoyaltyIllustrationsProps) => {
  const {
    name = 'benefits-calendar' as LoyaltyIllustrationName,
    className = '',
    localResourcesPath = '/ui/dist/resources/sprites',
  } = props;

  return (
    <img
      src={`${localResourcesPath}/ly-${name}.svg`}
      className={className}
      alt={name}
    />
  );
});

export default LoyaltyIllustrations;
