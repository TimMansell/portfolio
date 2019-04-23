import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from '../Testimonials';

describe("Testimonials", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Testimonials />);
  });
});
