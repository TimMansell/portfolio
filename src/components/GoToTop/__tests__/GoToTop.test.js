import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GoToTop from '../GoToTop';

describe('GoToTop', () => {
  it('should render my component', () => {
    render(<GoToTop />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<GoToTop />);

    expect(asFragment()).toMatchSnapshot();
  });
});
