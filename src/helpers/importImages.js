export const importImages = (imgs, types, path) => {
  return imgs.map(({ name, title }) => {
    const srcs = types.map((type) => {
      return {
        type,
        src: require(`../${path}/${name}.${type}`),
      };
    });

    return {
      title,
      srcs,
    };
  });
};
