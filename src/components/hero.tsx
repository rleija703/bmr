import { FunctionalComponent, h } from 'preact';

import Typography from './typography';

import styles from './hero.module.css';

const Hero: FunctionalComponent = () => (
  <div class={styles.hero}>
    <Typography variant="h1">Hell yea!</Typography>
  </div>
);

export default Hero;