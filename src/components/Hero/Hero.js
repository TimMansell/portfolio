import React, { useState } from 'react';
import shuffle from 'lodash.shuffle';
import classnames from 'classnames';
import useInterval from 'use-interval';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import styles from './Hero.module.scss';

import imagesJson from './json/images.json';

const images = shuffle(imagesJson);

export const Hero = () => {
  const [heroImages, setHeroImages] = useState(images);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transition, setTransition] = useState(false);
  const scrollStyles = useScrollBlur(0, 10);

  const primaryImage = heroImages[0];
  const preloadImage = heroImages[1];

  useInterval(() => {
    if (isLoaded) {
      const imgs = [...heroImages.slice(1), heroImages[0]];

      setTransition(true);

      setTimeout(() => {
        setHeroImages(imgs);
        setIsLoaded(false);
      }, 1000);

      setTimeout(() => {
        setTransition(false);
      }, 2000);
    }
  }, 7000);

  const imageClasses = classnames(styles.img, {
    [styles.transition]: transition,
  });

  return (
    <div className={styles.hero}>
      <div className={imageClasses} style={scrollStyles} data-e2e="hero-img">
        <Picture
          image={primaryImage}
          types={['avif', 'webp', 'jpg']}
          src={require.resolve(__filename)}
        />
        <Picture
          image={preloadImage}
          types={['avif', 'webp', 'jpg']}
          src={require.resolve(__filename)}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Hero;
