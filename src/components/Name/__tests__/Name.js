import React from 'react';
import { shallow } from 'enzyme';

import Name from '../Name';

describe("Name", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Name />);
  });
});
