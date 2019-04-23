import React from 'react';
import { shallow } from 'enzyme';

import Stats from '../Stats';

describe("Stats", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Stats />);
  });
});
