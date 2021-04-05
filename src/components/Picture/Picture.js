import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const importImages = (src, types, path) => {
  const { name, title } = src;

  const srcs = types.map((type) => {
    return {
      type,
      src: require(`../${path}/${name}.${type}`),
    };
  });

  return {
    title,
    srcs,
  };
};

export const Picture = ({ src, types, folder, onLoad }) => {
  const { title, srcs } = importImages(src, types, folder);
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
        onLoad={onLoad}
      />
    </picture>
  );
};

Picture.propTypes = {
  src: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(PropTypes.oneOf(['avif', 'webp', 'jpg', 'png']))
    .isRequired,
  folder: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

export default Picture;
