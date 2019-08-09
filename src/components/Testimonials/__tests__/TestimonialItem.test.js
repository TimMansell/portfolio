import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TestimonialsItem from '../TestimonialItem';

describe("TestimonialsItem", () => {
  it("should render my component", () => {
    const data = {
      description: '',
      author: ''
    };

    const wrapper = shallow(<TestimonialsItem data={data} />);
  });

  it("should match snapshot", () => {
    const data = {
      description: 'Description',
      author: 'Author'
    };

    const snapshot = renderer.create(<TestimonialsItem data={data} />).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
