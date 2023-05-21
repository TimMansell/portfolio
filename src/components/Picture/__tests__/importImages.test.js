import { importImages } from '../importImages';

const url = import.meta.url.split('/').slice(0, -3).join('/');

const picture = {
  src: `img/test`,
  srcSizes: [
    {
      sizes: ['480', '640'],
    },
  ],
  types: ['jpg'],
};

describe('Picture', () => {
  describe('importImages', () => {
    it('should return correct fallback image and one source type', () => {
      const { src, srcSizes, types } = picture;

      const { fallbackImg, sources } = importImages(src, srcSizes, types);

      expect(fallbackImg).toEqual(`${url}/img/jpg/test-640.jpg`);
      expect(sources).toEqual([
        {
          media: undefined,
          srcSet: `${url}/img/jpg/test-480.jpg 480w, ${url}/img/jpg/test-640.jpg 640w`,
          type: 'jpg',
        },
      ]);
    });

    it('should return multiple sources', () => {
      const { src, srcSizes, types } = picture;

      const multipleTypes = ['webp', ...types];

      const { sources } = importImages(src, srcSizes, multipleTypes);

      expect(sources).toEqual([
        {
          media: undefined,
          srcSet: `${url}/img/webp/test-480.webp 480w, ${url}/img/webp/test-640.webp 640w`,
          type: 'webp',
        },
        {
          media: undefined,
          srcSet: `${url}/img/jpg/test-480.jpg 480w, ${url}/img/jpg/test-640.jpg 640w`,
          type: 'jpg',
        },
      ]);
    });
  });
});
