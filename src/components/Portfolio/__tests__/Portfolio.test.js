import React from 'react';
import { shallow } from 'enzyme';

import Portfolio from '../Portfolio';

describe("Portfolio", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Portfolio />);
  });
});
