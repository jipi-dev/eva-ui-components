// Common types for the UI components
export interface CommonProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

export interface UtilitiesProps extends CommonProps {
  // Add utility props here as needed
  margin?: string;
  padding?: string;
}

export type ButtonSize = 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'link' | 'white' | 'dark';
export type ButtonGhostVariant = '' | 'darken' | 'lighten' | 'white-loyalty';
export type ButtonType = 'default' | 'social' | 'ghost';