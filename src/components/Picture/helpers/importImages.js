export const getSizes = (src, type) => ({ media, sizes }) => {
  const srcSet = sizes.reduce(getSrcSet(src, type), '').replace(/,\s*$/, '');

  return {
    type,
    media,
    srcSet,
  };
};

export const getFilePath = (src, size, type) => {
  const path = src.split('/');
  const [img, ...paths] = [...path].reverse();
  const newPath = [...paths].reverse().join('/');

  const folder = `${newPath}/${type}/${img}-${size}.${type}`;

  return folder;
};

export const getSrcSet = (src, type) => (srcSet, size) => {
  const filePath = getFilePath(src, size, type);
  const srcSetPath = `${srcSet} ${require(`../../${filePath}`)} ${size}w,`.trim();

  return srcSetPath;
};
