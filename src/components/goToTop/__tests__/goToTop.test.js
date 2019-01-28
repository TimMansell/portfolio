import React from 'react';
import { shallow } from 'enzyme';

import GoToTop from '../goToTop';

describe("GoToTop", () => {
  it("should render my component", () => {
    const wrapper = shallow(<GoToTop />);
  });
});
