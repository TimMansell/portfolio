import React from 'react';
import PropTypes from 'prop-types';

import styles from './PortfolioIcons.module.scss';

export const PortfolioIcons = ({ title }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.icons}>
        <div className={styles.icon} />
        <div className={styles.icon} />
        <div className={styles.icon} />
      </div>
      <div className={styles.tab}>{title}</div>
    </div>
  );
};

export default PortfolioIcons;

PortfolioIcons.propTypes = {
  title: PropTypes.string.isRequired,
};
