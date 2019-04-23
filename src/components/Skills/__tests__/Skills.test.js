import React from 'react';
import { shallow } from 'enzyme';

import Skills from '../Skills';

describe("Skills", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Skills />);
  });
});
