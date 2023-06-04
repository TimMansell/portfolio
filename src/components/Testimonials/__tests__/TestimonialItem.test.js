import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestimonialsItem from '../TestimonialItem';

const props = {
  description: 'Description',
  author: 'Author',
  company: 'Company',
  position: 'Position',
};

describe('TestimonialsItem', () => {
  it('should render my component', () => {
    render(<TestimonialsItem {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<TestimonialsItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
