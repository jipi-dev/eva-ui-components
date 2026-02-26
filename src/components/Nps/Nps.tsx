import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './nps.scss';

type NpsScale = Record<number | string, string>;

export interface NpsProps extends UtilitiesProps {
  /** Handler al seleccionar puntaje */
  setScore?: (score: number | string) => void;
  /** Título del NPS */
  title?: string;
  /** Score actual (0-10, o -1 para N/A) */
  currentScore?: number;
  /** Mapa de textos por score */
  npsScale?: NpsScale;
}

const defaultNpsScale: NpsScale = {
  0: 'Nada Probable', 1: 'Nada Probable', 2: 'Nada Probable', 3: 'Nada Probable',
  4: 'Nada Probable', 5: 'Poco Probable', 6: 'Poco Probable', 7: 'Probable',
  8: 'Probable', 9: 'Muy Probable', 10: 'Muy Probable',
};

const Nps = withUtilities((props: NpsProps) => {
  const {
    setScore = () => {},
    title = '1. ¿Qué tan probable es que recomiendes Despegar.com a un amigo o colega?',
    currentScore = 0,
    className = '',
    npsScale = defaultNpsScale,
  } = props;

  const subtitle = () => {
    if (currentScore) {
      return currentScore < 0 ? 'No Responde' : `${currentScore}: ${npsScale[currentScore]}`;
    }
    return 'Selecciona un puntaje:';
  };

  const classes = classResolver({ [`-selected-${currentScore}`]: !!currentScore });

  return (
    <div className={`${PREFIX}-3-nps ${classes} ${className}`}>
      <div className="nps-title">{title}</div>
      <p className="nps-status">{subtitle()}</p>
      <div className="nps-container">
        <ul className="nps-options">
          <span
            role="button"
            tabIndex={0}
            className={`nps-option -${PREFIX}-3-hide-large -${PREFIX}-3-hide-medium`}
            onClick={() => setScore(-1)}
            onKeyDown={() => setScore(-1)}
          >
            N/A
          </span>
          {Object.entries(npsScale).map(([scaleScore, value]) => (
            <li
              key={scaleScore}
              className="nps-option"
              data-value={scaleScore}
              title={value}
              role="button"
              tabIndex={0}
              onClick={(e) => setScore((e.currentTarget as HTMLElement).dataset.value!)}
            >
              {scaleScore}
            </li>
          ))}
        </ul>
        <div className="nps-input-container">
          <div className="nps-input-content">
            <input
              className="nps-input"
              type="range"
              min="-1"
              max="10"
              onChange={(e) => setScore(e.target.value)}
              value={currentScore}
            />
          </div>
          <span className={`nps-input-help-caption -${PREFIX}-3-fl`}>Poco probable</span>
          <span className={`nps-input-help-caption -${PREFIX}-3-fr`}>Muy probable</span>
        </div>
      </div>
    </div>
  );
});

export default Nps;
