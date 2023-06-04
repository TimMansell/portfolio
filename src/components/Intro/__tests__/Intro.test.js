import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Intro from '../Intro';

describe('Intro', () => {
  it('should render my component', () => {
    render(<Intro />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Intro />);

    expect(asFragment()).toMatchSnapshot();
  });
});
