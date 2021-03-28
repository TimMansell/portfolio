export const formatImages = ({ name, formats, fallback }) => {
  const srcs = formats.map((format) => ({
    format,
    src: `${name}.${format}`,
  }));
  const defaultImg = `${name}.${fallback}`;

  return {
    srcs,
    defaultImg,
  };
};
