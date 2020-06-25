import React from 'react';

import InViewport from 'components/InViewport';
import Counter from 'components/Counter';

import stats from './json/stats.json';

import styles from './Stats.module.scss';

import {
  IconCode,
  IconCodeBranch,
  IconMugHot,
  IconBicycle,
} from 'components/Icon';

export const Stats = () => {
  return (
    <>
      <div className={styles.lighterNote}>
        <div className={styles.item}>
          <IconCode padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={stats.loc - 1000} end={stats.loc} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>lines of code</p>
        </div>
        <div className={styles.item}>
          <IconCodeBranch padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={300} end={1200} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>git commits</p>
        </div>
        <div className={styles.item}>
          <IconMugHot padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={200} end={760} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>coffees consumed</p>
        </div>
        <div className={styles.item}>
          <IconBicycle padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={650} end={3500} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>kilometers cycled</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
