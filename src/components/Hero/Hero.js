import React, { useState } from 'react';
import classnames from 'classnames';
import useInterval from 'use-interval';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import styles from './Hero.module.scss';

import images from './json/images.json';

export const Hero = () => {
  const [heroImages, setHeroImages] = useState(images);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const scrollStyles = useScrollBlur(0, 10);

  const [primaryImage, preloadImage] = heroImages;

  const TIMER = 7000;
  const DELAY_IMAGE_LOADING_TIMER = 1000;
  const REMOVE_TRANSITION_TIMER = 2000;

  useInterval(() => {
    if (hasLoaded) {
      const [firstImage, ...remainingImages] = heroImages;
      const reorderedImages = [...remainingImages, firstImage];

      setHasTransition(true);

      setTimeout(() => {
        setHeroImages(reorderedImages);
        setHasLoaded(false);
      }, DELAY_IMAGE_LOADING_TIMER);

      setTimeout(() => {
        setHasTransition(false);
      }, REMOVE_TRANSITION_TIMER);
    }
  }, TIMER);

  const imageClasses = classnames(styles.img, {
    [styles.transition]: hasTransition,
  });

  return (
    <div className={styles.hero}>
      <div
        className={imageClasses}
        style={scrollStyles}
        data-e2e="hero-img"
        data-timer={TIMER}
      >
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
