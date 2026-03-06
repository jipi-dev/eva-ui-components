import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import NavDots from '../NavDots/NavDots';
import NavSlider from '../NavSlider/NavSlider';
import './carousel.scss';

// ── CarouselNavigation sub-component ──────────────────────────────────────────

export interface CarouselNavigationProps {
  className?: string;
  /** Muestra NavSliders a los lados del área de navegación inferior */
  hasSubNav?: boolean;
  children?: React.ReactNode;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  className = '',
  hasSubNav = false,
  children,
}) => (
  <div className={`carousel-navigation-container ${className}`.trim()}>
    {hasSubNav && (
      <NavSlider size="sm" variant="white" hideRight />
    )}
    {children}
    {hasSubNav && (
      <NavSlider size="sm" variant="white" hideLeft />
    )}
  </div>
);

CarouselNavigation.displayName = 'CarouselNavigation';

// ── Carousel component ────────────────────────────────────────────────────────

export interface CarouselProps extends UtilitiesProps {
  /** Alineación del título. Requerido. */
  titleAlignment: 'left' | 'center' | 'right';
  /** Muestra flechas de navegación (NavSlider) */
  hasSubNav?: boolean;
  /**
   * `true`: flechas superpuestas dentro del contenedor de cards (agrega `-with-nav`).
   * `false`: flechas en la barra de navegación inferior.
   */
  navsInNavigation?: boolean;
  /** Muestra los puntos indicadores de posición (NavDots) */
  hasNavDots?: boolean;
  /** Título del carousel */
  title?: string;
  /** Array de Cards u otros elementos */
  children?: React.ReactNode;
}

/**
 * Carousel Component
 *
 * @description Organismo de navegación horizontal para mostrar cards deslizables.
 * EVA UI no provee la lógica de scroll/swipe — se recomienda integrar Swiper.js
 * para el comportamiento de deslizamiento.
 *
 * @example
 * ```tsx
 * <Carousel titleAlignment="left" hasSubNav hasNavDots>
 *   <Card className="-eva-3-p-md -eva-3-shadow-line">Card 1</Card>
 *   <Card className="-eva-3-p-md -eva-3-shadow-line">Card 2</Card>
 * </Carousel>
 * ```
 */
const CarouselBase: React.FC<CarouselProps> = ({
  titleAlignment = 'left',
  hasSubNav = false,
  navsInNavigation = false,
  hasNavDots = true,
  title,
  className = '',
  children,
}) => {
  const titleClasses = classResolver({
    [`-title-align-${titleAlignment}`]: !!titleAlignment,
  });

  const componentClasses = classResolver({
    '-with-nav': hasSubNav && navsInNavigation,
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`${PREFIX}-3-carousel ${componentClasses} ${className}`.trim()}>

      {title && (
        <div className={`carousel-title-container ${titleClasses}`.trim()}>
          <h6 className={`${PREFIX}-3-h6`}>{title}</h6>
        </div>
      )}

      <div className="carousel-cards-container">
        <div className="cards-container-list">
          {hasSubNav && navsInNavigation && (
            <NavSlider size="md" variant="white" hideRight className="-left" />
          )}
          <ul className="list-container">
            {childrenArray.map((item, index) => (
              <li key={index} className="card-item">
                <div className="card-item-link-container">
                  {item}
                </div>
              </li>
            ))}
          </ul>
          {hasSubNav && navsInNavigation && (
            <NavSlider size="md" variant="white" hideLeft className="-right" />
          )}
        </div>
      </div>

      <CarouselNavigation hasSubNav={hasSubNav && !navsInNavigation}>
        {hasNavDots && <NavDots size="sm" />}
      </CarouselNavigation>

    </div>
  );
};

const Carousel = withUtilities(CarouselBase) as ReturnType<typeof withUtilities<CarouselProps>> & {
  CarouselNavigation: typeof CarouselNavigation;
};

(Carousel as any).CarouselNavigation = CarouselNavigation;

export { CarouselNavigation };
export default Carousel;
