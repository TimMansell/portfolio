import React from 'react';
import { render } from '@testing-library/react';

import WindowLock from '../WindowLock';
import { MenuContext } from '../../../context/mobileMenu';

describe('WindowLock', () => {
  it('should render my component', () => {
    const MockComponent = () => (
      <MenuContext.Provider value={[false, jest.fn()]}>
        <WindowLock />
      </MenuContext.Provider>
    );

    // eslint-disable-next-line
    render(<MockComponent />);
  });
});
