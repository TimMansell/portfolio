import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FakeTimers from '@sinonjs/fake-timers';

import Footer from '../Footer';

FakeTimers.install();

describe('Footer', () => {
  it('should render my component', () => {
    render(<Footer />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
