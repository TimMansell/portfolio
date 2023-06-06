import React, { useState, useEffect } from 'react';

import Picture from '../Picture';
import { formatPicture } from './formatPicture';
import styles from './Hero.module.scss';

import images from './json/images.json';

const TIMER = 7000;

export const Hero = () => {
  const [heroImages, setHeroImages] = useState(images);

  const [primaryImage, preloadImage] = heroImages;

  const primaryPicture = formatPicture(primaryImage);
  const preloadPicture = formatPicture(preloadImage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroImages(([firstImage, ...remainingImages]) => [
        ...remainingImages,
        firstImage,
      ]);
    }, TIMER);
    return () => clearTimeout(timer);
  }, [heroImages]);

  return (
    <div className={styles.hero}>
      <div className={styles.img} data-e2e="hero-img" data-timer={TIMER}>
        <Picture {...primaryPicture} />
        <Picture {...preloadPicture} aria-hidden="true" />
      </div>
    </div>
  );
};

export default Hero;
