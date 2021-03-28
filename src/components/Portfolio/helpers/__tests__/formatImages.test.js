import { formatImages } from '../formatImages';

describe('Portfolio helpers', () => {
  it('formatImages', () => {
    const img = {
      name: 'test',
      formats: ['avif', 'webp'],
      fallback: 'jpg',
    };
    const { srcs, defaultImg } = formatImages(img);

    expect(srcs).toEqual([
      { format: 'avif', src: 'test.avif' },
      { format: 'webp', src: 'test.webp' },
    ]);
    expect(defaultImg).toEqual('test.jpg');
  });
});
