import { getSizes, getFilePath } from './importImages';

export const getSources = (src, srcSizes) => (type) =>
  srcSizes.map(getSizes(src, type));

export const getFallbackImage = (src, srcSizes, types) => {
  const [fallbackSrc] = [...srcSizes].reverse();
  const { sizes } = fallbackSrc;
  const [size] = [...sizes].reverse();
  const [type] = [...types].reverse();

  const filePath = getFilePath(src, type, size);

  const fallbackImg = require(`../../${filePath}`);

  return fallbackImg;
};
