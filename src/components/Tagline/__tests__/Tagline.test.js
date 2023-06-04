import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tagline from '../Tagline';

describe('Tagline', () => {
  it('should render my component', () => {
    render(<Tagline />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Tagline />);

    expect(asFragment()).toMatchSnapshot();
  });
});
