import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const importImages = (image, types, src) => {
  const { name, title } = image;

  const srcs = types.map((type) => {
    return {
      type,
      src: require(`../${src}/${name}.${type}`),
    };
  });

  return {
    title,
    srcs,
  };
};

export const Picture = ({ image, types, src, onLoad }) => {
  const { title, srcs } = importImages(image, types, src);
  const [fallbackImg] = [...srcs].reverse();

  return (
    <picture title={title} data-e2e="picture">
      {srcs.map(({ src, type }, index) => (
        <source
          type={`image/${type}`}
          srcSet={src}
          key={index}
          data-test={`picture-source-${index}`}
        />
      ))}

      <img
        className={styles.img}
        alt={title}
        src={fallbackImg.src}
        data-test="picture-img"
        data-e2e="picture-img"
        onLoad={onLoad}
        loading="lazy"
      />
    </picture>
  );
};

Picture.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(PropTypes.oneOf(['avif', 'webp', 'jpg', 'png']))
    .isRequired,
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

export default Picture;
