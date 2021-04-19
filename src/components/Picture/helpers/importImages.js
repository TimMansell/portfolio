export const getSrcSet = (src, type) => (accumulator, currentValue) =>
  `${accumulator}${require(`../../${src}-${currentValue}.${type}`)} ${currentValue}w, `;

export const getSizes = (src, type) => ({ media, sizes }) => ({
  type,
  media: media ? `(orientation: ${media})` : '',
  srcSet: sizes.reduce(getSrcSet(src, type), '').replace(/,\s*$/, ''),
});
