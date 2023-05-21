import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Navigation from '../Navigation';
import { MenuContext } from '../../../context/mobileMenu';

const MockComponent = () => (
  <MenuContext.Provider value={[false, vi.fn()]}>
    <Navigation />
  </MenuContext.Provider>
);

describe('Navigation', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<MockComponent />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<MockComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
