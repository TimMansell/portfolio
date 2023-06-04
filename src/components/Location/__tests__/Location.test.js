import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Location from '../Location';

describe('Location', () => {
  it('should render my component', () => {
    render(<Location />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Location />);

    expect(asFragment()).toMatchSnapshot();
  });
});
