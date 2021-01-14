import React, { useRef } from 'react';

import Header from 'components/Header';
import Counter from 'components/Counter';

import useInViewport from 'hooks/useInViewport';

import stats from './json/stats.json';

import styles from './Stats.module.scss';

import {
  IconCode,
  IconCodeBranch,
  IconCodeLaptop,
  IconMugHot,
} from 'components/Icon';

export const Stats = () => {
  const element = useRef(null);
  const isInViewport = useInViewport(element, -300);

  return (
    <>
      <Header title="Stats" text="This website was built using" tertiary />
      <div className={styles.lighterNote} ref={element}>
        <div className={styles.item}>
          <IconCode padded />
          <p className={styles.amount}>
            {isInViewport && (
              <Counter
                begin={Math.round(stats.loc * 0.9)}
                end={stats.loc}
                time={2000}
              />
            )}
          </p>
          <p className={styles.text}>lines of code</p>
        </div>
        <div className={styles.item}>
          <IconCodeBranch padded />
          <p className={styles.amount}>
            {isInViewport && (
              <Counter
                begin={Math.round(stats.commits * 0.5)}
                end={stats.commits}
                time={2000}
              />
            )}
          </p>
          <p className={styles.text}>git commits</p>
        </div>
        <div className={styles.item}>
          <IconCodeLaptop padded />
          <p className={styles.amount}>
            {isInViewport && (
              <Counter begin={10} end={stats.pullRequests} time={2000} />
            )}
          </p>
          <p className={styles.text}>pull requests</p>
        </div>
        <div className={styles.item}>
          <IconMugHot padded />
          <p className={styles.amount}>
            {isInViewport && (
              <Counter begin={0} end={stats.coffees} time={2000} />
            )}
          </p>
          <p className={styles.text}>coffees</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
