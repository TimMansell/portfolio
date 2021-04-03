export const formatImages = (img, { types, fallback }) => {
  const srcs = types.map((type) => ({
    type,
    src: `${img}.${type}`,
  }));
  const defaultImg = `${img}.${fallback}`;

  return {
    srcs,
    defaultImg,
  };
};

export const useImageFormats = (img, formats) => formatImages(img, formats);

export default useImageFormats;
