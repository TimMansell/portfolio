export const importImages = (image, types, src, srcSizes) => {
  const { name, title } = image;
  const { landscape } = srcSizes;

  const srcsMap = (srcSizes, src, name) => (type) => {
    const orientations = Object.keys(srcSizes);

    return orientations.map((orientation) => {
      return {
        type,
        media: `(orientation: ${orientation})`,
        srcSet: srcSizes[orientation].reduce(
          (accumulator, currentValue) =>
            `${accumulator}${require(`../../${src}/${name}-${currentValue}.${type}`)} ${currentValue}w, `,
          ''
        ),
      };
    });
  };

  const getFallbackImage = (landscape, types, src, name) => {
    const [fallbackSize] = [...landscape].reverse();
    const [fallbackType] = [...types].reverse();
    const fallback = require(`../../${src}/${name}-${fallbackSize}.${fallbackType}`);

    return fallback;
  };

  const sources = types.map(srcsMap(srcSizes, src, name));
  const fallbackImg = getFallbackImage(landscape, types, src, name);

  console.log(JSON.stringify(sources));

  return {
    title,
    sources: sources[0],
    fallbackImg,
  };
};
