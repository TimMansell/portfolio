import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Hero from './hero';

describe("Hero", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hero />);
  });
});
