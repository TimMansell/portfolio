import React from 'react';
import { shallow } from 'enzyme';

import Stats from '../stats';

describe("Stats", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Stats />);
  });
});
