import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PortfolioIcons from '../PortfolioIcons';

const props = {
  title: 'test title',
};

describe('PortfolioIcons', () => {
  it('should render my component', () => {
    render(<PortfolioIcons {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<PortfolioIcons {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
