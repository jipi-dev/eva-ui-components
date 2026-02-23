import React from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './loader.scss';

export type LoaderSize = '' | 'sm' | 'lg';

export interface LoaderProps extends UtilitiesProps {
  /** Loader size variant */
  size?: LoaderSize;
  /** Use white color scheme (for dark backgrounds) */
  white?: boolean;
  /** Stop the animation (static state) */
  stop?: boolean;
  /** Text label shown below the spinner */
  label?: string;
}

/**
 * Loader Component
 *
 * @description Animated loading spinner used while resources are being loaded.
 */
const Loader: React.FC<LoaderProps> = ({
  size = '',
  white = false,
  stop = false,
  className = '',
  label = '',
}) => {
  const classes = classResolver({ [`-${size}`]: !!size, '-white': white, '-stop': stop });

  return (
    <div className={`${PREFIX}-3-loader ${classes} ${className}`.replace(/ +/g, ' ').trim()}>
      <div className="loader-container">
        <div className="loader-spinner">
          <div className="spinner-container spinner-left">
            <div className="spinner-circle" />
          </div>
          <div className="spinner-container spinner-right">
            <div className="spinner-circle" />
          </div>
        </div>
      </div>
      <span className={`loader-label -${size}`}>{label}</span>
    </div>
  );
};

export default withUtilities(Loader);
