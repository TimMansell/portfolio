import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';

import WindowLock from '../WindowLock';
import { MenuContext } from '../../../context/mobileMenu';

describe('WindowLock', () => {
  it('should render my component', () => {
    const MockComponent = () => (
      <MenuContext.Provider value={[false, vi.fn()]}>
        <WindowLock />
      </MenuContext.Provider>
    );

    // eslint-disable-next-line
    const wrapper = shallow(<MockComponent />);
  });
});
