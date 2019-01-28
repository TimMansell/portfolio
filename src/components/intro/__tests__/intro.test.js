import React from 'react';
import { shallow } from 'enzyme';

import Intro from '../intro';

describe("Intro", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Intro />);
  });
});
