import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import LearnMore from '../LearnMore';

describe('LearnMore', () => {
  it('should render my component', () => {
    render(<LearnMore />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<LearnMore />);

    expect(asFragment()).toMatchSnapshot();
  });
});
