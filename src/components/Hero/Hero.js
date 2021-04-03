import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';

import Picture from '../Picture';
import useScrollBlur from 'hooks/useScrollBlur';
import useImageFormats from 'hooks/useImageFormats';

import styles from './Hero.module.scss';

import images from './json/images.json';

const shuffledImages = shuffle(images);

export const Hero = () => {
  const [images, setImages] = useState(shuffledImages);
  const [image, setImage] = useState(shuffledImages[0]);
  const scrollStyles = useScrollBlur(0, 10);

  const { name, title } = image;
  const [imgSources, defaultImg] = useImageFormats(name, {
    types: ['avif', 'webp'],
    fallback: 'jpg',
  });

  const pictureSources = imgSources.map(({ type, src }) => ({
    type,
    src: require(`./img/${src}`),
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      const imgs = [...images.slice(1), image];
      const img = imgs[0];

      setImage(img);
      setImages(imgs);
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.hero}>
      <div className={styles.img} style={scrollStyles} data-e2e="hero-img">
        <Picture
          srcs={pictureSources}
          title={title}
          defaultImg={require(`./img/${defaultImg}`)}
        />
      </div>
    </div>
  );
};

export default Hero;
