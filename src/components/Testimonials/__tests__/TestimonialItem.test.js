import React from 'react';
import { shallow } from 'enzyme';

import TestimonialsItem from '../TestimonialItem';

const props = {
    description: '',
    author: ''
};

describe("TestimonialsItem", () => {
  it("should render my component", () => {
    const wrapper = shallow(<TestimonialsItem data={props} />);
  });
});
