type VariantTypes = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button';

type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

type HeadlineMappingTypes =
  'h1'
  | 'h2'
  | 'h3'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export interface TypographyProps {
  color?: ColorTypes;
  component?: string;
  className?: string;
  gutterBottom?: boolean;
  variant?: VariantTypes;
}

export interface HeadlineMappingProps {
  [x: string]: HeadlineMappingTypes;
}