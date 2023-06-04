import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SocialIcons from '../SocialIcons';

describe('SocialIcons', () => {
  it('should render my component', () => {
    render(<SocialIcons />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<SocialIcons />);

    expect(asFragment()).toMatchSnapshot();
  });
});
