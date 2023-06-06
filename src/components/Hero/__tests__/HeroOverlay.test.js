import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroOverlay from '../HeroOverlay';

describe('HeroOverlay', () => {
  it('should render my component', () => {
    render(<HeroOverlay />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<HeroOverlay />);

    expect(asFragment()).toMatchSnapshot();
  });
});
