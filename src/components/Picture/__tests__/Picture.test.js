import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Picture from '../Picture';

const props = {
  title: 'test title',
  types: ['avif', 'webp', 'jpg'],
  src: 'Picture/__tests__/img/test',
  srcSizes: [{ sizes: ['480', '640'] }],
  width: '50',
};

describe('Picture', () => {
  it('should render my component', () => {
    render(<Picture {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Picture {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render fullscreen image', () => {
    const { getByTestId } = render(<Picture {...props} isFullscreen />);

    expect(getByTestId('picture-img')).toHaveClass('fullscreen');
  });

  it('should render non-fullscreen image', () => {
    const { getByTestId } = render(<Picture {...props} />);

    expect(getByTestId('picture-img')).not.toHaveClass('fullscreen');
  });

  it('should render lazy loaded image', () => {
    const { getByTestId } = render(<Picture {...props} isLazy />);

    expect(getByTestId('picture-img')).toHaveAttribute('loading', 'lazy');
  });

  it('should render non lazy loaded image', () => {
    const { getByTestId } = render(<Picture {...props} />);

    expect(getByTestId('picture-img')).toHaveAttribute('loading', 'auto');
  });

  it('should have correct width', () => {
    const { getByTestId } = render(<Picture {...props} />);

    expect(getByTestId('picture-img')).toHaveAttribute('width', props.width);
  });

  it('should have correct <source> properties', () => {
    const { getByTestId } = render(<Picture {...props} />);

    expect(getByTestId('picture-source-0')).toHaveAttribute(
      'srcSet',
      'test-480.avif 480w, test-640.avif 640w'
    );

    expect(getByTestId('picture-source-0')).toHaveAttribute(
      'type',
      `image/${props.types[0]}`
    );
  });

  it('should have correct number of <source>', () => {
    const { getAllByTestId } = render(<Picture {...props} />);

    expect(getAllByTestId(/picture-source/)).toHaveLength(3);
  });

  it('should render fallback in <img>', () => {
    const { getByTestId } = render(<Picture {...props} />);

    expect(getByTestId('picture-img')).toHaveAttribute('src', 'test-640.jpg');
    expect(getByTestId('picture-img')).toHaveAttribute('alt', props.title);
  });
});
