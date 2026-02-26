import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './range-slider.scss';

export interface RangeSliderProps extends UtilitiesProps {
  /** Una sola bola (rango simple) */
  single?: boolean;
  /** Valor mínimo */
  minValue?: number;
  /** Valor máximo */
  maxValue?: number;
  /** Posición de la bola izquierda (0-100) */
  leftBallPosition?: number;
  /** Posición de la bola derecha (0-100) */
  rightBallPosition?: number;
  /** Callback cuando la bola izquierda termina de moverse */
  setLeftBallPosition?: React.DragEventHandler<HTMLDivElement>;
  /** Callback cuando la bola derecha termina de moverse */
  setRightBallPosition?: React.DragEventHandler<HTMLDivElement>;
  [key: string]: any;
}

const RangeSlider = withUtilities((props: RangeSliderProps) => {
  const {
    className = '',
    single = false,
    setLeftBallPosition = () => {},
    setRightBallPosition = () => {},
    maxValue = 100,
    minValue = 0,
    leftBallPosition,
    rightBallPosition,
    ...rest
  } = props;

  const leftPos = leftBallPosition ?? minValue;
  const rightPos = rightBallPosition ?? maxValue;

  return (
    <div
      className={`${PREFIX}-3-range-slider ${className}`}
      style={{
        ['--eva-slider-range-left-handler-position' as any]: `${leftPos}%`,
        ['--eva-slider-range-right-handler-position' as any]: `${rightPos}%`,
      }}
      role="slider"
      aria-valuemax={maxValue}
      aria-valuemin={minValue}
      aria-valuenow={leftPos}
      {...rest}
    >
      <div className="slider-bar">
        <div className="slider-range" />
        {!single && (
          <div
            role="presentation"
            className="slider-handler -left"
            draggable={true}
            onDragEnd={setLeftBallPosition}
            tabIndex={0}
          />
        )}
        <div
          className="slider-handler -right"
          draggable={false}
          onDragEnd={setRightBallPosition}
          tabIndex={0}
        />
      </div>
    </div>
  );
});

export default RangeSlider;
