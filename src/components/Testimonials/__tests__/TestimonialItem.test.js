import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TestimonialsItem from '../TestimonialItem';

describe('TestimonialsItem', () => {
  it('should render my component', () => {
    const props = {
      description: '',
      author: ''
    };

    // eslint-disable-next-line
    const wrapper = shallow(<TestimonialsItem {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      description: 'Description',
      author: 'Author'
    };

    const snapshot = renderer.create(<TestimonialsItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
