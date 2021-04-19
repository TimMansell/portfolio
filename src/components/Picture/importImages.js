import { getSources, getFallbackImage } from './helpers';

export const importImages = (src, types, srcSizes) => {
  const sources = types.map(getSources(src, srcSizes));
  const fallbackImg = getFallbackImage(src, srcSizes, types);

  // console.log(JSON.stringify(sources));

  return {
    sources: sources[0],
    fallbackImg,
  };
};
