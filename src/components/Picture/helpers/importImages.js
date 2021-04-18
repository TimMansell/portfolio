export const importImages = (image, types, src, srcSizes) => {
  const { name, title } = image;
  const [fallbackSrc] = [...srcSizes].reverse();

  const srcsMap = (srcSizes, src, name) => (type) => {
    return srcSizes.map(({ media, sizes }) => ({
      type,
      media: media ? `(orientation: ${media})` : '',
      srcSet: sizes.reduce(
        (accumulator, currentValue) =>
          `${accumulator}${require(`../../${src}/${name}-${currentValue}.${type}`)} ${currentValue}w, `,
        ''
      ),
    }));
  };

  const getFallbackImage = (fallback, types, src, name) => {
    const { sizes } = fallback;
    const [fallbackSize] = [...sizes].reverse();
    const [fallbackType] = [...types].reverse();
    const fallbackImg = require(`../../${src}/${name}-${fallbackSize}.${fallbackType}`);

    return fallbackImg;
  };

  const sources = types.map(srcsMap(srcSizes, src, name));
  const fallbackImg = getFallbackImage(fallbackSrc, types, src, name);

  // console.log(JSON.stringify(sources));

  return {
    title,
    sources: sources[0],
    fallbackImg,
  };
};
