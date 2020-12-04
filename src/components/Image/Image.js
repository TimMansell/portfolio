import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

export const Image = ({ srcs, name, width, fallback }) => {
  const fallbackImg =
    srcs.length === 1 || fallback ? (
      <img className={styles.img} alt={name} src={fallback} width={width} />
    ) : (
      ''
    );

  return (
    <picture title={name}>
      {srcs.map(({ src, type }, index) => (
        <source type={`image/${type}`} srcSet={src} key={index} />
      ))}

      {fallbackImg}
    </picture>
  );
};

Image.propTypes = {
  srcs: PropTypes.array.isRequired,
  fallback: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Image;
