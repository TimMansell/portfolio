import React, { useState } from 'react';
import shuffle from 'lodash.shuffle';
import classnames from 'classnames';
import useInterval from 'use-interval';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import { importImages } from 'helpers/importImages';
import styles from './Hero.module.scss';

import imagesJson from './json/images.json';

const imgs = importImages(
  shuffle(imagesJson),
  ['avif', 'webp', 'jpg'],
  'components/Hero/img'
);

console.log({ imgs });

export const Hero = () => {
  const [images, setImages] = useState(imgs);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transition, setTransition] = useState(false);
  const scrollStyles = useScrollBlur(0, 10);

  const primaryImage = images[0];
  const preloadImage = images[1];

  useInterval(() => {
    if (isLoaded) {
      const imgs = [...images.slice(1), images[0]];

      setTransition(true);

      setTimeout(() => {
        setImages(imgs);
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
        <Picture srcs={primaryImage.srcs} title={primaryImage.title} />
        <Picture
          srcs={preloadImage.srcs}
          title={preloadImage.title}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Hero;
