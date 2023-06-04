window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

window.IntersectionObserver = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  };
};
