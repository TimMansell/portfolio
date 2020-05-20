import React from 'react';
import { shallow } from 'enzyme';

import WindowLock from '../WindowLock';
import { MenuContext } from '../../../context/mobileMenu';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

describe('WindowLock', () => {
  it('should render my component', () => {
    const MockComponent = () => (
      <MenuContext.Provider value={[false, jest.fn()]}>
        <WindowLock />
      </MenuContext.Provider>
    );

    // eslint-disable-next-line
    const wrapper = shallow(<MockComponent />);
  });
});
