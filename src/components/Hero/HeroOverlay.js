import React from 'react';

import useScrollBlur from 'hooks/useScrollBlur';

import styles from './Hero.module.scss';

export const HeroOverlay = () => {
  const scrollStyles = useScrollBlur(0, 10);

  return (
    <div
      className={styles.overlay}
      style={scrollStyles}
      data-e2e="hero-overlay"
    ></div>
  );
};

export default HeroOverlay;
