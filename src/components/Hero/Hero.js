import React, { useState } from 'react';
import classnames from 'classnames';
import useInterval from 'use-interval';

import Picture from '../Picture';
import { formatPicture } from './formatPicture';
import useScrollBlur from 'hooks/useScrollBlur';
import styles from './Hero.module.scss';

import images from './json/images.json';

const TIMER = 7000;
const DELAY_IMAGE_LOADING_TIMER = 1000;
const REMOVE_TRANSITION_TIMER = 2000;

export const Hero = () => {
  const [heroImages, setHeroImages] = useState(images);
  const [hasPreLoadedImage, setHasPreLoadedImage] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const scrollStyles = useScrollBlur(0, 10);

  const [primaryImage, preloadImage] = heroImages;

  const primaryPicture = formatPicture(primaryImage);
  const preloadPicture = formatPicture(preloadImage);

  useInterval(() => {
    if (hasPreLoadedImage) {
      const [firstImage, ...remainingImages] = heroImages;
      const reorderedImages = [...remainingImages, firstImage];

      setHasTransition(true);

      setTimeout(() => {
        setHeroImages(reorderedImages);
        setHasPreLoadedImage(false);
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
        <Picture {...primaryPicture} />
        <Picture
          {...preloadPicture}
          onLoad={() => setHasPreLoadedImage(true)}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Hero;
