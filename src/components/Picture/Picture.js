import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const Picture = ({ srcs, name, defaultImg }) => {
  const fallbackImg = defaultImg || srcs[0].src;

  return (
    <picture title={name} data-e2e="picture">
      {srcs.map(({ src, format }, index) => (
        <source
          type={`image/${format}`}
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
  srcs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  defaultImg: PropTypes.string,
};

export default Picture;
