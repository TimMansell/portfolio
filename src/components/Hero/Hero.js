import React from 'react';

import useScrollBlur from 'hooks/useScrollBlur';

import styles from './Hero.module.scss';

export const Hero = () => {
  const scrollStyles = useScrollBlur(1, 10);

  return (
    <div className={styles.hero}>
      <div
        className={styles.img}
        style={scrollStyles}
        data-e2e="hero-img"
      ></div>
    </div>
  );
};

export default Hero;
