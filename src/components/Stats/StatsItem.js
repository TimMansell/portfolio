import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Counter from 'components/Counter';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

import styles from './Stats.module.scss';

export const offsetStats = (value, offset) => Math.round(value * offset);

export const StatsItem = ({ description, offset, value, icon }) => {
  const element = useRef(null);
  const isInViewport = useIntersectionObserver(element, { offset: -250 });
  const statsBeginValue = offsetStats(value, offset);

  return (
    <div className={styles.container} data-testid="stats-item">
      <div className={styles.item} ref={element}>
        <div className={styles.icon}>
          <Icon name={['fa', icon]} size="sm" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>
            {isInViewport && (
              <Counter begin={statsBeginValue} end={value} time={2000} />
            )}
            {!isInViewport && (
              <span data-e2e="stats-starting-count"> {statsBeginValue}</span>
            )}
          </h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

StatsItem.propTypes = {
  description: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default StatsItem;
