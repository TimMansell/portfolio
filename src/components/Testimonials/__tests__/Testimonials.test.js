import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Testimonials from '../Testimonials';

jest.mock('react-slick', () => (props) => <mock-slider {...props} />);

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
    render(<Testimonials />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Testimonials />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct amount of testimonials', () => {
    const { getAllByTestId } = render(<Testimonials />);

    expect(getAllByTestId('testimonial-slide')).toHaveLength(2);
  });
});
