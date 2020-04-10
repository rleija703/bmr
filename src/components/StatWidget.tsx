import { FunctionalComponent, h } from 'preact';

import Typography from './typography';

import styles from './StatWidget.module.css';

const widget: FunctionalComponent = () => (
 
 <div class={styles.StatWidget}>
  <div class="websiteRanks-container">
    <h3 class="websiteRanks-mobileTitle">Ranks</h3>
    <ul class="websiteRanks-list">
      <li class="websiteRanks-item js-globalRank">
        <div class="websiteRanks-header">
          <div class="websiteRanks-title">
            <span class="websiteRanks-titleIcon"></span>
            <h3 class="websiteRanks-titleText">Global Rank</h3>
            <noindex>
              <h3 class="websiteRanks-titleMobileText">Global</h3>
            </noindex>
            <span class="websiteRanks-titleInfoIcon tooltip js-tooltipOwner"></span>
            <div class="websiteRanks-name">
              <a class="websiteRanks-nameText">Worldwide</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
</div>
</div> 
);

export default widget;


