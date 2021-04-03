import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const Picture = ({ srcs, title, defaultImg }) => {
  const fallbackImg = defaultImg || srcs[0].src;

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
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  defaultImg: PropTypes.string,
};

export default Picture;
