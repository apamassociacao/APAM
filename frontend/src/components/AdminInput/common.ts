export interface InputProps {
  title: string;
  required?: boolean;
}

export interface Placeholder {
  placeholder: string;
}

export type CommonInputProps = InputProps & Placeholder;

/**
 * Blank image (base64) to use as source of a <img /> tag as a way remove the
 * 'special' border that exists when none is set.
 */
export const blankImage: string =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRAA7';
