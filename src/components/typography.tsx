import { FunctionalComponent, h } from 'preact';
import { TypographyProps, HeadlineMappingProps } from './typography.d';
import classNames from 'classnames';

import styles from './typography.module.css';

const defaultHeadlineMapping: HeadlineMappingProps = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'span'
}

const Typography: FunctionalComponent<TypographyProps> = props => {
  const {
    children,
    className,
    component,
    variant = 'body1',
  } = props;

  const classes = classNames(styles[variant || 'body1'], className);

  const Component: string = component || defaultHeadlineMapping[variant || 'inherit'];
  return h(Component, { class: classes }, children);
};

export default Typography;