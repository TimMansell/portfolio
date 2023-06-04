import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Image from '../Image';

const props = {
  src: 'Image/__tests__/img/test.jpg',
  alt: 'alt text',
  width: '50',
};

describe('Image', () => {
  it('should render my component', () => {
    render(<Image {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Image {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
