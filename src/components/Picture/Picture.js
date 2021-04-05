import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const Picture = ({ srcs, title, onLoad }) => {
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
  srcs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Picture;
