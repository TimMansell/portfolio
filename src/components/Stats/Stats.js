import React from 'react';
import differenceInDays from 'date-fns/differenceInDays';

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
  const COFFEES_PER_DAY = 3;
  const coffeesSinceFirstCommit =
    differenceInDays(new Date(), new Date(2012, 6, 2, 0, 0)) * COFFEES_PER_DAY;

  return (
    <>
      <Header title="Effort" text="This website was built using" tertiary />
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
          <IconCodeLaptop padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={300} end={1200} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>pull requests</p>
        </div>
        <div className={styles.item}>
          <IconMugHot padded />
          <InViewport>
            <p className={styles.amount}>
              <Counter begin={200} end={coffeesSinceFirstCommit} time={2000} />
            </p>
          </InViewport>
          <p className={styles.text}>coffees consumed</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
