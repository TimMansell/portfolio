import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const Picture = ({ srcs, name, defaultImg }) => {
  const fallbackImg = defaultImg || srcs[0].src;

  return (
    <picture title={name}>
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
        alt={name}
        src={fallbackImg}
        data-test="picture-img"
      />
    </picture>
  );
};

Picture.propTypes = {
  srcs: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  defaultImg: PropTypes.string,
};

export default Picture;
