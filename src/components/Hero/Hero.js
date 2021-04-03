import React from 'react';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import useImageFormats from 'hooks/useImageFormats';

import styles from './Hero.module.scss';

import images from './json/images.json';

const imageSources = images.map((img) => ({
  name: img,
  formats: ['avif', 'webp'],
  fallback: 'jpg',
}));

const randomImg = imageSources[Math.floor(Math.random() * imageSources.length)];

export const Hero = () => {
  const scrollStyles = useScrollBlur(0, 10);
  const { srcs, defaultImg } = useImageFormats(randomImg);

  const pictureSources = srcs.map(({ format, src }) => ({
    format,
    src: require(`./img/${src}`),
  }));

  return (
    <div className={styles.hero}>
      <div className={styles.img} style={scrollStyles} data-e2e="hero-img">
        <Picture
          srcs={pictureSources}
          name={randomImg.name}
          defaultImg={require(`./img/${defaultImg}`)}
        />
      </div>
    </div>
  );
};

export default Hero;
