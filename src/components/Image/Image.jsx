import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Image.module.scss';

export const Image = ({ src, alt, width, height, isPadded }) => {
  const img = new URL(`../${src}`, import.meta.url).href;

  const containerClasses = classnames(styles.container, {
    [styles.isPadded]: isPadded,
  });

  return (
    <div className={containerClasses}>
      <img
        className={styles.image}
        src={img}
        alt={alt}
        width={width}
        height={height}
        title={alt}
        loading="lazy"
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isPadded: PropTypes.bool,
};

export default Image;
