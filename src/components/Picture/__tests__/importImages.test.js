import { importImages } from '../importImages';

const picture = {
  src: `Picture/__tests__/img/test`,
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

      expect(fallbackImg).toEqual('test-640.jpg');
      expect(sources).toEqual([
        {
          media: undefined,
          srcSet: 'test-480.jpg 480w, test-640.jpg 640w',
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
          srcSet: 'test-480.webp 480w, test-640.webp 640w',
          type: 'webp',
        },
        {
          media: undefined,
          srcSet: 'test-480.jpg 480w, test-640.jpg 640w',
          type: 'jpg',
        },
      ]);
    });
  });
});
