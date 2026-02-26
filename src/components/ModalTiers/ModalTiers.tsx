import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import ModalCoachmark from '../ModalCoachmark/ModalCoachmark';
import './modal-tiers.scss';

export interface ModalTiersProps extends UtilitiesProps {
  /** Mostrar el modal */
  show?: boolean;
  /** Función para cerrar el modal */
  toggleModal?: () => void;
  /** Tipo de tier */
  type?: 'explorer' | 'traveler' | 'global';
  /** Cerrar al hacer clic fuera */
  closeOnClickOutside?: boolean;
  children?: React.ReactNode;
}

const ModalTiers = withUtilities((props: ModalTiersProps) => {
  const {
    className = '',
    show = false,
    toggleModal = () => {},
    type,
    closeOnClickOutside = true,
    children,
  } = props;

  const classes = classResolver({
    '-show-modal': show,
    [`-${type}`]: !!type,
  });

  return (
    <ModalCoachmark
      toggleModal={toggleModal}
      color={type !== 'explorer'}
      closeOnClickOutside={closeOnClickOutside}
      className={`${PREFIX}-3-modal--tiers -show-sticky-footer -tier-header ${className} ${classes}`}
      size="lg"
      steps={false}
      noColor
      tiers
      show={show}
    >
      {React.Children.toArray(children).map((comp) =>
        React.isValidElement(comp)
          ? React.cloneElement(comp as React.ReactElement<any>, { type })
          : comp
      )}
    </ModalCoachmark>
  );
});

export default ModalTiers;
