import React from 'react';
import { shallow } from 'enzyme';

import InViewport from '../inViewport';

describe("InViewport", () => {
  it("should render my component", () => {
    const wrapper = shallow(<InViewport />, {disableLifecycleMethods:true});
  });
});
