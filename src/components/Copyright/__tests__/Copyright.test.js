import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FakeTimers from '@sinonjs/fake-timers';

import Copyright from '../Copyright';

FakeTimers.install();

describe('Copyright', () => {
  it('should render my component', () => {
    render(<Copyright />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Copyright />);

    expect(asFragment()).toMatchSnapshot();
  });
});
