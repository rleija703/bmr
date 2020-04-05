import { h, FunctionalComponent } from 'preact';

import Hero from './hero';

import styles from './app.module.css';

const App: FunctionalComponent = () => (
  <div class={styles.main}>
    <Hero />
  </div>
);

export default App;