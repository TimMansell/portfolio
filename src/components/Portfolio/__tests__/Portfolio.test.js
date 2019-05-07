import React from 'react';
import { shallow } from 'enzyme';

import Portfolio from '../Portfolio';

describe("Portfolio", () => {
  it("should render my component", () => {
     // eslint-disable-next-line 
    const wrapper = shallow(<Portfolio />);
  });
});
