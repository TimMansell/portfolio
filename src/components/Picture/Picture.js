import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Picture.module.scss';

export const importImages = (image, types, src, srcSizes) => {
  const { title } = image;

  const srcsMap = (type) => {
    return {
      type,
      srcSet: srcSizes.reduce(srcSizesReducer, ''),
    };
  };

  const srcSizesReducer = (accumulator, currentValue) =>
    `${accumulator} https://via.placeholder.com/${currentValue} ${currentValue}w, `;

  const sources = types.map(srcsMap);
  const [fallbackType] = srcSizes;
  const fallbackImg = `https://via.placeholder.com/${fallbackType}`;

  return {
    title,
    sources,
    fallbackImg,
  };
};

export const Picture = ({
  image,
  types,
  src,
  sizes,
  srcSizes,
  media,
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
      {sources.map(({ srcSet, type }, index) => (
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
  media: PropTypes.string,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  srcSizes: PropTypes.array.isRequired,
  onLoad: PropTypes.func,
  width: PropTypes.string,
  isLazy: PropTypes.bool,
  isFullscreen: PropTypes.bool,
};

export default Picture;
