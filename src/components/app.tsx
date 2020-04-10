import { h, FunctionalComponent } from 'preact';

import Hero from './hero';

import StatWidget from './StatWidget';

import styles from './app.module.css';

const App: FunctionalComponent = () => (
  <div class={styles.main}>
    <Hero />
  </div>
);
<div>
  <StatWidget />
</div>

export default App;