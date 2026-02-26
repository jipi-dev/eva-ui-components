import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './mealplans.scss';

type MealplanIllustration =
  | 'all-inclusive' | 'breakfast' | 'american-breakfast'
  | 'continental-breakfast' | 'buffet-breakfast' | 'full-board' | 'half-board' | 'magic';

export interface MealplansProps extends UtilitiesProps {
  /** Texto a mostrar */
  children?: string;
  /** Ilustración del plan de comida */
  illustration?: MealplanIllustration;
  /** Ruta local a los recursos */
  localResourcesPath?: string;
}

const Mealplans = withUtilities((props: MealplansProps) => {
  const {
    children = 'label text',
    illustration = 'all-inclusive',
    localResourcesPath = '/ui/dist/resources/sprites',
    className = '',
  } = props;

  return (
    <div className={`${PREFIX}-3-mealplans ${className}`}>
      <img
        className="mealplans-img"
        src={`${localResourcesPath}/ic-${illustration}.svg`}
        alt={String(children)}
      />
      {children}
    </div>
  );
});

export default Mealplans;
