import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Testimonials from '../Testimonials';

jest.mock('react-slick');

jest.mock(
  '../json/testimonials.json',
  () => [
    {
      author: 'author 1',
      company: 'company 1',
      position: 'position 1',
      description: 'description 1',
    },
    {
      author: 'author 2',
      company: 'company 2',
      position: 'position 2',
      description: 'description 2',
    },
  ],
  { virtual: true }
);

describe('Testimonials', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Testimonials />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Testimonials />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render correct amount of testimonials', () => {
    const wrapper = shallow(<Testimonials />);
    const list = wrapper.find('[data-test="testimonial-slide"]');

    expect(list).toHaveLength(2);
  });
});
