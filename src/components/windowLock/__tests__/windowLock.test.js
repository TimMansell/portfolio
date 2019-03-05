import React from 'react';
import { shallow } from 'enzyme';

import { WindowLock } from '../windowLock';

window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
});

describe("WindowLock", () => {
  it("should render my component", () => {
    const wrapper = shallow(<WindowLock />, {disableLifecycleMethods:true});
  });
});
