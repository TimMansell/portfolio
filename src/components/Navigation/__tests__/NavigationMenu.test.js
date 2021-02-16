import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

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
    // eslint-disable-next-line
    const wrapper = shallow(<MockComponent />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<MockComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
