import type { UtilitiesProps } from '../types';
import type React from 'react';

// Mock utilities HOC for now - replace with your actual implementation
export function withUtilities<T extends UtilitiesProps>(Component: React.ComponentType<T>) {
  return Component;
}

export default withUtilities;