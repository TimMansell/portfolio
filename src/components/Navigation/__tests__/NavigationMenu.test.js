import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavigationMenu from '../NavigationMenu';
import { MenuContext } from '../../../context/mobileMenu';

jest.mock('../json/navigation.json', () => ['item 1', 'item 2', 'item 3'], {
  virtual: true,
});

const MockComponent = () => (
  <MenuContext.Provider value={[false, jest.fn()]}>
    <NavigationMenu />
  </MenuContext.Provider>
);

describe('NavigationMenu', () => {
  it('should render my component', () => {
    render(<MockComponent />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<MockComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
