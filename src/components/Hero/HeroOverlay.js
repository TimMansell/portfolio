import React from 'react';

import useScrollBlur from 'hooks/useScrollBlur';

import styles from './Hero.module.scss';

export const HeroOverlay = () => {
  const scrollStyles = useScrollBlur(0, 10);

  return <div className={styles.overlay} style={scrollStyles}></div>;
};

export default HeroOverlay;
