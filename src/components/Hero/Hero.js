import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import './Hero.scss';

export const Hero = ({ blurFrom, blurTo }) => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const onScroll = throttle(() => {
      const blur =
        blurFrom + (blurTo - blurFrom) * (window.scrollY / window.innerHeight);
      const blurCss = blur <= blurTo ? { filter: `blur(${blur}px)` } : {};

      setStyles(blurCss);
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className="hero">
      <div className="hero__img" style={styles}></div>
    </div>
  );
};

Hero.propTypes = {
  blurFrom: PropTypes.number.isRequired,
  blurTo: PropTypes.number.isRequired,
};

export default Hero;
