import React from 'react';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import useImageFormats from 'hooks/useImageFormats';

import styles from './Hero.module.scss';

import images from './json/images.json';

const randomImg = images[Math.floor(Math.random() * images.length)];

export const Hero = () => {
  const { name, alt } = randomImg;

  const scrollStyles = useScrollBlur(0, 10);
  const { srcs, defaultImg } = useImageFormats(name, {
    types: ['avif', 'webp'],
    fallback: 'jpg',
  });

  const pictureSources = srcs.map(({ type, src }) => ({
    type,
    src: require(`./img/${src}`),
  }));

  return (
    <div className={styles.hero}>
      <div className={styles.img} style={scrollStyles} data-e2e="hero-img">
        <Picture
          srcs={pictureSources}
          title={alt}
          defaultImg={require(`./img/${defaultImg}`)}
        />
      </div>
    </div>
  );
};

export default Hero;
