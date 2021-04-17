import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { importImages } from './helpers/importImages';

import styles from './Picture.module.scss';

export const Picture = ({
  image,
  types,
  src,
  sizes,
  srcSizes,
  width,
  onLoad,
  isLazy,
  isFullscreen,
}) => {
  const { title, sources, fallbackImg } = importImages(
    image,
    types,
    src,
    srcSizes
  );
  const loadingType = isLazy ? 'lazy' : 'auto';

  const imgClasses = classnames(styles.img, {
    [styles.fullscreen]: isFullscreen,
  });

  return (
    <picture title={title} data-e2e="picture">
      {sources.map(({ type, media, srcSet }, index) => (
        <source
          media={media}
          sizes={sizes}
          srcSet={srcSet}
          type={`image/${type}`}
          key={index}
          data-test={`picture-source-${index}`}
        />
      ))}
      <img
        className={imgClasses}
        alt={title}
        src={fallbackImg}
        width={width}
        onLoad={onLoad}
        loading={loadingType}
        data-test="picture-img"
        data-e2e="picture-img"
      />
    </picture>
  );
};

Picture.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.oneOf(['avif', 'webp', 'jpg', 'png', 'svg'])
  ).isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  srcSizes: PropTypes.object.isRequired,
  onLoad: PropTypes.func,
  width: PropTypes.string,
  isLazy: PropTypes.bool,
  isFullscreen: PropTypes.bool,
};

export default Picture;
