import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ src, alt, width, height }) => {
  const img = require(`../${src}`);

  return (
    <img
      src={img}
      alt={alt}
      width={width}
      height={height}
      title={alt}
      loading="lazy"
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Image;
