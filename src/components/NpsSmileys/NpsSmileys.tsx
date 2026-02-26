import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
import './nps-smileys.scss';

type SmileyScore = 'mad' | 'sad' | 'neutral' | 'happy' | 'very-happy';
type NpsSmileysScale = Partial<Record<SmileyScore, string>>;

export interface NpsSmileysProps extends UtilitiesProps {
  /** Handler al seleccionar puntaje */
  setScore?: (score: string) => void;
  /** Score actual */
  currentScore?: string;
  /** Título del grupo */
  title?: string;
  /** Definición de escalas */
  npsSmileysScale?: NpsSmileysScale;
}

const defaultScale: NpsSmileysScale = {
  mad: 'Nada Satisfecho',
  sad: 'Poco Satisfecho',
  neutral: 'Indiferente',
  happy: 'Satisfecho',
  'very-happy': 'Muy Satisfecho',
};

const NpsSmileys = withUtilities((props: NpsSmileysProps) => {
  const {
    setScore = () => {},
    currentScore = '',
    title = 'La confianza que te brindamos',
    className = '',
    npsSmileysScale = defaultScale,
  } = props;

  return (
    <div className={`${PREFIX}-3-nps-smileys ${className}`}>
      <p className="nps-label">{title}</p>
      <div className="nps-scores">
        <div className="smileys-container">
          {Object.entries(npsSmileysScale).map(([score, value]) => (
            <label
              key={score}
              htmlFor={`${score}-smiley`}
              className="smile-score"
              title={value}
            >
              <input
                data-value={score}
                id={`${score}-smiley`}
                className="smile-radio"
                type="radio"
                name="nps-score"
                onChange={(e) => setScore((e.currentTarget as HTMLInputElement).dataset.value!)}
                checked={currentScore === score}
              />
              <Icon icon={`smiley-${score}`} size="xlg" className="smile-icon" />
              <span className="smile-value">{value}</span>
            </label>
          ))}
        </div>
        <Checkbox
          label="No aplica"
          size="lg"
          id={`smileys-no-aplica-${title}`}
          className="nps-not-apply"
          onChange={(e) => setScore((e.currentTarget as HTMLInputElement).value)}
          value="no-aplica"
          checked={currentScore === 'no-aplica'}
        />
      </div>
    </div>
  );
});

export default NpsSmileys;
