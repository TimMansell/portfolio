import React from 'react';
import { shallow } from 'enzyme';

import Location from '../Location';

describe("Location", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Location />);
  });
});
