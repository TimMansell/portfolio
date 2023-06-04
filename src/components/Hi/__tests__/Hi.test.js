import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hi from '../Hi';

describe('Hi', () => {
  it('should render my component', () => {
    render(<Hi />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Hi />);

    expect(asFragment()).toMatchSnapshot();
  });
});
