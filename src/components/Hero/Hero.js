import React from 'react';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import useImageFormats from 'hooks/useImageFormats';

import styles from './Hero.module.scss';

const img = {
  name: 'maria-vojtovicova-SPvJPDXEmqA-unsplash',
  formats: ['jpg'],
  fallback: 'jpg',
};

export const Hero = () => {
  const scrollStyles = useScrollBlur(0, 10);
  const { srcs, defaultImg } = useImageFormats(img);

  const pictureSources = srcs.map(({ format, src }) => ({
    format,
    src: require(`./img/${src}`),
  }));

  return (
    <div className={styles.hero}>
      <div className={styles.img} style={scrollStyles} data-e2e="hero-img">
        <Picture
          srcs={pictureSources}
          name={img.name}
          defaultImg={require(`./img/${defaultImg}`)}
        />
      </div>
    </div>
  );
};

export default Hero;
