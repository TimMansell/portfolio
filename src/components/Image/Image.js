import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

export const Image = ({ src, name, width }) => {
  return (
    <picture title={name}>
      <img className={styles.img} alt={name} src={src.img} width={width} />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Image;
