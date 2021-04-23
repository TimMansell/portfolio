export const getSizes = (src, type) => ({ media, sizes }) => ({
  type,
  media,
  srcSet: sizes.reduce(getSrcSet(src, type), '').replace(/,\s*$/, ''),
});

export const getFilePath = (src, type, size) => {
  const path = src.split('/');
  const [img, ...paths] = [...path].reverse();
  const newPath = [...paths].reverse().join('/');

  const folder = `${newPath}/${type}/${img}-${size}.${type}`;

  return folder;
};

export const getSrcSet = (src, type) => (srcSet, size) => {
  const filePath = getFilePath(src, type, size);

  return `${srcSet}${require(`../../${filePath}`)} ${size}w, `;
};
