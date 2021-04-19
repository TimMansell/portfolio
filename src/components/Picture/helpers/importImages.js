const getSrcSet = (src, type) => (accumulator, currentValue) =>
  `${accumulator}${require(`../../${src}-${currentValue}.${type}`)} ${currentValue}w, `;

const getSizes = (src, type) => ({ media, sizes }) => ({
  type,
  media: media ? `(orientation: ${media})` : '',
  srcSet: sizes.reduce(getSrcSet(src, type), ''),
});

const getSources = (src, srcSizes) => (type) =>
  srcSizes.map(getSizes(src, type));

const getFallbackImage = (src, srcSizes, types) => {
  const [fallbackSrc] = [...srcSizes].reverse();
  const { sizes } = fallbackSrc;
  const [fallbackSize] = [...sizes].reverse();
  const [fallbackType] = [...types].reverse();
  const fallbackImg = require(`../../${src}-${fallbackSize}.${fallbackType}`);

  return fallbackImg;
};

export const importImages = (src, types, srcSizes) => {
  const sources = types.map(getSources(src, srcSizes));
  const fallbackImg = getFallbackImage(src, srcSizes, types);

  // console.log(JSON.stringify(sources));

  return {
    sources: sources[0],
    fallbackImg,
  };
};
