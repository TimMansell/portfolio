import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hamburger from '../Hamburger';
import { MenuContext } from '../../../context/mobileMenu';

const MockComponent = () => (
  <MenuContext.Provider value={[false, jest.fn()]}>
    <Hamburger />
  </MenuContext.Provider>
);

describe('Hamburger', () => {
  it('should render my component', () => {
    render(<MockComponent />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<MockComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
