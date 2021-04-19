export const getSrcSet = (src, type) => (accumulator, currentValue) =>
  `${accumulator}${require(`../../${src}-${currentValue}.${type}`)} ${currentValue}w, `;

export const getSizes = (src, type) => ({ media, sizes }) => ({
  type,
  media: media ? `(orientation: ${media})` : '',
  srcSet: sizes.reduce(getSrcSet(src, type), ''),
});

export const getSources = (src, srcSizes) => (type) =>
  srcSizes.map(getSizes(src, type));

export const getFallbackImage = (src, srcSizes, types) => {
  const [fallbackSrc] = [...srcSizes].reverse();
  const { sizes } = fallbackSrc;
  const [fallbackSize] = [...sizes].reverse();
  const [fallbackType] = [...types].reverse();

  const fallbackImg = require(`../../${src}-${fallbackSize}.${fallbackType}`);

  return fallbackImg;
};
