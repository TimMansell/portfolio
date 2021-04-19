import { getSizes } from './importImages';

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
