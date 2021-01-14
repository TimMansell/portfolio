import React from 'react';

import Header from 'components/Header';
import StatsItem from './StatsItem';

import stats from './json/stats.json';
import statsItems from './json/statsItems.json';

import styles from './Stats.module.scss';

const combinedStatsItems = statsItems.map((item) => ({
  ...item,
  value: stats[item.key],
}));

export const Stats = () => {
  return (
    <>
      <Header title="Stats" text="This website was built using" tertiary />
      <div className={styles.lighterNote} data-test="stats-items">
        {combinedStatsItems.map((stat, i) => (
          <StatsItem {...stat} key={i} />
        ))}
      </div>
    </>
  );
};

export default Stats;
