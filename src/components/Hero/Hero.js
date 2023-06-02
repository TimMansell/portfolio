import React from 'react';

import HeroOverlay from './HeroOverlay';
import HeroImage from './HeroImage';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <HeroOverlay />
      <HeroImage />
    </div>
  );
};

export default Hero;
