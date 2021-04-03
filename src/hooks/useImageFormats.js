export const formatImages = (img, { types, fallback }) => {
  const imgSources = types.map((type) => ({
    type,
    src: `${img}.${type}`,
  }));
  const defaultImg = `${img}.${fallback}`;

  return [imgSources, defaultImg];
};

export const useImageFormats = (img, formats) => formatImages(img, formats);

export default useImageFormats;
