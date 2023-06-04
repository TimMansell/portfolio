import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Profile from '../Profile';

describe('Profile', () => {
  it('should render my component', () => {
    render(<Profile />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Profile />);

    expect(asFragment()).toMatchSnapshot();
  });
});
