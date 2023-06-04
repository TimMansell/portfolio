import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navigation from '../Navigation';
import { MenuContext } from '../../../context/mobileMenu';

const MockComponent = () => (
  <MenuContext.Provider value={[false, jest.fn()]}>
    <Navigation />
  </MenuContext.Provider>
);

describe('Navigation', () => {
  it('should render my component', () => {
    render(<MockComponent />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<MockComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
