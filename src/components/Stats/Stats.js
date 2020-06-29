import React from 'react';

import Header from 'components/Header';
import InViewport from 'components/InViewport';
import Counter from 'components/Counter';

import stats from './json/stats.json';

import styles from './Stats.module.scss';

import {
  IconCode,
  IconCodeBranch,
  IconCodeLaptop,
  IconMugHot,
} from 'components/Icon';

export const Stats = () => {
  return (
    <>
      <Header title="Stats" text="This website was built using" tertiary />
      <div className={styles.lighterNote}>
        <div className={styles.item}>
          <IconCode padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter
                begin={Math.round(stats.loc * 0.9)}
                end={stats.loc}
                time={2000}
              />
            </p>
          </InViewport>
          <p className={styles.text}>lines of code</p>
        </div>
        <div className={styles.item}>
          <IconCodeBranch padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter
                begin={Math.round(stats.commits * 0.5)}
                end={stats.commits}
                time={2000}
              />
            </p>
          </InViewport>
          <p className={styles.text}>git commits</p>
        </div>
        <div className={styles.item}>
          <IconCodeLaptop padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={10} end={stats.pullRequests} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>pull requests</p>
        </div>
        <div className={styles.item}>
          <IconMugHot padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={0} end={stats.coffees} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>coffees</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
