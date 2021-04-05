import React, { useState } from 'react';
import shuffle from 'lodash.shuffle';
import classnames from 'classnames';
import useInterval from 'use-interval';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import styles from './Hero.module.scss';

import images from './json/images.json';

const shuffledImages = shuffle(images);

export const Hero = () => {
  const [heroImages, setHeroImages] = useState(shuffledImages);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const scrollStyles = useScrollBlur(0, 10);

  const [primaryImage, preloadImage] = heroImages;

  useInterval(() => {
    if (hasLoaded) {
      const [firstImage, ...remainingImages] = heroImages;
      const reorderedImages = [...remainingImages, firstImage];

      setHasTransition(true);

      setTimeout(() => {
        setHeroImages(reorderedImages);
        setHasLoaded(false);
      }, 1000);

      setTimeout(() => {
        setHasTransition(false);
      }, 2000);
    }
  }, 7000);

  const imageClasses = classnames(styles.img, {
    [styles.transition]: hasTransition,
  });

  return (
    <div className={styles.hero}>
      <div className={imageClasses} style={scrollStyles} data-e2e="hero-img">
        <Picture
          image={primaryImage}
          types={['avif', 'webp', 'jpg']}
          src="Hero/img"
        />
        <Picture
          image={preloadImage}
          types={['avif', 'webp', 'jpg']}
          src="Hero/img"
          onLoad={() => setHasLoaded(true)}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Hero;
