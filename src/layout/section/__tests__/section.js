import React from 'react';
import { shallow } from 'enzyme';

import Section from '../section';

describe("Section", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Section />);
  });
});
