import React from 'react';
import { shallow } from 'enzyme';

import Hi from '../Hi';

describe("Hi", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hi />);
  });
});
