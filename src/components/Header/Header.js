import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ShuffleCharacters from 'components/ShuffleCharacters';

import styles from './Header.module.scss';

export const Header = ({ primary, secondary, tertiary, text, title }) => {
  const classes = classnames(styles.heading, {
    [styles.headingPrimary]: primary,
    [styles.headingSecondary]: secondary,
    [styles.headingTertiary]: tertiary,
  });

  if (text) {
    text = <p data-test="heading-description">{text}</p>;
  }

  return (
    <div className={classes}>
      <ShuffleCharacters>
        <h2
          className={styles.title}
          data-test="heading-title"
          aria-label={title}
        >
          {title}
        </h2>
      </ShuffleCharacters>
      {text}
    </div>
  );
};

Header.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
