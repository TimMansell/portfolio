import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Header.module.scss';

export const Header = ({ text, title, type }) => {
  const classes = classnames(styles.heading, {
    [styles.headingPrimary]: type === 'primary',
    [styles.headingSecondary]: type === 'secondary',
    [styles.headingTertiary]: type === 'tertiary',
  });

  return (
    <div className={classes}>
      <h2 className={styles.title} data-test="heading-title" aria-label={title}>
        {title}
      </h2>
      {text && <p data-test="heading-description">{text}</p>}
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Header;
