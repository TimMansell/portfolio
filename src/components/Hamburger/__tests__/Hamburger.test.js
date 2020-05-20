import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hamburger from '../Hamburger';
import { MenuContext } from '../../../context/mobileMenu';

const MockComponent = () => (
  <MenuContext.Provider value={[false, jest.fn()]}>
    <Hamburger />
  </MenuContext.Provider>
);

describe('Hamburger', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<MockComponent />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<MockComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
