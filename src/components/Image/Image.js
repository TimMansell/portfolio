import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

export const Image = ({ src, name, width }) => {
  return (
    <img
      src={src}
      alt={name}
      className={styles.img}
      width={width}
      title={name}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Image;
