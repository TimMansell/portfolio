import React from 'react';
import PropTypes from 'prop-types';

import styles from './SvgImage.module.scss';

export const SvgImage = ({ src, name, width }) => {
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

SvgImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default SvgImage;
