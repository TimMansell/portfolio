import React from 'react';
import { shallow } from 'enzyme';

import Copyright from '../date';

describe("Copyright", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Copyright />);
  });
});
