import { it, describe, expect } from 'vitest';
import { getSources, getFallbackImage } from '../index';

const url = import.meta.url.split('/').slice(0, -4).join('/');

const picture = {
  src: `img/test`,
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
        media: undefined,
        srcSet: `${url}/img/webp/test-480.webp 480w, ${url}/img/webp/test-640.webp 640w`,
        type: 'webp',
      },
    ]);
  });

  it('should return fallback images using last item in types', () => {
    const { src, srcSizes, types } = picture;

    const result = getFallbackImage(src, srcSizes, types);

    expect(result).toEqual(`${url}/img/jpg/test-640.jpg`);
  });
});
