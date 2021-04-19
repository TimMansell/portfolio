import { getSources, getFallbackImage } from '../index';

const picture = {
  src: `Picture/__tests__/img/test`,
  srcSizes: [
    {
      sizes: ['480', '640'],
    },
  ],
  types: ['webp', 'jpg'],
};

describe('Picture Helpers', () => {
  it('should return first source from types', () => {
    const { src, srcSizes, types } = picture;

    const result = getSources(src, srcSizes)(types[0]);

    expect(result).toEqual([
      {
        media: '',
        srcSet: 'test-480.webp 480w, test-640.webp 640w',
        type: 'webp',
      },
    ]);
  });

  it('should return fallback images using last item in types', () => {
    const { src, srcSizes, types } = picture;

    const result = getFallbackImage(src, srcSizes, types);

    expect(result).toEqual('test-640.jpg');
  });
});
