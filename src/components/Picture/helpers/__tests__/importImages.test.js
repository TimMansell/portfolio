import { getSrcSet, getSizes } from '../importImages';

const picture = {
  src: `Picture/__tests__/img/test`,
  srcSizes: {
    sizes: ['480', '640'],
  },
  type: 'jpg',
};

describe('Picture Helpers', () => {
  it('should get srcset for 640 size', () => {
    const { src, type } = picture;

    const result = getSrcSet(src, type)('', '640');

    expect(result).toEqual('test-640.jpg 640w, ');
  });

  it('should return correct srcSet and type', () => {
    const { src, srcSizes, type } = picture;

    const { srcSet, type: srcType } = getSizes(src, type)(srcSizes);

    expect(srcSet).toEqual('test-480.jpg 480w, test-640.jpg 640w');
    expect(srcType).toEqual('jpg');
  });

  it('should return empty media', () => {
    const { src, srcSizes, type } = picture;

    const { media } = getSizes(src, type)(srcSizes);

    expect(media).toEqual(undefined);
  });

  it('should return custom media', () => {
    const { src, srcSizes, type } = picture;

    const srcSizesWithMedia = {
      ...srcSizes,
      media: '(min-width: 1200px)',
    };

    const { media } = getSizes(src, type)(srcSizesWithMedia);

    expect(media).toEqual('(min-width: 1200px)');
  });
});
