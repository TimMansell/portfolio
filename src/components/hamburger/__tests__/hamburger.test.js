import React from 'react';
import { shallow } from 'enzyme';

import { Hamburger } from '../hamburger';

describe("Hamburger", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hamburger />);
  });
});
