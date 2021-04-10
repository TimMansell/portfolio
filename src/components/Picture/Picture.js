import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Picture.module.scss';

export const importImages = (image, types, src) => {
  const { name, title } = image;

  const srcs = types.map((type) => {
    return {
      type,
      src: require(`../${src}/${name}.${type}`),
    };
  });

  return {
    title,
    srcs,
  };
};

export const Picture = ({
  image,
  types,
  src,
  width,
  onLoad,
  isLazy,
  isFullscreen,
}) => {
  const { title, srcs } = importImages(image, types, src);
  const [fallbackImg] = [...srcs].reverse();
  const loadingType = isLazy ? 'lazy' : 'auto';

  const imgClasses = classnames(styles.img, {
    [styles.fullscreen]: isFullscreen,
  });

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
        data-test="picture-img"
        data-e2e="picture-img"
        className={imgClasses}
        alt={title}
        src={fallbackImg.src}
        width={width}
        onLoad={onLoad}
        loading={loadingType}
      />
    </picture>
  );
};

Picture.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(PropTypes.oneOf(['avif', 'webp', 'jpg', 'png']))
    .isRequired,
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  width: PropTypes.string,
  isLazy: PropTypes.bool,
  isFullscreen: PropTypes.bool,
};

export default Picture;
