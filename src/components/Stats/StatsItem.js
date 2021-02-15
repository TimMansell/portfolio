import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Counter from 'components/Counter';

import useInViewport from 'hooks/useInViewport';

import styles from './Stats.module.scss';

export const offsetStats = (value, offset) => Math.round(value * offset);

export const StatsItem = ({ description, offset, value, icon }) => {
  const element = useRef(null);
  const isInViewport = useInViewport(element, -300);

  return (
    <div className={styles.item} ref={element}>
      <Icon name={['fa', icon]} padded />
      <p className={styles.amount}>
        {isInViewport && (
          <Counter begin={offsetStats(value, offset)} end={value} time={2000} />
        )}
        {!isInViewport && offsetStats(value, offset)}
      </p>
      <p className={styles.text}>{description}</p>
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
