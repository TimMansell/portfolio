import React from 'react';
import { shallow } from 'enzyme';

import Copyright from '../Copyright';

describe("Copyright", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Copyright />);
  });
});
