import React from 'react';
import { shallow } from 'enzyme';

import Hero from '../hero';

describe("Hero", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hero />);
  });
});
