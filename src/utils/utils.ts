// Utility functions for class resolution and constants
export const PREFIX = 'eva';

export function classResolver(classes: Record<string, boolean | string | undefined>): string {
  return Object.entries(classes)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
}