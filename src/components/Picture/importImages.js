import { getSources, getFallbackImage } from './helpers';

export const importImages = (src, srcSizes, types) => {
  const sources = types.map(getSources(src, srcSizes));
  const fallbackImg = getFallbackImage(src, srcSizes, types);

  return {
    sources,
    fallbackImg,
  };
};
