export const formatPicture = ({ name, title }) => {
  const src = `Hero/img/${name}`;

  const srcSizes = [
    {
      media: '(orientation: portrait)',
      sizes: ['640', '768', '1280', '1536', '2048'],
    },
    {
      media: '(orientation: landscape)',
      sizes: ['1366', '1600', '1920', '2560'],
    },
  ];

  const types = ['jpg'];

  return {
    title,
    src,
    types,
    srcSizes,
    isFullscreen: true,
  };
};
