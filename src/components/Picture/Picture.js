import React from 'react';
import PropTypes from 'prop-types';

import styles from './Picture.module.scss';

export const Picture = ({ srcs, name, defaultImg }) => {
  const fallbackImg =
    srcs.length === 1 || defaultImg ? (
      <img className={styles.img} alt={name} src={defaultImg} />
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

Picture.propTypes = {
  srcs: PropTypes.array.isRequired,
  defaultImg: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Picture;
