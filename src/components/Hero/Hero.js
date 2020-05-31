import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import styles from './Hero.module.scss';

export const Hero = ({ blurFrom, blurTo }) => {
  const [blur, setBlur] = useState({});

  useEffect(() => {
    const onScroll = throttle(() => {
      const blur =
        blurFrom + (blurTo - blurFrom) * (window.scrollY / window.innerHeight);
      const blurCss = blur <= blurTo ? { filter: `blur(${blur}px)` } : {};

      setBlur(blurCss);
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={styles.hero}>
      <div className={styles.img} style={blur}></div>
    </div>
  );
};

Hero.propTypes = {
  blurFrom: PropTypes.number.isRequired,
  blurTo: PropTypes.number.isRequired,
};

export default Hero;
