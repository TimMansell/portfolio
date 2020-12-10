import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TestimonialsItem from '../TestimonialItem';

const props = {
  description: 'Description',
  author: 'Author',
  company: 'Company',
  position: 'Position',
};

describe('TestimonialsItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<TestimonialsItem {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<TestimonialsItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
