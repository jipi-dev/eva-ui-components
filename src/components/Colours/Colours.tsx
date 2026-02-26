import React from 'react';
import './colours.scss';

export interface ColoursProps {
  className?: string;
  [key: string]: any;
}

/**
 * Colours – utilidad que inyecta las variables de color de EVA.
 * No renderiza nada visible por sí mismo; su valor está en las clases CSS que expone.
 */
const Colours: React.FC<ColoursProps> = (props) => <div {...props} />;

export default Colours;
