import { formatPicture } from '../formatPicture';

describe('Hero', () => {
  it('should format object to pass to <picture>', () => {
    const { isFullscreen, src, srcSizes, title, types } = formatPicture({
      name: 'name',
      title: 'title',
    });

    expect(isFullscreen).toEqual(true);
    expect(src).toEqual('Hero/img/name');
    expect(srcSizes).toEqual([
      { media: 'portrait', sizes: ['640', '768', '1280', '1536', '2048'] },
      { media: 'landscape', sizes: ['1366', '1600', '1920', '2560'] },
    ]);
    expect(title).toEqual('title');
    expect(types).toEqual(['jpg']);
  });
});
