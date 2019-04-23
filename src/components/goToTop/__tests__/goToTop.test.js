import React from 'react';
import { shallow } from 'enzyme';

import GoToTop from '../GoToTop';

describe("GoToTop", () => {
  it("should render my component", () => {
    const wrapper = shallow(<GoToTop />);
  });
});
